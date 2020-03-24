import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactPlayer from "react-player"


const GET_VIDEO_POST = gql`
    query videoPost($videoPostId: String) {
        videoPost(id: $videoPostId) {
            _id
            title
            video_link
            description
            updated_date
        }
    }
`;


class ShowVideoPostDetails extends Component {
    render() {
        return (
            <Query pollInterval={500} query={GET_VIDEO_POST} variables={{ videoPostId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                      <div className="ShowVideoPostDetails">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-10 m-auto">
                                <br /> <br />
                                <Link to="/show-videopostlist" className="btn  btn-outline-info float-left">
                                  Show Video Post List
                                </Link>
                                <br /> <br />
                              </div>

                              <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">{data.videoPost.title}</h1>
                                <br /> <br /> <hr /> <br />
                              </div>

                              <div className="m-auto">
                                <ReactPlayer url= {data.videoPost.video_link} />
                                <br /> <br />
                              </div>

                            </div>
                            <div className="panel-body m-auto">
                                <dl>
                                    {/* <dt>Description:</dt> */}
                                    <dd>{data.videoPost.description}</dd>
                                    <hr /> <br />
                                    <dt>Updated:</dt>
                                    <dd>{data.videoPost.updated_date}</dd>
                                </dl>
                            </div>
                        </div>
                      </div>
                    );
                }}
            </Query>
        );
    }
}

export default ShowVideoPostDetails
