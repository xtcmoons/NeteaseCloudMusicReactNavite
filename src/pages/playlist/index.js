import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import * as actionTypes from './store/actionCreators';

const PlaylistCatlist = (props) => {
  const {sub} = props;
  const {getPlaylistCatlistDispatch} = props;

  console.log(' play list cat list ----------> ', sub);

  useEffect(() => {
    getPlaylistCatlistDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>playlist</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    sub: state.playlistCatlist.sub,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlaylistCatlistDispatch() {
      dispatch(actionTypes.getPlaylistCatlist());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCatlist);
