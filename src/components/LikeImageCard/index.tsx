import LikeImageCard from "../LikeImageCard.tsx";
import { furnituresPictures } from "../Pictures/furnitures/furnituresPictures.jsx";
import "../StyleCss/index.scss";

import { root } from "@lynx-js/react";

function FirstImageCard() {
  const MyFirstPicture = furnituresPictures[0];
  return (
    <view className="gallery-wrapper single-card">
      <LikeImageCard picture={MyFirstPicture} />
    </view>
  );
}

root.render(<FirstImageCard />);
