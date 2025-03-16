import "./StyleCss/index.css";
import type { Picture } from "../components/Pictures/furnitures/furnituresPictures.tsx";
import LikeIcon from "../components/LikeIcon.tsx";

export default function LikeImageCard(props: { picture: Picture }) {
  const { picture } = props;

  return (
    <view className="picture-wrapper">
      <image
        style={{ width: "100%", aspectRatio: picture.width / picture.height }}
        src={picture.src}
      />
      <LikeIcon />
    </view>
  );
}
