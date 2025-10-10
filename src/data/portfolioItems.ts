export interface PortfolioItem {
  image: string;
  text: string;
  url?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    image: '/images/portfolio/gray-scale-black-and-white-with-the-words--prompty.png',
    text: 'Prompty',
    url: 'https://app.prompty.games/'
  },
  {
    image: '/images/portfolio/gray-scale-black-and-white-with-the-words--paperbo.png',
    text: 'Paper Boy',
    url: 'https://www.paper-boy.app/'
  },
  {
    image: '/images/portfolio/gray-scale-black-and-white-with-the-words--efficie.png',
    text: 'Efficient',
    url: 'https://withefficient.com/'
  },
  {
    image: '/images/portfolio/gray-scale-black-and-white-with-the-words--ootd--w.png',
    text: 'OOTD',
    url: 'https://www.ootdfit.com/'
  }
];
