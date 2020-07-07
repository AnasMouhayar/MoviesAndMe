/*
import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'


export default class App extends React.Component {
 
 
  render() {
    return (
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}*/
import React from "react";
import AppContainer from "./Navigation";
import Firebase, { FirebaseProvider } from "./config/Firebase";

export default function App() {
  return (
      <FirebaseProvider value={Firebase}>
        <AppContainer />
      </FirebaseProvider>
  );
}
