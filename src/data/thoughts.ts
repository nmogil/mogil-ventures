export interface Thought {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
  slug: string;
}

export const thoughts: Thought[] = [
  {
    id: '1',
    title: 'Hello, World!',
    description: 'My very first blog post.',
    date: '2025-11-30',
    slug: 'hello-world',
    content: `
      # Hello, World!
      
      A new beginning...
      
      This is the start of my thoughts section where I'll share ideas about design, engineering, and building products.
    `
  }
];

