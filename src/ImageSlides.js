import React ,{useState}from "react";
const ImageSlide = ({ url }) => {
    const [isModalDisplay, setModayDisplay] = useState(false);

  function onImageClick(url) {
    setModayDisplay(true);
  }
  function onClose(){
    setModayDisplay(false);
  }
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "94%",
  };

  return (
    <React.Fragment>
      <div className="image-slide" onClick={onImageClick} style={styles}></div>
      <div id="myModal" style={{display:isModalDisplay?'block':'none'}} className="modal">
        <div className="modal-content">
            <img  src={url}/>
          <span className="close" onClick={onClose}> Close</span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ImageSlide;
