<script lang="ts">
	type NewsArticle = {
		url: string
		title: string
		cluster: number
	}

	export let item: NewsArticle
</script>

<tr class="border-2 border-none odd:bg-gray-1">
	<td class="p-3 text-blue first-letter:uppercase">{item.title}</td>
	<td class="p-3 text-end text-gray-4 first-letter:uppercase">{item.cluster}</td>
	<td class="p-3 text-green first-letter:uppercase"
		><a class="underline whitespace-nowrap" target="_blank" rel="noreferrer" href={item.url}
			>View article</a
		></td
	>
</tr>
