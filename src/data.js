import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Why UOWN?',
      links: [
        {
          text: 'How It Works',
          href: getPermalink('/how-it-works'),
        },
        {
          text: 'Track Record',
          href: getPermalink('/track-record'),
        },
      ],
    },
    {
      text: 'Learn',
      links: [
        {
          text: 'The Hub',
          href: getPermalink('/the-hub'),
        },
        {
          text: 'Help Centre',
          href: getPermalink('/help-centre'),
        },
      ],
    },
    {
      text: 'Invest',
      href: 'https://app.uown.co/properties',
    },
  ],
  actions: [
    { type: 'button', text: 'Log In', href: 'https://app.uown.co/login' },
    { type: 'button', text: 'Sign Up', href: 'https://app.uown.co/register' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Invest',
      links: [
        { text: 'Current Opportunities', href: 'https://app.uown.co/properties' },
        { text: 'How It Works', href: getPermalink('/how-it-works') },
        { text: 'Track Record', href: getPermalink('/track-record') },
      ],
    },
    {
      title: 'Help and Resources',
      links: [
        { text: 'Help Centre', href: getPermalink('/help-centre') },
        { text: 'The Hub', href: getPermalink('/the-hub') },
        { text: 'Contact Us', href: 'mailto:hello@uown.co' },
      ],
    },
    {
      title: 'Account',
      links: [
        { text: 'Login', href: 'https://app.uown.co/login' },
        { text: 'Register', href: 'https://app.uown.co/register' },
      ],
    },
    {
      title: 'Legal Information',
      links: [
        { text: 'Terms & Conditions', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
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
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/uown' },
  ],
  footNote: `
    UOWN is a trading name of U Own Exchange Limited. 3rd Floor, Northgate, 118 North Street, Leeds, LS2 7PN.
    House prices can fall as well as rise and you may not get back all of the money you invest.
    Investments are not protected under the Financial Services Compensation Scheme.
  `,
};
