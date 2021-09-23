import React, {useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed';
import './DisplayUnivCar.css';


export default function DisplayUnivCar({carUnivs, careerName}){
    return(
        <div>
            <h1  className="title">{careerName}</h1>
            <div className="scrollstyle">    
                <ReactScrollableFeed >
                    {carUnivs.map((tp,i) => {
                        return(
                            <div>
                                <tr className="carunivrow">
                                    <td  className="carunivtd">
                                        <p style={{backgroundColor: i % 2 == 0?  'whitesmoke':'white', minHeight:'40px'}} key={i}>{tp.name}</p>
                                    </td>
                                    <td className="carunivtd1">
                                        <p style={{backgroundColor: i % 2 == 0?  'whitesmoke':'white', minHeight:'40px'}} key={i}>{tp.location}</p>
                                    </td>
                                </tr>
                            </div>
                        )
                        })
                    }
                </ReactScrollableFeed>
            </div>
        </div>
    )
}
