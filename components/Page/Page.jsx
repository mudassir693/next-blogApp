import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import style from './Page.module.css'

function Page() {
  return (
    <div className={`bg-[#0D1117] w-100% text-white`}>
        <div className={`${style.pageContainer} containr max-w-7xl mx-auto`}>
            <SearchBar />
            Page here
        </div>
    </div>
  );
}

export default Page;
