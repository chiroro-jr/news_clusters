<script lang="ts">
	import Logo from './Logo.svelte'
	import SelectInput from './SelectInput.svelte'
	export let selectedCluster: string
</script>

<header class="bg-white py-8">
	<div class="mx-auto max-w-max space-y-4">
		<Logo />
		<form class="space-y-1 text-gray-700">
			<label for="clusters" class="font-medium text-center text-gray-4">
				Choose a cluster to view
			</label>
			<SelectInput bind:selectedCluster />
		</form>
	</div>
</header>
