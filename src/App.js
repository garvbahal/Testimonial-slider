import "./App.css";
import reviews from "./data";
import Header from "./components/Header";
import Descriptions from "./components/Descriptions";

function App() {
  return (
    <div>
      <Header />

      <Descriptions reviews={reviews} />
    </div>
  );
}

export default App;
