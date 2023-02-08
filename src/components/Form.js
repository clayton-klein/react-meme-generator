import "../styles/Form.css";

export default function Form() {
  return (
    <form className="memeForm">
      <div className="form__TextInputsContainer">
        <input
          className="form__topText"
          type="text"
          placeholder="Top text here"
        />
        <input
          className="form__bottomText"
          type="text"
          placeholder="Bottom text here"
        />
      </div>
      <input
        className="form__button"
        type="button"
        value="Get a New Meme Image 🖼️"
      />
    </form>
  );
}
