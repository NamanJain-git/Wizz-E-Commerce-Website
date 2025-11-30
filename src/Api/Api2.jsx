import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Api.css";
import axios from "axios";

const Api2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const my = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (!cancelled) {
          setData(response.data); // <-- use response.data
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    my();

    // cleanup to avoid state update on unmounted component
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="apibox mt-20 gap-30">
      {data.slice(14, 20).map((item) => (
        <div className="apiproducts" key={item.id}>
          <Link to={`/description/${item.id}`}>
            <img src={item.image} alt={item.title} width={300} />
          </Link>
          <p><strong>{item.title}</strong></p>
        </div>
      ))}
    </div>
  );
};

export default Api2;
