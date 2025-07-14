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
                    p: 3,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #9FB4C2',
                }}
            >
                <Typography sx={{ color: '#7397AD', fontSize: '24px', display: 'flex' }}>
                    Sua logo aqui
                </Typography>

                <Box
                    sx={{
                        gap: 6,
                        display: 'flex',
                    }}
                >
                    <Typography sx={{ color: '#7397AD', fontSize: '20px' }}>
                        Sobre
                    </Typography>

                    <Typography sx={{ color: '#7397AD', fontSize: '20px' }}>
                        Trabalhos
                    </Typography>

                    <Typography sx={{ color: '#7397AD', fontSize: '20px' }}>
                        Contato
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    mt: 10,
                    mb: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    ml: 30,
                    gap: 3,
                }}
            >
                <Avatar
                    sx={{
                        width: '250px',
                        height: '250px',

                    }}
                />

                <Box
                    sx={{ display: 'flex', flexDirection: 'column', }}
                >
                    <Typography
                        sx={{
                            mt: 3,
                            color: 'white',
                            fontSize: '34px',
                        }}
                    >
                        Neves Arts
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            color: 'white',
                            fontSize: '22px',
                            width: '40%',
                        }}
                    >
                        Somos uma marca que transforma ideias em estampas criativas,
                        unindo estilo e personalidade. Com foco em qualidade e originalidade,
                        levamos arte para camisetas, canecas e acessórios, criando produtos que inspiram e se destacam.
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: '80%',
                    height: 'auto',
                    display: 'flex',
                    margin: '20px auto',
                    borderRadius: '10px',
                    flexDirection: 'column',
                }}
            >

                <Typography sx={{ color: 'white', fontSize: '32px', mt: 3, ml: 6 }}>Camisas personalizadas</Typography>

                <CardShirt />

                <Box
                    sx={{
                        mt: 4,
                        gap: 5,
                        px: 4,
                        height: '450px',
                        display: 'flex',
                        borderRadius: '8px',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#7397AD',
                        width: '87%',
                        mx: 'auto'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography sx={{ color: 'white', fontSize: '32px', mt: 3, ml: 7 }}>Banners</Typography>

                        <CardBanner />
                    </Box>

                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '22px',
                            maxWidth: 400,
                            textAlign: 'justify',
                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt molestiae sed velit asperiores ullam dolore maiores quisquam eos quo
                        rerum similique obcaecati veritatis, nesciunt optio architecto dolores quod porro at?
                    </Typography>
                </Box>

                <Typography sx={{ color: 'white', fontSize: '38px', mx: 'auto', mt: 5, mb: 2 }}>Convites</Typography>

                <CardInvite />
            </Box>

            <Box
                sx={{
                    mt: 6,
                    width: '90%',
                    height: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography sx={{ color: 'white', fontSize: '38px', ml: 31, mt: 4, }}>Entre em contato com a gente e faça seu orçamento</Typography>

                <Box
                    sx={{
                        mt: 3,
                        ml: 31,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
                        <FaWhatsapp style={{ color: 'white', fontSize: 32 }} />
                        <Typography sx={{ color: 'white', fontSize: '26px' }}>Telefone/Whatsapp: (91) 00000-0000</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
                        <EmailIcon style={{ color: 'white', fontSize: 32 }} />
                        <Typography sx={{ color: 'white', fontSize: '26px' }}>Email: Contato@estampascriativas</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
                        <FaInstagram style={{ color: 'white', fontSize: 32 }} />
                        <Typography sx={{ color: 'white', fontSize: '26px' }}>Instagram: @NevesArts</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
