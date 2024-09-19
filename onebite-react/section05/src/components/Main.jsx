import "./Main.css";
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. ==> {A} A부분이 하나의 값으로 인정되는 경우만 사용 가능 ==> 삼항연산자도 그래서 사용 가능
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다. <div></div><div></div> 2개로 표현 불가, 흩뿌리고 싶으면 빈태그 이용 <></>

const Main = () => {
  const number = 10;
  const user = {
    name: "Jay",
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      <div
        className="logout"
        //style={{ backgroundColor: "skyblue", borderBottom: "5px solid black" }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
