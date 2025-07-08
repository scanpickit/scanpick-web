type Service = {
  id: number;
  title: string;
  description: string;
  active?:string;
  features: string[];
  image?: string;
  animated?: boolean;
};

const services: Service[] = [
  {
    id: 1,
    title: 'Smart Vending Machines',
    description:
      'Flagship product designed to improve hygiene and reduce crowding in institutional and public food courts.\nCurrently live and operational at Presidency University.',
    active:"Currently live and operational at Presidency University.",
    features: [
      'Touch-Free Access',
      'Cashless Payments',
      'Campus-Tested & Scalable',
      'Live Inventory Monitoring',
      'Smart Temperature Control',
    ],
    image: '/services/1.png',
  },
  {
    id: 2,
    title: 'Industrial Automation Solutions',
    description:
      'Customized automation services for factories, institutions, and other operational environments.',
    features: [
      'PLC Integration',
      'Real-time Monitoring & Control',
      'SMTP Alerts & Notifications',
      'Schedule & Track Workflows',
      'Sensor & IoT Integration',
    ],
    animated: false,
    image: '/services/2.png',
  },
  {
    id: 3,
    title: 'Web Development',
    description:
      'Full-stack web application development for startups and businesses.',
    features: [
      'LLM-based Assistants',
      'Multi-language Support',
      'SEO Optimized',
      'Admin Dashboards',
      'REST & GraphQL APIs',
    ],
    animated: false,
    image: '/services/webdev.webp',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description:
      'Android and iOS mobile applications tailored to client needs and industry standards.',
    features: [
      'Cross-platform (React Native, Flutter)',
      'Twilio & Firebase Ready',
      'Real-time Sync & Push Notifications',
      'Event-Driven Architecture',
      'App Store & Play Store Deployment',
    ],
    animated: false,
    image: '/services/mobile.webp',
  },
  {
    id: 5,
    title: 'CAD Design',
    description:
      'Industrial-level computer-aided design (CAD) for mechanical parts and systems.',
    features: [
      'Parametric 3D Modeling',
      'Mechanical Part Simulation',
      'No-Code Integration with Manufacturing Tools',
      'DFM & DFA Optimizations',
      'Enterprise Ready Outputs (STEP, IGES, DXF)',
    ],
    image: '/services/cad.webp',
  },
  {
    id: 6,
    title: 'PCB Design',
    description:
      'End-to-end printed circuit board (PCB) design and prototyping for hardware projects.',
    features: [
      'Multi-layer PCB Design',
      'Gerber & BOM Generation',
      'Signal Integrity Checks',
      'Prototyping & Testing Support',
      'Enterprise Ready Schematics',
    ],
    image: '/services/pcb.webp',
  },
];

export default services;
