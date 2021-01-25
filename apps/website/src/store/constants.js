export const boxes = [
  {
    title: 'Offer me a job',
    text: `Would like to see my working experience and offer me a job then keep in touch with me or find me on social media.`,
    id: 'job'
  },
  {
    title: 'Contact me',
    text: 'Send me greetings or message me something about I have to know from you.',
    id: 'contact'
  },
  {
    title: 'Suggest me a project',
    text: 'You have a trouble on your code, or needs help in your project runtime? Contact me with specs.',
    id: 'project'
  }
];

export const graphData = {
  custom : {
    background: 'linear-gradient(#868630, #4f4f4a)',
    baseline: {
      color: 'rgb(0, 0, 0)',
      height: 4 //px
    },
    column: {
      color: 'salmon',
      gap: 20 //px
    },
    labelsColor: ''
  },
  // columns: [
  //   {
  //     label: 'Code lines',
  //     size: [25, 100] //[ wdith x height ] in px
  //   },
  //   {
  //     label: 'Days used',
  //     size: [25, 60]
  //   },
  //   {
  //     label: 'Extra Packages',
  //     size: [25, 20]
  //   }
  // ],
};

export const projects = [
  {
    title: 'Extended Quiz Game',
    description: [
      `It is started as Javascript Quiz Game to learn new technologies. 
        After some period I realized tha is a useful tool to convert it as a business tool where can be useful. 
        Convert it to take json data from api and as much flexible can.`,
      `Technologies used: Vue CLI with vue3, JS, SCSS, HTML5, JSON, Firebase api`,
    ],
    github: {
      link: 'https://github.com/spiroskarathanassis/quiz-game',
      name:'quiz-game'
    },
    graph: [{
      label: 'Code lines',
      size: [20, 100]
    },
    {
      label: 'Days used',
      size: [20, 10]
    },
    {
      label: 'Extra Packages',
      size: [20, 5]
    }],
  },
  {
    title: 'Advertising Debugger Extension Tool',
    description: [
      `Implementation of catching advertising requests, handle ad bugs on publishers web pages. 
        Reason to this project were that colleagues spend time(hours) to find bugs. 
        Launch apps like these automate jobs where time can be useful.`,
      `Technologies used: React, Webpack, JS, SASS, HTML5, JSON, IndexedDB`
    ],
    graph: [{
      label: 'Code lines',
      size: [20, 100]
    },
    {
      label: 'Days used',
      size: [20, 60]
    },
    {
      label: 'Extra Packages',
      size: [20, 10]
    }],
  },
  {
    title: 'Football Management System',
    description: [
      `This is an Automated Football game. Game keeps and print informations about teams, players, statistics, goals, etc.`,
      `Technologies used: Java`
    ],
    github: {
      link: 'https://github.com/spiroskarathanassis/FootballGame',
      name:'football-game'
    },
    graph: [{
      label: 'Code lines',
      size: [20, 60]
    },
    {
      label: 'Days used',
      size: [20, 30]
    },
    {
      label: 'Extra Packages',
      size: [20, 0]
    }],
  },
  {
    title: 'Software Technology Project',
    description: [
      `This project specified the determination of rules that a small team works for client’s request. 
        Analysis-Design-Development-Testing-Deployment was the cycle process of this work.
        Team plan, Project Description, Project plan, Risk assessment, UML diagrams and finally code in Java were the main features of projects.`
    ],
    graph: [{
      label: 'Code lines',
      size: [20, 100]
    },
    {
      label: 'Days used',
      size: [20, 60]
    },
    {
      label: 'Extra Packages',
      size: [20, 20]
    }],
  }
];

export const skills = {
  work: {
    title: 'Work experience',
    lis: ['debugging', 'adaptive', 'productive']
  },
  soft: {
    title: 'Soft Skills',
    lis: ['critical thinker', 'problem solving', 'communicative'],
  },
  hard: {
    title: 'Hard Skills',
    lis: ['design (Adome XD, FIgma)', 'Rest, GraphQl apis', 'Chrome Dev tools'],
  },
  professional: {
    title: 'Professional Skills',
    lis: ['JavaScript, HTML, CSS', 'PHP, Python, Java', 'MySQL, SQLite']
  },
};

