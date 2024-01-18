import * as esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

// necessary for esm bundling
const banner = `
const require = (await import("node:module")).createRequire(import.meta.url);
const __filename = (await import("node:url")).fileURLToPath(import.meta.url);
const __dirname = (await import("node:path")).dirname(__filename);
`;

const backendConfig = {
    platform: 'node',
    entryPoints: ['src/backend.ts'],
    bundle: true,
    format: 'esm',
    outfile: 'public/dist/server.js',
    sourcemap: 'linked',
    banner: {
        js: banner,
    },
    plugins: [nodeExternalsPlugin()],
};

const frontendConfig = {
    platform: 'browser',
    entryPoints: ['src/frontend.tsx'],
    bundle: true,
    minify: (process.env.MODE ?? 'production') === 'production',
    sourcemap: (process.env.MODE ?? 'production') !== 'production',
    outfile: 'public/dist/index.min.js',
    treeShaking: true,
    plugins: [],
};

if (process.argv.includes('--watch')) {
    const backend = await esbuild.context(backendConfig);
    const frontend = await esbuild.context(frontendConfig);
    await backend.watch();
    await frontend.watch();
} else {
    await esbuild.build(backendConfig);
    await esbuild.build(frontendConfig);
}
