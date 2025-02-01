import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';
import { useParams } from 'react-router-dom';

function PostDetails() {
  // State for post data and loading state
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the post id from the URL params
  const { id } = useParams();

  // Fetch post details when the component mounts
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        // Assuming you're using a placeholder API like JSONPlaceholder
        const response = await axiosInstance.get(`/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        setError('Error fetching post details');
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  if (!post) {
    return <div className="text-danger">Post not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Post Details</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <div className="text-muted">
            <strong>Post ID:</strong> {post._id}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
