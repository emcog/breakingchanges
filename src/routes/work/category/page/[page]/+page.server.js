import { redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ fetch, params }) => {
  const page = params.page ? params.page : 1

  // Keeps from duplicationg the work index route as page 1
  if (page <= 1) {
    throw redirect(301, '/work');
  }
  
  let offset = (page * postsPerPage) - postsPerPage

  const totalPostsRes = await fetch('/api/posts/count.json')
  const total = await totalPostsRes.json()
  const { posts } = await fetchPosts({ offset, page })

  return {
    posts,
    page,
    totalPosts: total 
  }
}
