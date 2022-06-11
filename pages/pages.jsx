import React from 'react'
import Articles from '../components/Articles/Articles'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PageTop from '../components/PageTop/PageTop'
import Technologies from '../components/Technologies/Technologies'
import axios from 'axios'
import { request, gql } from 'graphql-request'

export const getStaticProps = async(context) => {
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

    console.log('resp mudassir',resp);

  return {
    props: {
      // test:JSON.parse(JSON.stringify(test.data.results))
      blogs:resp.getAllBlogs
    } // will be passed to the page component as props
  }
}

function pages({blogs}) {
  console.log('i love you jani',blogs)
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