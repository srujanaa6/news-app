import React from "react";
import { useEffect, useState } from "react";



function Content()
{
    const[news,setnews]=useState([]);
    const[read,setread]=useState("");

    useEffect(()=>
    {
       
            const fetchApi =async()=>
        {
            
            let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey="token"`
           let response =await fetch(url)
            
            let data= await response.json();
           
            setnews(data.articles)
            console.log(news)
            
       
     
        }

        fetchApi();

        
    });    
 

    return(
    <div>
    
      <div className="container my-3 ">
 <div className="row">
{
    news.map((value)=>
    {
        return(
            <div className="col-4 ">
        <div class="card my-3" style={{width: "15rem" ,height:"33rem"}}>
        <img class="card-img-top" src={value.urlToImage} alt="Card image cap"/>
        <div class="card-body">
            <h4 class="card-title">{value.title}</h4>
            <p class="card-text">{value.description}</p>
            <a href={value.url} class="btn btn-sm btn-mybtn btn-primary ">Read more</a>
       
        </div>
        </div>
</div>
        );
    })
}
</div>
 </div>
    
   
       
    </div>
    
);

}

export default Content;
{/* <div className="col-3">
<div class="card" style={{width: "17rem",height:"auto"}}>
  <img class="card-img-top" src={news.urlToImage} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{news.title}</h5>
    <p class="card-text">{news.description}</p>
   
    <a href={news.url} class="btn btn-sm btn-primary text-center">Read more</a>
 
  </div>
</div>
</div> */}
