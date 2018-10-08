import { FaGithubAlt, FaTwitter } from 'react-icons/fa';

export default [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },

  { name: <FaGithubAlt />, social: true, href: 'https://github.com/saltyNoodles' },
  { name: <FaTwitter />, social: true, href: 'https://twitter.com/saltyRahmen' }
];
