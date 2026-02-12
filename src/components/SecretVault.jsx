import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SecretVault = () => {
  const [pin, setPin] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const correctPin = "1408"; // The secret key

  const handleInput = (digit) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      if (newPin === correctPin) {
        setTimeout(() => setIsUnlocked(true), 300);
      } else if (newPin.length === 4) {
        setTimeout(() => setPin(""), 500); 
      }
    }
  };

  return (
    <div style={{
      width: '100vw', 
      height: '100vh', 
      background: 'transparent', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div 
            key="lock"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{ 
              color: '#fbbf24', 
              letterSpacing: '8px', 
              marginBottom: '40px',
              fontFamily: "'Playfair Display', serif",
              fontWeight: '300'
            }}>
              PRIVATE VAULT
            </h2>

            {/* PIN Indicators */}
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px' }}>
              {[...Array(4)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={pin.length > i ? { scale: [1, 1.2, 1], backgroundColor: '#fbbf24' } : {}}
                  style={{
                    width: '14px', height: '14px', borderRadius: '50%',
                    border: '1px solid #fbbf24',
                    backgroundColor: pin.length > i ? '#fbbf24' : 'transparent',
                    boxShadow: pin.length > i ? '0 0 15px #fbbf24' : 'none'
                  }}
                ></motion.div>
              ))}
            </div>

            {/* Glass Keypad */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "X"].map((num, i) => (
                num === "" ? <div key={i} /> : 
                <motion.button 
                  key={i} 
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => num !== "X" ? handleInput(num.toString()) : setPin("")}
                  style={{
                    padding: '25px', 
                    borderRadius: '50%', 
                    width: '75px', height: '75px',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.03)', 
                    backdropFilter: 'blur(10px)',
                    color: 'white', fontSize: '1.2rem', cursor: 'pointer',
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  {num}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Unlocked Glass Card with Image */
          <motion.div 
            key="content"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            style={{ 
              textAlign: 'center', 
              maxWidth: '500px', 
              padding: '40px', 
              background: 'rgba(255, 255, 255, 0.03)', 
              backdropFilter: 'blur(15px)',
              borderRadius: '30px', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
            }}
          >
            {/* Added Secret Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '15px',
                overflow: 'hidden',
                marginBottom: '25px',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)'
              }}
            >
              <img 
                src="images/special_memory.jpeg" // Update with your image path
                alt="Vault Memory"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            <h2 style={{ 
              color: '#fbbf24', 
              marginBottom: '20px', 
              fontFamily: "'Playfair Display', serif",
              fontWeight: '300',
              letterSpacing: '4px'
            }}>
              ACCESS GRANTED
            </h2>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              lineHeight: '1.8', 
              fontSize: '1rem',
              fontWeight: '300',
              fontStyle: 'italic'
            }}>
              "This is a hidden space just for us. No matter where we go or how much time passes, 
              some memories are worth keeping under lock and key."
            </p>
            <div style={{ marginTop: '30px', fontSize: '1.5rem', opacity: 0.8, display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <span>🔐</span> <span>✨</span> <span>🤍</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecretVault;