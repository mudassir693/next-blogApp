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
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function EachPage({pageData}) {



    const {modal,login,toggleModal} = useContext(context)

    const [blog,setBlog]= useState({
        _id:'',
        TitleImage:'',
        Title:'',
        Introduction:'',
        TerminalCommands:[],
        Code:[],
        Peragraphs:[],
        FinalLine:'',
        Views:'',
        Likes:'',
        LikeBy:''
    })

    const [blogLiked,setBlogLiked] = useState(pageData.LikeBy.includes(login._id)?true:false) // masla

    useEffect(()=>{
        getPageData()
        console.log('toggle: ',blogLiked)
    },[blogLiked])

    const getPageData = async()=>{

        const query = gql`
        query($_id:String) {
          getBlogById(id:$_id){
            _id
            TitleImage
            Title
            Introduction
            TerminalCommands
            Code
            Peragraphs
            FinalLine
            Views
            Likes
            LikeBy
          }
        }
        `
        const resp = await request('https://progress-regularly.herokuapp.com/graphql',query,{_id:pageData._id})

        console.log('this is from useEffect: ',resp.getBlogById);
        setBlog(resp?.getBlogById)
        setBlogLiked(resp?.getBlogById.LikeBy.includes(login._id)?true:false)
        console.log('this time it blog is : ',resp?.getBlogById.LikeBy.includes(login._id)?true:false)
        console.log('user: ',login._id)
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
    
            const resp = await request(`https://progress-regularly.herokuapp.com/graphql`,mutation,{id:pageData._id,readerId:login._id})
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
    
            const resp = await request(`https://progress-regularly.herokuapp.com/graphql`,mutation,{id:pageData._id,readerId:login._id})
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
        <div className="max-w-4xl mx-auto text-white my-5">
            {blog.TitleImage && <div className="profileImageContainer h-[10rem] lg:h-[20rem] w-[90%] md:w-[80%] relative mx-auto ">
                <Image className="rounded-[2rem]" src={blog?.TitleImage=="Image_2"?NextBannerImage:blog?.TitleImage} objectFit="cover" layout='fill' />
            </div>}
            <div className="text-4xl font-semibold text-center my-10">
            {blog?.Title}
            </div>
            <div className="text-2xl w-[90%] md:w-[80%] mx-auto font-thin my-10">
                {blog?.Introduction}
            </div>
            {blog?.TerminalCommands.length>0 &&  blog?.TerminalCommands.map(eachCmd=>(
                    <div className="w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
                        <ReactTerminalCommand command={eachCmd} />
                    </div>
                ))}
            {blog?.Code.length>0 && blog?.Code.map(eachCode=>(
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
            </div>))}
            <div className="descContainer w-[90%] md:w-[90%] mx-auto">
                {blog?.Peragraphs.length>0 && blog?.Peragraphs.map(eachPera=>(
                <div className="desc text-white text-xl my-5">
                    {eachPera}
                </div>))}
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
            </div>
        </div>
    </div>
  )
}

export default EachPage