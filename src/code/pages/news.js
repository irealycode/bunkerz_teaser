import React from "react";
import {addr,port} from '../imports/imp'



function News({firstcall,width,height}) {

    const [showPwd,setShowPwd] = React.useState(false)
    const [news,setNews] = React.useState([])


    React.useEffect(()=>{
        getNews()
    },[])


    const getNews = async() =>{
        if (!firstcall) {
            firstcall++
            try {
                process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
                const response = await fetch(`http://localhost:8080/news`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const res = await response.json()
                    setNews(res.news_articles)
                    console.log(res.news_articles)
                }
            } catch{
                console.log('error')
            }
        }
        
    }

  return (
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative'}} >
        <p style={{font:"30px/1.4 'Open Sans', arial, sans-serif",fontWeight:700,marginTop:15,color:'#545049',marginLeft:20,position:'absolute',top:10,left:10}} >Our News</p>
        <div style={{width:'100%',position:'absolute',top:80,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',overflow:'hidden'}} >

            {
                news.map((article,y)=>{
                    const pub_date = new Date(article.published_at)
                    const date_num = pub_date.toDateString().slice(4)
                    const hour = pub_date.toLocaleTimeString().slice(0,4) + ' ' + pub_date.toLocaleTimeString().slice(-2)
                    return(
                            <div key={y} style={{width:'95%',border:'1px solid #CAC2B6',borderRadius:5,position:'relative',paddingBottom:30,marginBottom:15}} >
                                <div style={{display:'flex',flexDirection:'row',marginLeft:10,alignItems:'center'}} >
                                    <p style={{fontFamily:'mb',fontSize:27,marginTop:0,color:'#545049'}} >{article.title}</p>
                                    <p style={{fontFamily:'mc',fontSize:13,marginTop:0,color:'#545049',marginLeft:0}} >{date_num} on {hour}</p>
                                </div>
                                <p style={{fontFamily:'mc',fontSize:17,color:'#545049',marginLeft:15,maxHeight:'4.4em',lineHeight:'1.2em',overflow:'hidden'}} >{article.body}</p>
                                <p style={{fontFamily:'mb',fontSize:17,color:'#f90',zIndex:5,cursor:'pointer',position:'absolute',bottom:0,left:10}} >View post</p>

                            </div>
                    )
                })
            }
            
            
        
        </div>
    </div>
  );
}

export default News;
