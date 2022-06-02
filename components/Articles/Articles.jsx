import React from 'react'
import ArticleTile from '../ArticleTile/ArticleTile'
import style from './Articles.module.css'
import NextTitleImage from '../../assets/next2.png'
import ReactTitleImage from '../../assets/React.jpg'
import VueTitleImage from '../../assets/Vue.jpg'
import GQLTitleImage from '../../assets/GQLpng.png'
import K8sTitleImage from '../../assets/k8s.png'
import dockerTitleImage from '../../assets/docker.png'


function Articles() {
  return (
    <div className="max-w-4xl mx-auto my-5 w-[90%] lg:w-[100%]">
        <div className="articleHeader text-2xl font-semibold text-white mt-5">
            My Articles
        </div>
        <div className="articleSection my-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticleTile title="Learn Next.JS" imgSrc={NextTitleImage} />
            <ArticleTile title="Master Your React.JS" imgSrc={ReactTitleImage} />
            <ArticleTile title="Learn Vue.JS" imgSrc={VueTitleImage} />
            <ArticleTile title="GraphQL" imgSrc={GQLTitleImage} />
            <ArticleTile title="Kubernetes" imgSrc={dockerTitleImage} />
            <ArticleTile title="Docker" imgSrc={K8sTitleImage} />
        </div>
    </div>
  )
}

export default Articles