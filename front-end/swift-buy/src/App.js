import Corousel from "./molecules/corousel";
import HeadingBar from "./molecules/headingBar";
import NavBar from "./molecules/navBar";

function App() {
  return (
    <div className="App">
      <HeadingBar />
      <NavBar />
      <Corousel />
    </div>
  );
}

export default App;
