import { getCollection } from 'astro:content';
import site from '../data/site.json';

export async function GET({params, request}) {
  const allPosts = await getCollection('posts');
  const filteredPosts = allPosts.map((post) => (
    post.data.tags)).flat();
  const sortedTags = filteredPosts.sort();
  const tags = filteredPosts.reduce((acc, tag) => {
    const value = acc[tag] || 0;
    return {
      ...acc,
      [tag]: value + 1
    }
  }, {})
  
  return new Response(JSON.stringify({ tags })
  )
}