type Service = {
    id: number;
    title: string;
    description: string;
    features: string[];
    image?: string;
    animated?: boolean;
  };
const services: Service[] = [
    {
        id: 1,
        title: 'Smart Vending That Works 24/7',
        description:
            'ScanPick’s smart vending machines deliver contactless, automated food access for campuses, offices, and public spaces - all powered by our in-house tech.',
        features: ['Touch-Free Access', 'Campus-Tested & Scalable'],
        image: '/services/1.png',
    },
    {
        id: 2,
        title: 'Automated Email Sender',

        description:
            'Easily schedule, personalize, and send emails with our robust automation system.',
        features: ['SMTP Integration', 'Schedule & Track'],
        animated: false,
         image: '/services/2.png',
    },
    {
        id: 3,
        title: 'AI Customer Support Bot',
        description:
            'Deploy conversational AI support agents that help users 24/7 with real-time queries.',
        features: ['LLM-based', 'Multi-language'],
        animated: false,
         image: '/services/6.png',
    },
    {
        id: 4,
        title: 'Instant Notifications Engine',
        description:
            'Trigger SMS, WhatsApp, or push alerts on defined events in your product.',
        features: ['Twilio & Firebase Ready', 'Event-Driven'],
        animated: false,
         image: '/services/4.png',
    },
    {
        id: 5,
        title: 'Workflow Automation Made Simple',
        description:
            'Automate repetitive tasks, increase productivity, and focus on growth. Our custom backend systems integrate with your tools seamlessly.',
        features: ['No-Code Integration', 'Enterprise Ready'],
         image: '/services/5.png',
        
    },
  ];


export default services;