<script lang="ts">
	import '../app.css'
	import data from '../news_articles_clustered_no_content.json'
	import Footer from './Footer.svelte'
	import Gradient from './Gradient.svelte'
	import Header from './Header.svelte'
	import Heading from './Heading.svelte'
	import NewsTable from './NewsTable.svelte'

	let selectedCluster = ''
	$: visibleClusters = data.filter((item) => {
		if (selectedCluster === '') {
			return true
		}

		return item.cluster === Number(selectedCluster)
	})
</script>

<svelte:head>
	<title>News Clusters</title>
</svelte:head>

<div class="app-grid | w-full h-full">
	<Gradient />
	<Header bind:selectedCluster />
	<main>
		<div class="mx-auto max-w-container py-6 px-5">
			<Heading>
				{#if selectedCluster === ''}
					Showing all articles
				{:else}
					Showing all articles in cluster {selectedCluster}
				{/if}
			</Heading>
			<div class="scrollable | space-y-8 h-[300px] overflow-y-scroll relative">
				<NewsTable news={visibleClusters} />
			</div>
		</div>
	</main>
	<Footer />
</div>
