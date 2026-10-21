// Textos del hero tal como quedaron en la maqueta del 2026-10-20 (artifact PwqT6Y5zoitLv5S3w73Ko8).
export const t = {
  es: {
    title: 'Ignacio Aroza · Desarrollador de software',
    nav: { proyectos: 'Proyectos', otros: 'Otros', contacto: 'Contacto' },
    open: 'Abierto a ofertas',
    kicker: 'Desarrollador de software',
    role: 'Diseño y desarrollo sistemas que le ahorran tiempo a un negocio y le muestran cómo le está yendo.',
    lede: 'Transporte, ventas en ferias, reservas y control de flota: sistemas que hoy usan negocios reales.',
    cv: 'Descargar CV',
    write: 'Escribime',
    copied: 'Email copiado',
    off3d: 'Desactivar 3D',
    on3d: 'Activar 3D',
    tabs: { whoami: 'whoami', stack: 'stack', proyectos: 'proyectos', contacto: 'contacto' },
    who: 'Soy Ignacio, desarrollador de software de Córdoba. En mi agencia, organIA, empiezo entendiendo cómo trabaja el negocio, que casi siempre vive en planillas, cuadernos o WhatsApp, y después lo diseño y lo programo de punta a punta, hasta dejarlo funcionando. Sumo IA cuando le resuelve una tarea concreta a quien usa el sistema.',
    stack: ['APIs REST', 'Bases de datos relacionales', 'Integraciones con servicios externos', 'IA aplicada'],
    proy: ['Transporte', 'Ventas para ferias', 'Miami Getaway', 'Objetivos con IA'],
    cont: 'Escribime directo o dejá tu pregunta en el chat de abajo.',
    links: [['proyectos', '~/proyectos', '↵'], ['otros', '~/stack', '↵'], ['contacto', '~/contacto', '↵']],
  },
  en: {
    title: 'Ignacio Aroza · Software developer',
    nav: { proyectos: 'Projects', otros: 'More', contacto: 'Contact' },
    open: 'Open to offers',
    kicker: 'Software developer',
    role: "I design and build systems that save a business time and show it how it's doing.",
    lede: 'Transport, fair sales, bookings and fleet control: systems that real businesses use today.',
    cv: 'Download CV',
    write: 'Email me',
    copied: 'Email copied',
    off3d: 'Disable 3D',
    on3d: 'Enable 3D',
    tabs: { whoami: 'whoami', stack: 'stack', proyectos: 'projects', contacto: 'contact' },
    who: "I'm Ignacio, a software developer from Córdoba. At my agency, organIA, I start by understanding how the business works, which almost always lives in spreadsheets, notebooks or WhatsApp, and then I design and build it end to end until it is running. I add AI when it solves a concrete task for the person using the system.",
    stack: ['REST APIs', 'Relational databases', 'Third-party integrations', 'Applied AI'],
    proy: ['Transport', 'Sales for fairs', 'Miami Getaway', 'Goals with AI'],
    cont: 'Write to me directly or leave a question in the chat below.',
    links: [['proyectos', '~/projects', '↵'], ['otros', '~/more', '↵'], ['contacto', '~/contact', '↵']],
  },
} as const;

export type Lang = keyof typeof t;

// TODO: email real de contacto (en la maqueta era un placeholder)
export const MAIL = 'hola@tu-dominio.dev';
