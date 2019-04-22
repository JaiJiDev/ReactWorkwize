import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>
            <div className="avatar">
              <img src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-0/p206x206/23849_1378856704933_5751788_n.jpg?_nc_cat=108&_nc_ht=scontent.fbkk22-1.fna&oh=c9fb4f7ad3530fb468843d50fca2cdef&oe=5D40DB02" alt="avatar" />
            </div>
            <div className="name">
              Jiranop
              <br />
              Penpitchakorn
            </div>
            <div className="contact">
              <ul className="contact__items">
                <li className="contact__item">vaskkun@hotmail.com</li>
                <li className="contact__item">+66-89-166-1985</li>
                <li className="contact__item">
                  Ratburana Bangkok, Thailand
                </li>
                <li className="contact__item">13 June, 1985</li>
              </ul>
            </div>
          </header>
          <div className="container" id="top">
            <div className="left">
              <main>
                <section className="exp">
                  <h2 className="heading__primary">Work Experience</h2>
                  <div className="exp__item">
                    <p>
                      Data Engineer <span>(infrastructure)</span>
                    </p>
                    <p>MFEC Solution</p>
                    <ul>
                      <li>OnSite @ K-Bank</li>
                      <li>OnSite @ AYCap</li>
                    </ul>
                    <p className="mini">1 Oct 2016 &ndash; 31 April 2017</p>
                  </div>
                </section>
              </main>
            </div>
            <div className="right">
              <main>
                <section className="edu">
                  <h2 className="heading__primary">Education</h2>
                  <h3>Master Degree</h3>
                  <p>Network Computer</p>
                  <p>Information Technology</p>
                  <p>SIT</p>
                  <p>KMUTT</p>
                  <div className="temp">
                    <div className="mini">08/2014 - 07/2018</div>
                    <div>GPA 3.15</div>
                  </div>
                </section>
              </main>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <main>
                <section className="skill">
                  <h2 className="heading__primary">Skills</h2>
                  <div className="skill__items">
                    <h3>SWIFT</h3>
                    <ul />
                  </div>
                  <div className="skill__items">
                    <h3>Hadoop</h3>
                    <ul>
                      <li>Cloudera</li>
                      <li>Storage Technology</li>
                      <li>TSM Backup</li>
                    </ul>
                  </div>
                  <div className="skill__items">
                    <h3>Network Computer</h3>
                    <ul>
                      <li>IP4</li>
                      <li>Routing</li>
                    </ul>
                  </div>
                  <div className="skill__items">
                    <h3>HTML5/CSS3 (SASS)</h3>
                    <ul>
                      <li>Responsive WebDesign</li>
                    </ul>
                  </div>
                  <div className="skill__items">
                    <h3>SQL/NoSQL</h3>
                    <ul>
                      <li>MySQL</li>
                      <li>DB2</li>
                    </ul>
                  </div>
                  <div className="skill__items">
                    <h3>GIT</h3>
                    <ul>
                      <li>Basic of Version Control</li>
                    </ul>
                  </div>
                </section>
              </main>
            </div>
            <div className="right">
              <main>
                <section className="language">
                  <h2>Language</h2>
                  <div className="lang-container">
                    <p>Thai</p>
                    <div>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="lang-container">
                    <p>English</p>
                    <div>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="lang-container">
                    <p>Japanese</p>
                    <div>
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </section>
                <section className="interest">
                  <h2>Interests</h2>
                  <div className="interest__items">
                    <div className="interest__item">BNK48</div>
                    <div className="interest__item">Camera</div>
                    <div className="interest__item">Phycology</div>
                    <div className="interest__item">Movie</div>
                    <div className="interest__item">#Stocks&Investment</div>
                    <div className="interest__item">Game</div>
                    <div className="interest__item">BoardGame</div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
