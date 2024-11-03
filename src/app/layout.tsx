"use client";
import { useState ,useEffect } from "react";
// import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
  const preferenTheme = window.matchMedia('(prefers-color-scheme: dark)')
  setDarkMode(preferenTheme?true:false)
})
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full bg-default-50 pb-5 text-default-900 ${darkMode == true ? "dark" : ""} `}
      >
        <Providers>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
