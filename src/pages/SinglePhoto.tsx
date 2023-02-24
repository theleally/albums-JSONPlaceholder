import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../api";
import { Photo } from "../types/Photo";

export const SinglePhoto = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [photoInfo, setPhotoInfo] = useState<Photo>();

  useEffect(() => {
    if (params.id) {
      loadPhotoInfo(params.id);
    }
  }, []);

  const loadPhotoInfo = async (id: string) => {
    setLoading(true);
    let json = await api.getPhoto(id);
    setLoading(false);
    setPhotoInfo(json);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleHomeButton = () => {
    navigate("/");
  };

  return (
    <div>
      {loading && "Carregando..."}

      <p>{photoInfo?.title}</p>
      <img src={photoInfo?.thumbnailUrl} alt="" />
      <br />
      <button onClick={handleBackButton}>Voltar</button>
      <br />
      <br />
      <button onClick={handleHomeButton}>Home</button>
    </div>
  );
};
