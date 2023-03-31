import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    if (count <= 0) {
      alert("count값이 0보다 안된다");
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="bg-red-300 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd} // 화살표 함수로 클릭 확인
      >
        버튼
      </button>
      <button
        className="bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickMinus} // 화살표 함수로 클릭 확인
      >
        빼기
      </button>
    </div>
  );
};

export default App;
