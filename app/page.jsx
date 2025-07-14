'use client';

import 'normalize.css';
import CardShirt from './components/cardshirt';
import CardBanner from './components/cardbanner';
import CardInvite from './components/cardinvite';
import { Box, Typography, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#252323' }}>
            <Box
                sx={{
                    p: '1.5rem',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #9FB4C2',
                }}
            >
                <Typography sx={{ color: '#7397AD', fontSize: '1.5rem', display: 'flex' }}>
                    Sua logo aqui
                </Typography>

                <Box sx={{ gap: '3rem', display: 'flex' }}>
                    <Typography sx={{ color: '#7397AD', fontSize: '1.25rem' }}>Sobre</Typography>
                    <Typography sx={{ color: '#7397AD', fontSize: '1.25rem' }}>Trabalhos</Typography>
                    <Typography sx={{ color: '#7397AD', fontSize: '1.25rem' }}>Contato</Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    mt: '5rem',
                    mb: '5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    ml: '15rem',
                    gap: '1.5rem',
                }}
            >
                <Avatar sx={{ width: '15.625rem', height: '15.625rem' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ mt: '1.5rem', color: 'white', fontSize: '2.125rem' }}>
                        Neves Arts
                    </Typography>

                    <Typography
                        sx={{
                            mt: '0.5rem',
                            color: 'white',
                            fontSize: '1.375rem',
                            width: '40%',
                        }}
                    >
                        Somos uma marca que transforma ideias em estampas criativas, unindo estilo e personalidade. Com foco em qualidade e originalidade, levamos arte para camisetas, canecas e acessórios, criando produtos que inspiram e se destacam.
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: '80%',
                    height: 'auto',
                    display: 'flex',
                    margin: '1.25rem auto',
                    borderRadius: '0.625rem',
                    flexDirection: 'column',
                }}
            >
                <Typography sx={{ color: 'white', fontSize: '2rem', mt: '1.5rem', ml: '1.5rem' }}>
                    Camisas personalizadas
                </Typography>

                <CardShirt />

                <Box
                    sx={{
                        mt: '2rem',
                        gap: '1.25rem',
                        px: '2rem',
                        height: '28.125rem',
                        display: 'flex',
                        borderRadius: '0.5rem',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#7397AD',
                        width: '87%',
                        mx: 'auto',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: 'white', fontSize: '2rem', mt: '1.5rem', ml: '1.20rem' }}>
                            Banners
                        </Typography>

                        <CardBanner />
                    </Box>

                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '1.375rem',
                            maxWidth: '25rem',
                            textAlign: 'justify',
                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae sed velit asperiores ullam dolore maiores quisquam eos quo rerum similique obcaecati veritatis, nesciunt optio architecto dolores quod porro at?
                    </Typography>
                </Box>

                <Typography sx={{ color: 'white', fontSize: '2.375rem', mx: 'auto', mt: '3rem', mb: '1rem' }}>
                    Convites
                </Typography>

                <CardInvite />
            </Box>

            <Box
                sx={{
                    mt: '3rem',
                    width: '90%',
                    height: '23.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography sx={{ color: 'white', fontSize: '2.375rem', ml: '15.5rem', mt: '1rem' }}>
                    Entre em contato com a gente e faça seu orçamento
                </Typography>

                <Box
                    sx={{
                        mt: '1.5rem',
                        ml: '15.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mt: '1.5rem' }}>
                        <FaWhatsapp style={{ color: 'white', fontSize: '2rem' }} />
                        <Typography sx={{ color: 'white', fontSize: '1.625rem' }}>
                            Telefone/Whatsapp: (91) 00000-0000
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mt: '1.5rem' }}>
                        <EmailIcon style={{ color: 'white', fontSize: '2rem' }} />
                        <Typography sx={{ color: 'white', fontSize: '1.625rem' }}>
                            Email: Contato@estampascriativas
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mt: '1.5rem' }}>
                        <FaInstagram style={{ color: 'white', fontSize: '2rem' }} />
                        <Typography sx={{ color: 'white', fontSize: '1.625rem' }}>
                            Instagram: @NevesArts
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
