<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<ul class="mt-6 grid grid-cols-1 gap-4 p-2">
	{#each data.blogs as item}
		<a class="link flex rounded-md border p-4 font-semibold no-underline" href="/blog#">
			{item.name.replace(item.extension, '')}
		</a>
	{:else}
		<p>No projects</p>
	{/each}
</ul>
