
import React, {useEffect, useState} from 'react'
import University from './University.js'
import { BASE_URL } from '../constraints/index.js';


export default function UniversityContainer() {
   // const BASE_URL="http://127.0.0.1:3000/" 
    //const BASE_URL="https://boiling-retreat-81427.herokuapp.com/" Heroku
    const[univs,setUnivs] =  useState(null)
    const[revs,setRevs] =  useState(null)
  

    useEffect(()=>{
      fetch(BASE_URL + 'reviews')
          .then (res => res.json())
          .then (json => setRevs(json))
    },[])

    useEffect(()=>{
        fetch(BASE_URL + 'universities')
            .then (res => res.json())
            .then (json => setUnivs(json))
    },[])

  
    function alluniversities(){
       return (
            <University univs={univs} revs={revs}/> )
    }
    
    return (
        <div>
            {univs && alluniversities()}
        </div>
    )
}
