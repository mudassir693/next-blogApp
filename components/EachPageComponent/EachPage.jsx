import React,{useState,useEffect,useContext} from 'react'
import Image from 'next/image'
import NextBannerImage from '../../assets/next3.png'
import { CopyBlock, dracula } from "react-code-blocks";
import ReactTerminalCommand from 'react-terminal-command'
import {BsSuitHeartFill} from 'react-icons/bs'
import {BsSuitHeart} from 'react-icons/bs'
import {gql,request} from 'graphql-request'
import Modal from '../Modal/Modal';
import {context} from '../../projectContext/ProjectContext'
import {useRouter} from 'next/router'
import TerminalComp from '../TerminalComp/TerminalComp';
import CommentComponent from '../CommentComponent/CommentComponent';
import AddComment from '../AddComment/AddComment';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function EachPage({pageData}) {

    const router = useRouter()
    const { eachPage } = router.query

    console.log('is it fie: ', eachPage)



    const {modal,login,toggleModal} = useContext(context)
    const [bodyArray,setBodyArray] = useState([])
    const [display,setDisplay] = useState(false)
    const [toggler,setToggler] = useState(false)
    const [allComments, setAllComments] = useState([])
 

    const [blog,setBlog]= useState({
        _id:'',
        TitleImage:'',
        Title:'',
        Introduction:'',
        Body:[],
        FinalLine:'',
        Views:'',
        Likes:'',
        LikeBy:[]
    })

    const [blogLiked,setBlogLiked] = useState(blog.LikeBy.includes(login._id)?true:false) // masla

    useEffect(()=>{
        getPageData()
        console.log('toggle: ',blogLiked)
    },[blogLiked, toggler])

    const getPageData = async()=>{
        setDisplay(false)
        const query = gql`
        query($_id:String) {
          getBlogById(id:$_id){
            _id
            BlogId
            TitleImage
            Title
            Introduction
            Body
            FinalLine
            Views
            Likes
            PublishDate
            Comments
            LikeBy
          }
        }
        `
        const resp = await request('http://localhost:5000/graphql',query,{_id:eachPage})

        console.log('this is from useEffect: ',resp.getBlogById.Comments);

        const getComments2 = gql`
            query($id:String){
                getAllCommentFromEachBlog(id:$id){
                    _id
                    BlogId
                    ReaderId
                    Content
                    PublishDate
                }
            }
        ` 
        const resp2 = await request('http://localhost:5000/graphql',getComments2,{id:resp.getBlogById._id})

        console.log('here we have every thing correct: ', resp2)

        setAllComments(resp2.getAllCommentFromEachBlog)



        setBlog(resp?.getBlogById)
        setBlogLiked(resp?.getBlogById.LikeBy.includes(login._id)?true:false)
        console.log('this time it blog is : ',resp?.getBlogById.LikeBy.includes(login._id)?true:false)
        console.log('user: ',login._id)
        setDisplay(true)
        return () => {
            console.log("This will be logged on unmount");
        }

    }

    const handleLike =async ()=>{
        await getLikes()
    }
    const getLikes = async()=>{

        if(login.Name && blogLiked==false){
            console.log('login: ',login)
            const mutation = gql`
                mutation($id:String,$readerId:String) {
                addLike(id:$id,readerId:$readerId){
                  Title,
                  LikeBy
                }
              }
            `
    
            const resp = await request(`http://localhost:5000/graphql`,mutation,{id:eachPage ,readerId:login._id})
            console.log('is everything goes well: ',resp)
            setBlogLiked(true)

        }
        else if(login.Name && blogLiked){
            console.log('login2: ',login)
            const mutation = gql`
                mutation($id:String,$readerId:String) {
                removeLike(id:$id,readerId:$readerId){
                  Title,
                  LikeBy
                }
              }
            `
    
            const resp = await request(`http://localhost:5000/graphql`,mutation,{id:eachPage,readerId:login._id})
            console.log('is everything goes well2: ',resp)
            setBlogLiked(false)
        }
        else{
            toggleModal()
        }
    }
  return (
    <div className="bg-[#061019] py-10">
        {modal && <Modal />}
        {display && <div className="max-w-4xl mx-auto text-white my-5">
            {blog.TitleImage && <div className="profileImageContainer h-[10rem] lg:h-[20rem] w-[90%] md:w-[80%] relative mx-auto ">
                <Image className="rounded-[2rem]" src={blog?.TitleImage} objectFit="cover" layout='fill' />
            </div>}
            <div className="text-4xl font-semibold text-center my-10">
            {blog?.Title}
            </div>
            <div className="text-2xl w-[90%] md:w-[80%] mx-auto font-thin my-10">
                {blog?.Introduction}
                {/* {blog?.Body.length} */}
            </div>


            {blog?.Body.map(eachId=>(
                <TerminalComp id={eachId} />
            ))}
            {/* {blog?.Code.length>0 && blog?.Code.map(eachCode=>(
            <div className="codeBlock w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
                <CopyBlock
                    // text={ `
                    // import React from 'react'
                    // import Image from 'next/image'
                    // import NextBannerImage from '../../assets/next3.png'
                    // import { CopyBlock, dracula } from "react-code-blocks";
                    // // import SyntaxHighlighter from 'react-syntax-highlighter';
                    // // import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
                    // `}
                    text={eachCode}
                    language='jsx'
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            </div>))} */}
            <div className="descContainer w-[90%] md:w-[90%] mx-auto">
                {/* {blog?.Peragraphs.length>0 && blog?.Peragraphs.map(eachPera=>(
                <div className="desc text-white text-xl my-5">
                    {eachPera}
                </div>))} */}
                {/* <CopyBlock
                    text={ `
                    import React from 'react'
                    import Image from 'next/image'
                    import NextBannerImage from '../../assets/next3.png'
                    import { CopyBlock, dracula } from "react-code-blocks";
                    // import SyntaxHighlighter from 'react-syntax-highlighter';
                    // import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
                    `}
                    language='jsx'
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                /> */}
                <div className="desc text-white text-xl my-5">
                    {blog?.FinalLine}
                </div>

                <div onClick={handleLike} className="my-10 w-fit text-center likeSection text-white font-bold text-xl flex justify-center cursor-pointer">
                <span className='mx-2'> Heart it if You like.</span> {(blog?.LikeBy.includes(login._id)) ? <BsSuitHeartFill className='text-2xl text-[#DA0060]'  /> : <BsSuitHeart className='text-2xl text-[#DA0060]'  />}
                   {/* {blogLiked? <BsSuitHeartFill className='text-2xl text-[#DA0060]'  /> : <BsSuitHeart className='text-2xl text-[#DA0060]'  />} */}
                </div>
                <div className="mx-2 my-5 font-bold text-xl text-white">
                    Comments
                </div>
                <div>
                    <AddComment setToggler={setToggler} toggler={toggler} blogId={blog?._id} />
                </div>

                {allComments?.length>0 && allComments?.map(eachCmt=>(
                    <CommentComponent comment={eachCmt} />
                ))}

            </div>
        </div>}
        {!display && <div> Loading....</div> }
    </div>
  )
}

export default EachPage