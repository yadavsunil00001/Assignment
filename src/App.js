import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "./Carousel";
import ImageUpLoad from "./ImageUpload";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrls: [],
    };
  }
  onImageUpload = (url) => {
    let imgUrls = this.state.imgUrls;
    imgUrls.push(url);
    this.setState({
      imgUrls,
    });
  };

  render() {
    return (
      <div className="App">
        <Carousel imgUrls={this.state.imgUrls} />
        <ImageUpLoad onImageUpload={this.onImageUpload} />
      </div>
    );
  }
}
export default App;
