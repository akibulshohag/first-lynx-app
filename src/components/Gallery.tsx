import type { Picture } from "../components/Pictures/furnitures/furnituresPictures.tsx";
import "./StyleCss/index.css";
import LikeImageCard from "../components/LikeImageCard.tsx";
import { calculateEstimatedSize } from "../components/utils.tsx";

export const Gallery = (props: { pictureData: Picture[] }) => {
  const { pictureData } = props;

  return (
    <view className="gallery-wrapper">
      <list
        className="list"
        list-type="waterfall"
        column-count={2}
        scroll-orientation="vertical"
        custom-list-name="list-container"
      >
        {pictureData.map((picture: Picture, index: number) => (
          <list-item
            estimated-main-axis-size-px={calculateEstimatedSize(picture.width, picture.height)}
            item-key={"" + index}
            key={"" + index}
          >
            <LikeImageCard picture={picture} />
          </list-item>
        ))}
      </list>
    </view>
  );
};

export default Gallery;