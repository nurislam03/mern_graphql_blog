import React from 'react';
import { Link } from 'react-router-dom';

import Moment from 'react-moment';
import '../../App.css';

const VideoPostCard = (props, index) => {
    const  videoPost  = props.videoPost;

    return(
        <div className="card-container">
            {/* <img src="" alt="" /> */}
            <div className="desc">
                <h2>
                    <b> <Link to={`/show-videopost/${videoPost._id}`}>
                        { videoPost.title }
                    </Link> </b>
                </h2>
                <hr /> <br />
                <p>Post Added: <Moment format="YYYY-MM-DD HH:mm">{videoPost.updated_date}</Moment></p>
            </div>
        </div>
    )
};

export default VideoPostCard;