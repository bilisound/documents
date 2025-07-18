// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bilisound',
			customCss: [
				// Path to your Tailwind base styles:
				'./src/styles/global.css',
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			components: {
				Hero: './src/components/Hero.astro',
				Footer: './src/components/Footer.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/bilisound' },
			],
			sidebar: [
				{
					label: '用户手册',
					items: [
						{ label: "安装", slug: "guides/get-started" },
						{ label: "基本用法", slug: "guides/basic-usage" },
						{ label: "数据管理", slug: "guides/backup" },
						{ label: "常见问题", slug: "guides/faq" },
					],
				},
			],
		}),
	],
	vite: { plugins: [tailwindcss()] },
});
