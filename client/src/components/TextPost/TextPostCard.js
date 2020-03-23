import React from 'react';
import { Link } from 'react-router-dom';

import Moment from 'react-moment';
import '../../App.css';

const TextPostCard = (props, index) => {
    const  textPost  = props.textPost;

    return(
        <div className="card-container">
            {/* <img src="" alt="" /> */}
            <div className="desc">
                <h1>
                    <Link to={`/show-textpost/${textPost._id}`}>
                        { textPost.title }
                    </Link>
                </h1>
                <hr /> <br />
                <p>Post Added: <Moment format="YYYY-MM-DD HH:mm">{textPost.updated_date}</Moment></p>
            </div>
        </div>
    )
};

export default TextPostCard;