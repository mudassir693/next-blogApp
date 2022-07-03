import React,{useContext} from 'react';
import {context} from './../../projectContext/ProjectContext'
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const ProfileBanner = () => {
    const { login} = useContext(context)
    return (
        <div className="profile-banner w-[100%] bg-[#0f172a] py-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-5xl font-bold text-white">
                    Hi, {login?.Name}.
                </div>
                <div className="text-xl my-3 font-light text-white w-[100%] md:w-[70%] inline-block">
                    {/* You are login with your <span className='text-[#DA0060]'>{login?.Email}</span> account. */}

                    Good to see you here, we are here to resolve your queries. Just drop Your queries in comment box and that's it. We will resolve it or you can reach me to me through 
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mudassir-siddiqui-3661b5207/"  className="w-[fit-content] text-white text-[#1D9BF0]">
                        <span className="mx-1">LinkedIn</span>
                    </a> 
                </div>
            </div>
        </div>
    );
}

export default ProfileBanner;
