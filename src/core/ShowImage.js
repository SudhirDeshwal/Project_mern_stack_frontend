import React from "react";
import "../styles.css";
//to show image in card view
const ShowImage = ({ item, url }) => (
    <div className="card-img-top img-fluid">
        
        <img 
            src={`https://merchsid.herokuapp.com/api/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }} />
    </div>
    
);

export default ShowImage; 
