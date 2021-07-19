import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

export default {
  state() {
    return {
      lastFetch: false,
      isRegistered: true,
      coaches: [
        {
          id: 'Lj0RQnxTwL0koRNLq2UVN',
          email: 'coach1@localhost.com',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          img: require('./../../../assets/img/coaches/c-1.jpg'),
          areas: ['sales', 'accounting', 'ruby', 'gaming'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
          facebook: 'https://facebook.com',
          instagram: 'https://instagram.com',
          twitter: 'https://twitter.com',
          courseContent:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!"
        },
        {
          id: '1fFH5Ng1N-VCKUKmP5ccD',
          email: 'coach2@localhost.com',
          firstName: 'Julie',
          img: require('./../../../assets/img/coaches/c-2.jpg'),
          lastName: 'Jones',
          areas: ['SQL', 'php', 'vue', 'react'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
          facebook: 'https://facebook.com',
          instagram: 'https://instagram.com',
          twitter: 'https://twitter.com',
          courseContent:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!"
        },
        {
          id: '-VvMqgWm74B9MzsfMCQ8B',
          email: 'coach3@localhost.com',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          img: require('./../../../assets/img/coaches/c-3.jpg'),
          areas: ['photoshop', 'python'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
          facebook: 'https://facebook.com',
          instagram: 'https://instagram.com',
          twitter: 'https://twitter.com',
          courseContent:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!"
        },
        {
          id: 'NAMJL0Wf_4AT6tVRmqumq',
          email: 'coach4@localhost.com',
          firstName: 'Julie',
          img: require('./../../../assets/img/coaches/c-4.jpg'),
          lastName: 'Jones',
          areas: ['ruby', 'php', 'javascript', 'sales'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
          facebook: 'https://facebook.com',
          instagram: 'https://instagram.com',
          twitter: 'https://twitter.com',
          courseContent:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!"
        }
      ]
    };
  },
  actions,
  mutations,
  getters
};
