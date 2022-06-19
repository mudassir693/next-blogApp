import React,{useContext,useEffect,useState} from 'react'
import ArticleTile from '../ArticleTile/ArticleTile'
import style from './Articles.module.css'
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


function Articles({articles}) {
  // console.log(test)
  const {modal} = useContext(context)
  const [blogList,setBlogList] = useState([])
  const [toggler,setToggler] = useState(true)
  
  useEffect(()=>{
    // console.log('toggler useEffect');
    getArticles()
  },[toggler])

  const getArticles = async()=>{
    const query = gql`
    query {
      getAllBlogs {
        _id
        TitleImage
        Title
        Introduction
        TerminalCommands
        Code
        Peragraphs
        FinalLine
        Views,
        Likes
      }
    } 
  `
  
    const resp =await request('http://localhost:5000/graphql',query)
    setBlogList(resp.getAllBlogs)

    console.log('get articles from useEffect: ',resp);

    return () => {
      console.log("This will be logged on unmount");
  }
  }

  return (
    <div className="max-w-4xl mx-auto my-5 w-[90%] lg:w-[100%]">
      {modal && <Modal />}
        <div className="articleHeader text-2xl font-semibold text-white mt-5">
            My Articles
        </div>
        <div className="articleSection my-3 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogList.map(eachArticle=>(
            <ArticleTile toggler={toggler} setToggler={setToggler} article={eachArticle} imgSrc={NodeTitleImage} />
            ))  
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

export default Articles