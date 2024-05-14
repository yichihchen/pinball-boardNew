
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import './node_modules/nouislider/dist/nouislider.min.mjs';
import './Decoder';
import './Player';
import './YUVCanvas';
// import init from './avc.wasm?init';

// init().then((instance) => {
//   instance.exports.test()
// })
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [wasm(), topLevelAwait()]
});