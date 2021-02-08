import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';

const Detail = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>hello world</Text>
      </View>
    </SafeAreaView>
  );
};

// const mapStateToProps = () => {};

// const mapDispatchToProps = () => {};

export default connect()(Detail);
