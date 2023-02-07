import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <img
        className="header__logo"
        src="./images/troll-face.svg"
        alt="troll face"
      />
      <h1 className="header__title">Meme Generator</h1>
      <p className="header__subtitle">React Course - Project 5</p>
    </header>
  );
}
