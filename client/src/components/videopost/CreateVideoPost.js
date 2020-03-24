import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";


const ADD_VIDEO_POST = gql`
    mutation AddVideoPost(
        $title: String!,
        $video_link: String!,
        $description: String!) {
        addVideoPost(
            title: $title,
            video_link: $video_link,
            description: $description) {
            _id
        }
    }
`;


class CreateVideoPost extends Component {

  render() {
    let title, video_link, description;

    return (
        <Mutation mutation={ADD_VIDEO_POST} onCompleted={() => this.props.history.push('/')}>
            {(addTextPost, { loading, error }) => (
                <div className="CreateVideoPost">
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/show-videopostlist" className="btn btn-outline-info float-left">
                            Video Post List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Video Post</h1>
                        <p className="lead text-center">
                            create new post
                        </p>

                        <form onSubmit={e => {
                            e.preventDefault();

                            addTextPost({ variables: { title: title.value, video_link: video_link.value, description: description.value } });
                            title.value = "";
                            video_link = "";
                            description.value = "";
                        }}>

                        <div className='form-group'>
                            <input
                            type='text'
                            placeholder='Title of the Post'
                            name='title'
                            className='form-control'
                            ref={node => {
                                title = node;
                            }}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <input
                            type='text'
                            placeholder='Paste video link here'
                            name='video_link'
                            className='form-control'
                            ref={node => {
                                video_link = node;
                            }}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <textarea
                            type='text'
                            placeholder='describe your post here'
                            name='description'
                            className='form-control'
                            ref={node => {
                                description = node;
                            }}
                            cols='80' rows='3'
                            />
                        </div>

                        <input
                            type="submit"
                            className="btn btn-outline-info btn-block mt-4"
                        />
                        </form>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error :( Please try again</p>}
                    </div>
                    </div>
                </div>
                </div>
            )}
        </Mutation>
    );
  }
}

export default CreateVideoPost;
