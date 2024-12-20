import React, { useEffect, useState } from 'react';
import './Posts.css';
const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      const data = await res.json();
      setPosts((prev) => [...prev, ...data.data]);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, [page]);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="posts">
      <h1>Posts</h1>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.name}</h2>
          <p>{post.airline[0]?.slogan || 'No Description'}</p>
        </div>
      ))}
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};
export default Posts;
