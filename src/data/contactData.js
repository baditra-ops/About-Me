import { personalInfo } from './personalInfo';

export const contactSystemStatus = {
  nodeId: 'BADITRA',
  systemStatus: 'ONLINE // RECEPTIVE',
  location: 'IIT BHU · VARANASI',
  coordinates: '25.2677° N, 82.9913° E',
  academicStanding: 'Chemical Engineering · 2nd Year (Class of 2027)',
  mode: 'BUILD / LEARN / EXPLORE',
  protocol: 'OPEN TO TECHNICAL COLLABORATION'
};

export const dispatchChannels = [
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    category: 'DIRECT MESSAGE // NETWORK',
    tag: 'NET_LINKEDIN',
    url: personalInfo.socials.linkedin,
    actionText: 'DISPATCH LINKEDIN MESSAGE',
    status: 'ACTIVE CHANNEL',
    description: 'Professional correspondence, direct reach-out, and technical collaboration.',
    routingNote: 'Opens verified LinkedIn profile for direct messaging.'
  },
  {
    id: 'github',
    label: 'GITHUB',
    category: 'CODEBASE // REPOSITORIES',
    tag: 'VCS_GITHUB',
    url: personalInfo.socials.github,
    actionText: 'INSPECT CODE REPOSITORIES',
    status: 'CONTINUOUS PUSH',
    description: 'Explore full-stack source code, open-source repositories, and backend implementations.',
    routingNote: 'Opens verified GitHub profile & system repositories.'
  },
  {
    id: 'leetcode',
    label: 'LEETCODE',
    category: 'DSA // PROBLEM SOLVING',
    tag: 'ALG_LEETCODE',
    url: personalInfo.socials.leetcode,
    actionText: 'VIEW DSA SUBMISSIONS',
    status: 'PRACTICE PROTOCOL',
    description: 'Algorithmic problem solving, data structure implementations, and complexity practice.',
    routingNote: 'Opens verified LeetCode profile.'
  },
  {
    id: 'codeforces',
    label: 'CODEFORCES',
    category: 'COMPETITIVE // CONTESTS',
    tag: 'ALG_CF',
    url: personalInfo.socials.codeforces,
    actionText: 'VIEW CONTEST METRICS',
    status: 'CONTEST RIGOR',
    description: 'Competitive programming rounds, discrete mathematical thinking, and timed execution.',
    routingNote: 'Opens verified Codeforces profile.'
  }
];

export const selectionClosingStatement = {
  primaryThought: "Curiosity got me started. Building keeps me going.",
  secondaryThought: "I’m not finished learning. That’s exactly why I want to keep building.",
  closingPledge: "Looking forward to learning, building, and contributing alongside the IIT BHU Tech Team.",
  pillars: [
    { label: 'BACKEND RIGOR', note: 'Curious about what happens behind interfaces' },
    { label: 'ENGINEERING MINDSET', note: 'Chemical engineering discipline applied to computational systems' },
    { label: 'HUMBLE CURIOSITY', note: 'Ready to build, break, learn, and grow with the team' }
  ]
};
