import React,{useEffect,useState,useContext} from 'react';
import {context} from '../../projectContext/ProjectContext'
import {gql,request} from 'graphql-request'



const AddComment = ({blogId, setAllComments, allComments}) => {

    const {setLogin, login, modal, toggleModal} = useContext(context)
    const [message,setMessage] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(message.length)
        if(message.length==0){
            console.log('wrong submission');
            return
        }

        console.log('message is : ',message)

        const mutation = gql`
        mutation($blogId:String,$readerId:String,$content:String){
            addComment(BlogId:$blogId,ReaderId:$readerId, Content:$content){
                _id
                ReaderId
                BlogId
                Content
                PublishDate
            }
        }
    `

        const resp = await request('https://progress-regularly.herokuapp.com/graphql',mutation,{blogId:blogId, readerId:login._id, content:message })

        console.log('comment added sucessfully: ',resp.addComment);

        setAllComments([ ...allComments, resp?.addComment])

        console.log('click triggered: ' )

        setMessage('')

    }

    const onClickCheckUserLogin = async()=>{
        if(login.Name == null){
            toggleModal()
        }
    }
    
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="md:text-right">
                <input onClick={onClickCheckUserLogin} value={message} onChange={(e)=>setMessage(e.target.value)} className="text-[#00B9E8] border-2 border-[#E21B70] py-2 px-4 rounded-lg bg-[transparent] w-[100%] outline-none" type="text" />
                <button type="submit" className="text-white w-[100%] md:w-[fit-content] bg-[#E21B70] my-3 py-3 px-7 rounded-lg text-xl">Submit</button>
            </form>
        </div>
    );
}

export default AddComment;
