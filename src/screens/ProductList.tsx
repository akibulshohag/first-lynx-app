import Container from "../components/Container.tsx";
import "../App.css";
import { useNavigate } from "react-router";
import Gallery from "../components/Gallery.tsx";
import { furnituresPictures } from "../components/Pictures/furnitures/furnituresPictures.tsx";
const ProductList = () => {
  const nav = useNavigate();
  return (
    <Container>
      <view>
        <text className="Title" bindtap={() => nav("/")}>
          Back
        </text>
        
      </view>
      <Gallery pictureData={furnituresPictures} />
    </Container>
  );
};

export default ProductList;
