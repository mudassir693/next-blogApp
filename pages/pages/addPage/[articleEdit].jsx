import React,{useEffect,useState} from 'react'
import AddPage from '../../../components/AddPage/AddPage'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import { useRouter } from 'next/router'

function articleEdit() {

 

  // getData()
  return (

    <div>
        <Header />
        <AddPage />
        <Footer />
    </div>
  )
}

export default articleEdit