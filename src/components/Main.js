import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

const keyCode = {
  ESC: 27,
}

class Main extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== undefined
    isBrowser && window.addEventListener('keydown', this.closeArticleOnEsc)
  }

  closeArticleOnEsc = event => {
    if (event.which === keyCode.ESC && this.props.isArticleVisible) {
      this.props.onCloseArticle()
    }
  }

  componentWillUnmount() {
    const isBrowser = typeof window !== undefined
    isBrowser && window.removeEventListener('keydown', this.closeArticleOnEsc)
  }

  render() {
    const close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div id="main" style={{ display: this.props.timeout ? 'flex' : 'none' }}>
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            Hey! Welcome to my humble abode on the Internet.
            <br />
            <br />
          </p>
          <p />
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>TODO:</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            Software Engineer from Chennai currently living in Bangalore.
            Trilingual.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/aulisius7"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/aulisius" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
