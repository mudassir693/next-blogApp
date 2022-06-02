import React from 'react'
import style from './Header.module.css'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter()
    const handleContact = (route)=>{
        router.push(route)
    }
  return (
    <div className={`${style.header} w-100% py-3 bg-[#0f172a] px-3 lg:px-0`}>
        <div className="container max-w-4xl mx-auto flex justify-between items-center">
            <div onClick={()=>handleContact('/pages')} className="container text-4xl">
                <div className={`${style.logoContainer} text-center cursor-pointer text-white`}>
                    Share
                <span className={`${style.span} text-white text-sm block text-[#00B9E8]`}> <span className="text-[#00B9E8] ">what</span> <span  className="text-[#FFBC3D] mx-1">you</span> <span  className="text-[#DA0060]">want</span></span>
                </div>
            </div>
            <div className="test rightContainer text-white hidden lg:block">
                <div onClick={()=>handleContact('/contact')} className={`${style.linkContainer} text-2xl cursor-pointer`}>
                    Contact
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header