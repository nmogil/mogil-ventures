export interface PortfolioItem {
  image: string;
  text: string;
  url?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    image: '/images/portfolio/gray-scale-black-and-white-with-the-words--prompty.webp',
    text: 'Prompty',
    url: 'https://app.prompty.games/'
  },
  {
    image: '/images/portfolio/gray-scale-black-and-white-with-the-words--paperbo.webp',
    text: 'Paper Boy',
    url: 'https://www.paper-boy.app/'
  },
  {
    image: '/images/portfolio/gray-scale-black-and-white-with-the-words--efficie.webp',
    text: 'Efficient',
    url: 'https://withefficient.com/'
  },
  {
    image: '/images/portfolio/gray-scale-black-and-white-with-the-words--ootd--w.webp',
    text: 'OOTD',
    url: 'https://www.ootdfit.com/'
  }
];
