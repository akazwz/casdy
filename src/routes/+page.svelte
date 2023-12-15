<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen dark:bg-black dark:text-white">
	<header class="mx-auto flex max-w-6xl items-center gap-8 p-4">
		<a class="text-2xl font-bold" href="/">Casdy</a>
		<a href="https://github.com/akazwz" class="ml-auto">
			<svg viewBox="0 0 24 24" aria-hidden="true" class="h-10 w-10 fill-current">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
				></path></svg
			>
		</a>
	</header>
	<main class="mx-auto max-w-6xl p-4">
		<div class="flex flex-col items-center justify-center gap-8">
			<div class="text-center sm:mx-auto sm:w-10/12 md:mt-12 md:w-2/3">
				<h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-6xl">
					Build <span class="text-pink-600"> Zero JS Portfolio</span> with your
					<span class="text-blue-600">Github.</span>
				</h1>
				<p class="mt-8 text-gray-600 dark:text-gray-300">
					Provide a simple way to build your portfolio with your Github. Only need is your Github
					account username. With a click, your portfolio is ready.
				</p>
				<div>
					<form method="POST" class="mt-8 flex items-center gap-0 p-4">
						<input
							type="text"
							name="login"
							class="w-full rounded-none bg-zinc-200 p-4 font-semibold dark:bg-zinc-800"
							required
						/>
						<button type="submit" class="bg-blue-500 p-4 font-bold"> Click </button>
					</form>
				</div>
				<div class="mt-12 flex justify-between gap-6 grayscale dark:grayscale-0 lg:gap-12"></div>
			</div>
			<div class="flex justify-center">
				<img src="/portfolio_website.svg" alt="project illustration" height="" width="" />
			</div>
		</div>
	</main>
</div>
