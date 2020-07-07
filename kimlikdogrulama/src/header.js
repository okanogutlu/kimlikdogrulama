import React from 'react';
import {Text} from 'react-native';

const Header = props => {
  return (
    <Text style={(styles.textStyle, styles.viewStyle)}>
      {' '}
      {probs.headerText}
    </Text>
  );
};

const styles = {
  textStyle: {
    fontSize: 25,
  },
  viewStyle: {
    backgroundColor: 'red',
    height: 60,
    marginTop: 15,
  },
};

export default Header;
