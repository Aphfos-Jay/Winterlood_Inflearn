import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [params, setParams] = useSearchParams(); // 쿼리스트링을 사용할 경우 다음과 같이 사용
  return <div>Home</div>;
};

export default Home;
