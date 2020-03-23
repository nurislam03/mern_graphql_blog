import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import TextPostCard from './TextPostCard';
import '../../App.css';

const GET_TEXT_POSTS = gql`
  {
    textPosts {
      _id
      title
      updated_date
    }
  }
`;


class ShowTextPostList extends Component {
    render() {

        return (
            <Query pollInterval={500} query={GET_TEXT_POSTS}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                return (
                    <div className="ShowTextPostList">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    <h2 className="display-4 text-center">List of Text Post</h2>
                                </div>

                                <div className="col-md-11">
                                    <Link to="/create-textpost" className="btn btn-outline-info float-right">
                                        + Add New Post
                                    </Link>
                                    <br /> <br /> <hr />
                                </div>
                            </div>


                            <div className= "list">
                                {/* return ( */}
                                    <Fragment>
                                        {data.textPosts.map((textPost, index) => (
                                            <TextPostCard key={index} textPost={textPost} />
                                        ))}
                                    </Fragment>
                                {/* ); */}
                            </div>

                            {/* <div className="panel-body">
                                <table className="table table-stripe">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Post Added</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.textPosts.map((textPost, index) => (
                                        <tr key={index}>
                                        <td><Link to={`/show-textpost/${textPost._id}`}>{textPost.title}</Link></td>
                                        <td>{textPost.updated_date}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div> */}

                        </div>
                    </div>
                );
              }}
            </Query>
        )
    }
}

export default ShowTextPostList
