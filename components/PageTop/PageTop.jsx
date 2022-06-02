import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import style from './PageTop.module.css'

function Page() {
  return (
    <div className={`bg-[#0f172a] w-100% text-white`}>
        <div className={`${style.pageContainer} containr max-w-4xl mx-auto py-5 px-3 lg:px-0`}>
          
          <div className="textContainer">
            <div className="headerComponent text-3xl md:text-4xl lg:text-5xl font-bold leading-8 lg:leading-snug">
              Progress Regularly: <br/> go from junior to web developer
            </div>    
            <div className="headerDesc  text-xl font-extralight  my-5 w-100% lg:w-3/4 leading-7 lg:leading-9">
              Hey there 👋 I'm <span className="font-medium"> Muhammad Mudassir Siddiqui </span> a full-stack remote web developer with <span className="font-medium"> 2+ years </span> of experience, and I'll help you become a web developer with bite-sized dev tips.
            </div>    
          </div>
        </div>
    </div>
  );
}

export default Page;
