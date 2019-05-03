import React from 'react';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import CommonHead from '../../src/components/CommonHead';
import BackLink from '../../src/components/BackLink';
import CONFIG from '../../next.config';
const ROOT = (CONFIG.assetPrefix === '') ? '/' : CONFIG.assetPrefix;

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CommonHead title="ABOUT"></CommonHead>
        <div id="root">
          <div className="container text-left">
            <div className="back-link-wrap">
              <BackLink></BackLink>
            </div>
            <div className="title-wrap">
              <h1>About</h1>
            </div>
            <div className="description">
              <h2>Web Framework &amp; Libraries</h2>
              <ul>
                <li>React <a href="https://reactjs.org" target="_blank">https://reactjs.org</a></li>
                <li>Next.js <a href="https://nextjs.org" target="_blank">https://nextjs.org</a></li>
                <li>Bootstrap <a href="https://getbootstrap.com" target="_blank">https://getbootstrap.com</a></li>
              </ul>
              <hr />
              <h4>Visual Materials</h4>
              <ul>
                <li>Photos <a href="https://unsplash.com" target="_blank">unsplash.com</a>, <a href="https://www.pakutaso.com" target="_blank">www.pakutaso.com</a>
                </li>
                <li>Text <a href="https://en.wikipedia.org/wiki/Yokohama" target="_blank">Wikipedia</a></li>
              </ul>
              <hr />
              <h4>Source</h4>
              <ul>
                <li>GitHub <a href="https://github.com/DJYoko/YokohamaLandscape" target="_blank">https://github.com/DJYoko/YokohamaLandscape</a></li>
              </ul>
            </div>
          </div>
          <style jsx global>{`
            body {
              background-color: #000;
            }
             #root:before {
              background-image:url( ${this.getBackgroundImagePath()} );
            }
          `}</style>
          <style jsx>{styles}</style>
        </div>
      </div>
    );
  }
  getBackgroundImagePath() {
    return ROOT + 'static/img/background/index.jpg';
  }
}

const styles = css`
#root {
  height: 100%;
}

#root:before {
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  filter: blur(8px);
  opacity: 0.8;
  transform:scale(1.1);
}

.container {
  position: relative;
  padding-top: 24px;
}

.title-wrap {
  margin-bottom: 24px;
}

h1 {
  color: #fff;
}

.description ul {
  margin-left: 24px;
  word-break: break-all;
}
`;

export default About