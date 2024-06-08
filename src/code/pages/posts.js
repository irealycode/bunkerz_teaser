import React from "react";
import {addr,port} from '../imports/imp'


let height = window.innerHeight
let width = window.innerWidth


function EditPost({setPost,article}) {
    const [image,setImage] = React.useState(null)
    const [loading,setLoading] = React.useState(0)
    const [title,setTitle] = React.useState(article.title)
    const [body,setBody] = React.useState(article.body)
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
        const imgurl = await upload_image()

        if (body.trim()!='' && title.trim() != '' && (title != article.title || body != article.body || imgurl) && token && loading !== 2) {
            setLoading(1)
            try {
                const data = {
                    "body": body,
                    "image_link": imgurl?imgurl.link.split('/')[2]:article.image_link,
                    "title": title,
                    "post_id":article.id
                  }
                console.log('data:',data)
                const response = await fetch(`/api/posts`, {
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
                    window.location.reload()
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
                <p style={{fontFamily:'mb',fontSize:22,color:'#545049',marginTop:10,alignSelf:'center'}} >Edit post</p>
                <div style={{width:'100%',height:1,backgroundColor:'#CAC2B6',marginTop:5}} ></div>
                <input value={title} onChange={(event)=>setTitle(event.target.value.length<18 && event.target.value[0] != " "?event.target.value:title)} placeholder={article.title} style={{width:'100%',border:0,backgroundColor:'white',color:'#545049',boxSizing:'border-box',resize:'none',outline:0,fontSize:20,padding:15,fontFamily:'mb'}} />
                <div style={{width:'100%',borderTop:'2px dashed rgba(0,0,0,0.1)',marginTop:5}} ></div>
                <textarea value={body} onChange={(event)=>setBody(event.target.value)} style={{width:'100%',height:150,border:0,backgroundColor:'white',color:'#545049',boxSizing:'border-box',resize:'none',outline:0,fontWeight:'bolder',padding:15,font:"16px/1.4 'Open Sans', arial, sans-serif"}} placeholder={article.body} />
                <div style={{width:'100%',height:1,backgroundColor:'#CAC2B6',marginTop:5}} ></div>
                <div style={{height:50,width:'100%',display:'flex',alignItems:'center',padding:'0px 10px 0px 10px',boxSizing:'border-box',position:'relative'}} >
                    <input accept="image/*" type="file" onChange={(event)=>setImage(event.target.files[0])} style={{width:20,height:20,position:'absolute',left:10,zIndex:13,opacity:0,cursor:'pointer'}} />
                    <img src="/static/Imagebox.png" style={{width:20,height:20,opacity:0.6,marginRight:15,cursor:'pointer'}} />
                    <img src="/static/gif.png" style={{width:25,height:25,opacity:0.6,marginRight:15,cursor:'pointer'}} />
                    <div onClick={()=>post()} className="addpost" style={{position:'absolute',right:15,borderRadius:10}} >
                        <button >{loading===0?'Update':loading===1?<div class="loader"></div>:'Updated!'}</button>
                    </div>
                </div>
                {image?<div style={{width:'100%',height:70,display:'flex',alignItems:'center',padding:'0px 10px 0px 10px',boxSizing:'border-box',position:'relative'}} >
                    <img src={URL.createObjectURL(image)} style={{width:55,height:55,marginRight:15,cursor:'pointer',border:'1px solid gray',borderRadius:10}} />
                </div>:null}
            </div>
            
        </div>
    )
}

function Assurence({article,setShowAssure}){

    const [loading,setLoading] = React.useState(0)
    const token = window.sessionStorage.getItem('token')

    const delete_post = async() =>{
            try {
                const data = {
                    "id": article.id,
                    "image_link": `./posts/${article.image_link}`,
                  }
                console.log('data:',data)
                const response = await fetch(`/api/posts`, {
                    method: 'DELETE',
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

            window.location.reload()


    }

    return(
        <div style={{height:height,width:'100%',position:'absolute',backgroundColor:'rgba(0,0,0,0.4)',top:0,left:0,zIndex:12,display:'flex',alignItems:'center',justifyContent:'center'}} >
            <div style={{width:'95%',maxWidth:600,backgroundColor:'white',borderRadius:10,position:'relative',display:'flex',alignItems:'center',flexDirection:'column',boxShadow:'0px 0px 10px rgba(0,0,0,0.1)',marginBottom:100,overflow:'hidden'}} >
                <p style={{fontFamily:'mb',fontSize:27,marginTop:0,color:'#545049'}} >Are you sure?</p>
                <p style={{fontFamily:'mc',fontSize:17,marginTop:0,color:'#545049'}} >Deleting this post is permanent and cannot be undone.</p>
                <svg onClick={()=>setShowAssure(false)} width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:10,left:10,backgroundColor:'rgba(0,0,0,0.3)',borderRadius:20,padding:5,cursor:'pointer'}}>
                    <path d="M18 6L6 18" stroke="#F6F3EF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#F6F3EF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div style={{height:50,width:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'0px 10px 0px 10px',boxSizing:'border-box',position:'relative'}} >
                    <div onClick={()=>delete_post()}  style={{position:'absolute'}} >
                        <button style={{color:'rgba(255,0,0,0.7)',cursor:'pointer',padding:'7px 15px',backgroundColor:'white',borderRadius:10,border:'1px solid #545049',fontFamily:'mb',fontSize:16}} >{loading===0?'Delete':loading===1?<div class="loader"></div>:'Deleted!'}</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export function ViewPost({article,setArticle,showArticle,height,owner}) {
    owner=owner?owner:null
    const token = window.sessionStorage.getItem('token')
    const [assure,setShowAssure] = React.useState(false)
    const [editPost,setPost] = React.useState(false)


    height = height?height:'100%'

   

    if (token) {
        const pub_date = article?new Date(article.created_at):null
        const date_num = article?pub_date.toDateString().slice(4):null
        const hour = article?pub_date.toLocaleTimeString().slice(0,4) + ' ' + pub_date.toLocaleTimeString().slice(-2):null
        const imgHeight = width>=800?513:width*0.95*0.9
        return (
            <div className="viewpost" style={{width:'100%',height:height,display:'flex',flexDirection:'column',backgroundColor:'white',alignItems:'center',justifyContent:'center',overflowX:'hidden',overflowY:'scroll',position:'absolute',bottom:0,left:showArticle?'0%':'100%',zIndex:5}} >
                
                {assure?<Assurence setShowAssure={setShowAssure} article={article}  />:null}

                {editPost?<EditPost setPost={setPost} article={article} />:null}
                <div style={{width:'100%',position:'absolute',top:40,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',overflow:'hidden'}} >
                    <div style={{width:'95%',maxWidth:570,marginBottom:20}} >
                        <img src="/static/back.png" style={{height:25,width:25,opacity:0.7,cursor:'pointer'}} onClick={()=>setArticle(false)} />
                    </div>
                    
                            
                        {article?<div style={{width:'95%',maxWidth:570,border:'1px solid #CAC2B6',borderRadius:10,position:'relative',paddingBottom:30,marginBottom:15,cursor:'pointer'}} >
                            <div style={{display:'flex',flexDirection:'row',marginLeft:10,alignItems:'center'}} >
                                <p style={{fontFamily:'mb',fontSize:27,marginTop:10,color:'#545049'}} >{article.title}</p>
                                <p style={{fontFamily:'mc',fontSize:13,marginTop:0,color:'#545049',marginLeft:0,position:'absolute',top:10,right:10}} >{date_num} on {hour}</p>
                                <p style={{fontFamily:'mc',fontSize:13,marginTop:0,color:'#545049',marginLeft:0,position:'absolute',bottom:0,right:10}} >posted by name lastname</p>

                            </div>
                            <p style={{fontFamily:'mc',fontSize:17,color:'#545049',marginLeft:15,whiteSpace:'pre-line',overflow:'hidden'}} >{article.body}</p>
                            {article.image_link!="NOMEDIA"?<img src={`/api/upload?link=./posts/${article.image_link}`} style={{width:'90%',borderRadius:10,marginLeft:'5%'}} />:null}
                        </div>:null}

                        {owner?<div style={{display:'flex',alignItems:'center',justifyContent:'end',width:'95%',maxWidth:570}} >
                            <div onClick={()=>setShowAssure(true)} style={{display:'flex',padding:'4px 15px',flexDirection:'row',alignItems:'center',justifyContent:'center',cursor:'pointer',border:'1px solid #545049',borderRadius:10}} >
                                <p style={{fontFamily:'mb',fontSize:16,margin:0,color:'rgba(255,0,0,0.7)'}} >Delete</p>
                            </div>

                            <div onClick={()=>setPost(true)} style={{display:'flex',padding:'4px 15px',flexDirection:'row',alignItems:'center',justifyContent:'center',cursor:'pointer'}} >
                                <p style={{fontFamily:'mb',fontSize:16,margin:0}} >Edit</p>
                                <img src="/static/pen.png" style={{width:14,height:14,opacity:0.7}} />
                            </div>
                        </div>:null}
                
                </div>
            </div>
          );
    }else{
        return null
    }
}


function Posts({firstcall}) {
    const token = window.sessionStorage.getItem('token')
    

    const [showPwd,setShowPwd] = React.useState(false)
    const [Posts,setPosts] = React.useState([])
    const [article,setArticle] = React.useState(null)
    const [showArticle,setSArticle] = React.useState(false)


    React.useEffect(()=>{
        getPosts()
    },[])


    const getPosts = async() =>{
        if (!firstcall) {
            firstcall++
            try {
                const response = await fetch(`/api/posts`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                });
                if (response.ok) {
                    const res = await response.json()
                    setPosts(res.posts)
                    console.log(res.posts)
                }
            } catch{
                console.log('error')
            }
        }
        
    }

    

    if (token) {
        return (
            <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden'}} >


                <ViewPost article={article} setArticle={setSArticle} showArticle={showArticle} />
                <div style={{overflowY:'scroll',height:height,marginTop:0,width:'95%',maxWidth:570}} >
                <p style={{font:"30px/1.4 'Open Sans', arial, sans-serif",fontWeight:700,color:'#545049',marginTop:20}} >Community's posts</p>

                {
                    Posts.map((article,y)=>{
                        const pub_date = new Date(article.created_at)
                        const date_num = pub_date.toDateString().slice(4)
                        const hour = pub_date.toLocaleTimeString().slice(0,4) + ' ' + pub_date.toLocaleTimeString().slice(-2)
                        const imgHeight = width>=800?513:width*0.95*0.9
                        return(
                                <div key={y} style={{width:'100%',maxWidth:570,boxSizing:'border-box',border:'1px solid #CAC2B6',borderRadius:10,position:'relative',paddingBottom:30,marginBottom:15,cursor:'pointer'}} onClick={()=>{setArticle(article);setSArticle(true)}} >
                                    <div style={{display:'flex',flexDirection:'row',marginLeft:10,alignItems:'center'}} >
                                        <p style={{fontFamily:'mb',fontSize:27,marginTop:0,color:'#545049'}} >{article.title}</p>
                                        <p style={{fontFamily:'mc',fontSize:13,marginTop:0,color:'#545049',marginLeft:0,position:'absolute',top:10,right:10}} >{date_num} on {hour}</p>
                                    </div>
                                    <p style={{fontFamily:'mc',fontSize:17,color:'#545049',marginLeft:15,whiteSpace:'pre-line',maxHeight:'2em',lineHeight:'1.2em',overflow:'hidden'}} >{article.body}</p>
                                    {article.image_link!="NOMEDIA"?<img src={`/api/upload?link=./posts/${article.image_link}`} style={{width:'90%',borderRadius:10,marginLeft:'5%'}} />:null}
                                </div>
                        )
                    }).reverse()
                }
                </div>
                    
                    
                    
                
                
            </div>
          );
    }else{
        return (
            <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative'}} >
                <div style={{width:'100%',height:'100%',backdropFilter:'blur(5px)',WebkitBackdropFilter:'blur(5px)',filter:'blur(5px)',backgroundColor:'rgba(255, 255, 255, 0.3)',position:'absolute',top:0,left:0,zIndex:10}} ></div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',position:'absolute',zIndex:11,marginBottom:100}} >
                    <img src="/static/lock.png" style={{height:40,width:40,marginBottom:20,opacity:0.6}} />
                    <div onClick={()=>window.location.assign("/register")} className="login_submit" style={{display:'flex',alignItems:'center',backgroundColor:'#f90',justifyContent:'center',height:45,borderRadius:5,padding:'0px 20px',cursor:'pointer'}} >
                        <p style={{fontFamily:'mb',color:'white',fontSize:22,zIndex:1}} >Join us</p>
                    </div>
                    <div onClick={()=>window.location.assign("/login")} className="login_submit" style={{display:'flex',alignItems:'center',backgroundColor:'transparent',justifyContent:'center',marginTop:20,height:45,borderRadius:5,padding:'0px 20px',cursor:'pointer'}} >
                        <p style={{fontFamily:'mb',color:'#545049',fontSize:18,zIndex:1}} >Already have an account?</p>
                    </div>
                </div>
                
                <p style={{font:"30px/1.4 'Open Sans', arial, sans-serif",fontWeight:700,marginTop:15,color:'#545049',marginLeft:20,position:'absolute',top:10,left:10}} >Community's posts</p>
                <div style={{width:'100%',position:'absolute',top:80,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',overflow:'hidden'}} >
                    
                    <div style={{height:170,width:'95%',maxWidth:570,border:'1px solid #CAC2B6',borderRadius:5}} >
                        <div style={{display:'flex',flexDirection:'row',marginLeft:10,alignItems:'center'}} >
                            <p style={{fontFamily:'mb',fontSize:27,marginTop:0,color:'#545049'}} >Something intresting</p>
                            <p style={{fontFamily:'mc',fontSize:13,marginTop:0,color:'#545049',marginLeft:0}} >July 25 2024 on 11:52PM</p>
                        </div>
                        <p style={{fontFamily:'mc',fontSize:17,color:'#545049',marginLeft:10,maxHeight:'4.4em',lineHeight:'1.2em',overflow:'hidden'}} >Once upon a time, there were three little pigs who lived with their mother. As the pigs grew older, their mother decided it was time for them to go out into the world and build their own houses.
        First Pig and the Straw House:
        The first little pig was very lazy. He quickly built his house out of straw because it was the easiest thing to do. He finished quickly and spent the rest of his time playing.
        Second Pig and the Stick House:
        The second little pig was a bit more diligent, but he also wanted to play. He built his house out of sticks. It took a bit more time and effort than the straw house, but he finished it relatively quickly and went off to join his brother in playing.
        Third Pig and the Brick House:
        The third little pig was very hard-working. He decided to build his house out of bricks. It took a lot of time, effort, and hard work, but he knew it would be strong and sturdy.</p>
                        <p style={{fontFamily:'mb',fontSize:17,color:'#f90',zIndex:5,marginLeft:10,cursor:'pointer',width:'auto'}} >View post</p>
        
                    </div>
                    <div style={{height:170,width:'95%',maxWidth:570,border:'1px solid #CAC2B6',borderRadius:5,marginTop:10}} >
                        <div style={{display:'flex',flexDirection:'row',marginLeft:10,alignItems:'center'}} >
                            <p style={{fontFamily:'mb',fontSize:27,marginTop:0,color:'#545049'}} >Something intresting</p>
                            <p style={{fontFamily:'mc',fontSize:13,marginTop:0,color:'#545049',marginLeft:0}} >July 25 2024 on 11:52PM</p>
                        </div>
                        <p style={{fontFamily:'mc',fontSize:17,color:'#545049',marginLeft:10,maxHeight:'4.4em',lineHeight:'1.2em',overflow:'hidden'}} >Once upon a time, there were three little pigs who lived with their mother. As the pigs grew older, their mother decided it was time for them to go out into the world and build their own houses.
        First Pig and the Straw House:
        The first little pig was very lazy. He quickly built his house out of straw because it was the easiest thing to do. He finished quickly and spent the rest of his time playing.
        Second Pig and the Stick House:
        The second little pig was a bit more diligent, but he also wanted to play. He built his house out of sticks. It took a bit more time and effort than the straw house, but he finished it relatively quickly and went off to join his brother in playing.
        Third Pig and the Brick House:
        The third little pig was very hard-working. He decided to build his house out of bricks. It took a lot of time, effort, and hard work, but he knew it would be strong and sturdy.</p>
                        <p style={{fontFamily:'mb',fontSize:17,color:'#f90',zIndex:5,marginLeft:10,cursor:'pointer',width:'auto'}} >View post</p>
        
                    </div>
                
                </div>
            </div>
          );
    }
 
}

export default Posts;
