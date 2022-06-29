import React from 'react';
import EachPage from '../../components/EachPageComponent/EachPage';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useRouter } from 'next/router'
import { request, gql } from 'graphql-request'

// export const getStaticProps = async(context)=>{

//   // console.log('context.params: ',context.params.eachPage);
//   const targetId = context.params.eachPage
//   const query = gql`
//   query($_id:String) {
//     getBlogById(id:$_id){
//       _id
//       TitleImage
//       Title
//       Introduction
//       TerminalCommands
//       Code
//       Peragraphs
//       FinalLine
//       Views
//       Likes
//       LikeBy
//     }
//   }
//   `
//   const resp = await request('http://localhost:5000/graphql',query,{_id:targetId})

//   // console.log(resp.getBlogById)

//   return {
//     props:{
//       pageData:resp.getBlogById
//     }
//   }
// }

function eachPage(prop) {
  // console.log('hello Yaro: ',pageData);
  const router = useRouter()
  const {eachPage} = router.query

  console.log(eachPage)
  return (
    <div>
      <Header />
      <EachPage  />
      <Footer />
    </div>
  );
}

export default eachPage;
