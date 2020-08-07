import React from "react";

const ShowImage = ({ item, url }) => (
    <div className="product-img">
        <img
            src={`https://merchsid.herokuapp.com/api/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default ShowImage;
