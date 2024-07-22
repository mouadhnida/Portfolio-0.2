// components/SVGIllustration.js
"use client";

import { motion } from "framer-motion";

const RealisticSVGIllustration = () => {
  return (
    <motion.svg
      width="800"
      height="600"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      {/* Background */}
      <rect width="100%" height="100%" fill="#FFFFFF" />

      {/* Computer Monitor */}
      <rect
        x="100"
        y="50"
        width="600"
        height="400"
        rx="20"
        ry="20"
        fill="#E0E0E0"
        stroke="#000000"
        strokeWidth="2"
      />
      <rect
        x="120"
        y="70"
        width="560"
        height="360"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Code on Screen */}
      <text
        x="140"
        y="100"
        fontFamily="Courier New"
        fontSize="14"
        fill="#000000"
      >
        const portfolio = {"{"}
      </text>
      <text
        x="160"
        y="120"
        fontFamily="Courier New"
        fontSize="14"
        fill="#000000"
      >
        projects: [
      </text>
      <text
        x="180"
        y="140"
        fontFamily="Courier New"
        fontSize="14"
        fill="#000000"
      >
        {"{"} name: "Project A", tech: ["React", "Node.js"] {"}"},
      </text>
      <text
        x="180"
        y="160"
        fontFamily="Courier New"
        fontSize="14"
        fill="#000000"
      >
        {"{"} name: "Project B", tech: ["Next.js", "GraphQL"] {"}"}
      </text>
      <text
        x="160"
        y="180"
        fontFamily="Courier New"
        fontSize="14"
        fill="#000000"
      >
        ],
      </text>
      <text
        x="140"
        y="200"
        fontFamily="Courier New"
        fontSize="14"
        fill="#000000"
      >
        skills: ["JavaScript", "CSS", "HTML"]
      </text>
      <text
        x="140"
        y="220"
        fontFamily="Courier New"
        fontSize="14"
        fill="#000000"
      >
        {"};"}
      </text>

      {/* Portfolio Sections */}
      <motion.rect
        x="150"
        y="470"
        width="120"
        height="50"
        fill="#E0E0E0"
        stroke="#000000"
        strokeWidth="2"
        whileHover={{ scale: 1.1 }}
      />
      <motion.rect
        x="300"
        y="470"
        width="120"
        height="50"
        fill="#E0E0E0"
        stroke="#000000"
        strokeWidth="2"
        whileHover={{ scale: 1.1 }}
      />
      <motion.rect
        x="450"
        y="470"
        width="120"
        height="50"
        fill="#E0E0E0"
        stroke="#000000"
        strokeWidth="2"
        whileHover={{ scale: 1.1 }}
      />
      <motion.rect
        x="600"
        y="470"
        width="120"
        height="50"
        fill="#E0E0E0"
        stroke="#000000"
        strokeWidth="2"
        whileHover={{ scale: 1.1 }}
      />

      <text x="180" y="500" fontFamily="Verdana" fontSize="16" fill="#000000">
        Projects
      </text>
      <text x="330" y="500" fontFamily="Verdana" fontSize="16" fill="#000000">
        Skills
      </text>
      <text x="480" y="500" fontFamily="Verdana" fontSize="16" fill="#000000">
        About
      </text>
      <text x="630" y="500" fontFamily="Verdana" fontSize="16" fill="#000000">
        Contact
      </text>
    </motion.svg>
  );
};

export default RealisticSVGIllustration;
