'use client';

import React, { useState, useEffect } from 'react';

export default function Loading() {
  const keys = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % keys.length);
    }, 200);
    return () => clearInterval(interval);
  }, [keys.length]);

  useEffect(() => {
    // Hide loader after one full cycle (7 keys * 200ms = 1400ms)
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) {
    return null; // Page will show after animation completes
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="flex gap-3" style={{ perspective: '800px' }}>
        {keys.map((key, index) => (
          <div
            key={index}
            className={`w-11 h-11 sm:w-15 sm:h-15 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center font-bold text-sm sm:text-xl transition-all duration-150 ${
              index === activeIndex ? 'translate-y-1.5 scale-96 text-green-500' : 'text-sky-400'
            }`}
            style={{
              boxShadow: index === activeIndex
                ? '0 2px 0 #020617, 0 4px 10px rgba(0,0,0,0.5)'
                : '0 6px 0 #020617, 0 10px 20px rgba(0,0,0,0.6)',
            }}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}