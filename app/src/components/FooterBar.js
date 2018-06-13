import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

import { withRouter } from 'react-router-dom'

class LabelBottomNavigation extends React.Component {

  constructor(props) {
    super(props)
  }

  handleChange = (event, value) => {
    this.props.history.push(value);
  };

  render() {
    return (
    <BottomNavigation value={this.props.location.pathname} onChange={this.handleChange} style={{width: '100%', position: 'absolute', bottom:0}}>
        <BottomNavigationAction label="home" value="/" icon={<Icon> home </Icon>} />
        <BottomNavigationAction label="list" value="/list" icon={<Icon> list </Icon>} />
    </BottomNavigation>
    );
  }
}

export default withRouter(LabelBottomNavigation);