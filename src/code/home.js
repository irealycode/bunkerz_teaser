import React from "react";
import News from "./pages/news";
import Posts from "./pages/posts";
import Teasers from "./pages/teasers";
import * as jose from 'jose';
import {addr,port} from './imports/imp'


let height = window.innerHeight
let width = window.innerWidth
export function Head({token,setPost}) {

    const [openAccWindow,setOpenAccWindow] = React.useState(false)
    


    return(
        <div style={{width:'100%',height:65,backgroundColor:'white',display:'flex',alignItems:'center',borderBottom:'1px solid #CAC2B6',zIndex:10}} >

            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',right:15,position:'absolute'}} >
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',paddingLeft:5,paddingRight:5,height:30,marginRight:7,cursor:'pointer'}} >
                    <p style={{fontFamily:'mc',fontSize:15,color:'#545049',marginLeft:5}} >Get Help</p>
                    <svg className="lg-ui-caret-0000 leafygreen-ui-1ebs75t" height="16" width="16" role="img" aria-label="Caret Down Icon" viewBox="0 0 16 16"><path d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z" fill="#a8a297"></path></svg>
                </div>
                <div onClick={()=>setOpenAccWindow(!openAccWindow)} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',border:'1px solid #CAC2B6',borderRadius:30,paddingLeft:7,paddingRight:7,height:32,cursor:'pointer'}} >
                    <img src="/static/profile.png" style={{height:24,width:24}} />
                    <svg className="lg-ui-caret-0000 leafygreen-ui-1ebs75t" height="16" width="16" role="img" aria-label="Caret Down Icon" viewBox="0 0 16 16"><path d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z" fill="#a8a297"></path></svg>
                </div>
            </div>
            

            <div onClick={()=>window.location.assign("/")} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',left:10,position:'absolute',height:60,top:0,cursor:'pointer'}} >
                <img src="/static/bunkerz1.png" style={{height:60,width:160}} />
                {/* <p style={{fontFamily:'mc',fontSize:15,color:'#545049',marginLeft:5,marginTop:5}} >About Us</p> */}
                {/* <p style={{fontFamily:'ns',fontSize:20,color:'black',marginLeft:5,alignSelf:'start'}} >bunkerz</p> */}
            </div>


            {!token?<div className="account_window" style={{position:'absolute',zIndex:4,top:openAccWindow?55:47,right:openAccWindow?20:15,borderRadius:10,height:openAccWindow?250:0,width:openAccWindow?190:0,opacity:openAccWindow?1:0,backgroundColor:'white',border:'1px solid #CAC2B6',overflow:'hidden'}} >
            <div style={{cursor:'pointer',width:'100%',height:'20%',backgroundColor:'#F6F3EF',borderBottom:'1px solid #CAC2B6',alignSelf:'center',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <p style={{color:'rgba(0,0,0,0.5)',fontFamily:'mb',fontSize:16}} >Early access code?</p>
            </div>
            <div onClick={()=>window.location="/"} style={{cursor:'pointer',position:'absolute',top:'21%',borderRadius:10,width:170,left:10,height:28,borderRadius:'0px 0px 10px 10px',boxSizing:'border-box',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <img src="/static/PP.png" style={{height:15,width:15,opacity:0.5}} />
                <p style={{fontWeight:'bolder',color:'rgba(0,0,0,0.5)',padding:0,font:"14px/1.4 'Open Sans', arial, sans-serif"}} >Privacy Policy</p>
            </div>
            <div onClick={()=>window.location="/"} style={{cursor:'pointer',position:'absolute',top:'33%',borderRadius:10,width:170,left:10,height:28,borderRadius:'0px 0px 10px 10px',boxSizing:'border-box',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <img src="/static/TnC.png" style={{height:11,width:11,opacity:0.5}} />
                <p style={{fontWeight:'bolder',color:'rgba(0,0,0,0.5)',padding:0,font:"14px/1.4 'Open Sans', arial, sans-serif"}} >Terms & conditions</p>
            </div>
            <div onClick={()=>window.location="/"} style={{cursor:'pointer',position:'absolute',top:'45%',borderRadius:10,width:170,left:10,height:28,borderRadius:'0px 0px 10px 10px',boxSizing:'border-box',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <img src="/static/settings.png" style={{height:16,width:16,opacity:0.5}} />
                <p style={{fontWeight:'bolder',color:'rgba(0,0,0,0.5)',padding:0,font:"14px/1.4 'Open Sans', arial, sans-serif"}} >Settings</p>
            </div>


            <div onClick={()=>window.location="/register"} className="register" style={{cursor:'pointer',position:'absolute',backgroundColor:'rgb(255, 185, 79)',bottom:42,borderRadius:'10px 10px 0px 0px',width:170,left:10,height:32,display:'flex',justifyContent:'center',alignItems:'center'}} >
                <p style={{fontWeight:700,color:'white'}} >Join us</p>
            </div>
            <div onClick={()=>window.location="/login"} style={{cursor:'pointer',position:'absolute',bottom:10,borderRadius:10,width:170,left:10,height:32,borderRadius:'0px 0px 10px 10px',boxSizing:'border-box',border:'1px solid rgb(255, 185, 79)',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <p style={{fontWeight:'bolder',color:'rgb(255, 185, 79)',font:"16px/1.4 'Open Sans', arial, sans-serif"}} >Login</p>
            </div>
        </div>:
        // not loged in
        
        <div className="account_window" style={{position:'absolute',zIndex:11,top:openAccWindow?55:47,right:openAccWindow?20:15,borderRadius:10,height:openAccWindow?250:0,width:openAccWindow?190:0,opacity:openAccWindow?1:0,backgroundColor:'white',border:'1px solid #CAC2B6',overflow:'hidden'}} >
            <div style={{width:'100%',height:'20%',backgroundColor:'#F6F3EF',borderBottom:'1px solid #CAC2B6',alignSelf:'center',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <div onClick={()=>window.location="/profile"} style={{cursor:'pointer',height:28,alignSelf:'center',borderRadius:'0px 0px 10px 10px',boxSizing:'border-box',display:'flex',justifyContent:'center',alignItems:'center'}} >
                    <img src="/static/profile.png" style={{height:17,width:17,opacity:0.5}} />
                    <p style={{color:'rgba(0,0,0,0.5)',padding:0,fontFamily:'mb',fontSize:18}} >Profile</p>
                </div>
            </div>
            <div onClick={()=>window.location="/"} style={{cursor:'pointer',position:'absolute',top:'21%',borderRadius:10,width:170,left:10,height:28,borderRadius:'0px 0px 10px 10px',boxSizing:'border-box',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <img src="/static/PP.png" style={{height:15,width:15,opacity:0.5}} />
                <p style={{fontWeight:'bolder',color:'rgba(0,0,0,0.5)',padding:0,font:"14px/1.4 'Open Sans', arial, sans-serif"}} >Privacy Policy</p>
            </div>
            <div onClick={()=>window.location="/"} style={{cursor:'pointer',position:'absolute',top:'33%',borderRadius:10,width:170,left:10,height:28,borderRadius:'0px 0px 10px 10px',boxSizing:'border-box',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <img src="/static/TnC.png" style={{height:11,width:11,opacity:0.5}} />
                <p style={{fontWeight:'bolder',color:'rgba(0,0,0,0.5)',padding:0,font:"14px/1.4 'Open Sans', arial, sans-serif"}} >Terms & conditions</p>
            </div>
            <div onClick={()=>window.location="/"} style={{cursor:'pointer',position:'absolute',top:'45%',borderRadius:10,width:170,left:10,height:28,borderRadius:'0px 0px 10px 10px',boxSizing:'border-box',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <img src="/static/settings.png" style={{height:16,width:16,opacity:0.5}} />
                <p style={{fontWeight:'bolder',color:'rgba(0,0,0,0.5)',padding:0,font:"14px/1.4 'Open Sans', arial, sans-serif"}} >Settings</p>
            </div>
            {width <= 590?<div className="addpost" style={{cursor:'pointer',position:'absolute',bottom:50,width:170,left:10}} >
                <button onClick={()=>{setPost(true);setOpenAccWindow(false)}} style={{width:170}} >Add post</button>
            </div>:null}
            <div onClick={()=>{sessionStorage.removeItem("token");window.location="/login"}} style={{cursor:'pointer',position:'absolute',bottom:10,borderRadius:10,width:170,left:10,height:32,borderRadius:10,boxSizing:'border-box',border:'1px solid rgb(255, 185, 79)',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <p style={{fontWeight:'bolder',color:'rgb(255, 185, 79)',font:"16px/1.4 'Open Sans', arial, sans-serif"}} >Log out</p>
            </div>
        </div>}
        </div>
    )
}


export function AddPost({setPost}) {
    const [image,setImage] = React.useState(null)
    const [loading,setLoading] = React.useState(0)
    const [title,setTitle] = React.useState('')
    const [body,setBody] = React.useState('')
    const token = window.sessionStorage.getItem('token')



    async function upload_image(){
        if (image) {
            var formData = new FormData();
            formData.append('file', image);
            formData.append('type','post');
            try {
                const response = await fetch(`/api/upload`,{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body:formData
                })
                if (response.ok) {
                    const res = await response.json()
                    // console.log('res:',res)
                    return res
                }
                return null
            } catch (error) {
                console.log(error)
                return null
            }
            
            
        }

        return null
    }


    const post = async() =>{
        if (body.trim()!='' && title.trim() != '' && token && loading !== 2) {
            setLoading(1)
            const imgurl = await upload_image()
            try {
                const data = {
                    "body": body,
                    "image_link": imgurl?imgurl.link.split('/')[2]:'NOMEDIA',
                    "title": title
                  }
                console.log('data:',data)
                const response = await fetch(`/api/posts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    const res = await response.json()
                    console.log(res)
                    setLoading(2)
                }
            } catch{
                console.log('error')
            }
        }

    }

    

    return (
        <div style={{height:height,width:'100%',position:'absolute',backgroundColor:'rgba(0,0,0,0.4)',top:0,left:0,zIndex:12,display:'flex',alignItems:'center',justifyContent:'center'}} >
            <div style={{width:'95%',maxWidth:600,backgroundColor:'white',borderRadius:10,position:'relative',display:'flex',alignItems:'center',flexDirection:'column',boxShadow:'0px 0px 10px rgba(0,0,0,0.1)',marginBottom:100,overflow:'hidden'}} >
                <svg onClick={()=>setPost(false)} width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:10,left:10,backgroundColor:'rgba(0,0,0,0.3)',borderRadius:20,padding:5,cursor:'pointer'}}>
                    <path d="M18 6L6 18" stroke="#F6F3EF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#F6F3EF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p style={{fontFamily:'mb',fontSize:22,color:'#545049',marginTop:10,alignSelf:'center'}} >Create post</p>
                <div style={{width:'100%',height:1,backgroundColor:'#CAC2B6',marginTop:5}} ></div>
                <input value={title} onChange={(event)=>setTitle(event.target.value.length<18 && event.target.value[0] != " "?event.target.value:title)} placeholder="Title.." style={{width:'100%',border:0,backgroundColor:'white',color:'#545049',boxSizing:'border-box',resize:'none',outline:0,fontSize:20,padding:15,fontFamily:'mb'}} />
                <div style={{width:'100%',borderTop:'2px dashed rgba(0,0,0,0.1)',marginTop:5}} ></div>
                <textarea value={body} onChange={(event)=>setBody(event.target.value)} style={{width:'100%',height:150,border:0,backgroundColor:'white',color:'#545049',boxSizing:'border-box',resize:'none',outline:0,fontWeight:'bolder',padding:15,font:"16px/1.4 'Open Sans', arial, sans-serif"}} placeholder="Update us..." />
                <div style={{width:'100%',height:1,backgroundColor:'#CAC2B6',marginTop:5}} ></div>
                <div style={{height:50,width:'100%',display:'flex',alignItems:'center',padding:'0px 10px 0px 10px',boxSizing:'border-box',position:'relative'}} >
                    <input accept="image/*" type="file" onChange={(event)=>setImage(event.target.files[0])} style={{width:20,height:20,position:'absolute',left:10,zIndex:13,opacity:0,cursor:'pointer'}} />
                    <img src="/static/Imagebox.png" style={{width:20,height:20,opacity:0.6,marginRight:15,cursor:'pointer'}} />
                    <img src="/static/gif.png" style={{width:25,height:25,opacity:0.6,marginRight:15,cursor:'pointer'}} />
                    <div onClick={()=>post()} className="addpost" style={{position:'absolute',right:15,borderRadius:10}} >
                        <button >{loading===0?'Post':loading===1?<div class="loader"></div>:'Posted!'}</button>
                    </div>
                </div>
                {image?<div style={{width:'100%',height:70,display:'flex',alignItems:'center',padding:'0px 10px 0px 10px',boxSizing:'border-box',position:'relative'}} >
                    <img src={URL.createObjectURL(image)} style={{width:55,height:55,marginRight:15,cursor:'pointer',border:'1px solid gray',borderRadius:10}} />
                </div>:null}
            </div>
            
        </div>
    )
}

function Home() {
    let height = window.innerHeight
    let width = window.innerWidth
    const [page,setPage] = React.useState(0)
    const [isAdmin,setAdmin] = React.useState(false)
    const [isPost,setPost] = React.useState(false)
    const token = window.sessionStorage.getItem('token')
    const JWTsecret = new TextEncoder().encode(process.env.REACT_APP_JWTsecret)
    const [openAccWindow,setOpenAccWindow] = React.useState(false)

    

    async function verifyAndDecodeToken(tk, secretKey) {
        try {
            const decoded = jose.jwtVerify(tk, JWTsecret);
            return decoded;
        } catch (error) {
            return null;
        }
    }

    React.useEffect(()=>{
        const getToken = async() => {
            try {
                const decoded = await verifyAndDecodeToken(token,JWTsecret)
                if (decoded) {
                    if (decoded.payload.role === "admin") {
                        setAdmin(true)
                    }else{
                        setAdmin(false)
                    }
                }
            } catch (error) {
                console.error('Invalid token:', error);
                return null;
            }
        }
        if (token) {
            getToken()
        }
    },[])

  return (
    <div style={{width:'100%',height:'100%',position:'relative'}} >

     <Head token={token} setPost={setPost} />
     {
        isPost?<AddPost setPost={setPost}/>:null
     }


        <div style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',height:40,backgroundColor:'white',position:'relative',boxShadow:'0px 5px 5px rgba(0,0,0,0.1)',overflow:'hidden'}} >
                <div className="router" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',height:40,cursor:'pointer',alignSelf:'center',position:'relative'}} >
                    <ul style={{position:'absolute',left:-150,width:300}} >
                        <li style={{position:'relative',textAlign:'center',overflow:'hidden',boxSizing:'border-box'}}>{page==0?<p style={{color:"#ff9900",fontWeight:700,zIndex:1,width:45}} >News</p>:<a style={{zIndex:1,width:45}} onClick={()=>setPage(0)} >News</a>}
                            <svg style={{position:'absolute',top:0,left:20,zIndex:0,width:50,height:50,overflow:'hidden'}} viewBox="0 0 100 100" fill={page==0?"#ffefd4":"#F6F3EF"} xmlns="http://www.w3.org/2000/svg" className="lg-ui-brand-shape-0000 leafygreen-ui-jfl65i">
                                <path d="M12.5366 8C5.61282 8 0 13.6073 0 20.5244C0 27.4145 5.59098 33.0487 12.4878 33.0487C19.3846 33.0487 24.9756 38.6343 24.9756 45.5244C24.9756 52.4145 30.5666 58 37.4634 58H87.4634C94.3872 58 100 52.3927 100 45.4756V20.5244C100 13.6073 94.3872 8 87.4634 8H62.439C55.5422 8 49.9512 13.6099 49.9512 20.5C49.9512 27.3632 44.3821 32.9513 37.5122 32.9513C30.6423 32.9513 25.0732 27.3632 25.0732 20.5C25.0732 13.6099 19.4334 8 12.5366 8Z"></path>
                            </svg>
                        </li>
                        <li style={{position:'relative',textAlign:'center',width:65}}>{page==1?<p style={{color:"#ff9900",fontWeight:700,zIndex:1,width:60}} >Teasers</p>:<a style={{zIndex:1,width:60}} onClick={()=>setPage(1)}>Teasers</a>}
                            <svg style={{position:'absolute',top:-16,left:30,zIndex:0,width:65,height:65}} viewBox="0 0 100 100" fill={page==1?"#ffefd4":"#F6F3EF"} xmlns="http://www.w3.org/2000/svg" className="lg-ui-brand-shape-0000 leafygreen-ui-jfl65i">
                                <path d="M10 80 C 30 10, 60 10, 90 80 S 70 90, 10 80 Z"></path>
                            </svg>
                        </li>
                        <li style={{position:'relative',textAlign:'center',width:80}}>{page==2?<p style={{color:"#ff9900",fontWeight:700,zIndex:1,width:80}} >Community</p>:<a style={{zIndex:1,width:80}} onClick={()=>setPage(2)}>Community</a>}
                            <svg style={{position:'absolute',top:-5,left:20,zIndex:0,width:80,height:80}} viewBox="0 0 100 100" fill={page==2?"#ffefd4":"#F6F3EF"} xmlns="http://www.w3.org/2000/svg" className="lg-ui-brand-shape-0000 leafygreen-ui-jfl65i">
                                <path d="M22.5325 8C15.611 8 10 13.6073 10 20.5244V45.4756C10 52.3927 15.611 58 22.5325 58H72.4675C79.389 58 85 52.3927 85 45.4756C85 38.5586 79.389 32.9513 72.4675 32.9513H47.5488C40.6542 32.9513 35.065 27.3657 35.065 20.4756C35.065 13.5855 29.4271 8 22.5325 8Z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
                {/* <img src="/static/addpost.png" style={{height:24,width:24,position:'absolute',right:27,opacity:0.7,cursor:'pointer'}} /> */}
                <div style={{position:'absolute',right:15,display:'flex',alignItems:'center',justifyContent:'center'}}  >
                    {token && width>590?<div className="addpost" style={{}} >
                        <button onClick={()=>setPost(true)} >Add post</button>
                    </div>:null}
                    {isAdmin?<div className="addpost" style={{marginLeft:10}} >
                    <button onClick={()=>window.location.assign("/addpost")} >Add news</button>
                    </div>:null}
                    {isAdmin?<div className="addpost" style={{marginLeft:10}} >
                    <button onClick={()=>window.location.assign("/addpost")} >Add teaser</button>
                    </div>:null}
                </div>
                
                {/* {token?<div className="addpost" style={{position:'absolute',right:15}} >
                    <button onClick={()=>window.location.assign("/addpost")} >Add post</button>
                </div>:null} */}
        </div>
        <div style={{width:width>=800?200:0,height:height-100,backgroundColor:'#F6F3EF',position:'absolute',top:100,left:0,zIndex:-1}} >

        </div>
        <div style={{width:width>=800?width-200:width-20,alignSelf:'center',height:height-100,backgroundColor:'white',position:'absolute',top:100,left:width>=800?200:10,zIndex:-1}} >
            {
                page==0?<News firstcall={0}/>:null
            }
            {
                page==1?<Teasers/>:null
            }
            {
                page==2?<Posts firstcall={0}/>:null
            }
        </div>


        
       
    </div>
  );
}

export default Home;
