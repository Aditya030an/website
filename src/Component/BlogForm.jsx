import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const BlogForm = ({ editData, fetchBlogs, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    tag: "",
    description: "",
    content: "",
  });

  console.log("edit", editData);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editData) {
      setFormData({
        title: editData?.title,
        tag: editData?.tag,
        description: editData?.description,
        content: editData?.content,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    // if (!editData ) {
    //   alert("Please select an image");
    //   setLoading(false);
    //   return;
    // }

    try {
     

      console.log(formData);

      // 🔹 Create or Update
      if (editData) {
        // await supabase
        //   .from("blogs")
        //   .update({ ...formData, image_url: imageUrl })
        //   .eq("id", editData.id);
        await supabase.from("blogs").delete().eq("id", editData.id);
      }
      await supabase
        .from("blogs")
        .insert([{ ...formData }]);

      fetchBlogs();
      onClose();
    } catch (err) {
      alert("Failed to save blog");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-4xl rounded-2xl p-6 relative shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-6">
          {editData ? "Update" : "Add New"} Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Main Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left */}
            <div className="space-y-4">
              <input
                name="tag"
                placeholder="Tag"
                value={formData.tag}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Right */}
            <div className="space-y-4">
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                rows="2"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <textarea
                name="content"
                placeholder="Content"
                value={formData.content}
                onChange={handleChange}
                rows="8"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-12 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading
                ? editData
                  ? "Updating..."
                  : "Submitting..."
                : editData
                ? "Update"
                : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
