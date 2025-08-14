import React from 'react';

export default function LiquidGlassEffect() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from- blue-50 to- blue-100">
      <div className="absolute inset-0 backdrop-blur-xl bg-white/30 rounded-3xl border borde r-white/40 shadow-lg w-96 h-96"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Apple Liquid Glass</h1>
        <p className="text-gray-600">This is a static, frosted glass-like effect styled with Tailwind CSS.</p>
      </div>
    </div>
  );
}
