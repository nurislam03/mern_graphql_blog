import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import VideoPostCard from './VideoPostCard';
// import '../../App.css';

const GET_VIDEO_POSTS = gql`
  {
    videoPosts {
      _id
      title
      video_link
      updated_date
    }
  }
`;


class ShowVideoPostList extends Component {
    render() {

        return (
            <Query pollInterval={500} query={GET_VIDEO_POSTS}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                return (
                    <div className="ShowVideoPostList">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    <h2 className="display-4 text-center">List of Text Post</h2>
                                </div>

                                <div className="col-md-11">
                                    <Link to="/" className="btn  btn-outline-info float-left">
                                        Show Text Post List
                                    </Link>
                                    <Link to="/create-videopost" className="btn btn-outline-info float-right">
                                        + Add New Post
                                    </Link>
                                    <br /> <br /> <hr />
                                </div>
                            </div>


                            <div className= "list">
                                {/* return ( */}
                                    <Fragment>
                                        {data.videoPosts.map((videoPost, index) => (
                                            <VideoPostCard key={index} videoPost={videoPost} />
                                        ))}
                                    </Fragment>
                                {/* ); */}
                            </div>
                        </div>
                    </div>
                );
              }}
            </Query>
        )
    }
}

export default ShowVideoPostList

