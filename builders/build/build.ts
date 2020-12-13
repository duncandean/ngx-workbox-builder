import { injectManifest } from 'workbox-build';

const swSrc = 'src/sw.js';
const swDest = 'build/sw.js';

injectManifest({
  swSrc,
  swDest,
}).then(({ count, size }) => {
  console.log(
    `Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`,
  );
});
