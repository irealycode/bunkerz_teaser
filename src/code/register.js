import React from "react";
import {addr,port} from './imports/imp'

function Register() {
    let height = window.innerHeight
    let width = window.innerWidth

    const [showPwd,setShowPwd] = React.useState(false)
    const [email,setEmail] = React.useState('')
    const [pwd,setPwd] = React.useState('')
    const [cpwd,setCPwd] = React.useState('')
    const [firstname,setFirstName] = React.useState('')
    const [lastname,setLastName] = React.useState('')
    const [msg,setMsg] = React.useState('')
    const [code,setCode] = React.useState('')
    const [ctry,setCountry] = React.useState('NaN')
    const [emptyPwd,setEmptyPwd] = React.useState(false)
    const [showVerify,setVerify] = React.useState(false)
    const [loading,setLoading] = React.useState(false)


    const userLanguage = navigator.language || navigator.userLanguage
    const lol ="a06d972164d1f4"
    // console.log(userLanguage)

    React.useEffect(()=>{
        const getCountry = () =>{
            const geoApiUrl = `https://ipinfo.io?token=${lol}`;

            fetch(geoApiUrl)
                .then(response => response.json())
                .then(data => {
                    const country = data.country;
                    setCountry(country)
                })
                .catch(error => {
                    console.error('Error fetching the geolocation data:', error);
                    console.log('Could not determine the country')
                });
        }
        getCountry()
    },[])


    function isValidEmail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function isEmptyOrHasSpace() {
        return pwd === "" || /\s/.test(pwd);
    }

    const register = async() =>{
        if (!isEmptyOrHasSpace() && pwd.length>6) {
            setEmptyPwd(false)
            if (isValidEmail()) {
                setMsg('')
                if (pwd === cpwd) {
                    setMsg("")
                    setLoading(true)
                    const data = {
                        "email": email,
                        "first_name": firstname,
                        "language": userLanguage,
                        "last_name": lastname,
                        "location": ctry,
                        "password": pwd
                    }
                    try {
                        const response = await fetch(`http://localhost:8080/user/signup`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        });
                        if (response.ok) {
                            const res = await response.json()
                            if (res.message == "verification code sent") {
                                setVerify(true)
                                setLoading(false)
                            }
                        }else if(response.status === 302){
                            setMsg('Email already used!')
                            setLoading(false)
                        }else{
                            setMsg('Try another time please.')
                            setLoading(false)
                        }
                    } catch{
                        console.log('error')
                    }
            }else{
                setMsg("Passwords don't match!")
            }
            }else{
                setMsg('Not a valid email!')
            }
        }else{
            setEmptyPwd(true)
        }
        
        
    }

    const verify = async() =>{
        if (!isEmptyOrHasSpace() && pwd.length>6) {
            setEmptyPwd(false)
            if (isValidEmail()) {
                setMsg('')
                if (pwd === cpwd) {
                    setMsg("")
                    setLoading(true)
                    const data = {
                        "email": email,
                        "code": code
                    }
                    try {
                        const response = await fetch(`http://localhost:8080/user/verify`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        });
                        if (response.ok) {
                            const res = await response.json()
                            window.sessionStorage.setItem('token',res.token)
                            window.location.assign("/")
                            setLoading(false)
                        }else if(response.status === 403){
                            setMsg('Invalid verification code!')
                            setLoading(false)
                        }else if(response.status === 404){
                            setMsg('Expired verification code.')
                            setLoading(false)
                        }else{
                            setMsg('Try another time please.')
                            setLoading(false)

                        }
                    } catch{
                        console.log('error')
                    }
            }else{
                setMsg("Passwords don't match!")
            }
            }else{
                setMsg('Not a valid email!')
            }
        }else{
            setEmptyPwd(true)
        }
        
        
    }

    function isNumericString(str) {
        return /^\d*$/.test(str);
    }


    if (!showVerify) {
        
        return (
            <div style={{width:'100%',height:height,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative'}} >
                <img onClick={()=>window.location="/"} src="/static/bunker.png" style={{height:60,width:110,zIndex:5,position:'absolute',left:30,top:0,cursor:'pointer'}} />
                
                <div style={{position:'relative',maxWidth:570,width:'95%',border:'3px solid #545049',overflow:'hidden',padding:'15px 0px',zIndex:2,borderRadius:16,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                    <p style={{color:'#545049',fontFamily:'ml',fontSize:37,zIndex:1,marginBottom:20}} >Welcome,</p>
                    <p  style={{color:'red',fontFamily:'mc',fontSize:16,zIndex:1,marginTop:20}} >{msg}</p>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'90%',zIndex:1,position:'relative',height:45,marginBottom:20}} >
                        <input value={firstname} onChange={(event)=>setFirstName(event.target.value.trim())} placeholder="First name" style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',height:45,backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)',borderRadius:10,border:'3px solid #545049',width:'49%',outline:'none',boxSizing:'border-box',padding:'0px 20px',position:'absolute',left:0}} />
                        <input value={lastname} onChange={(event)=>setLastName(event.target.value.trim())} placeholder="Last name" style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',height:45,backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)',borderRadius:10,border:'3px solid #545049',width:'49%',outline:'none',boxSizing:'border-box',padding:'0px 20px',position:'absolute',right:0}} />

                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box',width:'90%',height:45,borderRadius:10,border:'3px solid #545049',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                        <input value={email} onChange={(event)=>setEmail(event.target.value.trim())} type="email" placeholder="Email..." style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',height:45,backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                        <img src="/static/email.png" style={{height:24,width:24,opacity:0.7}} />
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box',width:'90%',marginTop:20,height:45,borderRadius:10,border:'3px solid #545049',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                        <input value={pwd} onChange={(event)=>setPwd(event.target.value.trim())} placeholder="Password..." type={showPwd?"normal":"password"} style={{fontFamily:'mc',height:45,fontSize:19,color:'rgba(0,0,0,0.8)',backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                        <img onClick={()=>setShowPwd(!showPwd)} src={showPwd?"/static/eyeclose.png":"/static/eyeopen.png"} style={{height:24,width:24,opacity:0.7,cursor:'pointer'}} />
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box',width:'90%',marginTop:20,height:45,borderRadius:10,border:'3px solid #545049',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                        <input value={cpwd} onChange={(event)=>setCPwd(event.target.value.trim())} placeholder="Confirm Password..." type={showPwd?"normal":"password"} style={{fontFamily:'mc',height:45,fontSize:19,color:'rgba(0,0,0,0.8)',backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                        <img onClick={()=>setShowPwd(!showPwd)} src={showPwd?"/static/eyeclose.png":"/static/eyeopen.png"} style={{height:24,width:24,opacity:0.7,cursor:'pointer'}} />
                    </div>
                    <div onClick={()=>register()} className="login_submit" style={{display:'flex',alignItems:'center',backgroundColor:'#545049',justifyContent:'center',marginTop:20,height:45,borderRadius:5,zIndex:1,padding:'0px 20px',cursor:'pointer'}} >
                        {!loading?<p style={{fontFamily:'mb',color:'white',fontSize:22,zIndex:1}} >Next</p>:
                        <div class="loader"></div>}
                    </div>
                    <a href="/login" style={{color:'#545049',fontFamily:'mc',fontSize:16,zIndex:1,marginTop:20,cursor:'pointer'}} >Already got an account?</a>
                    {/* <input placeholder="Password..." style={{width:'80%',height:45,fontFamily:'mc',fontSize:19,marginTop:20,borderRadius:10,border:'3px solid #545049',color:'rgba(0,0,0,0.8)',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} /> */}

                    <svg style={{position:'fixed',bottom:0,right:0,zIndex:0}} viewBox="0 0 110 50" fill={"rgb(255, 185, 79)"} xmlns="http://www.w3.org/2000/svg" class="lg-ui-brand-shape-0000 leafygreen-ui-jfl65i">
                        <g transform="scale(-1, 1) translate(-100, 0)">
                            <path d="M22.5325 8C15.611 8 10 13.6073 10 20.5244V45.4756C10 52.3927 15.611 58 22.5325 58H72.4675C79.389 58 85 52.3927 85 45.4756C85 38.5586 79.389 32.9513 72.4675 32.9513H47.5488C40.6542 32.9513 35.065 27.3657 35.065 20.4756C35.065 13.5855 29.4271 8 22.5325 8Z"></path>
                        </g>
                    </svg>
                </div>
                
            </div>
        );
    }else{
        return (
            <div style={{width:'100%',height:height,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative'}} >
                <img onClick={()=>window.location="/"} src="/static/bunker.png" style={{height:60,width:110,zIndex:5,position:'absolute',top:0,cursor:'pointer'}} />
                
                <div style={{position:'relative',minWidth:450,width:height*0.6,border:'3px solid #545049',overflow:'hidden',padding:'15px 0px',zIndex:2,borderRadius:16,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                    <p style={{color:'#545049',fontFamily:'ml',fontSize:37,zIndex:1,marginBottom:20}} >Verify sent code,</p>
                    <p  style={{color:'red',fontFamily:'mc',fontSize:16,zIndex:1,marginTop:20}} >{msg}</p>
                    
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box',width:'60%',marginTop:20,height:45,borderRadius:10,border:'3px solid #545049',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                        <input value={code} onChange={(event)=> {if(isNumericString(event.target.value))setCode(event.target.value)}} placeholder="Type code..." style={{fontFamily:'mc',height:45,fontSize:19,color:'rgba(0,0,0,0.8)',backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                    </div>
                    <div onClick={()=>verify()} className="login_submit" style={{display:'flex',alignItems:'center',backgroundColor:'#545049',justifyContent:'center',marginTop:20,height:45,borderRadius:5,zIndex:1,padding:'0px 20px',cursor:'pointer'}} >
                    {!loading?<p style={{fontFamily:'mb',color:'white',fontSize:22,zIndex:1}} >Verify</p>:
                        <div class="loader"></div>}
                    </div>

                    <svg style={{position:'fixed',bottom:0,right:0,zIndex:0}} viewBox="0 0 110 50" fill={"rgb(255, 185, 79)"} xmlns="http://www.w3.org/2000/svg" class="lg-ui-brand-shape-0000 leafygreen-ui-jfl65i">
                        <g transform="scale(-1, 1) translate(-100, 0)">
                            <path d="M22.5325 8C15.611 8 10 13.6073 10 20.5244V45.4756C10 52.3927 15.611 58 22.5325 58H72.4675C79.389 58 85 52.3927 85 45.4756C85 38.5586 79.389 32.9513 72.4675 32.9513H47.5488C40.6542 32.9513 35.065 27.3657 35.065 20.4756C35.065 13.5855 29.4271 8 22.5325 8Z"></path>
                        </g>
                    </svg>
                </div>
                
            </div>
        );
    }
}

export default Register;
