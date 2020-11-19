import React from 'react';
import ProfilePicture from "../components/ProfilePicture";
import Navigation from "../components/Navigation";
import TagBio from "../components/TagBio"


export default function Home() {
    return (
        <div>
            <Navigation />
            <ProfilePicture />
            <TagBio />
        </div>
    )
}
