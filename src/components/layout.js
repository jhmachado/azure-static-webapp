import React from "react"
import PropTypes from "prop-types"
import "../assets/sass/main.sass"

const Layout = ({ children }) => {
  return (
    <>
      <div className={"container"}>
        <main>{children}</main>
      </div>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
