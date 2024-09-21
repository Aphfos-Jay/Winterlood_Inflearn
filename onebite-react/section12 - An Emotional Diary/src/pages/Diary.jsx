import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);
  // 앞에서 :id로 URL Parameter로 설정했기때문에 id로 나옴
  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
