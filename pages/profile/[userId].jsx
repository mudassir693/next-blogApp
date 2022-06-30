import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProfileBanner from '../../components/ProfileBanner/ProfileBanner';
import ProfilePosts from '../../components/ProfilePosts/ProfilePosts';
function userId() {
  return (
    <div>
        <Header />
        <ProfileBanner />
        <div className="text bg-[#061019]">
            <ProfilePosts />
        </div>
        <Footer />
    </div>
  );
}

export default userId;
