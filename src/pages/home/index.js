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
              <View>
                <Image style={styles.cellImage} source={{uri: item.picUrl}} />
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
    backgroundColor: '#f00',
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
