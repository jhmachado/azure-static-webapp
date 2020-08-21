import PropTypes from "prop-types"
import React from "react"
import { ImLinkedin2, ImFacebook2, ImGithub, ImTelegram, ImMail2 } from "react-icons/im"

const Contacts = ({ author }) => (
  <div className={'contacts'}>
    <ul className={'contacts__list'}>
      <li className={'contacts__list-item'}>
        <a
          className={'contacts__list-item-link'}
          href={author.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImLinkedin2 />
        </a>
      </li>

      <li className={'contacts__list-item'}>
        <a
          className={'contacts__list-item-link'}
          href={author.facebook}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImFacebook2 />
        </a>
      </li>

      <li className={'contacts__list-item'}>
        <a
          className={'contacts__list-item-link'}
          href={author.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImGithub />
        </a>
      </li>

      <li className={'contacts__list-item'}>
        <a
          className={'contacts__list-item-link'}
          href={author.telegram}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImTelegram />
        </a>
      </li>

      <li className={'contacts__list-item'}>
        <a
          className={'contacts__list-item-link'}
          href={author.email}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImMail2 />
        </a>
      </li>
    </ul>
  </div>
);

Contacts.propTypes = {
  author: PropTypes.object
};

export default Contacts
