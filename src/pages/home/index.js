import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, SafeAreaView} from 'react-native';
import * as actionTypes from './store/actionCreators';

const Home = (props) => {
  const {bannerList, recommendList} = props;

  const {getBannerDataDispatch, getRecommendListDataDispatch} = props;

  console.log(' bannerList ----> ', bannerList);
  console.log(' recommendList ----> ', recommendList);

  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text> hello </Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  bannerList: state.recommend.bannerList,
  recommendList: state.recommend.recommendList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
