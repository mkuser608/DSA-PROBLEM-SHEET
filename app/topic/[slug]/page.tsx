"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Post {
  title: string;
  content: string;
}

const PostPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      console.log(slug);
      const fetchPost = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://example.com/api/posts/${slug}`);
          const data = await response.json();
          setPost(data);
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...12 {searchParams.get("slug")}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
