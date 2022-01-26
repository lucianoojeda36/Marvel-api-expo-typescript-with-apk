import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const FavoriteComic: ({ item }: any) => any = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.spacing}>
        <TouchableWithoutFeedback>
          <ImageBackground
            style={styles.image}
            source={{
              uri: `${item.data.results[0].thumbnail.path}.${item.data.results[0].thumbnail.extension}`,
            }}
          >
            <View style={styles.wrapper}>
              <Text style={styles.subtitle}>{item.data.results[0].title}</Text>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 400,
    backgroundColor: '#D67D3E',
    margin: 5,
    borderRadius: 10,
  },
  spacing: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  wrapper: {
    flex: 0.2,
    backgroundColor: '#EEE6E4',
    width: '100%',
    opacity: 0.5,
    borderRadius: 10,
  },
  subtitle: {
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    fontFamily: 'sans-Serif',
  },
  image: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    borderRadius: 10,
  },
  icon: {
    marginLeft: 'auto',
  },
});

export default FavoriteComic;
