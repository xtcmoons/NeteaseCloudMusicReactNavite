import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

const Detail = ({navigation}) => {
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
