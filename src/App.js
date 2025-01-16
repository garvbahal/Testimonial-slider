import "./App.css";
import reviews from "./data";
import Header from "./components/Header";
import Descriptions from "./components/Descriptions";

function App() {
  return (
    <div className="bg-[#e5e7eb] flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <Header />

      <Descriptions reviews={reviews} />
    </div>
  );
}

export default App;
