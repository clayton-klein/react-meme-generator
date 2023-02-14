import { useState, useEffect } from "react";
import "../styles/Meme.css";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    img: "./images/meme-img.png",
  });

  const [memesArray, setMemesArray] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((memeData) => setMemesArray(memeData.data.memes));
  }, []);

  function changeMemeImg(event) {
    event.preventDefault();

    let randomNumber = Math.floor(Math.random() * memesArray.length + 1);
    let randomImg = memesArray[randomNumber].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        img: randomImg,
      };
    });
  }

  function handleInputsChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <main className="memeContainer">
      <form className="memeForm">
        <div className="form__textInputsContainer">
          <input
            className="form__topText"
            name="topText"
            onChange={handleInputsChange}
            placeholder="Top text"
            type="text"
            value={meme.topText}
          />
          <input
            className="form__bottomText"
            name="bottomText"
            onChange={handleInputsChange}
            placeholder="Bottom text"
            type="text"
            value={meme.bottomText}
          />
        </div>
        <button className="form__button" onClick={changeMemeImg}>
          Get a New Meme Image 🖼️
        </button>
      </form>
      <div className="memeImgContainer">
        <img className="memeImgContainer__memeImg" src={meme.img} alt="" />
        <p className="memeImgContainer__text--top">{meme.topText}</p>
        <p className="memeImgContainer__text--bottom">{meme.bottomText}</p>
      </div>
    </main>
  );
}
