<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	export let data


	console.log('routes/blog/+page.svelte')
	// -------------- start: make array of unique categories --------------//
	//todo, dry up – refactor into helper module
	let arraysOfCategories = []
	let duplicateCategories = []
	let setCategories = new Set()
	let uniqueCategories = []


	data.posts.map(e => arraysOfCategories.push(e.categories))
	duplicateCategories = arraysOfCategories.flat(2)
	duplicateCategories.forEach(e => setCategories.add(e))
	uniqueCategories = [...setCategories]
	uniqueCategories.sort()
	console.log('uniqueCategories',uniqueCategories);
	// -------------- end: make array of unique categories  --------------//

</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<h1>Blog</h1>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />