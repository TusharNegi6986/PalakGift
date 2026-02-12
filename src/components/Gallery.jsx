import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const media = [
    { id: 1, type: 'image', url: '/images/fm1.jpeg', caption: 'First Meeting' },
    { id: 2, type: 'image', url: '/images/fd1.jpeg', caption: 'Our First Date' },
    { id: 3, type: 'image', url: '/images/cf1.jpeg', caption: 'Confession Day' },
    { id: 4, type: 'image', url: '/images/cf2.jpeg', caption: 'You wrote this note for me' },
    { id: 5, type: 'image', url: '/images/vc1.jpeg', caption: 'Our First Video Call' },
    { id: 6, type: 'video', url: '/videos/vid1.mp4', caption: 'Our First Video' },
    { id: 7, type: 'video', url: '/videos/vid2.mp4', caption: '4 Jan 2026 - Our First Kiss' },
    { id: 8, type: 'image', url: '/images/thenvsnow.jpeg', caption: 'Our first pic vs now' },
    { id: 9, type: 'image', url: '/images/cc.jpeg', caption: 'You wore my Dupatta' },
    { id: 10, type: 'image', url: '/images/fc.jpeg', caption: 'Cute Posing' },
    { id: 11, type: 'image', url: '/images/fc2.jpeg', caption: 'Impress krne ki taiyari' },
    { id: 12, type: 'image', url: '/images/click1.jpeg', caption: 'My baby taking my pic' },
    { id: 13, type: 'image', url: '/images/click2.jpeg', caption: "Me taking my baby's pic" },
  ];

  return (
    <>
      <div style={{
        width: '100vw', 
        minHeight: '100vh', 
        background: 'transparent', 
        padding: '120px 20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <h2 style={{ 
          color: '#fbbf24', 
          fontSize: '2.5rem', 
          marginBottom: '50px',
          fontFamily: "'Playfair Display', serif",
          letterSpacing: '4px'
        }}>
          GALLERY
        </h2>
        
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '40px', 
          width: '100%', 
          maxWidth: '1200px'
        }}>
          {media.map(item => (
            <motion.div 
              key={item.id} 
              onClick={() => setSelectedMedia(item)}
              style={{
                background: 'white', 
                padding: '12px 12px 40px 12px', 
                borderRadius: '2px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                cursor: 'zoom-in'
              }}
              whileHover={{ y: -15, rotate: 2 }}
            >
              <div style={{ overflow: 'hidden', height: '300px', background: '#000', display: 'flex', alignItems: 'center' }}>
                {item.type === 'video' ? (
                  <video 
                    src={item.url} 
                    muted 
                    loop
                    autoPlay
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  <img 
                    src={item.url} 
                    alt={item.caption} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(20%)' }} 
                  />
                )}
              </div>
              <p style={{ textAlign: 'center', marginTop: '15px', color: '#334155', fontSize: '0.9rem', fontFamily: 'cursive' }}>
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            style={{
              position: "fixed",
              top: 0, left: 0, width: "100vw", height: "100vh",
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: 99999,
              display: "flex", justifyContent: "center", alignItems: "center",
              backdropFilter: "blur(5px)"
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "90%",
                maxWidth: "500px",
                background: "white",
                padding: "10px 10px 40px 10px",
                borderRadius: "4px",
                textAlign: 'center'
              }}
            >
              {selectedMedia.type === 'video' ? (
                <video src={selectedMedia.url} controls autoPlay style={{ width: "100%", maxHeight: "70vh" }} />
              ) : (
                <img src={selectedMedia.url} style={{ width: "100%", maxHeight: "70vh", objectFit: "contain" }} />
              )}
              <p style={{ marginTop: '15px', color: '#334155', fontFamily: 'cursive' }}>{selectedMedia.caption}</p>
              <button 
                onClick={() => setSelectedMedia(null)}
                style={{
                  position: "absolute", top: "-15px", right: "-15px",
                  background: "#fbbf24", border: "none", borderRadius: "50%",
                  width: "35px", height: "35px", cursor: "pointer", fontWeight: "bold"
                }}
              >✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;