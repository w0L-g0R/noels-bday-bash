import adapter from '@sveltejs/adapter-static';
import preprocessor from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocessor({
		sass: {
			prependData:"@import './src/styles/global.sass'"
		}
	}),
    kit: {
		adapter: adapter({
            pages: 'build',
			assets: 'build',
            fallback: "index.html"
        }),
    }
};

export default config;
