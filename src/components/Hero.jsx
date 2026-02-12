import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ name, date }) => {
  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${day} / ${month} / ${year}`;
  };

  const hearts = Array.from({ length: 40 });
  
  // Updated src paths to point to /images/ inside the public folder
  const collageImages = [
    { src: 'images/img1.jpeg', top: '8%', left: '8%', rotate: -8, size: '150px', delay: 0 },
    { src: 'images/img2.jpeg', top: '12%', right: '10%', rotate: 6, size: '130px', delay: 0.8 },
    { src: 'images/img3.jpeg', bottom: '12%', left: '10%', rotate: -4, size: '170px', delay: 0.4 },
    { src: 'images/img4.jpeg', bottom: '18%', right: '8%', rotate: 10, size: '140px', delay: 1.2 },
    { src: 'images/img5.jpeg', top: '45%', right: '4%', rotate: -2, size: '120px', delay: 1.5 },
  ];

  return (
    <div style={{ 
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'transparent',
      color: 'white',
      margin: 0,
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* Background Hearts */}
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: '110vh', x: Math.random() * 100 + 'vw' }}
          animate={{ opacity: [0, 0.7, 0], y: '-10vh' }}
          transition={{ duration: Math.random() * 10 + 8, repeat: Infinity, delay: Math.random() * 15, ease: "linear" }}
          style={{
            position: 'absolute',
            fontSize: Math.random() * 20 + 15 + 'px', 
            color: '#ff4d6d',
            zIndex: 1,
            textShadow: '0 0 10px rgba(255, 77, 109, 0.8)',
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Polaroid Image Collage */}
      {collageImages.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1,
            scale: 1,
            y: [0, 15, 0], 
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: img.delay },
            y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            position: 'absolute',
            top: img.top,
            left: img.left,
            right: img.right,
            bottom: img.bottom,
            width: img.size,
            height: 'auto',
            padding: '8px 8px 30px 8px',
            background: 'white', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            transform: `rotate(${img.rotate}deg)`,
            zIndex: 5,
          }}
        >
          <img 
            src={img.src} 
            alt={`Memory ${index + 1}`} 
            style={{ 
                width: '100%', 
                height: img.size,
                objectFit: 'cover',
                display: 'block'
            }} 
          />
        </motion.div>
      ))}

      {/* Center Content */}
      <div style={{ zIndex: 10, padding: '0 20px', maxWidth: '600px', position: 'relative' }}>
        <motion.p 
          style={{ letterSpacing: '8px', color: '#fbbf24', fontSize: '0.7rem', marginBottom: '20px', textTransform: 'uppercase' }}
        >
          Celebrating Your Day
        </motion.p>
        
        <motion.h1 
          style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '300', letterSpacing: '2px', margin: 0, fontFamily: "'Playfair Display', serif" }}
        >
          Happy Birthday, <br/> My Pretty Little Baby
        </motion.h1>
        
        <div style={{ height: '1px', width: '40px', background: '#fbbf24', margin: '25px auto', opacity: 0.6 }} />

        <p style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: '300', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: '25px' }}>
          "To the man who makes every moment <br/> feel like a beautiful dream."
        </p>

        <p style={{ fontSize: '1.3rem', letterSpacing: '5px', color: '#fbbf24', fontWeight: '300' }}>
          {formatDate(date)}
        </p>
      </div>
    </div>
  );
};

export default Hero;