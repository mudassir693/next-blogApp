import React,{useState,useEffect} from 'react'
import Articles from '../components/Articles/Articles'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PageTop from '../components/PageTop/PageTop'
import Technologies from '../components/Technologies/Technologies'
import axios from 'axios'
import { request, gql } from 'graphql-request'


function pages(prop) {
  
  const [blogs,setBlogs] = useState()
  
  console.log('i love you jani',blogs)
  useEffect(()=>{
    getBlogsFn()
    return ()=>{
      true
    }
  },[])

  const getBlogsFn =async ()=>{
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
  
    const resp =await request('https://progress-regularly.herokuapp.com/graphql',query)

    setBlogs(resp.getAllBlogs)

    console.log('resp mudassir',resp);
  }
  return (
    <div className="w-100% bg-[#061019]">
        <Header />
        <PageTop />
        <Articles articles={blogs} />
        <Technologies />
        <Footer />

        <div>
            pages
        </div>
    </div>
  )
}

export default pages