import React from 'react';
import {View, Text, Button} from 'react-native';

export default (props) => {
  const {navigation} = props;
  return (
    <View>
      <Text> hello </Text>
      <Button title="button" onPress={() => navigation.push('Detail')} />
    </View>
  );
};
