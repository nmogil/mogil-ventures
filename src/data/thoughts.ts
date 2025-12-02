export interface Thought {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

export const thoughts: Thought[] = [
  {
    id: '2',
    title: 'The Builder\'s Guide to Conversational AI Agents: A Six-Tier Framework',
    description: 'How enterprises, startups, and builders actually move from impressive demos to production-ready AI agents',
    date: '2025-12-02',
    slug: 'conversational-ai-agent-landscape',
  },
  {
    id: '1',
    title: 'Hello, World!',
    description: 'My very first blog post.',
    date: '2025-11-30',
    slug: 'hello-world',
  }
];
