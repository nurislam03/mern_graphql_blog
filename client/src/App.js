import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


const client = new ApolloClient({ uri: 'http://localhost:8082/graphql' });


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            {/* <Route exact path='/' component={ShowBookList} /> */}
            {/* <Route path='/create-book' component={CreateBook} /> */}
            {/* <Route path='/show-book/:id' component={ShowBookDetails} /> */}
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
