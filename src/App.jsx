import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Message from "./components/Message";
import Stats from "./components/Stats";
import SecretVault from "./components/SecretVault";
import PageTransition from "./components/PageTransition";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const hearts = Array.from({ length: 40 });

  return (
    <div
      className="birthday-app"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      {/* 1. BACKGROUND LAYER: Persistent Heart Animation */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "110vh", x: Math.random() * 100 + "vw" }}
            animate={{ opacity: [0, 0.6, 0], y: "-10vh" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: Math.random() * 20,
            }}
            style={{
              position: "absolute",
              fontSize: "20px",
              color: "#ff4d6d",
              textShadow: "0 0 10px rgba(255, 77, 109, 0.6)",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* 2. NAVIGATION LAYER */}
      <nav className="navbar" style={{ zIndex: 1000 }}>
        <Link to="/">Home</Link>
        <Link to="/story">Story</Link>
        <Link to="/memories">Gallery</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/wish">Message 💌</Link> 
        <Link to="/vault">Vault 🔒</Link>
      </nav>

      {/* 3. CONTENT LAYER: Routes with Transitions */}
      <main
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "block",
        }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Hero name="Partner" date="2026-02-14" />
                </PageTransition>
              }
            />
            <Route
              path="/story"
              element={
                <PageTransition>
                  <Timeline />
                </PageTransition>
              }
            />
            <Route
              path="/memories"
              element={
                <PageTransition>
                  <Gallery />
                </PageTransition>
              }
            />
            <Route
              path="/wish"
              element={
                <PageTransition>
                  <Message />
                </PageTransition>
              }
            />
            <Route
              path="/stats"
              element={
                <PageTransition>
                  <Stats />
                </PageTransition>
              }
            />
            <Route
              path="/vault"
              element={
                <PageTransition>
                  <SecretVault />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}










































