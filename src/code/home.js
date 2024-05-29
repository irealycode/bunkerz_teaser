import React from "react";
import News from "./pages/news";

function Home() {
    let height = window.innerHeight
    let width = window.innerWidth
    const [page,setPage] = React.useState(0)
    const [openAccWindow,setOpenAccWindow] = React.useState(false)

  return (
    <div style={{width:'100%',height:'100%'}} >

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
                <img src="/static/bunker.png" style={{height:55,width:100}} />
                {/* <p style={{fontFamily:'mc',fontSize:15,color:'#545049',marginLeft:5,marginTop:5}} >About Us</p> */}
                {/* <p style={{fontFamily:'ns',fontSize:20,color:'black',marginLeft:5,alignSelf:'start'}} >bunkerz</p> */}
            </div>
        </div>
        <div style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',height:40,backgroundColor:'white',position:'relative',boxShadow:'0px 5px 5px rgba(0,0,0,0.1)',overflow:'hidden'}} >
                <div className="router" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',height:40,width:100,cursor:'pointer',left:300,position:'absolute'}} >
                    <ul >
                        <li style={{position:'relative'}}>{page==0?<p style={{color:"#ff9900",fontWeight:700,zIndex:1,width:35}} >News</p>:<a style={{zIndex:1,width:35}} onClick={()=>setPage(0)} >News</a>}
                            <svg style={{position:'absolute',top:0,left:0,zIndex:0}} viewBox="0 0 110 110" fill={page==0?"#ffefd4":"#F6F3EF"} xmlns="http://www.w3.org/2000/svg" class="lg-ui-brand-shape-0000 leafygreen-ui-jfl65i">
                                <path d="M12.5366 8C5.61282 8 0 13.6073 0 20.5244C0 27.4145 5.59098 33.0487 12.4878 33.0487C19.3846 33.0487 24.9756 38.6343 24.9756 45.5244C24.9756 52.4145 30.5666 58 37.4634 58H87.4634C94.3872 58 100 52.3927 100 45.4756V20.5244C100 13.6073 94.3872 8 87.4634 8H62.439C55.5422 8 49.9512 13.6099 49.9512 20.5C49.9512 27.3632 44.3821 32.9513 37.5122 32.9513C30.6423 32.9513 25.0732 27.3632 25.0732 20.5C25.0732 13.6099 19.4334 8 12.5366 8Z"></path>
                            </svg>
                        </li>
                        <li>{page==1?<p style={{color:"#ff9900",fontWeight:700,zIndex:1,width:60}} >Teasers</p>:<a style={{zIndex:1,width:60}} onClick={()=>setPage(1)}>Teasers</a>}
                            <svg style={{position:'absolute',top:0,left:0,zIndex:0}} viewBox="-10 20 120 120" fill={page==1?"#ffefd4":"#F6F3EF"} xmlns="http://www.w3.org/2000/svg" class="lg-ui-brand-shape-0000 leafygreen-ui-jfl65i">
                                <path d="M10 80 C 30 10, 60 10, 90 80 S 70 90, 10 80 Z"></path>
                            </svg>
                        </li>
                        <li>{page==2?<p style={{color:"#ff9900",fontWeight:700,zIndex:1,width:80}} >Community</p>:<a style={{zIndex:1,width:80}} onClick={()=>setPage(2)}>Community</a>}
                            <svg style={{position:'absolute',top:0,left:0,zIndex:0,width:'120%'}} viewBox="0 5 130 130" fill={page==2?"#ffefd4":"#F6F3EF"} xmlns="http://www.w3.org/2000/svg" class="lg-ui-brand-shape-0000 leafygreen-ui-jfl65i">
                                <path d="M22.5325 8C15.611 8 10 13.6073 10 20.5244V45.4756C10 52.3927 15.611 58 22.5325 58H72.4675C79.389 58 85 52.3927 85 45.4756C85 38.5586 79.389 32.9513 72.4675 32.9513H47.5488C40.6542 32.9513 35.065 27.3657 35.065 20.4756C35.065 13.5855 29.4271 8 22.5325 8Z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
                {/* <img src="/static/addpost.png" style={{height:24,width:24,position:'absolute',right:27,opacity:0.7,cursor:'pointer'}} /> */}
                <div className="addpost" style={{position:'absolute',right:15}} >
                    <button onClick={()=>window.location.assign("/addpost")} >Add post</button>
                </div>
        </div>
        <div style={{width:200,height:height-100,backgroundColor:'#F6F3EF',position:'absolute',top:100,left:0,zIndex:-1}} >

        </div>
        <div style={{width:width-200,height:height-100,backgroundColor:'white',position:'absolute',top:100,left:200,zIndex:-1}} >
            {
                page==0?<News/>:null
            }
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
    </div>
  );
}

export default Home;
