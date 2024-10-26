import { FaPhoneAlt, FaShareAlt } from 'react-icons/fa';
import { Socials } from '../components/Socials/Socials';

export const contactInfo = [
  {
    id: 1,
    icon: FaPhoneAlt,
    description: 'Contact Me',
    child: (
      <a
        style={{
          textDecoration: 'none',
          color: '#000000',
          fontSize: '20px',
        }}
        href="tel:+639054441198"
      >
        + 639054441198
      </a>
    ),
  },

  {
    id: 2,
    icon: FaShareAlt,
    description: 'Social Profiles',
    child: <Socials />,
  },
];
