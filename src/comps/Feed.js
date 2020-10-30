import React from 'react'
import './../App.css'
import StoryReel from './StoryReel'
import Form from './Form'
import Post from './Post'


// array to handle posts data
const data = [
    {
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdX7wWCMOvGYD6_4-MthVKf-DjjgLF_GqQzg&usqp=CAU",
        message: "baby",
        time: "time",
        userName: "friend 1",
        image: "https://www.imagesjunction.com/images/img/cute_baby_images.jpg"
    },
    {
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdX7wWCMOvGYD6_4-MthVKf-DjjgLF_GqQzg&usqp=CAU",
        message: "Galaxy",
        time: "time",
        userName: "friend 2",
        image: "https://www.technocrazed.com/wp-content/uploads/2015/12/HD-Space-Wallpaper-For-Background-22.jpg"
    },
    {
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdX7wWCMOvGYD6_4-MthVKf-DjjgLF_GqQzg&usqp=CAU",
        message: "Hello",
        time: "time",
        userName: "friend 3",
        image: ""
    },
]

function Feed() {
    return (
        <div className="feed">
            {/* stories */}
            {/* <StoryReel /> */}
            {/* form */}
            <Form />

            {data.map((post, i)=>{
                return <Post key={i} {...post} />
            })}
        </div>
    )
}

export default Feed
