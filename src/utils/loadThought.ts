// Load markdown content for thoughts using Vite's glob import
const thoughtModules = import.meta.glob('../content/thoughts/*.md', {
  query: '?raw',
  import: 'default'
});

export async function loadThoughtContent(slug: string): Promise<string | null> {
  const path = `../content/thoughts/${slug}.md`;

  if (thoughtModules[path]) {
    const content = await thoughtModules[path]() as string;
    return content;
  }

  return null;
}
