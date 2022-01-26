import React, { useEffect, useCallback } from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { getComicsFavoriteApi } from '../api/Favourite';
import { useFocusEffect } from '@react-navigation/native';
import CardComic from '../components/CardComic';
import FavoriteComic from '../components/FavoriteComic';
import NoLogged from '../components/NoLogged';
import useAuth from '../hooks/Auth';

const Favorite = () => {
  const [cardFavorite, setCardFavorite] = useState<any>([]);
  // const [reloadFavorite, setReloadFavorite] = useState<any>(false);

  const { auth } = useAuth();

  const loadComics = async () => {
    try {
      const response = await getComicsFavoriteApi();
      setCardFavorite(response);
    } catch (error) {
      setCardFavorite(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        loadComics();
      }
    }, [auth])
  );

  const renderItem = ({ item }: any) => {
    return <FavoriteComic item={item} />;
  };

  return !auth ? (
    <NoLogged />
  ) : (
    <FlatList
      // horizontal={false}
      numColumns={2}
      data={cardFavorite}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContentContainer}
      keyExtractor={(item: any) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: '#886F6F',
  },
  cardList: {
    backgroundColor: 'blue',
  },
  separator: {
    height: 10,
    backgroundColor: 'red',
  },
});

export default Favorite;
