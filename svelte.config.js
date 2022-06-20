import adapter from '@sveltejs/adapter-auto';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocessor({
		sass: {
			prependData:"@import './styles/global.sass'"
		}
	}),

    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: "/noels-bday-bash",
        },
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte"
    }
};

export default config;
