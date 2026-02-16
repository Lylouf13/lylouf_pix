import "./home.css";
import image from "../../types/image";
import { images } from "../../data/images";
type HomeProps = {
  goToGalery: () => void;
};

export default function Home({ goToGalery }: HomeProps) {
  const lastArtwork: image = images.GOBLIN_SQUAD;
  return (
    <main className="mainContainer">
      <h2 className="blocTitle">Hi there !</h2>
      <p className="text">I'm Lylouf and you're on my portfolio !</p>
      <p className="text">
        Passionnated with games and art in general, i started my professionnal journey
        with game design and ended up shifting to pixel art a few years later.
      </p>
      <p className="text">
        I'm now looking for projects as a pixel artist, be it games or individual
        commissions. I'm more into environmental art, but start to tackle in animation
        lately
      </p>
      <p className="text">Check my work in the galery section !</p>
      <p className="cta galeryBtn" onClick={goToGalery}>
        Galery {">"}
      </p>

      <h2 className="blocTitle">Latest artwork</h2>
      {/* <img
        className="homeArt"
        src={lastArtwork.link}
        alt={lastArtwork.name}
        onClick={() => {}}
        tabIndex={0}
      /> */}
      <video autoPlay loop muted playsInline tabIndex={0} className="homeArt">
        <source src={lastArtwork.link} className="homeArt" type="video/webm" />
      </video>
    </main>
  );
}
