import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import getEmotionImage from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

//소수의 이미지를 쓰는경우 Assets 폴더에 있으면 좋지만 그 양이 많아지면 public에 넣는것이 좋을 수도 있음

// 1. /: 모든 일기를 조회하는 Home 페이지
// 2. /new: 새로운 일기를 작성하는 New 페이지
// 3. /diary: 일기를 상세히 조회하는 Diary 페이지

// 주의1:  Routes 컴포넌트안에는 Route 컴포넌트만 넣을 수 있음
// 주의2: Routes 컴포넌트 밖에 배치된 컴포넌트는 페이지와 상관없이 동일하게 렌더링

function App() {
  const nav = useNavigate(); // Navigate 함수를 이용한 방식

  //이벤트 핸들러 이용 특정 조건에서 이동을 해야한다면 이방식
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Header
        title={"Header"}
        leftchild={<Button text={"Left"} />}
        rightchild={<Button text={"Right"} />}
      />
      <Button
        text={"DEFAULT"}
        onClick={() => {
          console.log("DEFAULT 버튼클릭");
        }}
      />

      <Button
        text={"POSITIVE"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("POSITIVE 버튼클릭");
        }}
      />

      <Button
        text={"NEGATIVE"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("NEGATIVE 버튼클릭");
        }}
      />

      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={"/"}> Home </Link> {/** Link 컴포넌트를 이용한 방식 */}
        <Link to={"/new"}> New </Link>
        <Link to={"/diary"}> Diary </Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        {/** path에 /:word 형태가 있으면 향후 이것은 동적경로의 URL 파라미터인 것을 의미 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
