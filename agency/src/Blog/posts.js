import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/card";
import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 9;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `${process.env.REACT_APP_API_ROOT}/posts?per_page=${perPage}&page=${currentPage}`;
        const response = await axios.get(url);
        console.log(response);
        const { data, headers } = response;
        setTotalPages(Number(headers["x-wp-totalpages"]));
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [currentPage]);

  return (
    <>
      <section className="posts-section">
        <div className="max-width-container text-center">
          <div className="grid-container">
            {loading ? (
              <div className="loading-indicator" />
            ) : (
              posts.map((post) => {
                return <Card post={post} key={post.id} />;
              })
            )}
          </div>

          {posts.length > 0 && !loading && (
            <div className="pagination-container">
              <button
                className="pagination-btn prev-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>

              <span className="pagination-info">
                {currentPage} of {totalPages}
              </span>

              <button
                className="pagination-btn next-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Posts;
