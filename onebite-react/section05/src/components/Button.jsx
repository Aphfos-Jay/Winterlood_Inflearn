// 자식요소의 경우 props 밑의 children에서 값을 꺼내올 수 있음
const Button = (props) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(props.text);
  };
  return (
    <button
      onClick={onClickButton}
      //   onMouseOver={onClickButton}
      style={{ color: props.color }}
    >
      {props.text} - {props.color}
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
