import React from "react";
// import memeData from "../memeData";

function Form() {
    function handleClick() {
        const randomNum = Math.floor(Math.random() * allMemeImages.length);
        //setUrl(memeData.data.memes[randomNum].url);
        //console.log(memeData.data.memes[randomNum].url);
        setMeme(prevMeme => ({
            ...meme,
            randomImage: allMemeImages[randomNum].url
        }));
    }

    const [meme, setMeme] = React.useState(
        {
            toptext: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes));
    }, [])
    //there are no dependencies here in the dependencies array because i'll get all the memes 
    //once at the first render of the component and then the setMeme function is in charge to
    //random choose one of the meme

    const [allMemeImages, setAllMemeImages] = React.useState([]);
    //const [url, setUrl] = React.useState("");

    console.log(meme);

    function handleChange(event) {
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <main>
            <div className="meme-form">
                <div className="form-inputs">
                    <input
                        type="text"
                        name="toptext"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleClick}>Get a new meme image</button>
            </div>
            <div className="meme-img-container">
                <h1 className="meme-text top">{meme.toptext}</h1>
                <img src={meme.randomImage} alt="" className="meme-img" />
                <h1 className="meme-text bottom">{meme.bottomText}</h1>
            </div>
        </main>
    );
}

export default Form;