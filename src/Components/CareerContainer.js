import React, {useEffect, useState} from 'react';
import Career from './Career.js';

export default function CareerContainer(){
    const BASE_URL="http://127.0.0.1:3000/";


    const [careers, setCareers] = useState(null);
    const [carUnivs, setCarUnivs] = useState(null);
 

    useEffect(()=>{
        fetch(BASE_URL + 'careers')
          .then (res => res.json())
          .then (json => setCareers(json))
    },[]);


    function listcaruniv(idc){
      const config = {
        method: "GET",
        headers: {
          "Content-type":  "application/json"
        },
      }
      let urlComplete = BASE_URL + 'careers/' + idc + '/universities'   
      fetch(urlComplete,config)
        .then(response => response.json())
        .then(json =>setCarUnivs(json)
        )
    }


    function allcar(){
        return (
          <Career careers={careers} listcaruniv={listcaruniv} carUnivs={carUnivs}/>
        )
    }
    
    return (
      <div>
         {careers && allcar()}
      </div>
    )
}

