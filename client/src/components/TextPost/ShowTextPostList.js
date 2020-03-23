import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                <h3 className="panel-title">
                                    LIST OF TEXT POST
                                </h3>
                                <h4><Link to="/create-textpost">Add Text Post</Link></h4>
                                </div>
                                <div className="panel-body">
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
                                </div>
                            </div>
                        </div>
                    </div>
                );
              }}
            </Query>
        )
    }
}

export default ShowTextPostList
