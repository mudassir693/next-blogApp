import React from 'react'
import style from './Header.module.css'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter()
    const handleContact = (route)=>{
        router.push(route)
    }
  return (
    <div className={`${style.header} w-100% py-3 bg-[#0D1117]`}>
        <div className="container max-w-7xl mx-auto flex justify-between items-center">
            <div onClick={()=>handleContact('/pages')} className="container   text-white text-4xl">
                <div className={`${style.logoContainer} text-center cursor-pointer`}>
                    Share
                <span className={`${style.span} text-white text-sm block`}>what you want</span>
                </div>
            </div>
            <div className="test rightContainer text-white">
                <div onClick={()=>handleContact('/contact')} className={`${style.linkContainer} text-2xl cursor-pointer`}>
                    Contact
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header