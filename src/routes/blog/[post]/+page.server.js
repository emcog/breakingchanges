import { error } from '@sveltejs/kit'

export const load = async ({ params, url }) => {
	try {
		const post = await import(`../../../lib/posts/${params.post}.md`)

		const postRes = await fetch(`${url.origin}/api/posts.json`)
		const posts = await postRes.json()

		return {
			posts,
			PostContent: post.default.render().html,
			meta: { ...post.metadata, slug: params.post }
		}
	} catch(err) {
		throw error(404, err)
	}
}