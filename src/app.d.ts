/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

interface ImportMetaEnv {
	VITE_PUBLIC_SUPABASE_URL: string;
	VITE_PUBLIC_SUPABASE_ANON_KEY: string;
	VITE_PUBLIC_WHATSAPP_NUMBER: string;
}
