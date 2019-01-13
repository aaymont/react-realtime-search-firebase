import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import MovieList from './components/MovieList';

class App extends Component {
  render () {
    const config = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTHDOMAIN,
      databaseURL: process.env.REACT_APP_DATABASEURL,
      projectId: process.env.REACT_APP_PROJECTID,
      storageBucket: process.env.REACT_APP_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
    };
  
    firebase.initializeApp(config);

    return (
      <Provider store={store}>
        <div className="App">
          <header className="Header">
            <div className="Title">
              Searchable List using Firebase
            </div>
            <div className="Description">
              <p>Here you can search the top movies of all time in real time.</p>
              <p>
                The data is retrieved from a Firebase database and stored 
                using application level state in Redux.  The search function
                uses component level state to filter and render the list.
              </p>
            </div>
          </header>
          <div>
            <MovieList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
