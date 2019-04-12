import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
    
    console.log (this.props.smurfs)

  }


  render() {
    return (
      <div className="App">
        <h1>Smurf Village 2: Electric Boogaloo</h1>
        <SmurfForm />
        <SmurfList smurfs = {this.props.smurfs}/>

      </div>
    );
  }
}


const mapStateToProps = state => {
  const { smurfsList } = state;
  return {
    smurfs: smurfsList.smurfs,
    error: smurfsList.error,
    fetchingSmurfs: smurfsList.fetchingSmurfs
  }
}


export default connect(mapStateToProps, { getSmurfs })(App)
