import Paper from '@mui/material/Paper'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import {red} from '@mui/material/colors'
import './style.css'
import pic from './images/safety.png'
import { Avatar } from '@mui/material'

import {connect} from 'react-redux'
import { style } from '@mui/system'


function UserRegister(props) {
   
     
    const [useremail,setUserEmail]=useState('')
    const[EmailErr,setEmailErr]=useState('')
    const [password,setPassword]=useState('')
    const[passwordErr,setPasswordErr]=useState('')
    const[firstname,setFirstName]=useState('')
    const[firstnameErr,setFirstNameErr]=useState('')
    const[lastname,setLastName]=useState('')
    const[lastnameErr,setLastNameErr]=useState('')
    const[mobileNo,setMobileNo]=useState('')
    const[mobileNoErr,setMobileNoErr]=useState('')
    const[dob,setDob]=useState('')
    const[dobErr,setDobErr]=useState('')
    const[conpassword,setConPassword]=useState('')
    const[conpasswordErr,setConPasswordErr]=useState('')
    const [status,setStatus]=useState('')
    const [errmsg,setErrMsg]=useState('')
    const[err,setErr]=useState('')
    const navigate=useNavigate()
    const checkValidation = (e)=>{
        const conpassword=e.target.value;
        setConPassword(conpassword);
        if(password!=conpassword){
            setErrMsg("password is not matching")
        }
        else{
            setErrMsg(' ')
        }
    }
    
    return (
      
        <div style={{position:"relative",left:900,top:50}}>
        
        <div style={{postion:"absolute"}}>
        <>
    <div class="UserRegister">
  <h1> </h1>
  <Avatar alt="image" src={pic} style={{left:130,top:-10,height:60,width:60}}></Avatar>
  <form onSubmit={(e) => {
                e.preventDefault()
                

            }}>
  <div style={{textAlign:'center'}}>
      Enter EmailId<br/>
  <input type='text' placeholder='EmailId' style={{width:160,height:20}} onChange={(e)=>{
        let cemail=e.target.value
        var con=String(cemail).toLowerCase().match("^[a-zA-Z0-9][a-zA-Z0-9_.]+@[a-zA-Z0-9]+([.][a-z]+)+$")
        if(con || cemail.length<=0)
        {
            setUserEmail(e.target.value)
            setEmailErr('')
        }
        else{
            setEmailErr("invalid EmailId")
        }
       }} /><br/>

     <div><span style={{color:"darkred"}}>{EmailErr}</span></div><br/>
     Enter FirstName<br/>
     <input type='text' placeholder='firstName' style={{width:160,height:20}}onChange={(e)=>{
         if(e.target.value!=null){
            setFirstName(e.target.value) 
            setFirstNameErr('')

         }
         else{
             setFirstNameErr('name should not null')
         }
        
     }}/>
     <div><span style={{color:"darkred"}}></span>{firstnameErr}</div><br/>
     Enter LastName<br/>
     <input type='text' placeholder='lastName' style={{width:160,height:20}} onChange={(e)=>{
        if(e.target.value!=null){
            setLastName(e.target.value) 
            setLastNameErr('')

         }
         else{
             setLastNameErr('name should not null')
         }
        
     }}/>
     <div><span style={{color:"darkred"}}></span>{lastnameErr}</div><br/>
     Enter Mobileno<br/>
     <input type='text' placeholder='mobileNo' style={{width:160,height:20}} onChange={(e)=>{
        if((e.target.value.length==10) || (e.target.value.length==11))
        {
            setMobileNo(e.target.value)
            setMobileNoErr('')
        }
        else{
            setMobileNoErr("mobileNo not valid")
        } }}/>
       <div><span style={{color:"darkred"}}></span>{mobileNoErr}</div><br/>
       Enter DOB<br/>
       <input type='date' placeholder='DOB' style={{width:160,height:20}} onChange={(e)=>{
        if(e.target.value!=null){
            let dovar=e.target.value.split("-")
            let newdvar=dovar[2]+"-"+dovar[1]+"-"+dovar[0]
            setDob(newdvar) 
            setDobErr('')

         }
         else{
             setDobErr('DOB should not null')
         }
        
     }}/>
     
     <div><span style={{color:"darkred"}}></span>{dobErr}</div><br/>
     Enter password<br/>
     <input type='password'  placeholder='password' style={{width:160,height:20}} onChange={(e)=>{
         if(e.target.value.length>=8 && e.target.value.length<15)
         {
             setPassword(e.target.value)
             setPasswordErr('')
         }
         else{
             setPasswordErr("password should contain 8 characters")
         }
         }}/>
         <div><span style={{color:"darkred"}}>{passwordErr}</span></div><br/>
         Enter confirmpassword<br/>
         <input type='password'  value={conpassword} placeholder='confirmpassword' style={{width:160,height:20}} onChange={(e)=>
         checkValidation(e)
         }/>
         <div><span style={{color:"darkred"}}>{errmsg}</span></div><br/> 
         <button class="button"
            onClick={()=>{
                var user = {
                    "useremail":useremail,
                    "password": password,
                    "conpassword": conpassword,
                    "dob":dob,
                    "firstname": firstname,
                    "lastname": lastname,
                    "mobileNo":mobileNo
                }
                
                axios.post('http://localhost:8081/addProfile',user)
                .then((res)=>{
                    var data = res.data
                    console.log(data)
                   setStatus("User Registered!! login now")
                })
                 
            }}>
            REGISTER</button><br/><br/>
            <span style={{color:"darkblue"}}></span><br/>
             <b><Link to='/' >{status}</Link></b>
         
        
    
    </div>
 </form>
    </div>
    
    </>
    </div>
     </div>
    )
   
}
export default UserRegister