import ssb from '../assets/images/ssb.png';
import bantuSoko from '../assets/images/bantuSoko.png';
import imbeju from '../assets/images/imbeju.png';
import codeChallenge from '../assets/images/code_challenge.png';
import tumafast from '../assets/images/tumafast.jpeg';
import tetris from '../assets/images/tetris.jpeg';
import mock05 from '../assets/images/mock05.jpg';
import mock10 from '../assets/images/ocean.png';
import mock03 from '../assets/images/changisha.png';
import mock07 from '../assets/images/mock07.png';
import mock04 from '../assets/images/mock04.png';
import mock08 from '../assets/images/mock08.png';
import {
    ipfOsDashboard,
    ipfOsMeals,
    ipfOsPmo,
    ipfOsTasks,
    ipfOsUserManagement,
    ipfOsWebDashboard,
    ipfOsWebMeals,
    ipfOsWebPmo,
    ipfOsWebTasks,
    ipfOsWebUser,
} from '../assets/images/ipf-os';
import {
    mealgro_feeds,
    mealgro_splash,
    mealgro_settings,
    mealgro_notifications,
    mealgro_filters,
} from '../assets/images/mealgro';


export interface ProjectImage {
    id: string;
    url: string;
    title?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    images: ProjectImage[];
    tech?: string[];
    link?: string;
    category?: 'mobile' | 'web' | 'game' | ('mobile' | 'web' | 'game')[];
}

export const projects: Project[] = [
    {
        id: 'ipf-os',
        title: 'IPF OS (Web & Mobile Platform)',
        description:
            'A cross-platform super-app platform available on both web and mobile, designed to unify multiple services into a single ecosystem. It includes dynamic onboarding, wallet systems, and real-time transaction tracking using SSE. Built with a modular architecture to support scalable feature expansion without requiring multiple standalone apps.',
        image: ipfOsDashboard,
        images: [
            {id: '1', url: ipfOsWebDashboard, title: 'Web Dashboard'},
            {id: '2', url: ipfOsDashboard, title: 'Mobile Dashboard'},
            {id: '3', url: ipfOsMeals, title: 'Meals Mobile'},
            {id: '4', url: ipfOsWebMeals, title: 'Meals Web'},
            {id: '5', url: ipfOsTasks, title: 'Tasks Mobile'},
            {id: '6', url: ipfOsWebTasks, title: 'Tasks Web'},
            {id: '7', url: ipfOsPmo, title: 'PMO Mobile'},
            {id: '8', url: ipfOsWebPmo, title: 'PMO Web'},
            {id: '9', url: ipfOsUserManagement, title: 'User Management Mobile'},
            {id: '10', url: ipfOsWebUser, title: 'User Management Web'},
        ],
        tech: [
            'Flutter',
            'Dart',
            'Tanstack',
            'TypeScript',
            'Firebase',
            'SQLite',
            'REST API',
            'Server-Sent Events'
        ],
        link: '',
        category: ['web', 'mobile'],
    },
    {
        id: 'solomon-stockbroker',
        title: 'Solomon StockBrocker App',
        description:
            'A stock exchange mobile app that enables the user to buy and sell stocks, view stock prices, and manage their portfolio. The app provides real-time stock market data, news, and analysis to help users make informed investment decisions.',
        image: ssb,
        images: [{id: '1', url: ssb, title: 'Main Screen'}],
        tech: ['Flutter', 'Dart', 'REST API', 'Firebase'],
        link: '',
        category: 'mobile',
    },
    {
        id: 'bantu-soko',
        title: 'Bantu Soko App',
        description:
            'A mobile app that collects all important service like transport, event planning, and market place in one place, making it easier for users to access and use these services without the need to download multiple apps.',
        image: bantuSoko,
        images: [{id: '1', url: bantuSoko, title: 'Main Screen'}],
        tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
        link: 'https://play.google.com/store/apps/details?id=tz.bantu.soko.android&pcampaignid=web_share',
        category: 'mobile',
    },
    {
        id: 'imbeju-crdb',
        title: 'Imbeju CRDB App',
        description:
            'An offline CRDB application that aims to handle the meetings (VIKOBA) for local people, allowing them to manage their finances, track contributions, and facilitate communication within their groups without the need for an internet connection.',
        image: imbeju,
        images: [
            {id: '1', url: imbeju, title: 'Main Screen'},
        ],
        tech: ['Flutter', 'Dart', 'Offline-First', 'SQLite'],
        link: '',
        category: 'mobile',
    },
    {
        id: 'code-challenge',
        title: 'Code challenge App',
        description:
            'A trello like application that allows users to create boards, lists, and cards to organize their tasks and projects. The app provides a user-friendly interface for managing and collaborating on tasks, making it easier for teams to stay organized and productive.',
        image: codeChallenge,
        images: [{id: '1', url: codeChallenge, title: 'Board View'}],
        tech: ['React', 'Node.js', 'MongoDB', 'REST API'],
        link: '',
        category: 'web',
    },
    {
        id: 'mealgro',
        title: 'MealGro App',
        description:
            'A mobile application that helps users plan their meals, create shopping lists, and reduce food waste by suggesting recipes based on available ingredients.',
        image: mealgro_splash,
        images: [
            {id: '1', url: mealgro_splash, title: 'Splash Screen'},
            {id: '2', url: mealgro_feeds, title: 'Feeds'},
            {id: '3', url: mealgro_filters, title: 'Filters'},
            {id: '4', url: mealgro_notifications, title: 'Notifications'},
            {id: '5', url: mealgro_settings, title: 'Settings'},
        ],
        tech: ['React Native', 'Firebase', 'Nutrition API'],
        link: 'https://drive.google.com/file/d/1uIJ9cKkGrLQGfLyRvkH__FP1HSAd1WMJ/view?usp=drive_link',
        category: 'mobile',
    },
    {
        id: 'tumafast',
        title: 'Tumafast App',
        description:
            'A mobile application that connects users with local delivery services for quick and efficient package delivery within their city and outside their city at affordable rates.',
        image: tumafast,
        images: [{id: '1', url: tumafast, title: 'Delivery Tracking'}],
        tech: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
        link: 'https://drive.google.com/file/d/1nMWR8w6lo4q1DkGNT3nwoGUBaWEirjPc/view?usp=drive_link',
        category: 'mobile',
    },
    {
        id: 'tetris-game',
        title: 'Tetris Game',
        description:
            'A classic Tetris Game built with Flutter framework for mobile devices. The game features smooth controls, colorful graphics, and increasing difficulty levels to keep players engaged.',
        image: tetris,
        images: [{id: '1', url: tetris, title: 'Gameplay'}],
        tech: ['Flutter', 'Dart', 'Game Development'],
        link: 'https://drive.google.com/file/d/1nMWR8w6lo4q1DkGNT3nwoGUBaWEirjPc/view?usp=drive_link',
        category: 'game',
    },
    {
        id: 'stock-management',
        title: 'Stock Management',
        description:
            'A mobile application designed to manage inventory, notify the owner about stock levels, and suggest products to increase annual gains.',
        image: mock05,
        images: [{id: '1', url: mock05, title: 'Inventory Dashboard'}],
        tech: ['Flutter', 'Dart', 'Firebase', 'Notifications'],
        link: '',
        category: 'mobile',
    },
    {
        id: 'ocean-ecommerce',
        title: 'Ocean E-commerce',
        description:
            'This is an e-commerce app that links the manufacturer of the products down to the end-user, simplifying the marketing process.',
        image: mock10,
        images: [{id: '1', url: mock10, title: 'Store'}],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        link: 'https://play.google.com/store/apps/details?id=com.oceangroup.ocean&pcampaignid=web_share',
        category: 'web',
    },
    {
        id: 'changisha',
        title: 'Changisha App',
        description:
            'Changisha App is a crowdfunding platform designed to help individuals and groups raise money for various causes, such as medical expenses, education, community projects, and personal emergencies. It simplifies the fundraising process by allowing users to create campaigns, share them with potential donors, and receive contributions seamlessly through mobile money and digital payment methods.',
        image: mock03,
        images: [{id: '1', url: mock03, title: 'Campaign View'}],
        tech: ['React', 'Firebase', 'Stripe', 'Node.js'],
        link: 'https://drive.google.com/file/d/1zeVK1_V666EJtbpkTck7kTSISwKu3Ocd/view?usp=drive_link',
        category: 'web',
    },
    {
        id: 'nasafiri',
        title: 'Nasafiri',
        description:
            'A web application aimed at reducing the hassle of transport booking, saving time for passengers, and offering insurance options.',
        image: mock07,
        images: [{id: '1', url: mock07, title: 'Booking System'}],
        tech: ['React', 'Node.js', 'Google Maps API', 'Payment Gateway'],
        link: '',
        category: 'web',
    },
    {
        id: 'cypherz',
        title: 'Cypherz',
        description:
            'This is an agriculture platform that eliminates the middleman in agricultural products, linking sellers and buyers directly.',
        image: mock04,
        images: [{id: '1', url: mock04, title: 'Marketplace'}],
        tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        link: '',
        category: 'web',
    },
    {
        id: 'vikoba-plus',
        title: 'Vikoba+',
        description:
            'A mobile app that simplifies money management for small-scale groups (Vikoba), making it easy to track expenses and income.',
        image: mock08,
        images: [{id: '1', url: mock08, title: 'Finance Dashboard'}],
        tech: ['Flutter', 'Dart', 'Firebase', 'Charts'],
        link: '',
        category: 'mobile',
    },
];
