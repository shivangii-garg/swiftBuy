import Body from "./molecules/body";
import Corousel from "./molecules/corousel";
import HeadingBar from "./molecules/headingBar";
import NavBar from "./molecules/navBar";

function App() {
  return (
    <div className="App">
      <HeadingBar />
      <NavBar />
      <Corousel />
      <Body />
    </div>
  );
}

export default App;
