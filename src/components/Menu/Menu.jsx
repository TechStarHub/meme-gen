import React, { useState,useRef } from 'react';
import { saveAs } from 'file-saver';
import {useDropzone} from 'react-dropzone'
import { AiOutlineFontSize } from "react-icons/ai";
import { ImFontSize } from "react-icons/im";
import { FaDownload } from "react-icons/fa";
import { toPng } from 'html-to-image';
import html2canvas from 'html2canvas';
import {download} from 'downloadjs'




export default function Menu() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [UpperText, setUpperText] = useState('')
  const[LowerText,setLowerText]=useState('')
  const [fontSize, setFontSize] = useState(16);

  const onDrop=(files)=>{
    const file = files[0];
    
      const reader = new FileReader();
      reader.onload = function(e)  {
        setBackgroundImage(e.target.result);
      };
      reader.readAsDataURL(file);
      
  }
  
 
  const {getRootProps, getInputProps,isDragActive} = useDropzone({onDrop,multiple:false,accept:'imgae/*'})

  const increaseFontSize = () => {
    setFontSize(fontSize + 2); // Increase font size by 2 units
  };
  const decreaseFontSize = () => {
    setFontSize(fontSize - 2); // Increase font size by 2 units
  };

 

  const downloadImage = () => {
    const node = document.getElementById('image-download');

    html2canvas(node)
      .then((canvas) => {
        const dataURL = canvas.toDataURL();
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = 'custom-image.png';
        a.click();
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div className="container  lg:flex w-full h-[800px]   justify-center items-center   overflow-hidden ">
    <div {...getRootProps()} className=' w-full lg:w-6/12  md:h-3/4  h-1/2 border border-blue-500 flex justify-center items-center' id='image-download'>
      <input {...getInputProps()} />
      {backgroundImage ? (
        <div className='w-full h-full '>
          <div className='relative'
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition:'center',
              Width: '100%',
              height: '100%', // Adjust the height as needed
            }}
          >
            <h1 className='absolute top-0 px-20 '
            style={{ fontSize: `${fontSize}px`}}
            >
           {UpperText}
          </h1>
          <h1 className='absolute bottom-0 px-20'
          style={{ fontSize: `${fontSize}px` }}>
            {LowerText}
          </h1>
          </div>
          
         
        </div>
      )
      :
      <p >Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
   <div className='w-full lg:w-6/12 md:h-auto flex flex-col md:flex-row lg:flex-col justify-center pt-[50px]  items-center gap-4'>
   <div className='flex flex-col w-full justify-center items-center '>
   <label htmlFor=""  className='w-full lg:w-6/12 xl:w-9/12'>
      <p className='text-2xl font-bold '>UpperText</p>
        <input type="text" className=' w-full border-2 border-yellow-400 ' onChange={(e)=>setUpperText(e.target.value)} name='' id=''/>
   </label>
   <label htmlFor="" className=' w-full lg:w-6/12 xl:w-9/12'>
      <p className='text-2xl font-bold '>LowerText</p>
      <input type="text"  className=' w-full border-2 border-yellow-400 ' onChange={(e)=>setLowerText(e.target.value)} name='' id=''/>
   </label>
   </div>
  <div className='flex w-full justify-evenly items-center'>
      <ImFontSize  className='border border-blue-500 text-4xl text-white bg-blue-400' onClick={increaseFontSize}/>
      <AiOutlineFontSize  className='border border-blue-500 text-4xl text-white bg-blue-400' onClick={decreaseFontSize}/>
  </div>
  <label htmlFor="" className=' w-full sm:w-6/12'>
  <FaDownload className='border border-blue-500 text-4xl text-white bg-blue-400 w-full rounded-xl' onClick={downloadImage}/>
  </label>
  
   </div>
    </div>

  )
}
