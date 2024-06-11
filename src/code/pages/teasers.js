import React from "react";

function Teasers() {
    let height = window.innerHeight
    let width = window.innerWidth

    const [showPwd,setShowPwd] = React.useState(false)
    const token = window.localStorage.getItem('token')

    if (token) {
        return (
            <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative'}} >
                <p style={{font:"30px/1.4 'Open Sans', arial, sans-serif",fontWeight:700,marginTop:15,color:'#545049',marginLeft:20,position:'absolute',top:10,left:10}} >Teasers</p>
                <div style={{width:'100%',position:'absolute',top:80,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',overflow:'hidden'}} >
                    
                    <div style={{height:170,width:'95%',border:'1px solid #CAC2B6',borderRadius:5}} >
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
                    
                    <p style={{font:"30px/1.4 'Open Sans', arial, sans-serif",fontWeight:700,marginTop:15,color:'#545049',marginLeft:20,position:'absolute',top:10,left:10}} >Teasers</p>
                    <div style={{width:'100%',position:'absolute',top:80,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',overflow:'hidden'}} >
                        
                        <div style={{height:170,width:'95%',border:'1px solid #CAC2B6',borderRadius:5}} >
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
                        <div style={{height:170,width:'95%',border:'1px solid #CAC2B6',borderRadius:5,marginTop:10}} >
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

export default Teasers;
