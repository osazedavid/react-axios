import React from "react";
import './Card.css';

const Card = ({userData})=> {
    return(
    userData.map((user )=> {
        return (
            <div className="card">   
            <img src= {user.avatar_url} className="card-image" alt="avatar"/>
            <p> {user.login} </p>
            </div>
        )
    
    })
    )
}
export default Card;