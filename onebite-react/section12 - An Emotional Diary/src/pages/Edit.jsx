import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();

  return <div>{params.id} Edit Pages</div>;
};

export default Edit;
