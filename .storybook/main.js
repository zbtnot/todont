import viteTsconfig from 'vite-tsconfig-paths';
import { mergeConfig } from 'vite';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [viteTsconfig()],
        });
    },
    staticDirs: ['../public']
};
export default config;
