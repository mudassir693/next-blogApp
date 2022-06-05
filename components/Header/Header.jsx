import React from 'react'
import style from './Header.module.css'
import { useRouter } from 'next/router'
import {BiCodeCurly} from 'react-icons/bi'
import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'
import {CgFormatSlash} from 'react-icons/cg'


function Header() {
    const router = useRouter()
    const handleContact = (route)=>{
        router.push(route)
    }
  return (
    <div className={`${style.header} w-100% py-3 bg-[#0f172a] px-3 lg:px-0`}>
        <div className="container max-w-4xl mx-auto flex justify-start items-center text-3xl md:text-5xl text-[#DA0060]">
            {/* <div onClick={()=>handleContact('/pages')} className="container text-4xl">
                <div className={`${style.logoContainer} text-center cursor-pointer text-white`}>
                    Share
                <span className={`${style.span} text-white text-sm block text-[#00B9E8]`}> <span className="text-[#00B9E8] ">what</span> <span  className="text-[#FFBC3D] mx-1">you</span> <span  className="text-[#DA0060]">want</span></span>
                </div>
            </div>
            <div className="test rightContainer text-white hidden lg:block">
                <div onClick={()=>handleContact('/contact')} className={`${style.linkContainer} text-2xl cursor-pointer`}>
                    Contact
                </div>
            </div> */}
            <div onClick={()=>handleContact('/pages')} className="logo flex justify-start items-center cursor-pointer">
                <FaAngleLeft className="ml-[-5px] md:ml-[-1rem]" />
                <BiCodeCurly className="mx-[-10px] md:mx-[-1rem] text-[#00B9E8]" />
                {/* <CgFormatSlash  /> */}
                <FaAngleRight />
            </div>
        </div>
    </div>
  )
}

export default Header