import { useEffect, useState } from "react";
import ImageView from "./ImageView";

type Customer = {
  id: number;
  name: string;
  address: string;
  bio: string;
};

type CustomerDetailProps = {
  data: Customer;
};

const CustomerDetail = ({ data }: CustomerDetailProps) => {
  const [image, setImage] = useState([]);
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => setImage(res));
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * 400);
      setImageData(image.slice(idx, idx + 9));
    }, 2000);
    return () => clearInterval(interval);
  }, [image]);

  return (
    <div className="customerDetail">
      <div>{data.name}</div>
      <div>{data.address}</div>
      <div>{data.bio}</div>

      <ImageView data={imageData} />
    </div>
  );
};

export default CustomerDetail;
