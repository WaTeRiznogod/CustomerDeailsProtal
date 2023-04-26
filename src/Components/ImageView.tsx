type Image = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
type ImageViewProps = {
  data: Image[];
};
const ImageView = (props: ImageViewProps) => {
  const { data } = props;
  return (
    <div className="parent">
      {data.map((item, index) => (
        <div key={index} className="cell">
          <img src={item.url} alt={item.title} />
        </div>
      ))}
    </div>
  );
};
export default ImageView;
