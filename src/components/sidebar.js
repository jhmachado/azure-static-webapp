import PropTypes from "prop-types"
import React from "react"
import Author from "./author";
import Contacts from "./contacts";
import Menu from "./menu";

const Sidebar = ({ author }) => (
  <div className={"sidebar"}>
    <Author author={author} />
    <Contacts author={author} />
    <Menu />
  </div>
);

Sidebar.propTypes = {
  author: PropTypes.object
};

export default Sidebar
