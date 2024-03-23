import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/NavBar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
