import { useEffect, useState } from "react";
import axios from "axios";
import "./Api.css"
import { Link } from "react-router-dom";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const my = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    my();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="apibox mt-10 gap-30">
      {data.slice(0, 6).map((item) => (
        <div key={item.id} className="apiproducts" >
          <Link to={`/description/${item.id}`}>
            <img src={item.image} alt="" width={300} />
          </Link>
          <p><strong>{item.title}</strong></p>
        </div>
      ))}
    </div>
  );
};

export default Api;


