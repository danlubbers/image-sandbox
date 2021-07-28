import "./App.css";
import content from "./json/image-content.json";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="App">
      <ImageSlider sliderData={content} />
    </div>
  );
}

export default App;
