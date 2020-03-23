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
                            <div className="row">
                              <div className="col-md-10 m-auto">
                                <br /> <br />
                                <Link to="/" className="btn  btn-outline-info float-left">
                                  Show Text Post List
                                </Link>
                              </div>
                              <br />

                              <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">{data.textPost.title}</h1>
                                <br /> <br /> <hr /> <br />
                              </div>

                                <div className="panel-body">
                                    <dl>
                                        {/* <dt>Description:</dt> */}
                                        <dd>{data.textPost.description}</dd>
                                        <hr /> <br />
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
