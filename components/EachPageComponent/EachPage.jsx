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

    const [blogLiked,setBlogLiked] = useState(pageData.LikeBy.includes(login._id)?true:false) // masla


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
    
            const resp = await request(`http://localhost:5000/graphql`,mutation,{id:pageData._id,readerId:login._id})
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
    
            const resp = await request(`http://localhost:5000/graphql`,mutation,{id:pageData._id,readerId:login._id})
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
            <div className="profileImageContainer h-[10rem] lg:h-[20rem] w-[90%] md:w-[80%] relative mx-auto ">
                <Image className="rounded-[2rem]" src={NextBannerImage} objectFit="cover" layout='fill' />
            </div>
            <div className="text-4xl font-semibold text-center my-10">
            {pageData?.Title}
            </div>
            <div className="text-2xl w-[90%] md:w-[80%] mx-auto font-thin my-10">
                {pageData?.Introduction}
            </div>
            {pageData?.TerminalCommands.map(eachCmd=>(
                    <div className="w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
                        <ReactTerminalCommand command={eachCmd} />
                    </div>
                ))}
            {pageData?.Code.map(eachCode=>(
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
                {pageData?.Peragraphs.map(eachPera=>(
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
                    {pageData.FinalLine}
                </div>

                <div onClick={handleLike} className="my-10 w-fit text-center likeSection text-white font-bold text-xl flex justify-center cursor-pointer">
                <span className='mx-2'> Heart it if You like.</span> {(pageData.LikeBy.includes(login._id)||blogLiked)&&<BsSuitHeartFill className='text-2xl text-[#DA0060]'  />}{!blogLiked && <BsSuitHeart className='text-2xl text-[#DA0060]'  />}
                   {/* {blogLiked? <BsSuitHeartFill className='text-2xl text-[#DA0060]'  /> : <BsSuitHeart className='text-2xl text-[#DA0060]'  />} */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EachPage