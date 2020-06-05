import React from "react";
import ReactDOM from "react-dom";
import ImageSlide from "./ImageSlides";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  nextSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  render() {
    let { imgUrls } = this.props;
    return (
      <div>
        {imgUrls.length > 0 ? (
          <div className="carousel">
            <Arrow
              direction="left"
              clickFunction={this.previousSlide}
              glyph="&#9664;"
            />
            <ImageSlide
              url={this.props.imgUrls[this.state.currentImageIndex]}
            />
            <Arrow
              direction="right"
              clickFunction={this.nextSlide}
              glyph="&#9654;"
            />
          </div>
        ) : (
          <div className="welcome-text">
            {" "}
            Please choose and upload the multiple images one by one to see them
            in carousel
          </div>
        )}
      </div>
    );
  }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

export default Carousel;
