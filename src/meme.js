import React from 'react'
// import memesData from './memesData'

export default function Meme() {

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )
    const [allMemes, setAllMemes] = React.useState([])

      React.useEffect( () => {
        async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
        }
        getMemes()
          
      }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[randomNumber].url
        })
        )

    }

     function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">
                <input
                    placeholder='top text'
                    className="form--input" type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                     />
                <input
                    placeholder='bottom text'
                    className="form--input" type="text"
                    name="bottomText"
                    value={meme.bottomText} 
                    onChange={handleChange}
                    />
                <button
                    onClick={getMemeImage}
                    className="form--button">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}