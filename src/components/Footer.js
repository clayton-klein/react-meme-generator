import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2023 - by Clayton Klein</p>
      <div className="iconsContainer">
        <a
          href="https://github.com/clayton-klein"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="iconsContainer--github"
            src="./images/icons8-github.svg"
            alt="octocat, o mascote do github com cabeça de gato e tentáculos de polvo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/clayton-klein/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="iconsContainer--linkedin"
            src="./images/icons8-linkedin.svg"
            alt="as letras de forma minúsculas 'i' e 'n' da logo do linkedin"
          />
        </a>
      </div>
    </footer>
  );
}