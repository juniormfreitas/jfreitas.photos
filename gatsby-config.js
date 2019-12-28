/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    headline: `Freitas.eye`,
    greeting: `Hi! My name is`,
    name: `J. de Freitas`,
    description: `This is my photography portifolio. Enjoy!`,
    externalSites: [
      {
        name: `Behance`,
        url: `https://www.behance.net/freitaseye`,
        icon: `${__dirname}/src/img/behance.svg`
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/freitas.eye`,
        icon: `${__dirname}/src/img/instagram.svg`
      },
      {
        name: `Personal Website`,
        url: `https://juniorfreitas.net`,
        icon: `${__dirname}/src/img/globe.svg`
      },
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Give You Glory`,
            variants: [`400`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Give You Glory:400`
        ],
        display: 'swap'
      }
    },
  ]
}
