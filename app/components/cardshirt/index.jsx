'use client';

import { Box, Card, useMediaQuery, useTheme, CircularProgress } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const data = [
  { id: 1, frente: 'camisa azul frente.webp', costa: 'camisa azul costa.webp' },
  { id: 2, frente: 'camisa amarela frente.webp', costa: 'camisa amarela costa.webp' },
  { id: 3, frente: 'camisa roxa frente.webp', costa: 'camisa roxa costa.webp' },
  { id: 4, frente: 'camisa preta frente.webp', costa: 'camisa preta costa.webp' },
];

export default function CardShirt() {
  const theme = useTheme();
  const [isClient, setIsClient] = useState(false);

  const [loadingStates, setLoadingStates] = useState(() =>
    data.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {})
  );

  const handleImageLoad = (id) => {
    setLoadingStates((prev) => ({ ...prev, [id]: false }));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });


  const [showBackArray, setShowBackArray] = useState(() => data.map(() => false));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBackArray((prev) => prev.map((val) => !val));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const showBackMap = useMemo(() => {
    const map = {};
    data.forEach((item, i) => {
      map[item.id] = showBackArray[i];
    });
    return map;
  }, [showBackArray]);

  const getItem = (offset) => {
    const index = (currentIndex + offset + data.length) % data.length;
    return data[index];
  };

  const handleDragEnd = (_, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    } else if (info.offset.x > threshold) {
      setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
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
          style={{
            display: 'flex',
            gap: 16,
            cursor: 'grab',
          }}
        >
          {[-1, 0, 1].map((offset) => {
            const item = getItem(offset);
            const showBack = showBackMap[item.id];

            const scale = offset === 0 ? 1 : 0.8;
            const opacity = offset === 0 ? 1 : 0.5;
            const zIndex = offset === 0 ? 2 : 1;

            return (
              <motion.div
                key={item.id}
                animate={{ scale, opacity, zIndex }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 200,
                  height: 280,
                  flexShrink: 0,
                }}
              >
                <Card
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#343B3F',
                    borderRadius: '8px',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                      <>
                        {loadingStates[item.id] && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              bgcolor: 'rgba(0,0,0,0.3)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              zIndex: 2,
                            }}
                          >
                            <CircularProgress color="inherit" />
                          </Box>
                        )}

                        <motion.img
                          key={showBack ? `back-${item.id}` : `front-${item.id}`}
                          src={`/images/${showBack ? item.costa : item.frente}`}
                          alt={`Imagem ${item.id}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          onLoad={() => handleImageLoad(item.id)}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                          }}
                        />
                      </>
                    </AnimatePresence>
                  </Box>
                </Card>
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
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: { xs: '1rem', sm: '1.5rem', md: '1.5rem' },
        padding: 1.5,
        mt: 4,
      }}
    >
      {data.map((item, index) => {
        const showBack = showBackArray[index];

        return (
          <motion.div
            key={item.id}
            animate={{ opacity: 1, zIndex: 4 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              maxWidth: 400,
              height: 400,
              transformOrigin: 'center',
            }}
          >
            <Card
              sx={{
                width: '85%',
                height: '85%',
                backgroundColor: '#343B3F',
                borderRadius: '8px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={showBack ? `back-${item.id}` : `front-${item.id}`}
                    src={`/images/${showBack ? item.costa : item.frente}`}
                    alt={`Imagem ${item.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  />
                </AnimatePresence>
              </Box>
            </Card>
          </motion.div>
        );
      })}
    </Box>
  );
}
