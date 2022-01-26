import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes } from 'lodash';
import { FAVORITE_STORAGE } from '../utils/Constants';
import { getComicForIdApi } from './Comics';

export async function getComicsFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || '[]');
  } catch (error) {
    throw error;
  }
}

export async function addComicsFavoriteApi(id: any) {
  try {
    const favoriteComicFromApi = await getComicForIdApi(id);
    const favorites = await getComicsFavoriteApi();
    favorites.push(favoriteComicFromApi);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isComicFavoriteApi(id: any) {
  try {
    const cleanResponseId: any = [];
    const response = await getComicsFavoriteApi();
    response.forEach((e: any): any => {
      cleanResponseId.push(e.data.results[0].id);
    });
    return includes(cleanResponseId, id);
  } catch (error) {
    throw error;
  }
}

export async function removeComicFavoriteApi(id: any) {
  try {
    const favorites = await getComicsFavoriteApi();
    const newFavorites = favorites.filter((e: any) => {
      return e?.data?.results[0].id !== id;
    });
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
