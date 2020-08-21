import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Author = ({ author }) => (
  <div className={"author"}>
    <Link to="/">
      <img
        src={author.photo}
        className={'author__photo'}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    <h2 className={'author__title'}>
      <Link className={'author__title-link'} to="/">{author.name}</Link>
    </h2>

    <p className={'author__subtitle'}>{author.bio}</p>
  </div>
);

Author.propTypes = {
  author: PropTypes.object
};

export default Author
