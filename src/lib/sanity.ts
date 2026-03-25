import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || '',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: import.meta.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
});

// Fetch all published posts from Sanity
export async function getSanityPosts() {
  const query = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "image": mainImage.asset->url,
    "category": category->slug.current,
    "tags": tags[]->slug.current,
    author
  }`;

  return sanityClient.fetch(query);
}

// Fetch a single post by slug
export async function getSanityPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "image": mainImage.asset->url,
    "category": category->slug.current,
    "tags": tags[]->slug.current,
    author
  }`;

  return sanityClient.fetch(query, { slug });
}

// Check if Sanity is configured
export function isSanityConfigured(): boolean {
  return !!(import.meta.env.SANITY_PROJECT_ID);
}
