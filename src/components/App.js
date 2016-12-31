import React, {PropTypes} from 'react';
import HomeHeader from './home/HomeHeader';
import {connect} from 'react-redux';
import classNames from 'classnames';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-fluid">
        <HomeHeader/>

        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
