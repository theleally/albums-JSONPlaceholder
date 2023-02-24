import { Routes, Route, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SingleAlbum } from "../pages/SingleAlbum";
import { SinglePhoto } from "../pages/SinglePhoto";
import { NotFound } from "../pages/NotFound";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/album/:id", element: <SingleAlbum /> },
    { path: "/photo/:id", element: <SinglePhoto /> },
    { path: "*", element: <NotFound /> },
  ]);
  /*
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  */
};
