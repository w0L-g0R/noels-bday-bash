import adapter from '@sveltejs/adapter-static';
// import adapter from 'svelte-adapter-github';
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
            pages: 'build',  // path to build directory
            assets: 'build',  // path to build directory
            fallback: "index.html"
        }),

    }
};

export default config;
