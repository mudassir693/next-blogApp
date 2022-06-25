import Image from 'next/image'
import React,{useContext} from 'react'
import {useRouter} from 'next/router'
import moment from 'moment'
import {MdModeEditOutline} from 'react-icons/md'
import {AiTwotoneDelete} from 'react-icons/ai'
import {context} from '../../projectContext/ProjectContext'
import {request, gql} from 'graphql-request'
import style from './ArticleTile.module.css'

function ArticleTile({imgSrc,article,toggler,setToggler}) {
  const {login} = useContext(context)
  const router = useRouter()

  const route =async (BlogId, props)=>{
    if(props == 'move'){
      console.log('what happened');
      router.push(`/pages/${article._id}`)
    } else if(props=='delete'){

      // console.log('window obj: ',windows.classList)
      console.log('object: ',BlogId);
      const deleteBlog = gql`
      mutation($id:String){
        deleteBlog(id:$id){
          _id
          TitleImage
          Title
          Introduction
          TerminalCommands
          Code
          Peragraphs
          FinalLine
        }
      }
      `
      const deleteResp =await request('https://progress-regularly.herokuapp.com/graphql',deleteBlog,{id:BlogId}) 
      console.log('deleteResp: ',deleteResp)
      setToggler(!toggler)
    }
  }

  const handleEdit = async(BlogId)=>{
    router.push(`pages/addPage/${BlogId}`)
  }
  return (
    <div>
      {login.Admin && <div className="iconContainer flex justify-end items-center z-30 my-2 ">
                <MdModeEditOutline onClick={()=>handleEdit(article._id)} className='text-white  text-2xl cursor-pointer' />
                <AiTwotoneDelete onClick={()=>route(article._id,'delete')} className='mx-3 cursor-pointer text-white  text-2xl' />
              </div>}
      <div onClick={()=>route(article._id, 'move')} className={`${style.mainContainer} cursor-pointer`}>
          <div className={`articleImage w-[100%] h-[220px] relative`}>
              <Image className={`${style.imageStyling} `} src={article?.TitleImage} alt="learn Next.Js" layout='fill'  objectFit='cover' />
              <div className={`${style.tileLayout} rounded-[20px]`}></div>
          </div>
          <div className={`${style.articleTitle} text-white my-2 text-2xl font-medium` }>
              {article.Title}
          </div>
          <div className="articleTimeStamp text-md text-gray-400 font-light">
              {/* 2 jun, 2022 */}
              {moment(article.createdAt).format("D MMM YYYY")} &nbsp; | &nbsp; {article.Views} views &nbsp; | &nbsp; {article.Likes} Likes
          </div>
      </div>
    </div>
  )
}

export default ArticleTile