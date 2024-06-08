import React from "react";
import { Head,AddPost } from "./home";
import {addr,port} from './imports/imp'
import { ViewPost } from "./pages/posts";



let firstcall=0
let height = window.innerHeight
let width = window.innerWidth

function EditProfile({setShowEditProfile,setProfile,profile}) {
    const [firstname,setFirstName] = React.useState('')
    const [loading,setLoading] = React.useState(0)
    const [lastname,setLastName] = React.useState('')
    const token = window.sessionStorage.getItem('token')

    const update = async() =>{
        if (firstname.trim()!='' && lastname.trim() != '' && token && loading !== 2) {
            setLoading(1)
            try {
                const data = {
                    "firstName": firstname,
                    "lastName": lastname
                  }
                console.log('data:',data)
                const response = await fetch(`http://localhost:8080/user/profile`, {
                    method: 'PUT',
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
                    setProfile({...profile,first_name:firstname,last_name:lastname})
                    setShowEditProfile(false)
                }
            } catch{
                console.log('error')
            }
        }

    }


    return(
        <div style={{height:height,width:'100%',position:'absolute',backgroundColor:'rgba(0,0,0,0.4)',top:0,left:0,zIndex:12,display:'flex',alignItems:'center',justifyContent:'center'}} >
            <div style={{width:'95%',maxWidth:600,backgroundColor:'white',borderRadius:10,position:'relative',display:'flex',alignItems:'center',flexDirection:'column',boxShadow:'0px 0px 10px rgba(0,0,0,0.1)',marginBottom:100,overflow:'hidden'}} >
                <p style={{fontFamily:'mb',fontSize:27,marginTop:0,color:'#545049'}} >Update info</p>
                <svg onClick={()=>setShowEditProfile(false)} width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:10,left:10,backgroundColor:'rgba(0,0,0,0.3)',borderRadius:20,padding:5,cursor:'pointer'}}>
                    <path d="M18 6L6 18" stroke="#F6F3EF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#F6F3EF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'90%',zIndex:1,position:'relative',height:45,margin:'20px'}} >
                    <input value={firstname} onChange={(event)=>setFirstName(event.target.value.trim())} placeholder="First name" style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',height:45,backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)',borderRadius:10,border:'3px solid #545049',width:'49%',outline:'none',boxSizing:'border-box',padding:'0px 20px',position:'absolute',left:0}} />
                    <input value={lastname} onChange={(event)=>setLastName(event.target.value.trim())} placeholder="Last name" style={{fontFamily:'mc',fontSize:19,color:'rgba(0,0,0,0.8)',height:45,backdropFilter:'blur(50px)',backgroundColor:'rgba(255, 255, 255, 0.3)',borderRadius:10,border:'3px solid #545049',width:'49%',outline:'none',boxSizing:'border-box',padding:'0px 20px',position:'absolute',right:0}} />
                </div>

                <div style={{height:50,width:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'0px 10px 0px 10px',boxSizing:'border-box',position:'relative'}} >
                    <div onClick={()=>update()} className="addpost" style={{position:'absolute',borderRadius:10}} >
                        <button >{loading===0?'Update':loading===1?<div class="loader"></div>:'Updated!'}</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

function Profile() {
    

    const [showPwd,setShowPwd] = React.useState(false)
    const [profile,setProfile] = React.useState(null)
    const [isPost,setPost] = React.useState(false)
    const [article,setArticle] = React.useState(null)
    const [showArticle,setSArticle] = React.useState(false)
    const [showEditProfile,setShowEditProfile] = React.useState(false)

    const token = window.sessionStorage.getItem('token')


    React.useEffect(()=>{
        getProfile()
    },[])


    const getProfile = async() =>{
        if (!firstcall) {
            firstcall++
            try {
                const response = await fetch(`http://localhost:8080/user/profile`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                });
                if (response.ok) {
                    const res = await response.json()
                    setProfile(res)
                    console.log(res)
                }
            } catch{
                console.log('error')
            }
        }
        
    }

    if (token) {
        return (
            <div style={{width:'100%',height:height,backgroundColor:'#F6F3EF',flexDirection:'column',alignItems:'center',position:'relative',overflow:'hidden'}} >
                <Head token={token} setPost={setPost} />

                {
                    isPost?<AddPost setPost={setPost}/>:null
                }

                <ViewPost article={article} setArticle={setSArticle} showArticle={showArticle} height={height-62} owner={true}/>
                {showEditProfile?<EditProfile setShowEditProfile={setShowEditProfile} setProfile={setProfile} profile={profile} />:null}

                    

                    <div style={{width:'100%',height:height-60,marginTop:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',overflow:'scroll'}} >
                        <div style={{width:'95%',maxWidth:570,marginTop:20,height:200,boxSizing:'border-box',borderRadius:10,backgroundColor:'white',display:'flex',flexDirection:'row',alignItems:'center',position:'relative'}} >
                            <div onClick={()=>setShowEditProfile(true)} style={{display:'flex',padding:'7px 15px',flexDirection:'row',alignItems:'center',justifyContent:'center',position:'absolute',top:0,right:5,cursor:'pointer'}} >
                                <p style={{fontFamily:'mb',fontSize:16,margin:0}} >Edit</p>
                                <img src="/static/pen.png" style={{width:14,height:14,opacity:0.7}} />
                            </div>
                            {width>570?<img src="/static/profile.svg" style={{width:200,opacity:0.5}} />:null}
                            <div style={{display:'flex',flexDirection:'column',alignItems:'start'}}  >
                                <p style={{fontFamily:'mb',color:'#545049',fontSize:22,zIndex:1}} >{profile?`${profile.first_name} ${profile.last_name}`:'loading..'}</p>
                                <p style={{fontFamily:'mc',color:'#545049',fontSize:20,zIndex:1}} >{profile?`${profile.email}`:'loading..'}</p>
                            </div>
                        </div>

                        <div style={{width:'100%',borderTop:'2px dashed rgba(0,0,0,0.1)',margin:20,width:'95%',maxWidth:570}} ></div>

                        {
                            profile?profile.posts.map((article,y)=>{
                                const pub_date = new Date(article.created_at)
                                const date_num = pub_date.toDateString().slice(4)
                                const hour = pub_date.toLocaleTimeString().slice(0,4) + ' ' + pub_date.toLocaleTimeString().slice(-2)
                                const imgHeight = width>=800?513:width*0.95*0.9
                                return(
                                        <div key={y} style={{width:'95%',maxWidth:570,border:'1px solid #CAC2B6',borderRadius:10,backgroundColor:'white',position:'relative',paddingBottom:30,marginBottom:15,cursor:'pointer'}} onClick={()=>{setArticle(article);setSArticle(true)}} >
                                            <div style={{display:'flex',flexDirection:'row',marginLeft:10,alignItems:'center'}} >
                                                <p style={{fontFamily:'mb',fontSize:27,marginTop:0,color:'#545049'}} >{article.title}</p>
                                                <p style={{fontFamily:'mc',fontSize:13,marginTop:0,color:'#545049',marginLeft:0,position:'absolute',top:10,right:10}} >{date_num} on {hour}</p>
                                            </div>
                                            <p style={{fontFamily:'mc',fontSize:17,color:'#545049',marginLeft:15,whiteSpace:'pre-line',maxHeight:'2em',lineHeight:'1.2em',overflow:'hidden'}} >{article.body}</p>
                                            {article.image_link!="NOMEDIA"?<img src={`http://localhost:8080/upload?link=./posts/${article.image_link}`} style={{width:'90%',borderRadius:10,marginLeft:'5%'}} />:null}
                                        </div>
                                )
                            }).reverse():null
                        }
                        
                    
                    </div>
                
            </div>
        );
        }else{
            return (
                <p>404</p>
            );
        }
}

export default Profile;
