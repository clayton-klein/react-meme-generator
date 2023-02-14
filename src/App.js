import "./App.css";
import Header from "./components/Header.js";
import Meme from "./components/Meme.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <Footer />
    </div>
  );
}
