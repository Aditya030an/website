// import React, { useState, useEffect } from "react";
// import logo from "./photos/temp.png";
// import MenuOverlay from "./MenuOverlay";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
//           ${scrolled
//             ? "bg-white/90 backdrop-blur-md shadow-sm"
//             : "bg-transparent"
//           }
//         `}
//       >
//         <div className="flex items-center justify-between h-32 px-16">

//           {/* Hamburger */}
//           <div
//             className="space-y-2 cursor-pointer group"
//             onClick={() => setOpen(true)}
//           >
//             <span className="block w-9 h-[3px] bg-[#003060] rounded transition group-hover:w-7"></span>
//             <span className="block w-9 h-[3px] bg-[#003060] rounded"></span>
//             <span className="block w-9 h-[3px] bg-[#003060] rounded transition group-hover:w-5"></span>
//           </div>

//           {/* Logo */}
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-20 w-auto object-contain"
//           />
//         </div>
//       </nav>

//       {/* Overlay Menu */}
//       {open && <MenuOverlay close={() => setOpen(false)} />}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import logo from "./photos/temp.png";
import MenuOverlay from "./MenuOverlay.jsx";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import {
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex items-center justify-between h-32 px-16 bg-white/90 backdrop-blur-md shadow-sm">
          {/* Hamburger */}
          <div
            className="space-y-2 cursor-pointer group"
            onClick={() => setOpen(true)}
          >
            <span className="block w-9 h-[3px] bg-[#003060] rounded transition group-hover:w-7"></span>
            <span className="block w-9 h-[3px] bg-[#003060] rounded"></span>
            <span className="block w-9 h-[3px] bg-[#003060] rounded transition group-hover:w-5"></span>
          </div>

          {/* Logo */}
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
        </div>
        {!user ? (
            <Link to="/login" className="p-2 border rounded-full">
              <FaUserShield />
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
      </nav>

      {/* Overlay Menu */}
      {open && <MenuOverlay close={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
