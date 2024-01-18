import React, { useState,useRef } from 'react';
import { saveAs } from 'file-saver';
import {useDropzone} from 'react-dropzone'




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
 

  return (
    <div className="container  lg:flex w-full h-[700px] justify-center items-center border-2 bg-slate-200">
    <div {...getRootProps()} className=' w-full sm:h-3/4  h-1/2 border border-red-500 flex justify-center items-center'>
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
            <h1 className='absolute top-0 px-20'
            style={{ fontSize: `${fontSize}px` }}
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
   <div className=' w-full h-auto  sm:pa sm:justify-center items-start flex flex-col sm:flex-row  px-2 gap-3'>
   <label htmlFor="">
      <p>UpperText</p>
        <input type="text" className='w-full' onChange={(e)=>setUpperText(e.target.value)} name='' id=''/>
   </label>
   <label htmlFor="">
      <p>LowerText</p>
      <input type="text" className='w-full' onChange={(e)=>setLowerText(e.target.value)} name='' id=''/>
   </label>
   <button onClick={increaseFontSize}>Increase Font Size</button>
   <button onClick={decreaseFontSize}>Increase Font Size</button>
   
   </div>
    </div>

  )
}
