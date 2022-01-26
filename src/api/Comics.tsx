import { API_HOST } from '../utils/Constants';

export async function getComicsApi(endpointUrl: any) {
  try {
    const url = `${API_HOST}/comics?ts=1&apikey=2f8ff9213be451f625ce8e8a036f0597&hash=2bc0b6df64d4c1802144d0cb2055836e`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getComicForIdApi(id: any) {
  try {
    const url = `${API_HOST}/comics/${id}?ts=1&apikey=2f8ff9213be451f625ce8e8a036f0597&hash=2bc0b6df64d4c1802144d0cb2055836e`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
