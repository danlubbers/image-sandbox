import "./App.css";
import imageData from "./json/image-content";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="App">
      <ImageSlider sliderData={imageData} />
    </div>
  );
}

export default App;
