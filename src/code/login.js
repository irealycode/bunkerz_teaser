import React from "react";

function Login() {
    let height = window.innerHeight
    let width = window.innerWidth

    const [showPwd,setShowPwd] = React.useState(false)

  return (
    <div style={{width:'100%',height:height,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative'}} >
        <img onClick={()=>window.location="/"} src="/static/bunker.png" style={{height:60,width:110,position:'absolute',top:0,cursor:'pointer'}} />
        
        <div style={{position:'relative',height:'60%',width:height*0.6,border:'3px solid #545049',overflow:'hidden',zIndex:2,borderRadius:16,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
            <p style={{color:'#545049',fontFamily:'ml',fontSize:37,zIndex:1,marginBottom:20}} >Login</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'80%',height:45,borderRadius:10,border:'3px solid #545049',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                <input placeholder="Email..." style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                <img src="/static/email.png" style={{height:24,width:24,opacity:0.7}} />
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'80%',marginTop:20,height:45,borderRadius:10,border:'3px solid #545049',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                <input placeholder="Password..." type={showPwd?"normal":"password"} style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',backgroundColor:'rgba(0,0,0,0)',width:'100%',border:0,outline:'none'}} />
                <img onClick={()=>setShowPwd(!showPwd)} src={showPwd?"/static/eyeclose.png":"/static/eyeopen.png"} style={{height:24,width:24,opacity:0.7,cursor:'pointer'}} />
            </div>
            <div className="login_submit" style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:20,height:45,borderRadius:5,zIndex:1,padding:'0px 20px',cursor:'pointer'}} >
                <p style={{fontFamily:'mb',fontSize:22,zIndex:1}} >Next</p>
            </div>
            <a href="/register" style={{color:'#545049',fontFamily:'mc',fontSize:16,zIndex:1,marginTop:20,cursor:'pointer'}} >New with us?</a>
            {/* <input placeholder="Password..." style={{width:'80%',height:45,fontFamily:'mc',fontSize:19,marginTop:20,borderRadius:10,border:'3px solid #545049',color:'rgba(0,0,0,0.8)',zIndex:1,padding:'0px 20px',backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)'}} /> */}

            <svg style={{position:'fixed',bottom:0,right:0,zIndex:0}} viewBox="0 0 110 50" fill={"rgb(255, 185, 79)"} xmlns="http://www.w3.org/2000/svg" class="lg-ui-brand-shape-0000 leafygreen-ui-jfl65i">
                <g transform="scale(-1, 1) translate(-100, 0)">
                    <path d="M12.5366 8C5.61282 8 0 13.6073 0 20.5244C0 27.4145 5.59098 33.0487 12.4878 33.0487C19.3846 33.0487 24.9756 38.6343 24.9756 45.5244C24.9756 52.4145 30.5666 58 37.4634 58H87.4634C94.3872 58 100 52.3927 100 45.4756V20.5244C100 13.6073 94.3872 8 87.4634 8H62.439C55.5422 8 49.9512 13.6099 49.9512 20.5C49.9512 27.3632 44.3821 32.9513 37.5122 32.9513C30.6423 32.9513 25.0732 27.3632 25.0732 20.5C25.0732 13.6099 19.4334 8 12.5366 8Z"></path>
                </g>
            </svg>
        </div>
        
    </div>
  );
}

export default Login;
