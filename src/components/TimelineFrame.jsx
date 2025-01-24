import React from "react";

const TimelineFrame = () => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden", maxWidth: "100%" }}>
      <h3>Timeline Kegiatan Harian</h3>
      {/* Frame untuk menampilkan Sheet1.html */}
      <iframe
        src="/Sheet1.html"
        style={{
          width: "100%",
          height: "400px", // Tinggi iframe
          border: "none",
        }}
        title="Timeline Kegiatan Harian"
      />
      {/* Tombol untuk membuka Sheet1.html secara penuh */}
      <div className="mt-10 text-center mb-4">
        <a
          href="/Sheet1.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#007BFF",
            padding: "10px 15px",
            borderRadius: "5px",
            fontSize: "14px",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Lihat Full Timeline
        </a>
      </div>
    </div>
  );
};

export default TimelineFrame;
