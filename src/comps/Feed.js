import React from 'react'
import './../App.css'
import StoryReel from './StoryReel'
import Form from './Form'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            {/* stories */}
            {/* <StoryReel /> */}
            {/* form */}
            <Form />

            <Post />
        </div>
    )
}

export default Feed
