import "./App.css";
import { Food } from "./Practice/Food";
import Greeting from "./Practice/Greeting";
import { MyFavSeries } from "./Practice/render/rendering";
import { TernaryMyFavSeries } from "./Practice/render/Ternary + &&/render";

function App() {
  return (
    <>
      <div className="min-h-screen bg-blue-900 flex flex-col items-center">
        <TernaryMyFavSeries />
      </div>
    </>
  );
}

export default App;
