import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountUpNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const endValue = parseInt(end);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{end.includes('+') ? '+' : ''}</span>;
};

const Stats = () => {
  const statsData = [
    { label: "DAYS TOGETHER", value: "49" },
    { label: "CITIES VISITED", value: "0" },
    { label: "LATE NIGHT CALLS", value: "40+" },
    { label: "COFFEES SHARED", value: "7" }
  ];

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      /* Transparency allows global hearts and gradient to show */
      background: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '120px 20px',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ 
          color: '#fbbf24', 
          letterSpacing: '6px', 
          marginBottom: '60px', 
          textTransform: 'uppercase',
          fontFamily: "'Playfair Display', serif",
          fontWeight: '300',
          fontSize: '2rem'
        }}
      >
        Our Metrics
      </motion.h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
        width: '100%',
        maxWidth: '1000px'
      }}>
        {statsData.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{
              /* Glassmorphism Effect */
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '50px 20px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            <h3 style={{ 
              color: '#fbbf24', 
              fontSize: '3.5rem', 
              margin: '0', 
              fontWeight: '300',
              fontFamily: "'Playfair Display', serif"
            }}>
              <CountUpNumber end={stat.value} />
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.6)', 
              fontSize: '0.75rem', 
              letterSpacing: '3px', 
              marginTop: '15px', 
              fontWeight: '300',
              textTransform: 'uppercase'
            }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;