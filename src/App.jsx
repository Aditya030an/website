import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/navbar.jsx";
import Home from "./Component/Home";
import WhatWeDo from "./Component/WhatWeDo.jsx";
import Blob from "./Component/Blob.jsx";
import Price from "./Component//Price.jsx";
import Audit from "./Component/Audit.jsx";
import Aboutus from "./Component/AboutUs.jsx";
import Service from "./Component/Service.jsx";
// import Footer from "./Component/Footer.jsx"
import Client from "./Component/Client.jsx";
// import Contact from "./Component/Contact.jsx"

import Login from "./Component/Login.jsx";
import AdminRoute from "./Component/AdminRoute.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import { supabase } from "./lib/supabase.js";
import Signup from "./Component/SignUp.jsx";
import Blogs from "./Component/Blogs.jsx";
import BlogDetails from "./Component/BlogDetails.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user);
    });
  }, []);
  return (
    <Router>
      <div>
        <Navbar />
        <div className="h-32" />

        {/* Define routes for Home only */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/Blob" element={<Blob />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/Audit" element={<Audit />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Client" element={<Client />} />
         <Route path="/Blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/admin/create"
            element={
              <AdminRoute user={user}>
                <CreateBlog />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
