import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

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
