import "./viewer.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeViewer } from "../../redux/reducers/viewerReducer";

export default function Viewer() {
  const dispatch = useAppDispatch();
  const viewerData = useAppSelector((state) => state.viewer);

  const onClickHandler = () => {
    dispatch(closeViewer());
  };
  return (
    <div className={viewerData.open ? "viewer open" : "viewer"} onClick={onClickHandler}>
      <div className="viewerImageContainer">
        <img className="viewerImage" src={viewerData.image.link} />
        <div>
          <h2 className="viewerTitle">{viewerData.image.name}</h2>
          <p className="viewerDescription">{viewerData.image.description}</p>
        </div>
      </div>
    </div>
  );
}
