import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import getEmotionImage from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

//소수의 이미지를 쓰는경우 Assets 폴더에 있으면 좋지만 그 양이 많아지면 public에 넣는것이 좋을 수도 있음

// 1. /: 모든 일기를 조회하는 Home 페이지
// 2. /new: 새로운 일기를 작성하는 New 페이지
// 3. /diary: 일기를 상세히 조회하는 Diary 페이지

// 주의1:  Routes 컴포넌트안에는 Route 컴포넌트만 넣을 수 있음
// 주의2: Routes 컴포넌트 밖에 배치된 컴포넌트는 페이지와 상관없이 동일하게 렌더링

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  // const nav = useNavigate(); // Navigate 함수를 이용한 방식

  //이벤트 핸들러 이용 특정 조건에서 이동을 해야한다면 이방식
  // const onClickButton = () => {
  //   nav("/new");
  // };

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존의 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존의 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello!");
        }}
      >
        일기추가테스트
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "Hello!22 ");
        }}
      >
        일기수정테스트
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기삭제테스트
      </button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            {/** path에 /:word 형태가 있으면 향후 이것은 동적경로의 URL 파라미터인 것을 의미 */}
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
