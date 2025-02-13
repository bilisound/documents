// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bilisound',
			defaultLocale: 'default',
			locales: {
				default: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			components: {
				Hero: './src/components/Hero.astro',
				Footer: './src/components/Footer.astro',
			},
			social: {
				github: 'https://github.com/bilisound',
			},
			sidebar: [
				{
					label: '用户手册',
					/*items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],*/
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
