import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/guia-estudo-japones/',
  lang: 'pt-BR',
  title: 'Guia de Estudo de Japonês',
  description: 'Curadoria de recursos para o aprendizado de japonês.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/assets/logo.png' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recursos', link: '/resources' },
      { text: 'Texthooker', link: '/texthooker' },
    ],

    sidebar: [],

    outline: {
      label: 'Nesta página',
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página',
    },

    footer: {
      message: 'Feito com ❤',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/gbdsantos/guia-estudo-japones',
      },
    ],
  },
})
