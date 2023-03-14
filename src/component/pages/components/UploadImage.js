import React from "react";
import ImageUploader from "./ImageUploader";

function UploadImage(props) {
  return (
    <div className="upload-image-card">
      <div className="image-card-title">
        UploadImage
        <button onClick={props.toggleOpenCam} className="close-image-card ">
          x
        </button>
      </div>
      <ImageUploader />
    </div>
  );
}

export default UploadImage;
