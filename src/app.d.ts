// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

type NewsArticle = {
	url: string
	title: string
	cluster: number
}

export { NewsArticle }
