import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { counterDecrementedActions, counterIncrementedActions } from './redux';
import { getCountSelector } from './redux/selector';

const CLASS_NAME = 'App';

function App({ count, onIncrement, onDecrement }: any) {
  return (
    <div className={CLASS_NAME}>
      <header className={`${CLASS_NAME}-header`}>
        {count}
        <button onClick={() => onIncrement()} type="button">
          Increment
        </button>
        <button onClick={() => onDecrement()} type="button">
          Decrement
        </button>
      </header>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: getCountSelector(state)
});

const mapDispatchToProps = {
  onIncrement: counterIncrementedActions,
  onDecrement: counterDecrementedActions
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
