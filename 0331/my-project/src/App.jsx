import { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const onChangeNum1 = (e) => {
    // console.log(e.target.value);
    setNum1(e.target.value);
  };
  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  const onClickAdd = () => {
    if (isNaN(num1) || isNaN(num2)) {
      alert("숫자입력하세요");
      return;
    }
    setResult(parseInt(num1) + parseInt(num2));
  };

  const onClickMinus = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl bg-red-100">공학용 계산기</h1>
      <div className="text-3xl font-black mb-4">{result}</div>
      <div>
        <input
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl"
          type="text"
          onChange={onChangeNum1}
        />
        <input
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button
          onClick={onClickAdd}
          className="border-2 px-2 py-1 rounded-lg bg-yellow-100"
        >
          더하기
        </button>
        <button
          onClick={onClickMinus}
          className="border-2 px-2 py-1 rounded-lg bg-yellow-100"
        >
          빼기
        </button>
        <button className="border-2 px-2 py-1 rounded-lg bg-yellow-100">
          곱하기
        </button>
        <button className="border-2 px-2 py-1 rounded-lg bg-yellow-100">
          나누기
        </button>
      </div>
    </div>
  );
};

export default App;
