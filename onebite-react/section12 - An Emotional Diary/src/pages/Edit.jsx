import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);

  // 아래 주석된 코드는 다른 위치에서도 공통적으로 사용되기 때문에 별도의 커스텀 훅으로 분리
  // const data = useContext(DiaryStateContext);
  // const [curDiaryItem, setCurDiaryItem] = useState();

  // useEffect(() => {
  //   const currentDiaryItem = data.find(
  //     (item) => String(item.id) === String(params.id)
  //   );

  //   if (!currentDiaryItem) {
  //     window.alert("존재하지 않는 일기입니다.");
  //     nav("/", { replace: true });
  //   } else {
  //     setCurDiaryItem(currentDiaryItem);
  //   }
  // }, [params.id, data]);

  const onClickDelete = () => {
    if (
      window.confirm(
        "일기를 정말 삭제하시겠습니까? 삭제된 일기는 복구할 수 없습니다."
      )
    ) {
      onDelete(params.id);
      nav("/", { replace: true }); // home 화면 이동 후 뒤로가기 방어
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(params.id, input.createdDate, input.emotionId, input.content);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftchild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightchild={
          <Button onClick={onClickDelete} text={"삭제하기"} type="NEGATIVE" />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
