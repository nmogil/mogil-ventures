export interface Thought {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  author?: string;
  authorTitle?: string;
}

export const thoughts: Thought[] = [
  {
    id: '3',
    title: 'The End of the Model Arms Race: Why the Next AI Winners Will Be Application Builders',
    description: 'We\'re reaching the end of the compute age of AI. The shift from model-chasing to application-building creates an enormous opportunity.',
    date: '2025-12-08',
    slug: 'end-of-model-arms-race',
    author: 'Noah Mogil',
    authorTitle: 'Founding Builder',
  },
  {
    id: '2',
    title: 'The Builder\'s Guide to Conversational AI Agents: A Six-Tier Framework',
    description: 'How enterprises, startups, and builders actually move from impressive demos to production-ready AI agents',
    date: '2025-12-02',
    slug: 'conversational-ai-agent-landscape',
    author: 'Noah Mogil',
    authorTitle: 'Founding Builder',
  },
  {
    id: '1',
    title: 'Hello, World!',
    description: 'My very first blog post.',
    date: '2025-11-30',
    slug: 'hello-world',
  }
];
