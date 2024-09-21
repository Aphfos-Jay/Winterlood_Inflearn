import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//BrowserRouter: 브라우저의 현재주소를 저장하고 감지하는 역할을 함 ==> 페이지 라우팅과 관련된 모든 컨텍스트를 공급받아서 사용할 수 있게 됨
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
