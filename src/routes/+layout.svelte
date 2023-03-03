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

	let scrapingUrl =
		'https://colab.research.google.com/drive/12t91uAkzMVoPiIOi6i1S_JpSZzwXaa8f?usp=sharing'
	let clusteringUrl =
		'https://colab.research.google.com/drive/1D4fo06QPIRb2gt1X-aBE9sKp-hB8oCmx?usp=sharing'
</script>

<svelte:head>
	<title>News Clusters</title>
</svelte:head>

<div class="app-grid | w-full h-full">
	<Gradient />
	<Header bind:selectedCluster />
	<main>
		<div class="main-grid | h-full max-w-container mx-auto py-8 gap-16">
			<div class="space-y-4">
				<!-- group members -->
				<div class="space-y-px">
					<h3 class="font-semibold text-blue">Group Members</h3>
					<ul class="text-sm text-gray-4">
						<li>Nyasha Chiroro - R187470B</li>
						<li>Mc Samuel Shoko - R1810066</li>
						<li>Anesu Masora - R187496Q</li>
					</ul>
				</div>
				<!-- reference links -->
				<div class="space-y-px">
					<h3 class="font-semibold text-blue">Reference Links</h3>
					<ul class="text-sm text-gray-600">
						<li>
							<a href={scrapingUrl} rel="noreferrer" target="_blank" class="text-green underline"
								>Scraping news articles - colab</a
							>
						</li>
						<li>
							<a href={clusteringUrl} rel="noreferrer" target="_blank" class="text-green underline"
								>Clustering news articles - colab</a
							>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div class="w-full h-full bg-slate-100 space-y-3">
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
			</div>
		</div>
	</main>
	<Footer />
</div>
