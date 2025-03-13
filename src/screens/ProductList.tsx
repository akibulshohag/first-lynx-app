import Container from "../components/Container.tsx"
import '../App.css'
import { useNavigate } from 'react-router';
const ProductList = () => {
    const nav = useNavigate();
    return (
        <Container>
        <view>
          <text className="Title" bindtap={()=>nav('/')}>Product List</text>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus ab commodi expedita, amet vel! Doloribus illo quidem quia similique.</text>
        </view>
      </Container>
    )
  }
  
  export default ProductList
  