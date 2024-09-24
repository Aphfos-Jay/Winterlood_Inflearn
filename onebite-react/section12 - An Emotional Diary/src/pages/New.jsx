import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const nav = useNavigate();
  // nav(-1) 이면 페이지 뒤로가기 기능 구현
  usePageTitle("새 일기 쓰기");

  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true }); //replace: 뒤로가기 방지하면서 페이지를 이동시킴
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftchild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
