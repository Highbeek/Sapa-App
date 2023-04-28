import React from "react";
import { useQuery } from "react-query";
import "./ImageGrid.css";
import Loading from "../assets/Loading2.gif";

const API_KEY = "5Atla-z0n5qdb0BdweCEmCZzJaojKG8CS0Y7J3rHKZc";
const API_URL = "https://api.unsplash.com/search/photos";

function ImageGrid(props) {
  const { isLoading, error, data } = useQuery(
    ["images", props.searchTerm, props.numImages],
    async () => {
      const response = await fetch(
        `${API_URL}?query=${props.searchTerm}&per_page=${props.numImages}&client_id=${API_KEY}`
      );
      const data = await response.json();
      return data.results;
    },
    {
      refetchInterval: 60000, // Update images every minute
    }
  );

  if (isLoading) {
    return (
      <div className="loading">
        <img src={Loading} alt="loading..." />
      </div>
    );
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className={`image-grid-container ${props.className}`}>
      {data.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
        />
      ))}
    </div>
  );
}

export default ImageGrid;
