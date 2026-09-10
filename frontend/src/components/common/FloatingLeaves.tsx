import React from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export const FloatingLeaves: React.FC = () => {
  const leaves = [
    { id: 1, top: '12%', left: '8%', size: 28, delay: 0, duration: 8, opacity: 0.25, rotate: 15 },
    { id: 2, top: '25%', right: '10%', size: 34, delay: 1.5, duration: 10, opacity: 0.2, rotate: -25 },
    { id: 3, top: '55%', left: '4%', size: 24, delay: 2.2, duration: 9, opacity: 0.18, rotate: 45 },
    { id: 4, top: '70%', right: '7%', size: 30, delay: 0.8, duration: 11, opacity: 0.22, rotate: -10 },
    { id: 5, top: '85%', left: '14%', size: 22, delay: 3, duration: 8.5, opacity: 0.15, rotate: 30 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-emerald-600"
          style={{
            top: leaf.top,
            left: leaf.left,
            right: leaf.right,
            opacity: leaf.opacity,
          }}
          animate={{
            y: [0, -22, 0],
            rotate: [leaf.rotate, leaf.rotate + 14, leaf.rotate],
            x: [0, 8, 0],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: leaf.delay,
          }}
        >
          <Leaf size={leaf.size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};
