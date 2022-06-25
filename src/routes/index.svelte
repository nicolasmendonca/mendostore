<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Product } from '../supabase/models/Product';
	import { supabaseClient } from '../supabase/client';

	function getProducts() {
		return supabaseClient
			.from<Product>('products')
			.select('*')
			.then((res) => res.data);
	}

	export const load: Load = async () => {
		return {
			props: {
				products: await getProducts()
			}
		};
	};
</script>

<script lang="ts">
	import ProductCard from '../components/ProductCard.svelte';
	import { EnvironmentManager } from '../environment/EnvironmentManager';

	export let products: Product[];

	function getWhatsappUrl(product: Product) {
		const message = `Hola! Quiero comprar **${product.title}**`;
		return `https://wa.me/${EnvironmentManager.whatsappNumber}?text=${encodeURIComponent(message)}`;
	}
</script>

<div class="bg-gray-800">
	<h1 class="text-4xl font-bold text-purple-400 p-8">MendoStore</h1>
</div>
<section
	aria-label="Listado de productos"
	class="m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
>
	{#each products as product (product)}
		<ProductCard
			title={product.title}
			description={product.description}
			imageUrl={product.imageUrl}
			price={product.price}
		>
			<div class="text-center absolute bottom-0 w-full" slot="footer">
				<a
					href={getWhatsappUrl(product)}
					target="_blank"
					class="block rounded-tl bg-purple-600 text-white font-semibold p-4 hover:bg-purple-700 transition-all"
					>Lo Quiero!</a
				>
			</div>
		</ProductCard>
	{/each}
</section>
