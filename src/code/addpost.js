import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

function Addpost() {
    let height = window.innerHeight
    let width = window.innerWidth
    const [openAccWindow,setOpenAccWindow] = React.useState(false)
    const [text, setText] = React.useState(null);

    console.log(text)
  return (
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'start',overflow:'hidden',position:'relative'}} >
        <div style={{width:'100%',height:60,backgroundColor:'white',display:'flex',alignItems:'center',borderBottom:'1px solid #CAC2B6'}} >

            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',right:15,position:'absolute'}} >
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',paddingLeft:5,paddingRight:5,height:30,marginRight:7,cursor:'pointer'}} >
                    <p style={{fontFamily:'mc',fontSize:15,color:'#545049',marginLeft:5}} >Get Help</p>
                    <svg class="lg-ui-caret-0000 leafygreen-ui-1ebs75t" height="16" width="16" role="img" aria-label="Caret Down Icon" viewBox="0 0 16 16"><path d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z" fill="#a8a297"></path></svg>
                </div>
                <div onClick={()=>setOpenAccWindow(!openAccWindow)} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',border:'1px solid #CAC2B6',borderRadius:30,paddingLeft:7,paddingRight:7,height:32,cursor:'pointer'}} >
                    <img src="/static/profile.png" style={{height:24,width:24}} />
                    <svg class="lg-ui-caret-0000 leafygreen-ui-1ebs75t" height="16" width="16" role="img" aria-label="Caret Down Icon" viewBox="0 0 16 16"><path d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z" fill="#a8a297"></path></svg>
                </div>
            </div>


            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',left:10,position:'absolute',height:55,top:0,cursor:'pointer'}} >
                <img onClick={()=>window.location.assign("/")} src="/static/bunker.png" style={{height:55,width:100}} />
                {/* <p style={{fontFamily:'mc',fontSize:15,color:'#545049',marginLeft:5,marginTop:5}} >About Us</p> */}
                {/* <p style={{fontFamily:'ns',fontSize:20,color:'black',marginLeft:5,alignSelf:'start'}} >bunkerz</p> */}
            </div>
        </div>

        <div className="account_window" style={{position:'absolute',zIndex:4,top:openAccWindow?55:47,right:openAccWindow?20:15,borderRadius:10,height:openAccWindow?250:0,width:openAccWindow?190:0,opacity:openAccWindow?1:0,backgroundColor:'white',border:'1px solid #CAC2B6',overflow:'hidden'}} >
            <div style={{width:'100%',height:'20%',backgroundColor:'#F6F3EF',borderBottom:'1px solid #CAC2B6',alignSelf:'center'}} >
                
            </div>
            <div onClick={()=>window.location="/register"} className="register" style={{cursor:'pointer',position:'absolute',backgroundColor:'rgb(255, 185, 79)',bottom:42,borderRadius:'10px 10px 0px 0px',width:170,left:10,height:32,display:'flex',justifyContent:'center',alignItems:'center'}} >
                <p style={{fontWeight:700,color:'white'}} >Join us</p>
            </div>
            <div onClick={()=>window.location="/login"} style={{cursor:'pointer',position:'absolute',bottom:10,borderRadius:10,width:170,left:10,height:32,borderRadius:'0px 0px 10px 10px',boxSizing:'border-box',border:'1px solid rgb(255, 185, 79)',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <p style={{fontWeight:'bolder',color:'rgb(255, 185, 79)',font:"16px/1.4 'Open Sans', arial, sans-serif"}} >Login</p>
            </div>
        </div>
        

        <div style={{width:'20%',marginTop:90,borderRadius:20,display:'flex',alignSelf:'center',alignItems:'start',justifyContent:'center',flexDirection:'column',}} >
            <h2 style={{fontFamily:'mb',fontSize:30,margin:'0px 0px 0px 0px',color:'rgba(0,0,0,0.8)'}} >Title</h2>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',boxSizing:'border-box',height:45,borderRadius:0,border:'1px solid rgba(0,0,0,0.23)',zIndex:1,padding:'0px 20px',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                <input placeholder="Title.." style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                {/* <img src="/static/email.png" style={{height:24,width:24,opacity:0.7}} /> */}
            </div>
            <h2 style={{fontFamily:'mb',fontSize:30,margin:'20px 0px 0px 0px',color:'rgba(0,0,0,0.8)'}} >Subject</h2>

            <ReactQuill style={{width:'100%'}} value={text} placeholder="Khet oussama..." onChange={(value)=>{setText(value)}} />
            <div className="login_submit" style={{display:'flex',alignItems:'center',backgroundColor:'#f90',justifyContent:'center',marginTop:70,alignSelf:'center',height:45,borderRadius:5,zIndex:1,padding:'0px 20px',cursor:'pointer'}} >
                <p style={{fontFamily:'mb',color:'white',fontSize:22,zIndex:1}} >Next</p>
            </div>
        </div>

        
    </div>
  );
}

export default Addpost;
