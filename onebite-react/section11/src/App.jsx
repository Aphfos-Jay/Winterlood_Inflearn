import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";

//리렌더가 필요 없음
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "헬스장가기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "DAsP 공부하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.data);
    default:
      return state;
  }
}

//context는 컴포넌트 외부에 선언하게 됨
// export const TodoContext = createContext();
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  }, []);

  // Reducer를 통한 재생성을 막기 위함
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
