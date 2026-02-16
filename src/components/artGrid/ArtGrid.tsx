import "./artGrid.css";
import { useAppDispatch } from "../../redux/hooks";
import { openViewer } from "../../redux/reducers/viewerReducer";
import { images } from "../../data/images";
import image from "../../types/image";
import { TAGS } from "../../enums/tags";
import { useState } from "react";

export default function ArtGrid() {
  const dispatch = useAppDispatch();
  const [currentTag, setCurrentTag] = useState<TAGS | null>(null);

  const onClickHandler = (value: image) => {
    dispatch(openViewer(value));
  };
  const buildGalery = (elements: { [name: string]: image }) => {
    return Object.entries(elements).map(([key, value]) => {
      if (currentTag != null && elements[key].tags.includes(currentTag)) {
        return (
          <img
            key={key}
            className="art"
            src={value.link}
            alt={value.name}
            onClick={() => onClickHandler(value)}
            tabIndex={0}
          />
        );
      } else if (currentTag == null) {
        return (
          <img
            key={key}
            className="art"
            src={value.link}
            alt={value.name}
            onClick={() => onClickHandler(value)}
            tabIndex={0}
          />
        );
      }
    });
  };

  const currentGalery = buildGalery(images);

  return (
    <div className="artGrid">
      <div className="artGrid__tags">
        <p
          className={currentTag == null ? "tagButton active" : "tagButton"}
          onClick={() => setCurrentTag(null)}
        >
          Everything
        </p>
        {Object.entries(TAGS).map(([key, value]) => {
          return (
            <p
              key={key}
              className={currentTag == value ? "tagButton active" : "tagButton"}
              onClick={() => setCurrentTag(value)}
            >
              {value}
            </p>
          );
        })}
      </div>
      <div className="artGrid__container">
        {currentGalery}
      </div>
    </div>
  );
}
