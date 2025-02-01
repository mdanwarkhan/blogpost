import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';
import dateFormatter from '../utils/dateFormatter';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog posts from the API
    axiosInstance.get('/posts')  // Replace with your API endpoint
      .then((response) => {
        setBlogPosts(response.data);  // Assuming the response data is an array of blog posts
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load blog posts');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Blog Posts</h2>

      <div className="d-flex flex-column">
        {blogPosts?.map((post) => (
          <div key={post._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">By {post.author} | {dateFormatter(post.createdAt)}</h6>
              <p className="card-text">{post.content}</p>
              <Link to={`post/${post._id}`} className="btn btn-primary">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
