import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Why UOWN?',
      href: '#',
    },
    {
      text: 'Learn',
      links: [
        {
          text: 'The Hub',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Help Centre',
          href: getPermalink('/landing/startup'),
        },
        
      ],
    },
    
      
   
    {
      text: 'Invest',
      href: '#',
    },
    
  ],
  actions: [
    { type: 'text', text: 'Log In', href: 'https://app.uown.co/login' },
    { type: 'button', text: 'Sign Up', href: 'https://app.uown.co/register' }
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Invest',
      links: [
        { text: 'Retirement Investments', href: '#' },
        { text: 'P2P Investments', href: '#' },

      ],
    },
    {
      title: 'Help and Resources',
      links: [
        { text: 'Contact Us', href: '#' },
        { text: 'Help Centre', href: '#' },
        { text: 'The Hub', href: '#' },
        
      ],
    },
    {
      title: 'Account',
      links: [
        { text: 'Login', href: '#' },
        { text: 'Register', href: '#' },

      ],
    },
    {
      title: 'Legal Information',
      links: [
        { text: 'Terms & Conditions', href: '#' },
        { text: 'Privacy Policy', href: '#' },
        { text: 'Cookies Policy', href: '#' },
        { text: "Mangopay T&C's", href: '#' },
        { text: 'Risk Statements', href: '#' },
        { text: 'Complaints', href: '#' },

      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/uownco' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/uownco' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/uown.co/' },
  ],
  footNote: `
   
  `,
};
