import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import * as actionTypes from './store/actionCreators';

import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const Home = (props) => {
  const {bannerList, recommendList} = props;
  const {getBannerDataDispatch, getRecommendListDataDispatch} = props;
  // console.log('->>>>>', bannerList);
  // console.log('------>', recommendList);

  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Hello world</Text>
        <View style={styles.image}>
          <Swiper style={styles.image} autoplay>
            {bannerList.map((item) => {
              console.log('swiper -----------> ', item.imageUrl);
              <View style={styles.image}>
                <Image style={styles.image} source={{uri: item.imageUrl}} />
              </View>;
            })}
          </Swiper>
        </View>
        <FlatList
          data={recommendList}
          horizontal={false}
          numColumns={3}
          keyExtractor={(item) => item.id + ''}
          renderItem={(item) => {
            return (
              <View>
                <Image
                  style={styles.cellImage}
                  source={{uri: item.item.picUrl}}
                />
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
  wrapper: {
    backgroundColor: '#f00',
    height: 100,
  },
  image: {
    width,
    height: 100,
  },
  cellImage: {
    width: width / 3,
    height: width / 3,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
