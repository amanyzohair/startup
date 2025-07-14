"use client";

import React, { useState } from "react";
import "./side-menu.scss";
import Link from "next/link";
const SideMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopExpanded, setDesktopExpanded] = useState(true);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleDesktop = () => setDesktopExpanded(!desktopExpanded);

  const menuItems = [
    { name: "Orders History", href: "orders" },
    { name: "Wish List", href: "wish-list" },
    { name: "Settings", href: "settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobile}
        />
      )}

      {/* Mobile toggle button */}
      <button
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-30 p-2 md:hidden bg-gray-800 rounded-md text-white"
      >
        toggle
        {/* <Bars3Icon className="h-6 w-6" /> */}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative z-50 bg-gray-800 text-white 
          transition-all duration-300 
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${desktopExpanded ? "w-64" : "w-16"}
        `}
      >
        <div className="flex flex-col h-full flex-1">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            {desktopExpanded && (
              <h1 className="text-xl font-bold">My Account</h1>
            )}
            <button
              onClick={toggleMobile}
              className="md:hidden p-1 rounded hover:bg-gray-700"
            >
              toggle
              {/* <XMarkIcon className="h-5 w-5" /> */}
            </button>
            <button
              onClick={toggleDesktop}
              className="hidden md:block p-1 rounded hover:bg-gray-700"
            >
              <span
                className={`h-5 w-5 transition-transform ${
                  !desktopExpanded && "rotate-180"
                }`}
              >
                X
              </span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={"/account/" + item.href}
                className={`
                  flex items-center p-3 rounded-lg mb-1 transition-colors
                  hover:bg-gray-700
                  ${desktopExpanded ? "justify-start" : "justify-center"}
                `}
              >
                {desktopExpanded && <span className="ml-3">{item.name}</span>}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-2 border-t border-gray-700">
            <a
              href="#"
              className={`
                flex items-center p-3 rounded-lg transition-colors
                hover:bg-gray-700
                ${desktopExpanded ? "justify-start" : "justify-center"}
              `}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
              {desktopExpanded && <span className="ml-3">Logout</span>}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
