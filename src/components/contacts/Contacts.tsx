import "./contacts.css";

export default function Contacts() {
  return (
    <div className="mainContainer_contacts">
      <h2 className="blocTitle">Keep in touch !</h2>
      <p className="text">Here you'll find where to reach me !</p>
      <p className="text">Send a mail to discuss your project :</p>
      <p className="mail">lylouf_pix@gmail.com</p>
      <div className="contact__container">
        <p className="text">
          Follow me on X to see my latest work, or dm me directly there
        </p>
        <a className="cta" target="_blank" href="https://twitter.com/lylouf13">
          X {">"}
        </a>
      </div>
      <div className="contact__container">
        <p className="text">Check my game projects on my Itch.io</p>
        <a className="cta" target="_blank" href="https://lylouf.itch.io/">
          Itch.io {">"}
        </a>
      </div>
    </div>
  );
}
