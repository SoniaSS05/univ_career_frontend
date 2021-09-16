import './Review.css'
import React, {useState } from "react";
import DisplayReview from './DisplayReview.js'
import ReactScrollableFeed from 'react-scrollable-feed';


export default function Review({univs, revs, delReview}) {


    //University ComboBox
    const[universityId, setUniversityId] = useState(null)
    const[universityName, setUniversityName] = useState(null)

    function filteredReviews(){
        console.log(revs)
        console.log(universityId)
        const filterrev = revs.filter(review => review.university_id == universityId)
        console.log('Reviews')
        console.log(filterrev)
        return (
           <DisplayReview filterrev={filterrev} delReview = {delReview} />
        )
    }


    const onChangeComboUniv = (e) =>{
        const selvalueid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        setUniversityName(e.target.options[index].text);//get text of selected option
        setUniversityId(selvalueid);
    }

    return(
        <div className="comp">
            <div className="comboboxpos" >
                <tr>
                    <td>University :</td>
                    <td>
                        <select className="comboboxfont" onChange={(e)=>{
                            onChangeComboUniv(e)}} >
                            <option value='0'>--Choose University--</option>
                            {univs.map((utm) =>
                                <option key={utm.id} value={utm.id}>{utm.name}</option>         
                            )}
                        </select>
                    </td>
                </tr>
            </div>
           {universityId && filteredReviews()}


        </div>
    )
}