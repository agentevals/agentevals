// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://agentevals.io',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
  integrations: [
    starlight({
      title: 'Agent Evals',
      description: 'Industry-standard evaluation specifications for AI agents.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'script',
          attrs: { 'is:inline': true },
          content: `localStorage.setItem('starlight-theme', 'dark');`,
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/agentevals/agentevals' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Specification',
          autogenerate: { directory: 'specification' },
        },
        {
          label: 'Evaluators',
          autogenerate: { directory: 'evaluators' },
        },
        {
          label: 'Patterns',
          autogenerate: { directory: 'patterns' },
        },
        {
          label: 'Integration',
          autogenerate: { directory: 'integration' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
