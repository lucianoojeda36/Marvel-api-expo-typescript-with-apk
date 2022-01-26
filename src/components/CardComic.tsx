import { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { addComicsFavoriteApi, isComicFavoriteApi, removeComicFavoriteApi } from '.././api/Favourite';
import React from 'react';

const CardComic: ({ item }: any) => any = ({ item }: any) => {
  const [isFavorite, setIsFavorite] = useState<any>(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  const { id } = item?.item || {};

  useEffect(() => {
    (async () => {
      try {
        const response = await isComicFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck(prev => !prev);
  };

  const addFavorite = async () => {
    try {
      await addComicsFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removeComicFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.card}>
      <Ionicons
        style={styles.icon}
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={32}
        onPress={isFavorite ? removeFavorite : addFavorite}
      />
      <View style={styles.spacing}>
        <TouchableWithoutFeedback>
          <ImageBackground
            style={styles.image}
            source={{ uri: `${item.item.thumbnail.path}.${item.item.thumbnail.extension}` }}
          >
            <View style={styles.wrapper}>
              <Text style={styles.subtitle}>{item?.item?.title}</Text>
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

export default CardComic;
