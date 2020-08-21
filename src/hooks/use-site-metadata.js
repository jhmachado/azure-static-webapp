import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                telegram
                email
              }
            }
            title
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
