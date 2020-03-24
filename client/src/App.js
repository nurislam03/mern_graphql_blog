import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// textPostType ...
import ShowTextPostList from './components/textpost/ShowTextPostList';
import CreateTextPost from './components/textpost/CreateTextPost';
import ShowTextPostDetails from './components/textpost/ShowTextPostDetails';

// videoPostType ...
import ShowVideoPostList from './components/videopost/ShowVideoPostList';
import CreateVideoPost from './components/videopost/CreateVideoPost';
import ShowVideoPostDetails from './components/videopost/ShowVideoPostDetails';


const client = new ApolloClient({ uri: 'http://localhost:8082/graphql' });


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Route exact path='/' component={ShowTextPostList} />
            <Route path='/create-textpost' component={CreateTextPost} />
            <Route path='/show-textpost/:id' component={ShowTextPostDetails} />
            <Route path='/show-videopostlist' component={ShowVideoPostList} />
            <Route path='/create-videopost' component={CreateVideoPost} />
            <Route path='/show-videopost/:id' component={ShowVideoPostDetails} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
