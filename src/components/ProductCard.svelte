<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let price: number;

	$: parsedPrice = price / 100;
</script>

<section class="relative rounded-md border-2 border-purple-600 bg-gray-800">
	{#if price}
		<p class="absolute right-0 top-0 bg-green-400 rounded px-2 leading-8">
			{Intl.NumberFormat(undefined, {
				style: 'currency',
				currency: 'ARS',
				currencyDisplay: 'symbol'
			}).format(parsedPrice)}
		</p>
	{/if}
	<img src={imageUrl} alt="Product" />
	<h2 class="text-3xl p-4 font-bold">{title}</h2>
	<p class="p-4 mb-16">
		{description}
	</p>

	<slot name="footer" />
</section>
