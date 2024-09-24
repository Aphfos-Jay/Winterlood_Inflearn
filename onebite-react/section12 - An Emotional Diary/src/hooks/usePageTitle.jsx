import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0]; //$표시는 Dom 요소가 저장 될 것이라고 표시해주는 것
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
