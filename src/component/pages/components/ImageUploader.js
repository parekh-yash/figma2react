import React from "react";
import { useState } from "react";

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="image-uploader"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {image ? (
        <img className="image-preview" src={image} alt="Preview" />
      ) : (
        <h3>Drag and drop an image here or </h3>
      )}
      <input
        type="file"
        name="upload a file"
        accept="image/*"
        className="input-file"
        onChange={handleFileInputChange}
      />
    </div>
  );
}

export default ImageUploader;
