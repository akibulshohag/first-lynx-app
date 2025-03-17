import Container from "../components/Container.tsx";
import "../App.css";
import { useNavigate } from "react-router";
import useAppStore from "../../store/useAppStore.tsx";

const Home = () => {
  const nav = useNavigate();

  const { count, increment, decrement } = useAppStore();
  return (
    <Container>
      <view>
        <text className="Title" bindtap={() => nav("/")}>
          Count Screen
        </text>
      </view>
      <view className="Counter">
        <text bindtap={decrement} className="Increment">-</text>
        <text className="TotalCount">{count}</text>
        <text bindtap={increment} className="Increment">+</text>
      </view>
    </Container>
  );
};

export default Home;
