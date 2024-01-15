import React, { useState,useRef } from 'react';
import { saveAs } from 'file-saver';
import {useDropzone} from 'react-dropzone'




export default function Menu() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const onDrop=()=>{
  

    
  }
  const handleFileChange = (files) => {
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBackgroundImage(event.target.result);
      };
      reader.readAsDataURL(file);
      console.log(file)
    }
  };
 
  const {getRootProps, getInputProps} = useDropzone({handleFileChange,multiple:false,accept:'imgae/*'})
 

  return (
    <div className="container flex w-[500px] h-[500px] justify-center items-center border-2 border-black">
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {backgroundImage && (
        <div>
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '300px', // Adjust the height as needed
            }}
          ></div>
          <button onClick={downloadImage}>Download Image</button>
        </div>
      )}
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
    </div>
  )
}
