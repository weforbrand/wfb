import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [featuredMediaUrl, setFeaturedMediaUrl] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const url = `${process.env.REACT_APP_API_ROOT}/posts?slug=${slug}`;
        const response = await axios.get(url);
        if (response.data.length > 0) {
          setPost(response.data[0]);
          if (response.data[0].featured_media) {
            fetchFeaturedMedia(response.data[0].featured_media);
          }
        } else {
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [slug]);

  const fetchFeaturedMedia = async (mediaId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ROOT}/media/${mediaId}`
      );
      const { data } = response;
      setFeaturedMediaUrl(data.source_url);
    } catch (error) {
      console.error("Error fetching featured media:", error);
    }
  };

  return (
    <div className="container-start">
      {post ? (
        <div className="flex-panel">
          <div className="featured_t_img">
            <div className="blog_banner_left">
              <h1 className="text-2xl font-bold mb-4">{post.title.rendered}</h1>
            </div>
            <div className="blog_banner_right">
              {featuredMediaUrl && (
                <img
                  src={featuredMediaUrl}
                  alt={post.title.rendered}
                  width="300"
                  height="300"
                  className="w-full h-64 object-cover mb-4"
                  loading="lazy"
                />
              )}
            </div>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PostDetails;
