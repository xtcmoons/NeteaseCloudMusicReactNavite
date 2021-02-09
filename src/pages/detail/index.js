import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

const Detail = ({navigation}) => {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation, setCount]);

  return <Text>Count: {count}</Text>;
};

// const mapStateToProps = () => {};

// const mapDispatchToProps = () => {};

export default connect()(Detail);
