import React from "react";
import { Link } from "react-router-dom";
import logo from "./photos/temp.png";
import { ArrowRight, X } from "lucide-react";

const MenuOverlay = ({ close }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="h-full flex">

        {/* LEFT PANEL */}
        <div className="w-1/3 px-24 py-20 flex flex-col justify-between border-r border-slate-200">

          {/* Header */}
          <div className="flex justify-between items-center">
            <p className="text-xs tracking-[0.3em] text-slate-400 uppercase">
              Menu
            </p>
            <button
              onClick={close}
              className="text-slate-800 hover:rotate-90 transition-transform duration-300"
            >
              <X size={28} />
            </button>
          </div>

          {/* MENU (Premium Interaction) */}
          <ul className="space-y-10 text-[42px] font-extralight text-slate-900">

            {[
              { label: "Home", link: "/" },
              { label: "Service", link: "/Service" },
              { label: "Client", link: "/Client" },

              { label: "About", link: "/AboutUs" },
              { label: "Blog", link:"/Blogs" },
              { label: "Contact", disabled: true }
            ].map((item, i) => (
              <li
                key={item.label}
                className={`
                  group flex items-center gap-6
                  transition-all duration-500
                  ${item.disabled ? "text-slate-400 cursor-not-allowed" : ""}
                `}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Editorial dot */}
                <span
                  className={`
                    h-2 w-2 rounded-full bg-slate-900
                    transition-all duration-300
                    ${item.active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                  `}
                />

                {item.link ? (
                  <Link
                    to={item.link}
                    onClick={close}
                    className="relative"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-slate-900 transition-all duration-500 group-hover:w-full" />
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}

          </ul>

          {/* Footer */}
          <div className="text-xs tracking-wide text-slate-500 space-y-2">
            <p>Your Company Pvt Ltd</p>
            <p>Indore, India</p>
            <p>+91 00000 00000</p>
          </div>
        </div>

        {/* RIGHT PANEL — REDESIGNED */}
      {/* RIGHT PANEL — CLASSY & TIMELESS */}
<div className="w-2/3 bg-white px-24 py-20 flex flex-col justify-between">

{/* Top subtle label */}
<p className="text-xs tracking-[0.35em] uppercase text-slate-400">
  Studio
</p>

{/* Main message */}
<div className="max-w-[560px]">
  <h2 className="text-[52px] leading-[1.1] font-light text-slate-900 mb-14">
    Designing digital experiences <br />
    with clarity and intent.
  </h2>

  <button className="group text-lg font-light text-slate-900 flex items-center gap-3">
    Book a discovery call
    <span className="h-[1px] w-10 bg-slate-900 transition-all duration-500 group-hover:w-16" />
  </button>
</div>

{/* Bottom actions */}
<div className="flex justify-between items-end border-t border-slate-200 pt-12">

  <div className="space-y-3">
    <p className="text-xs tracking-[0.3em] uppercase text-slate-400">
      Audit
    </p>
    <p className="text-xl font-light text-slate-900">
      Grade your website
    </p>
  </div>

  <div className="space-y-3 text-right">
    <p className="text-xs tracking-[0.3em] uppercase text-slate-400">
      Contact
    </p>
    <p className="text-xl font-light text-slate-900">
      Send us an email
    </p>
  </div>

</div>
</div>


      </div>
    </div>
  );
};

export default MenuOverlay;
