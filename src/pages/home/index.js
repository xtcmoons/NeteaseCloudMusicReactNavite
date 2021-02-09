import React, {useState, useEffect, useLayoutEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Dimensions,
  Button,
} from 'react-native';
import Swiper from 'react-native-swiper';

import * as actionTypes from './store/actionCreators';
import {colors} from '../../config/colors';

const {width, height} = Dimensions.get('window');

const Home = (props) => {
  const {bannerList, recommendList} = props;
  const {getBannerDataDispatch, getRecommendListDataDispatch} = props;
  const {navigation} = props;
  // console.log('->>>>>', bannerList);
  // console.log('------>', recommendList);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: null,
    });
  }, [navigation]);

  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={
            <View style={styles.image}>
              <Swiper
                style={styles.wrapper}
                height={160}
                autoplay={true}
                autoplayTimeout={1}
                removeClippedSubviews={false}>
                {bannerList.map((item) => {
                  return (
                    <Image
                      key={item.imageUrl}
                      style={styles.image}
                      source={{uri: item.imageUrl}}
                    />
                  );
                })}
              </Swiper>
            </View>
          }
          data={recommendList}
          horizontal={false}
          numColumns={3}
          keyExtractor={(item) => item.id + ''}
          renderItem={({item, index, separators}) => {
            return (
              <View style={styles.cellImage}>
                <TouchableHighlight onPress={() => navigation.push('Detail')}>
                  <Image style={styles.cellImage} source={{uri: item.picUrl}} />
                </TouchableHighlight>
              </View>
            );
          }}
        />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: 160,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width,
    height: 160,
  },
  cellImage: {
    width: width / 3,
    height: width / 3,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
