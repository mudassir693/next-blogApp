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
      }
    } 
  `
  
    const resp =await request('http://localhost:5000/graphql',query)

    console.log('resp mudassir',resp);

  return {
    props: {
      // test:JSON.parse(JSON.stringify(test.data.results))
      test:resp.getAllBlogs
    } // will be passed to the page component as props
  }
}

function pages({test}) {
  console.log('i love you jani',test)
  return (
    <div className="w-100% bg-[#061019]">
        <Header />
        <PageTop />
        <Articles articles={test} />
        <Technologies />
        <Footer />

        <div>
            pages
        </div>
    </div>
  )
}

export default pages