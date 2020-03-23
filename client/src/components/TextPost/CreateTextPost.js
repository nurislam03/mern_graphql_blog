import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";


const ADD_TEXT_POST = gql`
    mutation AddTextPost(
        $title: String!,
        $description: String!) {
        addTextPost(
            title: $title,
            description: $description) {
            _id
        }
    }
`;


class CreateTextPost extends Component {

  render() {
    let title, description;

    return (
        <Mutation mutation={ADD_TEXT_POST} onCompleted={() => this.props.history.push('/')}>
            {(addTextPost, { loading, error }) => (
                <div className="CreateTextPost">
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-info float-left">
                            Show Post List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Text Post</h1>
                        <p className="lead text-center">
                            create new post
                        </p>

                        <form onSubmit={e => {
                            e.preventDefault();

                            addTextPost({ variables: { title: title.value, description: description.value } });
                            title.value = "";
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
                            <textarea
                            type='text'
                            placeholder='Write you post here'
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

export default CreateTextPost;