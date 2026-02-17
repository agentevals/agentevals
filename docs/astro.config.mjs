import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://agentevals.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'Agent Evals',
      description: 'Industry-standard evaluation specifications for AI agents.',
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/agentevals/agentevals' },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        Hero: './src/components/Hero.astro',
      },
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
