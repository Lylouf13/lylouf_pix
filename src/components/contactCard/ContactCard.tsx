import "./contactCard.css";

export enum ContactCardTags {
  IG = "IG",
  X = "X",
  BK = "BK",
  Itch = "Itch"
}
type ContactCardProps = {
  target: string;
  text: string;
  color: ContactCardTags;
};
export default function ContactCard({ target, text, color }: ContactCardProps) {
  return (
    <a className={`contactCard` + ` contactCard__${color}`}target="_blank" href={target}>
        <p className="contactCard__link">{text}</p>
        </a>
  )
}
