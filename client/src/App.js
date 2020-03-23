import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import ShowTextPostList from './components/textpost/ShowTextPostList';
import CreateTextPost from './components/textpost/CreateTextPost';
import ShowTextPostDetails from './components/textpost/ShowTextPostDetails';


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
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
