import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  getAlbums: async () => {
    let response = await http.get("/albums");
    return response.data;
    /*  - Standart Request -
    let response = await fetch(`${BASE}/albums`);
    let json = await response.json();
    return json;
    */
  },
  getAlbum: async (id: string) => {
    let response = await http.get(`/albums/${id}`);
    return response.data;
  },
  getPhotosFromAlbum: async (id: string) => {
    let response = await http.get(`/albums/${id}/photos`);
    return response.data;
  },
  getPhoto: async (id: string) => {
    let response = await http.get(`/photos/${id}`);
    return response.data;
  },
};
