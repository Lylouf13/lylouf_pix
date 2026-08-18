import "./home.css";


export default function Home() {
  return (
    <main className="flexHome" >
      <div className="mainContainer">
      <h2 className="blocTitle homeTitle">Hi there !</h2>
      <p className="text">I'm Lylouf and you're on my portfolio !</p>

      <p className="text">
        I'm looking for projects as a pixel artist, be it games or individual
        commissions. I'm more into environmental art, but also doing animation
      </p>
      </div>
      <div className="logosContainer">
        <h2>Catch me elswhere...</h2>
        <div className="logos">
          <a href="https://www.instagram.com/lylouf_pix" >
            <img src="assets/others/GramLogo.png" alt="Gram" className="logoLinks"/>
          </a>
          <a href="https://twitter.com/lylouf13">
            <img src="assets/others/XLogo.png" alt="X" className="logoLinks"/>
          </a>
          <a href="https://bsky.app/profile/lylouf.bsky.social">
            <img src="assets/others/BskyLogo.png" alt="Bsky" className="logoLinks"/>
          </a>
        </div>
        <h2>Or drop me a line !</h2>
        <p className="mail">lylouf.pix@gmail.com</p>
      </div>
    </main>
  );
}
