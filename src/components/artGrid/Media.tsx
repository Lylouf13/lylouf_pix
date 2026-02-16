
import image from "../../types/image";

type MediaProps = {
  value: image;
  viewer: boolean
  onClickHandler: (value: image) => void;
};

export default function Media({ value, onClickHandler, viewer}: MediaProps) {
  const isWebm = value.link.toLowerCase().endsWith(".webm");

  if (isWebm) {

    return (
      <video
        className={viewer ? "viewerImage" : "art"}
        autoPlay
        loop
        muted
        playsInline
        onClick={() => onClickHandler(value)}
        tabIndex={0}
      >
        <source src={value.link} type="video/webm" />
      </video>
    );
  }

  return (
    <img
      className={viewer ? "viewerImage" : "art"}
      src={value.link}
      alt={value.name}
      onClick={() => onClickHandler(value)}
      tabIndex={0}
    />
  );
}