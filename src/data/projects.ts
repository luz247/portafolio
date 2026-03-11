interface ProjectLinks {
  demo?: string;
  github: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  tags: string[];
  cover: string;
  gallery: string[];
  links: ProjectLinks;
  categories: (
    | 'fullstack'
    | 'frontend'
    | 'backend'
    | 'automatization'
    | 'infraestructura'
    | 'ui-ux'
    | 'nextjs'
    | 'angular'
    | 'logic'
  )[];
}

export const projects: Project[] = [
  {
    slug: 'crm-call-center-v0',
    title: 'CRM de Call Center v0.0',
    shortDesc: 'Gestión de llamadas, agenda, reportes y automatización.',
    description:
      'CRM para call center con agenda, gestión de contactos, reportes y automatización de procesos. Incluye integración con APIs y base de datos.',
    tags: ['React', 'TypeScript', 'Tailwindcss', 'Django', 'SQL Server'],
    cover: '/images/projects/crm/crm-1.png',
    gallery: [
      '/images/projects/crm/crm-2.png',
      '/images/projects/crm/agenda-1.png',
      '/images/projects/crm/agenda-3.png',
      '/images/projects/crm/agenda-2.png',
    ],
    links: {
      demo: 'https://crm-prueba-new.netlify.app/login',
      github: 'https://github.com/luz247/crm-v0-project.git',
    },
    categories: ['fullstack', 'frontend'],
  },

  {
    slug: 'crm-call-center-v1',
    title: 'CRM de Call Center v0.1',
    shortDesc: 'Gestión de llamadas, agenda, reportes y automatización.',
    description:
      'CRM para call center con agenda, gestión de contactos, reportes y automatización de procesos. Incluye integración con APIs y base de datos.',
    tags: ['Vite React', 'Redux', 'TypeScript', 'Tailwindcss', 'Django', 'SQL Server'],
    cover: '/images/projects/crm/crm-v0-1.png',
    gallery: ['/images/projects/crm/crm-v0-1.png', '/images/projects/crm/crm-v0-2.png'],
    links: {
      demo: 'https://crm-outbound-wecollect.netlify.app/acsa?MODO=INBOUND&discador=vici&vendor_id=3555201-4&phone_number=927249744&user=26704505-4&id_producto=&lead_id=580748&uniqueid=1717439373.489849&list_id=101&campaign=PRUEBA',
      github: 'https://github.com/luz247/crm-project-v0-01.git',
    },
    categories: ['fullstack', 'frontend'],
  },

  {
    slug: 'login-cobranza-v0',
    title: 'Login Conbranza',
    shortDesc: 'Flujos con Webhooks, integraciones y respuestas automáticas.',
    description:
      'Automatización con WhatsApp API y NestJS. Gestión de sesiones inteligentes mediante Redis para evitar reinicios de flujo y asegurar la continuidad de la conversación.',
    tags: ['vite', 'React', 'Router'],
    cover: '/images/projects/login/v0/login-v0.png',
    gallery: ['/images/projects/login/v0/login-v0.png'],
    links: {
      demo: 'https://vocal-tiramisu-4231e4.netlify.app',
      github: 'https://github.com/luz247/front-react-vite-login-conbranza.git',
    },
    categories: ['frontend'],
  },

  {
    slug: 'automatizacion-whatsapp',
    title: 'Automatización WhatsApp',
    shortDesc: 'Flujos con Webhooks, integraciones y respuestas automáticas.',
    description:
      'Automatización con WhatsApp API y NestJS. Gestión de sesiones inteligentes mediante Redis para evitar reinicios de flujo y asegurar la continuidad de la conversación.',
    tags: ['NestJS', 'Redis', 'OpenIA', 'MongoDB', 'WhatsApp Cloud API'],
    cover: '/images/projects/meta-whatsapp/whatsapp.jpg',
    gallery: [
      '/images/projects/meta-whatsapp/meta-01.png',
      '/images/projects/meta-whatsapp/meta-02.png',
      '/images/projects/meta-whatsapp/meta-03.jpeg',
      '/images/projects/meta-whatsapp/meta-04.jpeg',
      '/images/projects/meta-whatsapp/meta-05.jpeg',
    ],
    links: {
      github: 'https://github.com/luz247/bot-zykronet-whatsapp-cloud-api.git',
    },
    categories: ['automatization', 'backend'],
  },
  {
    slug: 'api-rest-django-sqlserver-router',
    title: 'Backend API: Gestión de Llamadas & Multi-Tenant',
    shortDesc: 'API REST robusta con Django y SQL Server mediante Database Routing.',
    description:
      'Desarrollo de un Backend escalable que gestiona múltiples bases de datos en SQL Server de forma dinámica. Implementación de Database Routers para dirigir operaciones CRUD y de reportería según el origen de los datos, optimizando el rendimiento de tablas existentes.',
    tags: ['Django', 'Python', 'SQL Server', 'ORM', 'Database Routing', 'REST API'],
    cover: '/images/projects/backend/apiRest/apiRest.png',
    gallery: [], // Al ser backend puro, podrías usar capturas de Swagger o Postman si lo prefieres
    links: {
      github: 'https://github.com/luz247/bot-zykronet-whatsapp-cloud-api.git',
    },
    categories: ['backend', 'infraestructura'],
  },
  {
    slug: 'truck-logistics-frontend',
    title: 'Truck Logistics Interface',
    shortDesc: 'Frontend avanzado desarrollado con Next.js y Tailwind CSS.',
    description:
      'Interfaz profesional para gestión logística y transporte. Implementa un diseño responsivo optimizado, navegación dinámica mediante el App Router de Next.js y componentes de UI modernos para una experiencia de usuario fluida.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'TypeScript'],
    cover: '/images/projects/next/truck/truck-v0.png', // Ruta sugerida para la imagen principal
    gallery: [
      '/images/projects/next/truck/truck-v1.png',
      '/images/projects/next/truck/truck-v2.png',
    ],
    links: {
      demo: 'https://truck-frontend-ten.vercel.app/',
      github: 'https://github.com/luz247/truck-frontend.git', // Agrega aquí tu link de GitHub
    },
    categories: ['frontend', 'ui-ux', 'nextjs'],
  },
  {
    slug: 'angular-ecommerce-cart',
    title: 'E-commerce Engine & Cart System',
    shortDesc: 'Sistema de carrito de compras reactivo desarrollado en Angular.',
    description:
      'Aplicación funcional de comercio electrónico enfocada en la gestión de estado. Implementa lógica de cálculo dinámico de totales (añadir, eliminar, incrementar)',
    tags: ['Angular', 'TypeScript', 'Signals', 'RxJS', 'Tailwind CSS'],
    cover: '/images/projects/angular/cart/cart-01.png',
    gallery: [
      '/images/projects/angular/cart/cart-01.png',
      '/images/projects/angular/cart/cart-02.png',
      '/images/projects/angular/cart/cart-03.png',
    ],
    links: {
      demo: 'https://beamish-cascaron-c0f008.netlify.app/dashboard/products',
      github: 'https://github.com/luz247/dashboard-products-angular.git',
    },
    categories: ['frontend', 'angular', 'logic'],
  },
  {
    slug: 'sql-mail-dispatcher',
    title: 'SQL Mail Dispatcher',
    shortDesc: 'Extracción de datos y distribución de reportes vía Email.',
    description:
      'Automatización para ejecutar consultas SQL, procesar datasets y enviar reportes dinámicos por correo electrónico de forma programada.',
    tags: ['Python', 'SQL', 'SMTP', 'Pandas'],
    cover: '/images/projects/automatization/db-mail.jpg', // Ajusta la ruta a tu imagen
    gallery: ['/images/projects/automation/db-mail.png'],
    links: { github: 'https://github.com/luz247/sql-mail-dispatcher.git' },
    categories: ['automatization'],
  },
  {
    slug: 'proweb-luz-portfolio',
    title: 'Personal Portfolio',
    shortDesc: 'Plataforma profesional donde gestiono y expongo mi ecosistema de proyectos.',
    description:
      'Mi hub central de desarrollo. Una aplicación diseñada para la máxima velocidad y SEO, donde integro mis trabajos de Backend (Django/SQL Server) y Frontend (Angular/Next.js). El código es modular, escalable y sirve como muestra de mis estándares de arquitectura limpia.',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS','Portfolio'],
    cover: '/images/projects/portfolio/main-cover.png',
    gallery: [
      '/images/projects/portfolio/mobile-view.png',
      '/images/projects/portfolio/projects-grid.png',
    ],
    links: {
      demo: 'https://tu-dominio-final.com', // El link actual de tu portafolio
      github: 'https://github.com/tu-usuario/mi-portafolio',
    },
    categories: ['frontend', 'fullstack'],
  },
  //   {
  //     slug: 'pipelines-sftp-nas',
  //     title: 'Pipelines SFTP / NAS',
  //     shortDesc: 'Validación y transferencia de archivos con reportes.',
  //     description:
  //       'Pipeline para validar existencia de archivos por fecha, transferirlos por SFTP/NAS y generar reportes automáticos por correo.',
  //     tags: ['Python', 'SFTP', 'ETL'],
  //     cover: '/images/projects/crm/agenda-2.png',
  //     gallery: ['/images/projects/crm/agenda-2.png'],
  //     links: { demo: '', github: '' },
  //     categories: ['automation'],
  //   },

  //   {
  //     slug: 'pokedex',
  //     title: 'Pokedex (Astro)',
  //     shortDesc: 'App en Astro consumiendo API y mostrando Pokemons.',
  //     description: 'Proyecto en Astro con TypeScript, consumo de API y páginas optimizadas.',
  //     tags: ['Astro', 'TypeScript'],
  //     cover: '/images/projects/pokedex/poke-1.png',
  //     gallery: [
  //       '/images/projects/pokedex/poke-2.png',
  //       '/images/projects/pokedex/poke-3.png',
  //       '/images/projects/pokedex/poke-4.png',
  //     ],
  //     links: { demo: 'https://amazing-lily-8bd277.netlify.app/', github: '' },
  //     categories: ['frontend', 'portfolio', 'backend'],
  //   },
];
