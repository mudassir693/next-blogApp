import React from 'react'
import Articles from '../components/Articles/Articles'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PageTop from '../components/PageTop/PageTop'

function pages() {
  return (
    <div className="w-100% bg-[#061019]">
        <Header />
        <PageTop />
        <Articles />
        <Footer />

        <div>
            pages
        </div>
    </div>
  )
}

export default pages