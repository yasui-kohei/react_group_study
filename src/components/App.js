import React, { Component } from 'react';

import { connect } from 'react-redux'
import {increment, decrement } from '../actions';


class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>count: { props.count }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

/// stateとActionをPropsのコンポーネントと関連付ける部分

const mapStateToProps = state => ({count: state.count.count})
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)