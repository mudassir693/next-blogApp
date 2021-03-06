import React,{useContext,useEffect,useState} from 'react'
import ArticleTile from '../ArticleTile/ArticleTile'
import NextTitleImage from '../../assets/next3.png'
import ReactTitleImage from '../../assets/react2.webp'
import VueTitleImage from '../../assets/vue2.webp'
import GQLTitleImage from '../../assets/GQL2Banner.png'
import K8sTitleImage from '../../assets/kubernetes2.jpg'
import dockerTitleImage from '../../assets/docker2.webp'
import NodeTitleImage from '../../assets/node2.jpg'
import axios from 'axios'
import Modal from '../Modal/Modal'
import {context} from '../../projectContext/ProjectContext'
import {gql,request} from 'graphql-request'


function ProfilePosts({articles}) {
  // console.log(test)
  const {login,modal} = useContext(context)
  const [blogList,setBlogList] = useState([])
  const [toggler,setToggler] = useState(true)
  
  useEffect(()=>{
    // console.log('toggler useEffect');
    getArticles()
  },[toggler])

  const getArticles = async()=>{
    const query = gql`
    query ($id:String){
      getLikedBlog(id:$id) {
        _id
        TitleImage
        Title
        Introduction
        Body
        FinalLine
        Views,
        Likes
        PublishDate
      }
    } 
  `
  
    const resp =await request('https://progress-regularly.herokuapp.com/graphql',query,{id:login._id})
    setBlogList(resp.getLikedBlog)

    console.log('get articles from useEffect: ',resp);

    return () => {
      console.log("This will be logged on unmount");
  }
  }

  return (
    <div className="max-w-4xl mx-auto py-5 w-[90%] lg:w-[100%]">
      {modal && <Modal />}
        <div className="articleHeader text-2xl font-semibold text-white mt-5">
            Liked Blogs
        </div>
        <div className="articleSection my-3 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogList.length>0 && blogList?.map(eachArticle=>(
            <ArticleTile toggler={toggler} setToggler={setToggler} article={eachArticle} imgSrc={NodeTitleImage} />
            ))  
          }
          {blogList.length==0 && <div className="text-gray-400">
            You Haven't like any post yet.
          </div>
          }
          </div>
        {/* <div className="articleSection my-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticleTile title="Learn Node.JS" imgSrc={NodeTitleImage} />
            <ArticleTile title="Learn Next.JS" imgSrc={NextTitleImage} />
            <ArticleTile title="Master Your React.JS" imgSrc={ReactTitleImage} />
            <ArticleTile title="Learn Vue.JS" imgSrc={VueTitleImage} />
            <ArticleTile title="GraphQL" imgSrc={GQLTitleImage} />
            <ArticleTile title="Docker" imgSrc={dockerTitleImage} />
            <ArticleTile title="Kubernetes" imgSrc={K8sTitleImage} />
        </div> */}
    </div>
  )
}

export default ProfilePosts