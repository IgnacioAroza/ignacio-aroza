export const t = {
  es: {
    title: 'Ignacio Aroza · Full Stack',
    role: 'Desarrollador Full Stack, foco en backend',
    headline: 'Diseño y desarrollo sistemas que le ahorran tiempo a un negocio y le muestran cómo le está yendo.',
    cv: 'Descargar CV',
    contact: 'Escribime',
    open: 'Abierto a ofertas',
    other: { href: '/en/', label: 'EN' },
  },
  en: {
    title: 'Ignacio Aroza · Full Stack',
    role: 'Full Stack Developer, backend-focused',
    headline: 'I design and build systems that save a business time and show it how it is doing.',
    cv: 'Download CV',
    contact: 'Get in touch',
    open: 'Open to offers',
    other: { href: '/', label: 'ES' },
  },
} as const;

export type Lang = keyof typeof t;
