<script lang="ts">
	import clsx from 'clsx';

	import type { LayoutData } from './$types';
	export let data: LayoutData;

	import '../../app.css';
</script>

<div class="min-h-screen dark:bg-black dark:text-white">
	<header>
		<nav class="mx-auto flex max-w-3xl gap-6 p-4 font-bold decoration-4 underline-offset-4">
			{#each data.navLinks as item}
				<a
					href={item.href}
					class={clsx('', {
						underline: item.active,
						'hover:underline': !item.active,
						'opacity-80': !item.active
					})}
				>
					{item.name}
				</a>
			{/each}
		</nav>
	</header>

	<main class="mx-auto max-w-2xl p-4">
		<slot />
	</main>
</div>
