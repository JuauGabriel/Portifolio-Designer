'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const convites = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
];

export default function CardConvites() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

    useEffect(() => {
        setIsClient(true);
    }, []);

    const getItem = (offset) => {
        const index = (currentIndex + offset + convites.length) % convites.length;
        return convites[index];
    };

    const handleDragEnd = (event, info) => {
        const threshold = 50;
        if (info.offset.x < -threshold) {
            setCurrentIndex((prev) => (prev + 1) % convites.length);
        } else if (info.offset.x > threshold) {
            setCurrentIndex((prev) => (prev - 1 + convites.length) % convites.length);
        }
    };

    if (!isClient) return null; 

    if (isMobile) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 4,
                    overflow: 'hidden',
                    width: '100%',
                }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    dragElastic={0.2}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    style={{
                        display: 'flex',
                        gap: 16,
                        cursor: 'grab',
                    }}
                >
                    {[-1, 0, 1].map((offset) => {
                        const item = getItem(offset);
                        const isCenter = offset === 0;
                        const scale = isCenter ? 1 : 0.9;
                        const opacity = isCenter ? 1 : 0.6;
                        const zIndex = isCenter ? 2 : 1;

                        return (
                            <motion.div
                                key={item.id}
                                animate={{ scale, opacity, zIndex }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    width: 240,
                                    height: 300,
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    backgroundColor: '#343B3F',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    flexShrink: 0,
                                    cursor: 'grab',
                                }}
                            >
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                overflow: 'hidden',
                mt: 4,
            }}
        >
            {convites.map((item, index) => {
                const isHovered = hoveredIndex === index;
                const width = isHovered ? 270 : 250;
                const height = isHovered ? 320 : 300;
                const margin = isHovered ? 2 : 1;

                return (
                    <motion.div
                        key={item.id}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={{ width, height, margin, zIndex: isHovered ? 2 : 1 }}
                        transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
                        style={{
                            borderRadius: '10px',
                            overflow: 'hidden',
                            backgroundColor: '#343B3F',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}
                    >
                    </motion.div>
                );
            })}
        </Box>
    );
}
