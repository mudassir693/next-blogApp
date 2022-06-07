import React from 'react';
import EachPage from '../../components/EachPageComponent/EachPage';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useRouter } from 'next/router'
import { request, gql } from 'graphql-request'

export const getServerSideProps = async()=>{
  const query = gql`
  query {
    getBlogById(id:"629fa48475533a917c4bf23d"){
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
  const resp = await request('http://localhost:5000/graphql',query)

  console.log(resp.getBlogById)

  return {
    props:{
      pageData:resp.getBlogById
    }
  }
}

function eachPage({pageData}) {
  console.log('hello Yaro: ',pageData);
  const router = useRouter()
  const {eachPage} = router.query

  console.log(eachPage)
  return (
    <div>
      <Header />
      <EachPage pageData={pageData} />
      <Footer />
    </div>
  );
}

export default eachPage;
