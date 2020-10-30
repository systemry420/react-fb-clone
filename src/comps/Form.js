import React, { useState } from 'react'
import './../App.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Form() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        // some database stuff
        setInput('')
        setImageUrl('')
    }

    return (
        <div className="form">
            <div className="form_top">
                <Avatar />
                <form>
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text" 
                        className="form_input" 
                        placeholder="What's in your mind" 
                        />
                    <input 
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        type="text" 
                        className="form_input url" 
                        placeholder="image URL (Optional)"
                    />
                    <button
                        onClick={handleSubmit}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className="form_bottom">
                <div className="option">
                    <VideocamIcon style={{ color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="option">
                    <PhotoLibraryIcon style={{ color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="option">
                    <InsertEmoticonIcon style={{ color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default Form
