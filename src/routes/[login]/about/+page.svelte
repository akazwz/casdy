<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<div class="mt-12">
	<article class="prose dark:prose-invert">
		{@html data.content}
	</article>
</div>
