<script>
	export let data
  const { uniqueCategories } = data
	console.log('routes/work/category/page/+page.svelte')
</script>


<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>


<div class="compressed-content">
	<h1 class="h2">All blog categories</h1>
	
	<ul>
		{#each uniqueCategories as category}
		<li>
			<a href="/work/category/{category.title}">
				{ category.title }
			</a>
			({category.count})
		</li>
		{/each}
	</ul>
</div>