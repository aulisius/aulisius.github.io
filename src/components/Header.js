import React from 'react'

const linkStyle = {
  cursor: 'pointer',
}

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fab fa-pagelines" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Faizaan</h1>
        <p>
          Software Engineer from India. Muslim. Anime, Open Source and
          JavaScript <i className="icon fas fa-heart" />
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a style={linkStyle} onClick={() => props.onOpenArticle('intro')}>
            Intro
          </a>
        </li>
        <li>
          <a style={linkStyle} onClick={() => props.onOpenArticle('work')}>
            Work
          </a>
        </li>
        <li>
          <a style={linkStyle} onClick={() => props.onOpenArticle('about')}>
            About
          </a>
        </li>
        <li>
          <a style={linkStyle} onClick={() => props.onOpenArticle('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Header
