import { injectManifest } from 'workbox-build';

var workboxConfig = {
  globDirectory: '../dist/two-oh-two/',
  globPatterns: ['**/*.{txt,png,ico,html,js,json,css}'],
  swSrc: './swtemplate.js',
  swDest: '../dist/two-oh-two/sw.js',
};

injectManifest(workboxConfig).then(({ count, size }) => {
  console.log(
    `Generated ${workboxConfig.swDest}, which will precache ${count} files, ${size} bytes.`
  );
});
