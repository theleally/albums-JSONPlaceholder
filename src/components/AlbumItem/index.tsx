import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
};
export const AlbumItem = ({ id, title }: Props) => {
  return (
    <div>
      <Link to={`/album/${id}`}>{title}</Link>
    </div>
  );
};
