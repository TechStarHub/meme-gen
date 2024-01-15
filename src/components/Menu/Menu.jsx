import React, { useState,useRef } from 'react';
import { saveAs } from 'file-saver';
import {useDropzone} from 'react-dropzone'




export default function Menu() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const onDrop=(files)=>{
    const file = files[0];
    
      const reader = new FileReader();
      reader.onload = function(e)  {
        setBackgroundImage(e.target.result);
      };
      reader.readAsDataURL(file);
      
  }
  
 
  const {getRootProps, getInputProps,isDragActive} = useDropzone({onDrop,multiple:false,accept:'imgae/*'})
 

  return (
    <div className="container flex w-full h-[500px] justify-center items-center border-2 border-black">
    <div {...getRootProps()} className='border border-red-500 w-full h-full'>
      <input {...getInputProps()} />
      {backgroundImage ? (
        <div className=' w-full h-full'>
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition:'center',
              width: '50%',
              height: 'inherit', // Adjust the height as needed
            }}
          ></div>
         
        </div>
      )
      :
      <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
    </div>
  )
}
