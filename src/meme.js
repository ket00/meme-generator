import React from 'react'
import memesData from './memesData'

export default function Meme() {

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )
    const [allMemeImage, setAllMemeImage] = React.useState(memesData)
    function getMemeImage() {
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[randomNumber].url
        })
        )

    }
    return (
        <main>
            <div className="form">
                <input
                    placeholder='top text'
                    className="form--input" type="text" />
                <input
                    placeholder='bottom text'
                    className="form--input" type="text" />
                <button
                    onClick={getMemeImage}
                    className="form--button">Get a new meme image 🖼</button>
                <img src={meme.randomImage} className="memeImg" />
            </div>
        </main>
    )
}