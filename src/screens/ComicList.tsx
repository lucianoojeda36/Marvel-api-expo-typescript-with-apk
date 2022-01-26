import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { getComicsApi } from '../api/Comics';
import CardComic from '../components/CardComic';

const ComicList = () => {
  const [listComics, setListComics] = useState([]);

  const loadComics = async () => {
    const res = await getComicsApi(null);
    setListComics(res.data.results);
  };

  useEffect(() => {
    loadComics();
  }, []);

  const renderItem: (item: any) => any = (item: any) => {
    return <CardComic item={item} />;
  };

  return (
    <FlatList
      // horizontal={false}
      numColumns={2}
      data={listComics}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContentContainer}
      keyExtractor={(item: any) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
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

export default ComicList;
