<!-- This file renders each individual work post for reading. Be sure to update the svelte:head below -->
<script>
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';

	export let data

const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta
console.log('routes/work/[post]/+page.svelte', data);




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
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<article class="post">
	<SecondaryNav/>
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<img
		class="cover-image"
		src="{coverImage}"
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<h1>{ title }</h1>
	
	<div class="meta">
		<b>Published:</b> {date}
		<br>
		<b>Updated:</b> {updated}
	</div>

	{@html data.PostContent}

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in: </h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="/work/category/{category}/">
							{ category }
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>


<style lang="scss">


  :global article.post {
    grid-template-rows: vars.$xl6 auto;
    @media (min-width: vars.$for-tablet-portrait-up) {
      display: grid;
      grid-template-columns: repeat(8, 1fr);

      h2, h3, h4, h5, h6, p, span, section, div, img, pre { grid-column: 3/-3;}

      p {
        font-size: vars.$lg;
      }
    }

    .meta {
      font-size: 0.8rem;
      margin-bottom: 4rem;
    }

    h1 {
      font-size: vars.$xl3;
      grid-column: 2  /7;
      align-self: end;
    }

    img + h1 {
      margin-top: 1rem;
    }
  }

  .post-footer {

    grid-column: 3/7;
    margin: vars.$xs2 0 vars.$xl4 0 ;

    ul {
      padding: 0;
      margin: vars.$xs3 0 0 vars.$xs4*-1;
    }

    li {
      display: inline-block;
      font-size: 0.8rem;

      a {
        font-family: var(--primaryFont);
        font-size: vars.$base;
        font-weight: 500;
        text-decoration: none;
        display: block;
        border-radius: vars.$xs6;
        line-height: 1.25;
        margin: vars.$xs6 0;
        padding: vars.$xs6 vars.$xs4;
      }

      a:hover {
        background: black;
        color: white;

        a:visited {
          background: white;
          color: gray;
        }
        a:visited:hover {
          background: black;
          color: white;
        }
      }

      + li {
        margin-left: 0.5rem;
      }
    }
  }


</style>