import Body from "./molecules/body";
import Corousel from "./molecules/corousel";
import Footer from "./molecules/footer";
import HeadingBar from "./molecules/headingBar";
import NavBar from "./molecules/navBar";

function App() {
  return (
    <div className="App">
      <HeadingBar />
      <NavBar /> {/* accidentally, pushed the NavBar code in Swif-3 branch */}
      <Corousel />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
