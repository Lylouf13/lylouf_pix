import "./contacts.css";
import ContactCard from "../contactCard/ContactCard";
import { ContactCardTags } from "../contactCard/ContactCard";

export default function Contacts() {
  return (
    <div className="mainContainer_contacts">
      <h2 className="blocTitle">Keep in touch !</h2>
      <p className="text">Send a mail to discuss your project :</p>
      <p className="mail">lylouf.pix@gmail.com</p>

      <p className="text">Find me here and there !</p>
      <div className="cardContainer">
      <ContactCard target="https://twitter.com/lylouf13" text="Twitter" color={ContactCardTags.X} />
      <ContactCard target="https://www.instagram.com/lylouf_pix" text="Instagram"color={ContactCardTags.IG}/>
      <ContactCard target="https://bsky.app/profile/lylouf.bsky.social" text="Bluesky" color={ContactCardTags.BK}/>
      <ContactCard target="https://lylouf.itch.io/" text="Itch.io" color={ContactCardTags.Itch}/>
      </div>
    </div>
  );
}
