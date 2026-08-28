import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import { site } from './data/site'

const A = '/assets/'

const services = [
  [
    'Dental Implants',
    'Restoring function and confidence with carefully planned implant treatment.'
  ],
  [
    'Oral & Maxillofacial Surgery',
    'Specialist surgical care with a focus on safety, precision and patient comfort.'
  ],
  [
    'Wisdom Tooth Surgery',
    'Assessment and surgical management of impacted or problematic wisdom teeth.'
  ],
  [
    'Root Canal Treatment',
    'Modern endodontic care designed to preserve natural teeth whenever possible.'
  ],
  [
    'Invisalign & Clear Aligners',
    'A discreet approach to improving tooth alignment and smile aesthetics.'
  ],
  [
    'Preventive & General Dentistry',
    'Routine care, diagnosis and prevention to protect long-term oral health.'
  ]
]

// Single clinic gallery
const gallery = [
  ['reception.webp', 'Reception & waiting area'],
  ['seating.webp', 'Comfortable patient seating'],
  ['inside.webp', 'Clinical consultation area'],
  ['sterile.webp', 'Sterilisation & clinical setup'],
  ['system.webp', 'Digital dental technology']
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}

export default function App() {
  const [drawer, setDrawer] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selected, setSelected] = useState(0)

  const nav = [
    ['About', 'about'],
    ['Services', 'services'],
    ['Clinic', 'clinic'],
    ['Testimonials', 'testimonials'],
    ['Contact', 'contact']
  ]

  const whatsapp =
    `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
      'Hello THE ARK DENTAL, I would like to enquire about an appointment.'
    )}`

  const go = (id: string) => {
    setDrawer(false)
    scrollTo(id)
  }

  const openGallery = (index: number) => {
    setSelected(index)
    setGalleryOpen(true)
  }

  return (
    <>
      {/* =========================================================
          HEADER
      ========================================================= */}

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'rgba(251,250,247,.92)',
          backdropFilter: 'blur(16px)',
          color: 'text.primary',
          borderBottom: '1px solid rgba(21,50,56,.08)'
        }}
      >
        <Toolbar
          sx={{
            minHeight: {
              xs: 70,
              md: 82
            }
          }}
        >
          <Box
            component="img"
            src={A + 'logo.webp'}
            alt="THE ARK DENTAL"
            sx={{
              height: {
                xs: 58,
                md: 78
              },
              width: {
                xs: 160,
                md: 210
              },
              objectFit: 'contain',
              objectPosition: 'center',
              mixBlendMode: 'multiply'
            }}
          />

          <Box sx={{ flex: 1 }} />

          {/* Desktop navigation */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            {nav.map(([label, id]) => (
              <Button
                key={id}
                color="inherit"
                onClick={() => go(id)}
              >
                {label}
              </Button>
            ))}

            <Button
              variant="contained"
              startIcon={<CalendarMonthRoundedIcon />}
              onClick={() =>
                window.open(
                  site.contact.appointmentUrl,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              Book Appointment
            </Button>
          </Stack>

          {/* Mobile menu */}
          <IconButton
            onClick={() => setDrawer(true)}
            sx={{
              display: {
                xs: 'inline-flex',
                md: 'none'
              }
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* =========================================================
          MOBILE DRAWER
      ========================================================= */}

      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <Box
          sx={{
            width: 280,
            p: 2
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight={800}>
              THE ARK DENTAL
            </Typography>

            <IconButton onClick={() => setDrawer(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>

          <Stack sx={{ mt: 3 }}>
            {nav.map(([label, id]) => (
              <Button
                key={id}
                sx={{
                  justifyContent: 'flex-start',
                  py: 1.5
                }}
                onClick={() => go(id)}
              >
                {label}
              </Button>
            ))}
          </Stack>

          <Button
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
            startIcon={<CalendarMonthRoundedIcon />}
            onClick={() =>
              window.open(
                site.contact.appointmentUrl,
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            Book Appointment
          </Button>
        </Box>
      </Drawer>

      <Box component="main">

        {/* =========================================================
            HERO
        ========================================================= */}

        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            background: '#073f46'
          }}
        >
          <Box
            component="img"
            src={A + 'reception-left.webp'}
            alt="THE ARK DENTAL reception"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.24
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg,rgba(4,39,44,.96) 0%,rgba(4,50,56,.78) 48%,rgba(4,50,56,.35) 100%)'
            }}
          />

          <Container
            maxWidth="lg"
            sx={{
              position: 'relative',
              py: {
                xs: 8,
                md: 13
              }
            }}
          >
            <Grid
              container
              spacing={6}
              alignItems="center"
            >
              <Grid
                size={{
                  xs: 12,
                  md: 7
                }}
              >
                <Typography
                  sx={{
                    color: '#e1c27a',
                    fontWeight: 900,
                    letterSpacing: {
                      xs: 1.5,
                      md: 3.0
                    },
                    textTransform: 'uppercase',
                    mb: 1.2,
                    fontSize: {
                      xs: '1.1rem',
                      sm: '1.35rem',
                      md: '1.7rem'
                    },
                    lineHeight: 1.1,
                    whiteSpace: {
                    md: 'nowrap'
                  }
                  }}
                >
                  THE ARK DENTAL (Formerly El Zoe)
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,.82)',
                    fontWeight: 700,
                    letterSpacing: {
                      xs: 0.4,
                      md: 0.8
                    },
                    fontSize: {
                      xs: '.95rem',
                      md: '1.15rem'
                    },
                    mb: 2.5
                  }}
                >
                  Specialist Dental & Oral Maxillofacial Care
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: '2.2rem',
                      sm: '3rem',
                      md: '3.6rem'
                    },
                    lineHeight: 1.02,
                    color: '#fff',
                    maxWidth: 820,
                    fontWeight: 850
                  }}
                >
                  A healthier smile starts with the right care.
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 640,
                    fontSize: {
                      xs: '1.05rem',
                      md: '1.2rem'
                    },
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,.82)'
                  }}
                >
                  Specialist-led dental care in a calm, modern clinical
                  environment — with technology, hygiene and patient comfort
                  at the centre of every visit.
                </Typography>

                <Stack
                  direction={{
                    xs: 'column',
                    sm: 'row'
                  }}
                  spacing={1.5}
                  sx={{ mt: 4 }}
                >
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    startIcon={<CalendarMonthRoundedIcon />}
                    onClick={() =>
                      window.open(
                        site.contact.appointmentUrl,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    Book an Appointment
                  </Button>

                  <Button
                    size="large"
                    variant="outlined"
                    sx={{
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,.45)'
                    }}
                    onClick={() => go('services')}
                  >
                    Explore Services
                    <ArrowForwardRoundedIcon sx={{ ml: 1 }} />
                  </Button>
                </Stack>

                <Stack
                  direction={{
                    xs: 'column',
                    sm: 'row'
                  }}
                  spacing={3}
                  sx={{
                    mt: 5,
                    color: 'rgba(255,255,255,.82)'
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <VerifiedRoundedIcon
                      sx={{
                        color: '#e1c27a'
                      }}
                    />

                    <Typography>
                      10+ years experience
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <MedicalServicesRoundedIcon
                      sx={{
                        color: '#e1c27a'
                      }}
                    />

                    <Typography>
                      Oral & Maxillofacial Surgery
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* =========================================================
            ABOUT / DOCTOR
        ========================================================= */}

        <Container
          maxWidth="lg"
          id="about"
          sx={{
            py: {
              xs: 8,
              md: 12
            }
          }}
        >
          <Grid
            container
            spacing={{
              xs: 5,
              md: 7
            }}
            alignItems="center"
          >
            {/* -----------------------------------------------------
                LEFT — DOCTOR IMAGE
            ----------------------------------------------------- */}

            <Grid
              size={{
                xs: 12,
                md: 5
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 390,
                  mx: 'auto'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: {
                      xs: 330,
                      sm: 370,
                      md: 390
                    },
                    borderRadius: 7,
                    overflow: 'hidden',
                    bgcolor: '#202326',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow:
                      '0 18px 45px rgba(20,55,60,.12)'
                  }}
                >
                  <Box
                    component="img"
                    src={A + 'doctor.webp'}
                    alt={site.doctor.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      display: 'block',

                      /*
                       * The original doctor.webp contains large black
                       * margins around the doctor. Scaling the ORIGINAL
                       * image makes the doctor appear larger while
                       * keeping the actual face/details unchanged.
                       */
                      transform: 'scale(1.55)'
                    }}
                  />
                </Box>

                {/* Experience badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: {
                      xs: 4,
                      md: -10
                    },
                    bottom: {
                      xs: 8,
                      md: 14
                    },
                    width: {
                      xs: 82,
                      md: 92
                    },
                    height: {
                      xs: 82,
                      md: 92
                    },
                    bgcolor: 'secondary.main',
                    color: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow:
                      '0 12px 30px rgba(0,0,0,.16)'
                  }}
                >
                  <Typography
                    fontWeight={800}
                    fontSize={{
                      xs: '1rem',
                      md: '1.1rem'
                    }}
                  >
                    10+ yrs
                  </Typography>

                  <Typography
                    variant="caption"
                  >
                    experience
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* -----------------------------------------------------
                RIGHT — DOCTOR DETAILS

                IMPORTANT:
                This is md={7}, not md={10}.
                Therefore the complete text area stays inside the
                right-hand column and can never cross the image.
            ----------------------------------------------------- */}

            <Grid
              size={{
                xs: 12,
                md: 7
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 720
                }}
              >
                <Typography
                  color="secondary.dark"
                  fontWeight={800}
                  letterSpacing={1.5}
                  textTransform="uppercase"
                >
                  Meet your surgeon
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: '2.35rem',
                      md: '3.4rem'
                    },
                    mt: 1,
                    lineHeight: 1.08,
                    fontWeight: 850
                  }}
                >
                  {site.doctor.name}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color: 'primary.main',
                    fontWeight: 750,
                    fontSize: '1.05rem',
                    lineHeight: 1.5
                  }}
                >
                  {site.doctor.qualification}
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    color: 'text.secondary',
                    fontSize: '1.08rem',
                    lineHeight: 1.85,
                    maxWidth: 680
                  }}
                >
                  At THE ARK DENTAL, our approach combines specialist
                  knowledge with thoughtful, patient-centred dentistry.
                  Every treatment plan is built around clear communication,
                  clinical safety and the long-term health of your smile.
                </Typography>

                {/* Doctor highlights */}
                <Stack
                  spacing={2}
                  sx={{
                    mt: 4
                  }}
                >
                  {[
                    'Evidence-informed treatment planning',
                    'Modern clinical and sterilisation protocols',
                    'A calm environment designed around patient comfort'
                  ].map(item => (
                    <Stack
                      key={item}
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                    >
                      <VerifiedRoundedIcon
                        color="primary"
                        sx={{
                          flexShrink: 0
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: {
                            xs: '.98rem',
                            md: '1.05rem'
                          },
                          lineHeight: 1.5
                        }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* =========================================================
            SERVICES
        ========================================================= */}

        <Box
          id="services"
          sx={{
            bgcolor: '#f0f5f3',
            py: {
              xs: 8,
              md: 11
            }
          }}
        >
          <Container maxWidth="lg">
            <Typography
              color="secondary.dark"
              fontWeight={800}
              letterSpacing={1.5}
              textTransform="uppercase"
            >
              Our expertise
            </Typography>

            <Stack
              direction={{
                xs: 'column',
                md: 'row'
              }}
              justifyContent="space-between"
              alignItems={{
                md: 'end'
              }}
              spacing={2}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: '2.35rem',
                    md: '3.4rem'
                  },
                  maxWidth: 700,
                  mt: 1
                }}
              >
                Comprehensive dental care, thoughtfully delivered.
              </Typography>

              <Button
                onClick={() =>
                  window.open(
                    whatsapp,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                endIcon={<ArrowForwardRoundedIcon />}
              >
                Ask about a treatment
              </Button>
            </Stack>

            <Grid
              container
              spacing={2.2}
              sx={{ mt: 5 }}
            >
              {services.map(([title, desc], i) => (
                <Grid
                  key={title}
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 4
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      border:
                        '1px solid rgba(7,84,91,.08)',
                      transition:
                        'transform .25s, box-shadow .25s',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow:
                          '0 18px 45px rgba(7,63,70,.12)'
                      }
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 3.5
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: 'primary.main',
                          color: '#fff',
                          borderRadius: 3,
                          display: 'grid',
                          placeItems: 'center',
                          mb: 3
                        }}
                      >
                        <Typography fontWeight={800}>
                          {String(i + 1).padStart(2, '0')}
                        </Typography>
                      </Box>

                      <Typography
                        variant="h5"
                        fontWeight={800}
                      >
                        {title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1.5,
                          color: 'text.secondary',
                          lineHeight: 1.75
                        }}
                      >
                        {desc}
                      </Typography>

                      <Button
                        sx={{
                          mt: 2,
                          p: 0
                        }}
                        onClick={() =>
                          window.open(
                            whatsapp,
                            '_blank',
                            'noopener,noreferrer'
                          )
                        }
                      >
                        Enquire
                        <ArrowForwardRoundedIcon
                          sx={{
                            fontSize: 18,
                            ml: 0.5
                          }}
                        />
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* =========================================================
            CLINIC / GLIMPSE
        ========================================================= */}

        <Box
          id="clinic"
          sx={{
            bgcolor: '#fff',
            py: {
              xs: 7,
              md: 9
            }
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              maxWidth: '1500px',
              px: {
                xs: 2,
                md: 4
              }
            }}
          >
            <Stack
              direction={{
                xs: 'column',
                sm: 'row'
              }}
              justifyContent="space-between"
              alignItems={{
                sm: 'end'
              }}
              spacing={2}
            >
              <Box>
                <Typography
                  color="secondary.dark"
                  fontWeight={800}
                  letterSpacing={1.5}
                  textTransform="uppercase"
                >
                  Inside the clinic
                </Typography>

                <Typography
                  variant="h3"
                  sx={{ mt: 1 }}
                >
                  A glimpse of THE ARK DENTAL
                </Typography>
              </Box>

              <Button
                onClick={() => openGallery(0)}
              >
                View gallery
              </Button>
            </Stack>

            {/* 
              DESKTOP LAYOUT

              ┌─────────────────┬────────────┬────────────┐
              │                 │  Seating   │ Consultation│
              │   Reception     │            │             │
              │                 ├────────────┼────────────┤
              │                 │Sterilisation│ Digital   │
              │                 │             │ Technology │
              └─────────────────┴────────────┴────────────┘
            */}

            <Box
              sx={{
                mt: 3,
                display: 'grid',

                gridTemplateColumns: {
                  xs: '1fr',
                  sm: '2fr 1fr 1fr'
                },

                gridTemplateRows: {
                  xs: 'auto',
                  sm: '260px 260px',
                  md: '285px 285px'
                },

                gap: {
                  xs: 1.5,
                  md: 2
                }
              }}
            >
              {gallery.map(([img, cap], i) => (
                <Box
                  key={cap}
                  onClick={() => openGallery(i)}
                  sx={{
                    gridColumn: {
                      xs: '1',
                      sm:
                        i === 0
                          ? '1'
                          : i === 1
                            ? '2'
                            : i === 2
                              ? '3'
                              : i === 3
                                ? '2'
                                : '3'
                    },

                    gridRow: {
                      xs: 'auto',
                      sm:
                        i === 0
                          ? '1 / 3'
                          : i === 1 || i === 2
                            ? '1'
                            : '2'
                    },

                    height: {
                      xs: 300,
                      sm: '100%'
                    },

                    minWidth: 0,

                    borderRadius: {
                      xs: 3,
                      md: 4
                    },

                    overflow: 'hidden',

                    cursor: 'pointer',

                    position: 'relative',

                    bgcolor: '#eef3f1',

                    boxShadow:
                      '0 6px 24px rgba(7,63,70,.07)',

                    '&:hover img': {
                      transform: 'scale(1.035)'
                    },

                    '&:hover .gallery-overlay': {
                      backgroundColor:
                        'rgba(0,0,0,.28)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={A + img}
                    alt={cap}
                    sx={{
                      width: '100%',
                      height: '100%',

                      /*
                       * Reception uses contain so the complete
                       * photograph remains visible.
                       *
                       * Other photographs use cover because
                       * their source dimensions work better in
                       * the smaller cards.
                       */
                      objectFit:
                        i === 0
                          ? 'contain'
                          : 'cover',

                      objectPosition: 'center',

                      display: 'block',

                      transition:
                        'transform .35s',

                      backgroundColor:
                        i === 0
                          ? '#eef3f1'
                          : 'transparent'
                    }}
                  />

                  {/* Subtle dark overlay */}
                  <Box
                    className="gallery-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,

                      backgroundColor:
                        'rgba(0,0,0,.12)',

                      transition:
                        'background-color .3s',

                      pointerEvents: 'none'
                    }}
                  />

                  {/* Centered caption */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,

                      display: 'flex',

                      alignItems: 'center',

                      justifyContent: 'center',

                      px: {
                        xs: 2,
                        md: 3
                      },

                      textAlign: 'center',

                      pointerEvents: 'none'
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#fff',

                        fontWeight: 750,

                        fontSize: {
                          xs: '1.05rem',
                          md:
                            i === 0
                              ? '1.35rem'
                              : '1.08rem'
                        },

                        lineHeight: 1.3,

                        textShadow:
                          '0 2px 10px rgba(0,0,0,.7)',

                        maxWidth: 420
                      }}
                    >
                      {cap}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* =========================================================
            TESTIMONIALS
        ========================================================= */}

        <Box
          id="testimonials"
          sx={{
            bgcolor: '#073f46',
            color: '#fff',
            py: {
              xs: 8,
              md: 10
            }
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              textAlign: 'center'
            }}
          >
            <Typography
              color="secondary.light"
              fontWeight={800}
              letterSpacing={1.5}
              textTransform="uppercase"
            >
              Patient experiences
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: '2.25rem',
                  md: '3.2rem'
                },
                mt: 1
              }}
            >
              Real stories will go here.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: 'rgba(255,255,255,.72)',
                lineHeight: 1.8
              }}
            >
              We'll add your genuine patient testimonials
              here once you provide the approved wording.
              We won't invent reviews or publish patient
              information without appropriate permission.
            </Typography>

            <Button
              sx={{ mt: 3 }}
              variant="outlined"
              color="inherit"
              onClick={() =>
                window.open(
                  whatsapp,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              Share a testimonial
            </Button>
          </Container>
        </Box>

        {/* =========================================================
            CONTACT
        ========================================================= */}

        <Container
          id="contact"
          maxWidth="lg"
          sx={{
            py: {
              xs: 8,
              md: 11
            }
          }}
        >
          <Grid
            container
            spacing={4}
          >
            <Grid
              size={{
                xs: 12,
                md: 7
              }}
            >
              <Typography
                color="secondary.dark"
                fontWeight={800}
                letterSpacing={1.5}
                textTransform="uppercase"
              >
                Visit us
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: '2.4rem',
                    md: '3.5rem'
                  },
                  mt: 1
                }}
              >
                Let's take care of your smile.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: 'text.secondary',
                  fontSize: '1.08rem',
                  lineHeight: 1.8
                }}
              >
                For appointments, enquiries or directions,
                choose the option that is easiest for you.
              </Typography>

              <Stack
                spacing={2}
                sx={{ mt: 4 }}
              >
                {/* Location */}
                <Stack
                  direction="row"
                  spacing={2}
                >
                  <LocationOnRoundedIcon color="primary" />

                  <Box>
                    <Typography fontWeight={750}>
                      {site.location}
                    </Typography>

                    <Button
                      sx={{
                        p: 0,
                        mt: 0.5
                      }}
                      onClick={() =>
                        window.open(
                          site.contact.mapsUrl,
                          '_blank',
                          'noopener,noreferrer'
                        )
                      }
                    >
                      Get directions
                    </Button>
                  </Box>
                </Stack>

                {/* Phone */}
                <Stack
                  direction="row"
                  spacing={2}
                >
                  <PhoneRoundedIcon color="primary" />

                  <Box>
                    <Typography fontWeight={750}>
                      {site.contact.phone}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Call the clinic
                    </Typography>
                  </Box>
                </Stack>

                {/* Timings
                    IMPORTANT:
                    Your site.ts now uses:
                    { day: "...", time: "..." }

                    Therefore we use timing.day and timing.time
                    instead of [d,t].
                */}
                <Stack
                  direction="row"
                  spacing={2}
                >
                  <AccessTimeRoundedIcon color="primary" />

                  <Box>
                    {site.timings.map(timing => (
                      <Typography
                        key={timing.day}
                      >
                        <b>{timing.day}:</b>{' '}
                        {timing.time}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
              </Stack>
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 5
              }}
            >
              <Card
                sx={{
                  p: {
                    xs: 3,
                    md: 4
                  },
                  bgcolor: '#f0f5f3',
                  height: '100%'
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={800}
                >
                  Ready to book?
                </Typography>

                <Typography
                  sx={{
                    mt: 1.2,
                    color: 'text.secondary',
                    lineHeight: 1.7
                  }}
                >
                  Use our appointment partner for booking,
                  or message us directly on WhatsApp.
                </Typography>

                <Stack
                  spacing={1.5}
                  sx={{ mt: 4 }}
                >
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    startIcon={
                      <CalendarMonthRoundedIcon />
                    }
                    onClick={() =>
                      window.open(
                        site.contact.appointmentUrl,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    Book Appointment
                  </Button>

                  <Button
                    fullWidth
                    size="large"
                    variant="outlined"
                    startIcon={<WhatsAppIcon />}
                    onClick={() =>
                      window.open(
                        whatsapp,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    WhatsApp Us
                  </Button>
                </Stack>

                <Divider
                  sx={{
                    my: 3
                  }}
                />

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  Appointment availability is managed
                  through our appointment partner. Please do
                  not share sensitive medical information over
                  WhatsApp.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Box
        component="footer"
        sx={{
          bgcolor: '#052f34',
          color: '#fff',
          py: 5
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{
              xs: 'column',
              sm: 'row'
            }}
            justifyContent="space-between"
            spacing={3}
          >
            <Box>
              <Typography
                variant="h6"
                fontWeight={850}
              >
                THE ARK DENTAL
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 0.7,
                  color: 'rgba(255,255,255,.62)'
                }}
              >
                Specialist-led dental care • {site.location}
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={1.5}
            >
              <Button
                color="inherit"
                onClick={() => go('about')}
              >
                About
              </Button>

              <Button
                color="inherit"
                onClick={() => go('services')}
              >
                Services
              </Button>

              <Button
                color="inherit"
                onClick={() => go('contact')}
              >
                Contact
              </Button>
            </Stack>
          </Stack>

          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 4,
              color: 'rgba(255,255,255,.45)'
            }}
          >
            © {new Date().getFullYear()} THE ARK DENTAL.
            All rights reserved.
          </Typography>
        </Container>
      </Box>

      {/* =========================================================
          FLOATING WHATSAPP
      ========================================================= */}

      <IconButton
        aria-label="WhatsApp THE ARK DENTAL"
        onClick={() =>
          window.open(
            whatsapp,
            '_blank',
            'noopener,noreferrer'
          )
        }
        sx={{
          position: 'fixed',
          right: {
            xs: 18,
            md: 28
          },
          bottom: {
            xs: 18,
            md: 28
          },
          width: 60,
          height: 60,
          bgcolor: '#1ea86a',
          color: '#fff',
          boxShadow:
            '0 14px 35px rgba(0,0,0,.25)',
          zIndex: 1200,

          '&:hover': {
            bgcolor: '#168b57'
          }
        }}
      >
        <WhatsAppIcon fontSize="large" />
      </IconButton>

      {/* =========================================================
          FULL-SIZE GALLERY DIALOG
      ========================================================= */}

      <Dialog
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent
          sx={{
            p: 0,
            bgcolor: '#111',
            position: 'relative'
          }}
        >
          <IconButton
            onClick={() => setGalleryOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              zIndex: 2,
              color: '#fff',
              bgcolor: 'rgba(0,0,0,.4)',

              '&:hover': {
                bgcolor: 'rgba(0,0,0,.65)'
              }
            }}
          >
            <CloseRoundedIcon />
          </IconButton>

          <Box
            component="img"
            src={A + gallery[selected][0]}
            alt={gallery[selected][1]}
            sx={{
              width: '100%',
              maxHeight: '78vh',
              objectFit: 'contain',
              display: 'block'
            }}
          />

          <Box
            sx={{
              p: 2,
              color: '#fff'
            }}
          >
            <Typography fontWeight={750}>
              {gallery[selected][1]}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}