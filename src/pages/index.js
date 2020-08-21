import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar";
import { useSiteMetadata } from '../hooks'

function IndexPage() {
  const { author } = useSiteMetadata();
  return (
    <Layout>
      <Sidebar author={author} />
      <SEO author={author} title="Home" />
      <div className={'page'}>
        <div className={'page__inner'}>
          <div className={'page__body'}>

            <div className={'feed'}>
              <div className={'feed__item'}>
                <div className={'feed__item-meta'}>
                  <time className={'feed__item-meta-time'}>20/08/2020</time>
                  <span className={'feed__item-meta-divider'} />
                  <span className={'feed__item-meta-category'}>
                    <Link to={'/random'} className={'feed__item-meta-category-link'}> Random </Link>
                  </span>
                </div>

                <h2 className={'feed__item-title'}>
                  <Link className={'feed__item-title-link'} to={'/'}>
                    Humane Typography in the Digital Age
                  </Link>
                </h2>
                <p className={'feed__item-description'}>
                  An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.
                </p>
                <Link className={'feed__item-readmore'} to={'/'}>Read</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage
