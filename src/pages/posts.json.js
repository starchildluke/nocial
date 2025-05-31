import { getCollection } from 'astro:content';
import site from '../data/site.json';

export async function GET({params, request}) {
  const postColl = await getCollection('posts');
  
  const postData = postColl.map((data) => {
      return {
        title: data.data.title,
        description: data.data.description,
        pubDate: data.data.pubDate,
        tags: data.data.tags,
        url: `${site.url}posts/${data.id}`
      };
    });
  
  return new Response(JSON.stringify({ postData })
  )
}