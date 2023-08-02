import './App.scss'
import { uploadFile } from './services/api';
import {useRef,useState,useEffect} from "react";
import {Stack,Button} from "@mui/material";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
function App() {
  const [file,setFile] = useState('');
  const fileInputRef=useRef();
  const logo ='./src/assets/img.png';
  useEffect(()=>{
    const getImage = async () =>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let res = await uploadFile(data);

      }
    }
    getImage();
  },[file])
  const onUploadClick = ()=>{
    fileInputRef.current.click();
  }

console.log(file);

  return (
    <div className='container'>
      {/* <img src={logo} alt='hello'/> */}
      <div className='devesh'>
        <h1>FILE SHARING SYSTEM</h1>
        <h4>UPLOAD & SHARE THE LINK</h4>
        <h3><Button onClick={()=> onUploadClick()} variant="outlined" color='error' size='large' endIcon={<FileUploadOutlinedIcon/>}>UPLOAD</Button></h3>

        <input type='file' style={{display:'none'}}
        ref={fileInputRef}
        onChange={(e)=>setFile(e.target.files[0])}
        />


      </div>
    </div>
  )
}

export default App
