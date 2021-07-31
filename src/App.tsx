import "./App.scss";
import imageData from "./json/image-content.json";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="App">
      <ImageSlider sliderData={imageData} />
    </div>
  );
}

export default App;
