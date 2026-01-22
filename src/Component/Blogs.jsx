import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import BlogForm from "./BlogForm.jsx";
import { supabase } from "../lib/supabase";

export default function Blogs() {
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const isAdmin = user?.email === import.meta.env.VITE_ADMIN_EMAIL;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    setBlogs(data || []);
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this blog permanently?")) {
      await supabase.from("blogs").delete().eq("id", id);
      fetchBlogs();
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            Insights & Articles
          </motion.h2>

          {isAdmin && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedBlog(null);
                setShowForm(true);
              }}
              className="mt-6 md:mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
            >
              + Publish Blog
            </motion.button>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Admin Actions */}
              {isAdmin && (
                <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                  >
                    <FiEdit className="text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                  >
                    <FiTrash2 className="text-red-600" />
                  </button>
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[16/10] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="inline-block text-xs uppercase tracking-widest bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {blog.tag}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {blog.desc}
                </p>

                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-flex items-center gap-2 mt-6 font-semibold text-blue-600 hover:text-indigo-600 transition"
                >
                  Read Article
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Blog Form Modal */}
      {showForm && (
        <BlogForm
          editData={selectedBlog}
          fetchBlogs={fetchBlogs}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
