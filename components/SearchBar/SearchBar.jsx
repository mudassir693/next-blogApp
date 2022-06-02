import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {GoSearch} from 'react-icons/go';
import style from './SearchBar.module.css'


function SearchBar() {
  return (
    <div className={`${style.SearchBar}`}>
        <div className="inputContainer border border-white">
            <input type="text" name="Search" />
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            <GoSearch />
        </div>
    </div>
  );
}

export default SearchBar;
