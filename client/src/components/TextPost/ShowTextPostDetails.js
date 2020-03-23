import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const GET_TEXT_POST = gql`
    query textPost($textPostId: String) {
        textPost(id: $textPostId) {
            _id
            title
            description
            updated_date
        }
    }
`;


class ShowTextPostDetails extends Component {
    render() {
        return (
            <Query pollInterval={500} query={GET_TEXT_POST} variables={{ textPostId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                      <div className="ShowTextPostDetails">
                          <div className="container">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                <h4><Link to="/">Text Post List</Link></h4>
                                    <h3 className="panel-title">
                                    {data.textPost.title}
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <dl>
                                        <dt>Description:</dt>
                                        <dd>{data.textPost.description}</dd>
                                        <dt>Updated:</dt>
                                        <dd>{data.textPost.updated_date}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                      </div>
                    );
                }}
            </Query>
        );
    }
}

export default ShowTextPostDetails
