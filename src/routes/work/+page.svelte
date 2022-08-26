<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'
	import { categoriesStore } from '$lib/assets/js/store';
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';

	export let data


	console.log('routes/work/+page.svelte')
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
	categoriesStore.set(uniqueCategories)

	console.log('uniqueCategories',categoriesStore);

	// -------------- end: make array of unique categories  --------------//

</script>


<svelte:head>
	<title>work</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<h1>work</h1>
<SecondaryNav/>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />