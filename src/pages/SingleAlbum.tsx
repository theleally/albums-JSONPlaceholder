import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../api";
import { Album } from "../types/Album";
import { Photo } from "../types/Photo";
import { PhotoItem } from "../components/PhotoItem";

export const SingleAlbum = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [albumInfo, setAlbumInfo] = useState<Album>({
    id: 0,
    title: "",
    userId: 0,
  });

  useEffect(() => {
    if (params.id) {
      loadPhotos(params.id);
      loadAlbumInfo(params.id);
    }
  }, []);

  const loadPhotos = async (id: string) => {
    setLoading(true);
    let json = await api.getPhotosFromAlbum(id);
    setLoading(false);
    setPhotos(json);
  };

  const loadAlbumInfo = async (id: string) => {
    setLoading(true);
    let json = await api.getAlbum(id);
    setLoading(false);
    setAlbumInfo(json);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleHomeButton = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>
        {albumInfo.title} - #UserID: {albumInfo.userId}
      </h1>
      <hr />
      <div>
        {photos.map((item, index) => (
          <PhotoItem key={index} data={item} />
        ))}
      </div>
      <button onClick={handleBackButton}>Voltar</button>
      <br />
      <br />
      <button onClick={handleHomeButton}>Home</button>
    </div>
  );
};
