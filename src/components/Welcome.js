import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Welcome extends Component {
	constructor(props){
    super(props)
  }

  render() {
  	const { controller, ux } = this.props;
  	return (
  		ux.showApp && <View><Text>{controller.appName}</Text></View>
  	)
  }
}

function mapStateToProps(state){
	const {controller, ux} = state
  return {
  	controller,
  	ux
  }
}

export default connect(mapStateToProps)(Welcome);