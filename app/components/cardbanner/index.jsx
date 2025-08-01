import { Box, Card, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const bannerData = [
  { id: 1, image: 'banner luz do mundo.webp' },
  { id: 2, image: 'banner branca de neve.webp' },
  { id: 3, image: 'banner one piece.webp' },
  { id: 4, image: 'banner homenagem.webp' },
  { id: 5, image: 'banner food service.webp' },
];

export default function CardBanner() {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
      setLoading(true); 
    }, 10000);

    return () => clearInterval(interval);
  }, [isMobile]);

  if (!mounted) return null;

  const renderCard = (item, isPriority = false) => (
    <Card
      key={item.id}
      sx={{
        width: { xs: '100%', md: '500px' },
        backgroundColor: '#98ADBA',
        borderRadius: '10px',
        boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: '16/9',
        ml: { xs: 0, sm: '0.4rem' },
        position: 'relative',
        height: { xs: '180px', md: '240px' },
      }}
    >
      {loading && (
        <Box
          sx={{
            zIndex: 2,
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress sx={{ color: 'white' }} />
        </Box>
      )}
      <Image
        src={`/images/${item.image}`}
        alt={`Banner ${item.id}`}
        fill
        priority={isPriority}
        onLoadingComplete={() => setLoading(false)}
        style={{
          objectFit: 'cover',
          position: 'absolute',
          objectPosition: 'center',
        }}
      />
    </Card>
  );

  return (
    <Box
      sx={{
        mb: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          gap: '1rem',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
        }}
      >
        {isMobile ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={bannerData[currentIndex].id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              {renderCard(bannerData[currentIndex], true)}
            </motion.div>
          </AnimatePresence>
        ) : (
          bannerData.slice(0, 3).map((item, idx) => renderCard(item, idx === 0))
        )}
      </Box>
    </Box>
  );
}
