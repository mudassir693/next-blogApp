import React,{useContext} from 'react'
import style from './Header.module.css'
import { useRouter } from 'next/router'
import {BiCodeCurly} from 'react-icons/bi'
import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'
import {CgFormatSlash} from 'react-icons/cg'
import axios from 'axios'
import {context} from './../../projectContext/ProjectContext'




function Header() {
    const {login} = useContext(context)
    // console.log(props)
    const router = useRouter()
    const handleContact = (route)=>{
        router.push(route)
    }
  return (
    <div className={`${style.header} w-100% py-3 bg-[#0f172a] px-3 lg:px-0`}>
        <div className="container max-w-4xl mx-auto flex justify-between items-center text-3xl md:text-5xl text-[#DA0060]">
            <div onClick={()=>handleContact('/pages')} className="logo flex justify-start items-center cursor-pointer">
                <FaAngleLeft className="ml-[-5px] md:ml-[-1rem]" />
                <BiCodeCurly className="mx-[-10px] md:mx-[-1rem] text-[#00B9E8]" />
                {/* <CgFormatSlash  /> */}
                <FaAngleRight />
            </div>
            <div className="nameContainer text-white text-xl block md:hidden font-bold">
                {login.Name && login?.Name.split(' ')[0]}
            </div>
            <div className="nameContainer text-white text-xl hidden md:block font-bold">
                {login.Name && login?.Name}
            </div>
        </div>
    </div>
  )
}



export default Header