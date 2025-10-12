import "./App.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page4 from "./components/Page4";
import Page3 from "./components/Page3";

function App() {
  return (
    <div id="main-container">
      <section className="page" id="page1" aria-label="Page 1">
        <Page1 />
      </section>
      <section className="page" id="page2" aria-label="Page 2">
        <Page2 />
      </section>

      <Page3 />

      <section className="page" id="page4" aria-label="Page 4">
        <Page4 />
      </section>
    </div>
  );
}

export default App;
