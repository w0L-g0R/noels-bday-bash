// import adapter from '@sveltejs/adapter-static';
import adapter from 'svelte-adapter-github';
import preprocessor from 'svelte-preprocess';

const dev = "production" === "development";

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

		// adapter: adapter({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	domain: null,
		// 	jekyll: false,
		// 	fallback: null,
		// 	precompress: false
		// }),

		// // adapter: adapter({
        // //     pages: 'build',  // path to public directory
        // //     assets: 'build',  // path to public directory
        // //     fallback: "index.html"
        // // }),
        // // paths: {
        // //     base: '/noels-bday-bash',
        // //     // assets: '/noels-bday-bash'
        // // }, 
        // // adapter: adapter({
        // //     pages: "docs",
        // //     assets: "docs",
		// // 	fallback: null,
        // // }),
        // paths: {
        //     // change below to your repo name
        //     base: "/noels-bday-bash",
        // },
    }
};

export default config;
