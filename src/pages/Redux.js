import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './actions';

const Redux = ({ counter, incrementCounter, decrementCounter }) => {
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    );
  };
  
  const mapStateToProps = state => {
    return {
      counter: state.counter
    };
  };
  
  const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Redux);
 