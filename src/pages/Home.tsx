import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Album } from "../types/Album";
import { AlbumItem } from "../components/AlbumItem";
import { api } from "../api";

export const Home = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    setLoading(true);
    let json = await api.getAlbums();
    setLoading(false);
    setAlbums(json);
  };

  return (
    <div>
      {loading && <div>Carregando...</div>}
      <div>
        {albums.map((item, index) => (
          <AlbumItem key={index} id={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};
