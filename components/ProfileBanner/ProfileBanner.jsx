import React,{useContext} from 'react';
import {context} from './../../projectContext/ProjectContext'

const ProfileBanner = () => {
    const { login} = useContext(context)
    return (
        <div className="profile-banner w-[100%] bg-[#0f172a] py-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-5xl font-bold text-white">
                    Hi, {login?.Name}.
                </div>
                <div className="text-3xl my-3 font-light text-white w-[100%] md:w-[60%]">
                    You are login with your <span className='text-[#DA0060]'>{login?.Email}</span> account.
                </div>
            </div>
        </div>
    );
}

export default ProfileBanner;
