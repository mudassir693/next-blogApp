import Link from 'next/link'
import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'


import style from './Footer.module.css'
function Footer() {
  return (
    <div className="w-[100%] bg-[#061019] py-5">
        <div className="mainContainer max-w-4xl text-center mx-auto my-3">
            <div className="title my-5">
                <div className="footerTop text-white text-3xl font-bond my-3">
                Progress Regularly
                </div>
                <div className="footerDesc text-gray-400 text-md">
                Made with ❤️ by <span className="font-semibold">Muhammd Mudassir</span> .
                </div>
            </div>
            <div className="footerLinks flex justify-center items-center my-4">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/mudassir693"  className="footerEacha text-white flex justify-center items-center hover:text-[#DA0060] mx-3">
                   <BsGithub /> <span className="mx-1"> Github </span>
                </a>

                {/* <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/muhamma63535793"  className="footerEacha text-white mx-4 flex justify-center items-center hover:text-[#1D9BF0]">
                  <FaTwitterSquare /> <span className="mx-1"> Twitter</span>
                </a> */}

                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mudassir-siddiqui-3661b5207/"  className="footerEacha text-white flex justify-center items-center hover:text-[#1D9BF0] mx-3">
                    <SiLinkedin /> <span className="mx-1">LinkedIn</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer