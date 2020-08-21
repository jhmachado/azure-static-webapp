module.exports = {
  siteMetadata: {
    title: `Azure Static Web Apps`,
    description: `A simple static web app created to be hosted at azure.`,
    author: {
      name: 'Jhonatan Machado',
      bio: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
      photo: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      contacts: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        telegram: 'https://telegram.com',
        email: 'email@email.com'
      }
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
