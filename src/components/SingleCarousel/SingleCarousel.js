import React from 'react';
import { img_300, unavailable } from "../../config/config";
import "./SingleCarousel.css";
// Thông tin từng bộ phim
const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (

        <div className="pic-ctn">
            <img
                src={poster ? `${img_300}${poster}` : unavailable}
                alt={title} className="pic"
            />
            
        </div>

    );
};

export default SingleContent;
