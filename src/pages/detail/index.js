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

  return (
    <View>
      <Button
        title="go to playlist"
        onPress={() => navigation.push('PlaylistCatlist')}
      />
    </View>
  );
};

// const mapStateToProps = () => {};

// const mapDispatchToProps = () => {};

export default connect()(Detail);
