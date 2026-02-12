import React from 'react';

const Gallery = () => {
  const media = [
    { id: 1, type: 'image', url: 'src/assets/images/fm1.jpeg', caption: 'First Meeting' },
    { id: 2, type: 'image', url: 'src/assets/images/fd1.jpeg', caption: 'Our First Date' }, // Add your video path
    { id: 3, type: 'image', url: 'src/assets/images/cf1.jpeg', caption: 'Confession Day' },
    { id: 3, type: 'image', url: 'src/assets/images/cf2.jpeg', caption: 'You wrote this note for me and memorised it to tell me' },
    { id: 4, type: 'image', url: 'src/assets/images/vc1.jpeg', caption: 'Our First Video Call' },
    { id: 5, type: 'video', url: 'src/assets/videos/vid1.mp4', caption: 'Our First Video' },
    { id: 6, type: 'video', url: 'src/assets/videos/vid2.mp4', caption: '4 Jan 2026 - Our First Kiss' },
    { id: 7, type: 'image', url: 'src/assets/images/thenvsnow.jpeg', caption: 'Our first pic vs now' },
    { id: 7, type: 'image', url: 'src/assets/images/cc.jpeg', caption: 'You wore my Dupatta on Visarjan Day' },
    { id: 7, type: 'image', url: 'src/assets/images/fc.jpeg', caption: 'Cute Posing' },
    { id: 7, type: 'image', url: 'src/assets/images/fc2.jpeg', caption: 'Father in law ko impress krne ki taiyari' },
    { id: 7, type: 'image', url: 'src/assets/images/click1.jpeg', caption: 'My baby taking my pic' },
    { id: 7, type: 'image', url: 'src/assets/images/click2.jpeg', caption: "Me taking my birthday baby's pic" },
  ];

  return (
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
          <div key={item.id} style={{
            background: 'white', 
            padding: '12px 12px 40px 12px', 
            borderRadius: '2px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
            transition: 'transform 0.4s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-15px) rotate(2deg)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'}
          >
            <div style={{ overflow: 'hidden', height: '300px', background: '#000', display: 'flex', alignItems: 'center' }}>
              {item.type === 'video' ? (
                <video 
                  src={item.url} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              ) : (
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    filter: 'sepia(20%)'
                  }} 
                />
              )}
            </div>
            <p style={{ 
              textAlign: 'center', 
              marginTop: '15px', 
              color: '#334155', 
              fontSize: '0.9rem',
              fontFamily: 'cursive'
            }}>
              {item.caption} {item.type === 'video' ? '🎥' : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;