import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./card.css";

const Card = ({ post }) => {
  const [featuredMediaUrl, setFeaturedMediaUrl] = useState("");

  useEffect(() => {
    const fetchFeaturedMedia = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_ROOT}/media/${post.featured_media}`
        );
        const { data } = response;
        setFeaturedMediaUrl(data.source_url);
      } catch (error) {
        console.error("Error fetching featured media:", error);
      }
    };

    if (post.featured_media) {
      fetchFeaturedMedia();
    }
  }, [post.featured_media]);

  return (
    <div className="card-container">
      <Link to={`/blog/${post.slug}`} className="block">
        {featuredMediaUrl ? (
          <img
            src={featuredMediaUrl}
            alt={post.title.rendered}
            className="card-image"
          />
        ) : (
          <img
            src="https://via.placeholder.com/400x400"
            alt={post.title.rendered}
            className="card-image"
          />
        )}
        <div className="card-content">
          <div className="card-title">{post.title.rendered}</div>
          <p className="card-excerpt">{post.excerpt.rendered}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
