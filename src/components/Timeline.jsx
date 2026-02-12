import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const events = [
    {
      date: "25 Dec 2025",
      title: "Where it all started",
      desc: "The day when we meet for the very first time, This day was really unexpected yet bueatiful",
      img: "images/story1.jpeg", // Updated to public path
    },
    {
      date: "26 Dec 2025",
      title: "Special Day",
      desc: "We dont have photos of our most important dayyy....you holded my hand and said 'kya tum mujhe apne sth kedarnath jane ka mauka dogi'. That day changed my life and now im the most happiest girl",
      img: "images/26.jpg", // Updated to public path
    },
    {
      date: "27 Dec 2025",
      title: "Our Proper date ",
      desc: "Our proper date...we met again..again this day was specialll tooo...damnn every dayy feels special with you.",
      img: "images/story2.jpeg", // Updated to public path
    },
    {
      date: "28 Dec 2025",
      title: "Another special Day",
      desc: "You kissed on my palm and after that u blushed so hard that u hided ur face with my hands..",
      img: "images/story3.jpeg", // Updated to public path
    },
    {
      date: "28 Dec 2025",
      title: "Confession",
      desc: "Confessed our feelings",
      img: "images/story4.jpeg", // Updated to public path
    },
    {
      date: "Today - 14 Feb 2026",
      title: "Happy Birthday!",
      desc: "Cheers to many more years!",
      img: "images/story5.jpeg", // Updated to public path
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "transparent",
        padding: "120px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
      }}
    >
      <h2
        style={{
          color: "#fbbf24",
          fontSize: "2.5rem",
          letterSpacing: "4px",
          marginBottom: "60px",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "300",
        }}
      >
        THE JOURNEY
      </h2>

      <div style={{ maxWidth: "600px", width: "100%" }}>
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
              borderLeft: "2px solid rgba(251, 191, 36, 0.2)",
              margin: "0 0 40px 20px",
              padding: "0 0 20px 40px",
              position: "relative",
            }}
          >
            {/* The Dot/Node */}
            <div
              style={{
                width: "14px",
                height: "14px",
                background: "#fbbf24",
                borderRadius: "2px",
                position: "absolute",
                left: "-8px",
                top: "0",
                boxShadow: "0 0 15px rgba(251, 191, 36, 0.6)",
              }}
            ></div>

            {/* Glassmorphic Card */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                padding: "25px",
                borderRadius: "15px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <img
                  src={event.img}
                  alt={event.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <span
                style={{
                  color: "#fbbf24",
                  fontWeight: "300",
                  fontSize: "0.85rem",
                  letterSpacing: "2px",
                }}
              >
                {event.date.toUpperCase()}
              </span>
              <h4
                style={{
                  color: "white",
                  margin: "12px 0",
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
              >
                {event.title}
              </h4>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  fontWeight: "300",
                }}
              >
                {event.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;