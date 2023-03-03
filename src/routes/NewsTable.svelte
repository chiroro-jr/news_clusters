<script lang="ts">
	import NewsTableItem from './NewsTableItem.svelte'
	import type { NewsArticle } from '../app'
	export let news: NewsArticle[]
</script>

<table class="w-full border-collapse border-2 border-none bg-white h-full overflow-y-auto">
	<tr class="border-2 border-none odd:bg-gray-1 sticky top-0">
		<th class="p-3 text-start text-lg font-bold text-blue">Title</th>
		<th class="p-3 text-start text-lg font-bold text-blue">Cluster</th>
		<th class="p-3 text-end text-lg font-bold text-blue" />
	</tr>
	{#each news as item}
		<NewsTableItem {item} />
	{/each}
</table>
