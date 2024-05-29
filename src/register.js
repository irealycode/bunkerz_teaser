import React from "react";

function Register() {
    let height = window.innerHeight
    let width = window.innerWidth

    const [showPwd,setShowPwd] = React.useState(false)

  return (
    <div style={{width:'100%',height:height,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative'}} >
        <img onClick={()=>window.location="/"} src="/static/bunker.png" style={{height:60,width:110,position:'absolute',top:0,cursor:'pointer'}} />
        
        <div style={{position:'relative',height:'60%',minWidth:450,width:height*0.6,border:'3px solid #545049',overflow:'hidden',zIndex:2,borderRadius:16,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
            <p style={{color:'#545049',fontFamily:'ml',fontSize:37,zIndex:1,marginBottom:20}} >Welcome,</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'80%',zIndex:1,position:'relative',height:45,padding:'0px 20px',marginBottom:20}} >
                <input placeholder="First name" style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',height:45,backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)',borderRadius:10,border:'3px solid #545049',width:'49%',outline:'none',boxSizing:'border-box',padding:'0px 20px',position:'absolute',left:0}} />
                <input placeholder="Last name" style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',height:45,backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)',borderRadius:10,border:'3px solid #545049',width:'49%',outline:'none',boxSizing:'border-box',padding:'0px 20px',position:'absolute',right:0}} />

            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'80%',height:45,borderRadius:10,border:'3px solid #545049',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                <input placeholder="Email..." style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                <img src="/static/email.png" style={{height:24,width:24,opacity:0.7}} />
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'80%',marginTop:20,height:45,borderRadius:10,border:'3px solid #545049',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                <input placeholder="Password..." type={showPwd?"normal":"password"} style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                <img onClick={()=>setShowPwd(!showPwd)} src={showPwd?"/static/eyeclose.png":"/static/eyeopen.png"} style={{height:24,width:24,opacity:0.7,cursor:'pointer'}} />
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'80%',marginTop:20,height:45,borderRadius:10,border:'3px solid #545049',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                <input placeholder="Confirm Password..." type={showPwd?"normal":"password"} style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                <img onClick={()=>setShowPwd(!showPwd)} src={showPwd?"/static/eyeclose.png":"/static/eyeopen.png"} style={{height:24,width:24,opacity:0.7,cursor:'pointer'}} />
            </div>
            <div className="login_submit" style={{display:'flex',alignItems:'center',backgroundColor:'#545049',justifyContent:'center',marginTop:20,height:45,borderRadius:5,zIndex:1,padding:'0px 20px',cursor:'pointer'}} >
                <p style={{fontFamily:'mb',color:'white',fontSize:22,zIndex:1}} >Next</p>
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
}

export default Register;
