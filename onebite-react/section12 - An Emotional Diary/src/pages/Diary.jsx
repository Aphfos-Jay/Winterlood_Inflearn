import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/getStringedDate";
const Diary = () => {
  const params = useParams();
  console.log(params); // 앞에서 :id로 URL Parameter로 설정했기때문에 id로 나옴

  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;

  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftchild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightchild={
          <Button
            onClick={() => nav(`/edit/${params.id}`)}
            text={" 수정하기"}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
