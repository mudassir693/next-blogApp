import Image from 'next/image'
import React from 'react'
import {useRouter} from 'next/router'


import style from './ArticleTile.module.css'

function ArticleTile({imgSrc,title}) {
  const router = useRouter()

  const route = ()=>{
    router.push('/pages/1')
  }
  return (
    <div onClick={route} className={`${style.mainContainer} cursor-pointer`}>
        <div className={`articleImage w-[100%] h-[220px] relative`}>
            <Image className={`${style.imageStyling} `} src={imgSrc} alt="learn Next.Js" layout='fill'  objectFit='cover' />
        </div>
        <div className={`${style.articleTitle} text-white my-2 text-2xl font-medium` }>
            {title}
        </div>
        <div className="articleTimeStamp text-md text-gray-400 font-light">
            2 jun, 2022
        </div>
    </div>
  )
}

export default ArticleTile