
import React, {useEffect, useState} from 'react';
import DisplayUnivCar from './DisplayUnivCar.js';

export default function Career({careers, listcaruniv, carUnivs }){

    const [careerName, setCareerName] = useState(null);
  

    const onChangeComboCar = (e) =>{
        const selvalueid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        setCareerName(e.target.options[index].text);//get text of selected option
        listcaruniv(selvalueid);
    }

    function filteredUnivCar(){
        return(
           <DisplayUnivCar  carUnivs={carUnivs} careerName={careerName}/>
        )
    }

    return(
        <div className="comp">
            <div className="comboboxpos" >
                <tr>
                    <td>Career :</td>
                    <td>
                        <select className="comboboxfont" onChange={(e)=>{
                            onChangeComboCar(e)}} >
                            <option value='0'>--Choose Career--</option>
                            {careers.map((ctm) =>
                                <option key={ctm.id} value={ctm.id}>{ctm.career_name}</option>         
                            )}
                        </select>
                    </td>
                </tr>
            </div>
           {carUnivs &&  filteredUnivCar() } 
        </div>
    )
}