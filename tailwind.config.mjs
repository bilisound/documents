import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const gray = {
    100: '#f4f7f3',
    200: '#eaf0e8',
    300: '#bdc4bb',
    400: '#82907f',
    500: '#4f5c4d',
    700: '#303c2d',
    800: '#1f2a1c',
    900: '#151a13'
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'accent': {
                    '50': '#eefffa',
                    '100': '#c6fff1',
                    '200': '#8effe6',
                    '300': '#4dfbd8',
                    '400': '#19e8c4',
                    '500': '#00ba9d',
                    '600': '#00a48e',
                    '700': '#028373',
                    '800': '#08675d',
                    '900': '#0c554d',
                    '950': '#003431',
                }, gray
            },
        },
    },
    plugins: [starlightPlugin()],
}
