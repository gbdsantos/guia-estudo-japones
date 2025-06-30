import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/guia-estudo-japones/',
  lang: 'pt-BR',
  title: "Guia de Estudo de Japonês",
  description: "Curadoria de recursos para o aprendizado de japonês.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/assets/logo.png'},
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recursos', link: '/resources' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    outline: {
      label: "Nesta página"
    },

    docFooter: {
      prev: "Página anterior",
      next: "Próxima página"
    },

    footer: {
      message: "Feito com ❤",
      // copyright: "teste"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gbdsantos/guia-estudo-japones' }
    ]
  }
})
