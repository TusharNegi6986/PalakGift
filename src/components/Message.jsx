import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      background: 'transparent', // Crucial for global hearts
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '120px 20px',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: '700px',
          width: '100%',
          padding: '60px 40px',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(15px)',
          borderRadius: '30px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
          textAlign: 'center'
        }}
      >
        <p style={{ 
          letterSpacing: '8px', 
          color: '#fbbf24', 
          fontSize: '0.8rem', 
          marginBottom: '30px', 
          textTransform: 'uppercase' 
        }}>
          A Personal Note
        </p>

        <h2 style={{ 
          fontSize: '2.5rem', 
          fontFamily: "'Playfair Display', serif", 
          fontWeight: '300', 
          marginBottom: '30px',
          color: 'white'
        }}>
          To My Partner
        </h2>

        <div style={{ 
          height: '1px', 
          width: '40px', 
          background: 'rgba(251, 191, 36, 0.5)', 
          margin: '0 auto 30px' 
        }}></div>

        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '2', 
          color: 'rgba(255, 255, 255, 0.85)', 
          fontWeight: '300',
          fontStyle: 'italic'
        }}>
          "Your presence has been the greatest gift I’ve ever received. 
          As you step into this new year of your life, I hope it is filled 
          with as much joy and light as you bring into mine every single day."
        </p>

        <p style={{ 
          fontSize: '1.3rem', 
          letterSpacing: '5px', 
          color: '#fbbf24', 
          fontWeight: '300',
          marginTop: '40px'
        }}>
          14 / 02 / 2026
        </p>

        <div style={{ 
          marginTop: '40px', 
          fontSize: '1.5rem', 
          opacity: 0.7, 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center' 
        }}>
          <span>✍️</span> <span>✨</span> <span>🤍</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Message;