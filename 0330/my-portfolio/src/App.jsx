import apple from "./images/apple.svg";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <img className="h-[70px]" src={apple} alt="applepaylogo"></img>
          <div>kim's portfolio</div>
          <div>
            <img className="h-[70px]" src={apple} alt="applepaylogo"></img>
          </div>
          <ul className="flex gap-2 text-xs sm:text-sm md:gap-8 text-xs md:text-base">
            <li className="bg-green-300 btn-style">Introduce</li>
            <li className="bg-yellow-300 btn-style">Intro</li>
            <li className="bg-blue-300 btn-style">Introdu</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
