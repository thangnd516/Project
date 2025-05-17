import  { useEffect, useState } from "react";
import { getAllBlogs } from "../../service/apiService";
import { Blog } from "../../type/UserType";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
   const [posts, setPosts] = useState<Blog[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogs = await getAllBlogs();
        setPosts(blogs);
      } catch (err) {
        console.error("Error loading blogs:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div  
            onClick={() => navigate(`/blogs/${post.id}`)} key={post.id} className="border-[1px solid #eee] rounded shadow-sm overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg mt-2 hover:underline cursor-pointer">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mt-2">By {post?.author.username} — {post.createdAt}</p>
              <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
              <button className="text-sm mt-3 text-blue-600 hover:underline">Read More →</button>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold text-sm mb-3">Recent Posts</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {posts.map((post) => (
              <li key={post.id} className="flex items-center gap-2">
                <img src={post.image} alt={post.title} className="w-12 h-12 object-cover rounded" />
                <span>{post.title.length > 40 ? post.title.slice(0, 40) + '...' : post.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold text-sm mb-3">Recent Comments</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Wilson on Vicks VapoRub Cold & Cough Relief Balm 25 ml</li>
            <li>Jones on Nivea Soft Vitamin E Light Moisturiser 50 ml</li>
            <li>Emily on MamyPoko Extra Absorb Pants (L) 62 count</li>
            <li>Jennifer on Zandu Balm For Headache, Backache & Cold 25 ml</li>
            <li>Wilson on Whisper Ultra Soft Air Fresh Sanitary Napkin 30 pads</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
