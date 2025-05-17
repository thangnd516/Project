import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../../type/UserType";
import { getBlogById } from "../../service/apiService";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Blog | null>(null);

  useEffect(() => {
    if (id) {
      getBlogById(Number(id))
        .then(setPost)
        .catch((err) => console.error("Error loading blog:", err));
    }
  }, [id]);

  if (!post) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-md mb-6" />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        By {post.author?.username || "Unknown"} —{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="text-base text-gray-700 mb-6">{post.excerpt}</p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogDetail;
