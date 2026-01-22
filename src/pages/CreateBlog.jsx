import { useState } from "react";
import { supabase } from "../lib/supabase.js";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const createBlog = async () => {

    // 3️⃣ Save blog
    const { error } = await supabase.from("blogs").insert([
      { title, tag, description, content }
    ]);

    if (!error) alert("Blog created!");
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Tag" onChange={e => setTag(e.target.value)} />
      <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
      <button onClick={createBlog}>Create</button>
    </div>
  );
}
