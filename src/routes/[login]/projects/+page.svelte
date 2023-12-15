<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<ul class="grid grid-cols-1 gap-4 p-2">
	{#each data.repositories as item}
		<li class="border-black/2 rounded-md border p-4 dark:border-white/20">
			<a class="font-bold text-blue-600" href={item.url} target="_blank">
				{#if item.owner.login === 'akazwz'}
					{item.name}
				{:else}
					{item.nameWithOwner}
				{/if}
			</a>
			<div class="text-sm">
				{item.description}
			</div>
			<div class="mt-2 flex items-end gap-x-3 text-sm">
				{#if item.primaryLanguage}
					<div class="flex items-center gap-x-1">
						<div
							class="h-3 w-3 rounded-full"
							style={`background-color: ${item.primaryLanguage.color}`}
						/>
						<span>
							{item.primaryLanguage.name}
						</span>
					</div>
				{/if}
				<div class="flex items-end gap-x-0.5 align-bottom">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
						/>
					</svg>
					<span class="relative -bottom-0.5">
						{item.stargazerCount}
					</span>
				</div>
				{#if item.homepageUrl}
					<a href={item.homepageUrl} target="_blank" class="link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
							/>
						</svg>
					</a>
				{/if}
			</div>
		</li>
	{:else}
		<p>No projects</p>
	{/each}
</ul>
