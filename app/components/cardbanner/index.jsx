'use client';

import { Box, IconButton, Card } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bannerData = [
    { id: 1, image: "banner ebf.jpg" },
    { id: 2, image: "banner branca de neve.jpg" },
    { id: 3, image: "banner artesanal.jpg" },
    { id: 4, image: "banner food service.jpg" },
    { id: 5, image: "banner one piece.jpg" },
    { id: 6, image: "capa homem aranha.jpg" },
    { id: 7, image: "banner homenagem.jpg" },
];

export default function CardBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                mb: '2.5rem',
                padding: '1rem',
                display: 'flex',
                overflow: 'hidden',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 650,
                    position: 'relative',
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={bannerData[currentIndex].id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                        style={{ position: 'relative', width: '100%' }}
                    >
                        <Card
                            sx={{
                                width: '100%',
                                backgroundColor: '#98ADBA',
                                borderRadius: '10px',
                                boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src={`/images/${bannerData[currentIndex].image}`}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: 400,
                                    objectFit: "contain",
                                    display: "block",
                                }}
                            />
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </Box>
        </Box>
    );
}
