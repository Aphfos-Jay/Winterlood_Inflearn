/**
 * Section07 내용
 * // 3. 언마운트
 */

import { useEffect } from "react";
const Even = () => {
  useEffect(() => {
    //클린업, 정리함수 => useEffect에서 콜백함수가 리턴하는 함수를 지칭
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
