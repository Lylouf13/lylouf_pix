import image from "../../types/image";
export default function ImageContainer({
  image,
  onClick,
  tabIndex,
  index,
}: {
  image: image;
  onClick: () => void;
  tabIndex: number;
  index: number;
}) {
  return (
    <img
      className="art"
      src={image.link}
      alt={image.name}
      onClick={onClick}
      tabIndex={tabIndex}
    />
  );
}
