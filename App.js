import './App.css';

function App() {
  return (

    <div className='App'>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-link">
            <a href="#profile">
              <svg className="my-navbar-icons" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              {/* <p class="nav-text">Personal Info</p> */}
            </a>
          </li>
          <li className="nav-link">
            <a href="#education">
              <svg className="my-navbar-icons" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
              {/* <p class="nav-text">Education</p> */}
            </a>
          </li>
          <li className="nav-link">
            <a href="#skills">
              <svg className="my-navbar-icons" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
              {/* <p class="nav-text">Skills</p> */}
            </a>
          </li>
          <li className="nav-link">
            <a href="#achievements">
              <svg className="my-navbar-icons" fill="currentColor" viewBox="0 0 24 24"><path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z" />
              </svg>
              {/* <p class="nav-text">Achievements</p> */}
            </a>
          </li>
          <li className="nav-link">
            <a href="#projects">
              <svg className="my-navbar-icons" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
              </svg>
              {/* <p class="nav-text">Projects</p> */}
            </a>
          </li>
          <li className="nav-link">
            <a href="#certifications">
              <svg className="my-navbar-icons" fill="currentColor" viewBox="0 0 24 24"><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8.82,13.05 L7.4,14.46L10.94,18l5.66-5.66l-1.41-1.41l-4.24,4.24L8.82,13.05z" />
              </g></svg>
              {/* <p class="nav-text">Certification</p> */}
            </a>
          </li>
        </ul>
      </nav>
      <div className="main-screen">
        <header>
          <img id="profile" src="https://raw.githubusercontent.com/yogirajgutte/yogirajgutte.github.io/352dedfb6779c20e47ec68baa9b61d6e39f0969f/img/logo.png" alt="Logo" width={500} height={300} />
        </header>
        <section className="profile" id="profile">
          <div className="profile-sec-1">
            <h1>HEY ARYA HERE!
             <p>Naam tho sunna hi hoga</p></h1>
            <p>I'm an aspiring developer. I love to learn new things and make new things. </p>
            <p>I convert ideas into reality.</p>
            <p>Feel free to contact me.</p>
            
            <div className="contact">
              <div className>
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
                <span>arvyavh04@gmail.com</span>
              </div>
              <a className="resume-link" href="https://drive.google.com/file/d/1esN2-q-BA_i6X5XrIa_LjlhhzjWoOGP6/view?usp=sharing" target="_blank">
                <div className="resume-btn">
                  <span>Resume</span>
                  <svg viewBox="0 0 24 24" fill="currentColor"><g><rect fill="none" height={24} width={24} /></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" /></g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="profile-sec-2">
            <a className="profile-sec-2-links" href="https://www.linkedin.com/in/arya-v-h-a4278326a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
              <svg className="profile-sec-2-icons" fill="currentColor" viewBox="0 0 48 48">
                <path style={{ stroke: 'none', fillRule: 'nonzero', fillOpacity: 1 }} d="M 43.601562 0 L 4.398438 0 C 2 0 0 2 0 4.398438 L 0 43.601562 C 0 46 2 48 4.398438 48 L 43.601562 48 C 46 48 48 46 48 43.601562 L 48 4.398438 C 48 2 46 0 43.601562 0 Z M 14 40 L 6 40 L 6 18 L 14 18 Z M 10 15.398438 C 7.601562 15.398438 6 13.796875 6 11.796875 C 6 9.601562 7.601562 8 10 8 C 12.398438 8 14 9.601562 14 11.601562 C 14 13.796875 12.398438 15.398438 10 15.398438 Z M 42 40 L 34 40 L 34 28 C 34 24.796875 31.796875 24 31.203125 24 C 30.601562 24 28 24.398438 28 28 C 28 28.398438 28 40 28 40 L 20 40 L 20 18 L 28 18 L 28 21.203125 C 29.203125 19.398438 31.203125 18 35 18 C 38.796875 18 42 21 42 28 Z M 42 40 " />
              </svg>
            </a>
            <a className="profile-sec-2-links" href="https://github.com/arya-vh/arya-vh.github.io" target="_blank">
              <svg className="profile-sec-2-icons" fill="currentColor" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
            </a>
            <a className="profile-sec-2-links" href="https://www.instagram.com/ankitha._.rao?igsh=MXNhN3U5c214ZTZu" target="_blank">
              <svg className="profile-sec-2-icons" fill="currentColor" viewBox="0 0 64 64">
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z" />
              </svg>
            </a>
          </div>
        </section>
        <section className="education-section" id="education">
          <h1>EDUCATION
            <img className="playbutton" src="https://raw.githubusercontent.com/yogirajgutte/yogirajgutte.github.io/352dedfb6779c20e47ec68baa9b61d6e39f0969f/img/play-button.png" alt />
          </h1>
          <div className="institutes">
            <div className="inst">
              <div className="inst-name-container-1">
                <p className="inst-name">Sahyadri College of Engineering</p>
              </div>
              <div className="inst-description">
                <h4>Bachelor of Engineering in Computer Science</h4>
                <p>2022-2026</p>
                <p>Mangalore,Karnataka</p>
              </div>
            </div>
            <div className="inst">
              <div className="inst-name-container-2">
                <p className="inst-name">Aloysius PU College</p>
              </div>
              <div className="inst-description">
                <h4>Higher Secondary Certificate (HSC)</h4>
                <p>2020-2022</p>
                <p>Mangalore,Karnataka</p>
              </div>
            </div>
            <div className="inst">
              <div className="inst-name-container-3">
                <p className="inst-name">Sharada Vidyalaya School</p>
              </div>
              <div className="inst-description">
                <h4>Central Board of Secondary Education(CBSE)</h4>
                <p>2020</p>
                <p>Mangalore,Karnataka</p>
              </div>
            </div>
          </div>
        </section>
        <section className="skills-section" id="skills">
          <h1>SKILLS
            <img className="playbutton" src="https://raw.githubusercontent.com/yogirajgutte/yogirajgutte.github.io/352dedfb6779c20e47ec68baa9b61d6e39f0969f/img/play-button.png" alt />
          </h1>
          <div className="skills-container">
            <div className="skills-container-card">
              <div className="skill">
                <p className="skill-name">Python</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-python" /></div>
                  <p className="skill-point">8/10</p>
                </div>
              </div>
              <div className="skill">
                <p className="skill-name">C++</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-c" /></div>
                  <p className="skill-point">7/10</p>
                </div>
              </div>
              <div className="skill">
                <p className="skill-name">HTML/CSS</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-html" /></div>
                  <p className="skill-point">8/10</p>
                </div>
              </div>
            </div>
            <div className="skills-container-card">
              <div className="skill">
                <p className="skill-name">DS/Algo</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-ds" /></div>
                  <p className="skill-point">7/10</p>
                </div>
              </div>
              <div className="skill">
                <p className="skill-name">SQL</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-sql" /></div>
                  <p className="skill-point">7/10</p>
                </div>
              </div>
              <div className="skill">
                <p className="skill-name">GCP</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-gcp" /></div>
                  <p className="skill-point">6/10</p>
                </div>
              </div>
            </div>
            <div className="skills-container-card">
              <div className="skill">
                <p className="skill-name">Tensorflow</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-tensor" /></div>
                  <p className="skill-point">6/10</p>
                </div>
              </div>
              <div className="skill">
                <p className="skill-name">JavaScript</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-js" /></div>
                  <p className="skill-point">7/10</p>
                </div>
              </div>
              <div className="skill">
                <p className="skill-name">MS Excel</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-ms" /></div>
                  <p className="skill-point">8/10</p>
                </div>
              </div>
            </div>
            <div className="skills-container-card">
              <div className="skill">
                <p className="skill-name">Django</p>
                <div className="skill-stats">
                  <div className="skill-bar-bg"><div className="skill-bar-dj" /></div>
                  <p className="skill-point">7/10</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="achievements-section" id="achievements">
          <h1>ACHIEVEMENTS
            <img className="playbutton" src="https://raw.githubusercontent.com/yogirajgutte/yogirajgutte.github.io/352dedfb6779c20e47ec68baa9b61d6e39f0969f/img/play-button.png" alt />
          </h1>
          <div className="achievements-container">
            <a className="achievements-link" href="https://drive.google.com/file/d/1D6DD_lBS_1cIomJDLF3WKlGVNul53HaG/view?usp=sharing" target="_blank">
              <div className="achievements-card">
                <img className="achievement-img" src="https://tse2.mm.bing.net/th?id=OIP.3j61o-DnR0zDOQCGYuoQuAHaEK&pid=Api&P=0&h=180" alt="SOCIOVISION 2k23" />
                <div className="achievement-desc">
                  <div>
                    <h4 className="achievement-name">SOCIOAVISION 2023</h4>
                    <p>June 2021</p>
                  </div>
                  <p>"Cleared Final Round"</p>
                </div>
              </div>
            </a>
            <a className="achievements-link" href="https://drive.google.com/file/d/1_R4xb5S7pV1ZRXWi7kICbW0AHGOxnz3l/view?usp=sharing" target="_blank">
              <div className="achievements-card">
                <img className="achievement-img" src="https://tse2.mm.bing.net/th?id=OIP.3j61o-DnR0zDOQCGYuoQuAHaEK&pid=Api&P=0&h=180" alt="PITCH desk" />
                <div className="achievement-desc">
                  <div>
                    <h4 className="achievement-name">pitch desk</h4>
                    <p>January 2021</p>
                  </div>
                  <p>"Secured 9th Rank"</p>
                </div>
              </div>
            </a>
            <a className="achievements-link" href="https://drive.google.com/file/d/16KHQ3Gv5WCbRMajeNd85RCAdfryieUs5/view?usp=sharing" target="_blank">
              <div className="achievements-card">
                <img className="achievement-img" src="https://tse2.mm.bing.net/th?id=OIP.3j61o-DnR0zDOQCGYuoQuAHaEK&pid=Api&P=0&h=180" alt="SIH finalist" />
                <div className="achievement-desc">
                  <div>
                    <h4 className="achievement-name">SIH finalist</h4>
                    <p>August 2020</p>
                  </div>
                  <p>"smart india hackathon"</p>
                </div>
              </div>
            </a>
            <a className="achievements-link" href="https://drive.google.com/file/d/1yx4MLdxA1kitJXH3KdlB4MrrW5jVaReT/view?usp=sharing" target="_blank">
              <div className="achievements-card">
                <img className="achievement-img" src="https://tse2.mm.bing.net/th?id=OIP.3j61o-DnR0zDOQCGYuoQuAHaEK&pid=Api&P=0&h=180" alt="HackerRank" />
                <div className="achievement-desc">
                  <div>
                    <h4 className="achievement-name">Google cloud course completetion</h4>
                  </div>
                  <p>"5 Star Badge"</p>
                </div>
              </div>
            </a>
            <a className="achievements-link" href="https://www.hackerrank.com/gutteyogiraj" target="_blank">
              <div className="achievements-card">
                <img className="achievement-img" src="https://tse2.mm.bing.net/th?id=OIP.3j61o-DnR0zDOQCGYuoQuAHaEK&pid=Api&P=0&h=180" alt="HackerRank" />
                <div className="achievement-desc">
                  <div>
                    <h4 className="achievement-name">HackerRank SQL</h4>
                  </div>
                  <p>"5 Star Badge"</p>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="projects-section" id="projects">
          <h1>PROJECTS
            <img className="playbutton" src="https://raw.githubusercontent.com/yogirajgutte/yogirajgutte.github.io/352dedfb6779c20e47ec68baa9b61d6e39f0969f/img/play-button.png" alt />
          </h1>
          <div className="projects-container">
            <a className="projects-link" href="https://github.com/yogirajgutte/Image-Classifier-and-Text-Extractor" target="_blank">
              <div className="projects-card">
                <div className="project-name-container-1">
                  <p className="project-name">What's on My Screen?</p>
                </div>
                <div className="project-desc">
                  <div>
                    <p>January 2021</p><br />
                    <p>Tech-stack: Python, Tensorflow, CNN, Tesseract, PyQT</p>
                  </div>
                  <p>"It's a tool that can recognize objects or copy text present
                    in the area cropped by the User on the screen"</p>
                </div>
              </div>
            </a>
            <a className="projects-link" href="https://www.kaggle.com/yogirajgutte/dating-app-match-percentage-calculation" target="_blank">
              <div className="projects-card">
                <div className="project-name-container-2">
                  <p className="project-name">Dating App Match Percentage Calculation</p>
                </div>
                <div className="project-desc">
                  <div>
                    <p>December 2020</p><br />
                    <p>Tech-stack: Python, Natural Language Processing, Sci-Kit-Learn, Pandas</p>
                  </div>
                  <p>"Analysis of profile data of users of a dating app and
                    calculation of their match percentage with each other"</p>
                </div>
              </div>
            </a>
            <a className="projects-link" href="https://github.com/yogirajgutte/Electronic-Arts-Deliverables/tree/master/VaxMan" target="_blank">
              <div className="projects-card">
                <div className="project-name-container-3">
                  <p className="project-name">Vax-Man (Game)</p>
                </div>
                <div className="project-desc">
                  <div>
                    <p>June 2021</p><br />
                    <p>Tech-stack: Python, PyGame</p>
                  </div>
                  <p>"A game based on Pac-Man but with different set of rules.
                    It was made as a deliverable for 'EA Virtual Experience Program'"</p>
                </div>
              </div>
            </a>
            <a className="projects-link" href="https://www.kaggle.com/yogirajgutte/restaurant-revenue-prediction" target="_blank">
              <div className="projects-card">
                <div className="project-name-container-4">
                  <p className="project-name">Restaurant Revenue Prediction</p>
                </div>
                <div className="project-desc">
                  <div>
                    <p>August 2020</p><br />
                    <p>Tech-stack: Python, Sci-Kit-Learn, Pandas, Matplotlib</p>
                  </div>
                  <p>"Analysis and visualization of provided dataset and prediction
                    of revenue of restaurants using Machine Learning"</p>
                </div>
              </div>
            </a>
            <a className="projects-link" href="https://github.com/yogirajgutte/Binary-Image-Classifier-using-CNN" target="_blank">
              <div className="projects-card">
                <div className="project-name-container-5">
                  <p className="project-name">Binary Image Classifier Using CNN</p>
                </div>
                <div className="project-desc">
                  <div>
                    <p>September 2020</p><br />
                    <p>Tech-stack: Python, Keras, CNN </p>
                  </div>
                  <p>"A Convolutional Neural Network model that can classify images
                    of Pizza and Softdrink"</p>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="certifications-section" id="certifications">
          <h1>CERTIFICATIONS
            <img className="playbutton" src="https://raw.githubusercontent.com/yogirajgutte/yogirajgutte.github.io/352dedfb6779c20e47ec68baa9b61d6e39f0969f/img/play-button.png" alt />
          </h1>
          <div className="certifications-container">
            <a className="certifications-link" href="https://drive.google.com/file/d/1DAOBNkmTP0TCC6fTdh3pqlDYaYa-PCrZ/view?usp=sharing" target="_blank">
              <div className="certifications-card">
                <img className="certification-img" src="https://tse1.mm.bing.net/th?id=OIP.P7NP1ufD7H8jm4JHDZGi_AHaEo&pid=Api&P=0&h=180" alt="Electronic Arts" />
                <div className="certification-desc">
                  <div>
                    <h4 className="certification-name">Software Engineering Virtual Experience Program</h4>
                  </div>
                  <p>June 2021</p>
                </div>
              </div>
            </a>
            <a className="certifications-link" href="https://drive.google.com/file/d/1SOOxVHSgoJQM4z0-Mp8O-MkhczvGEU2p/view?usp=sharing" target="_blank">
              <div className="certifications-card">
                <img className="certification-img" src="https://tse4.mm.bing.net/th?id=OIP.1uLgxUD_G0WdHy9uxKu-LgHaEK&pid=Api&P=0&h=180" alt="Accenture" />
                <div className="certification-desc">
                  <div>
                    <h4 className="certification-name">Developer Program</h4>
                  </div>
                  <p>June 2021</p>
                </div>
              </div>
            </a>
            <a className="certifications-link" href="https://drive.google.com/file/d/10M7NGxr2KixHbIOzU3z6tzDTlNaAulEg/view?usp=sharing" target="_blank">
              <div className="certifications-card">
                <img className="certification-img" src="https://tse2.mm.bing.net/th?id=OIP.CoFND0rWJ0ww3Sd1dBQaEwHaEo&pid=Api&P=0&h=180" alt="Google Cloud Platform" />
                <div className="certification-desc">
                  <div>
                    <h4 className="certification-name">Google Cloud Platform</h4>
                  </div>
                  <p>May 2021</p>
                </div>
              </div>
            </a>
            <a className="certifications-link" href="https://drive.google.com/file/d/1I5h-vSTgadpNeTofWqv5JaTscIA2ahP2/view?usp=sharing" target="_blank">
              <div className="certifications-card">
                <img className="certification-img" src="https://tse1.mm.bing.net/th?id=OIP.a2a1E_P9IdejQRurjgnphwHaEF&pid=Api&P=0&h=180" alt="Coursera" />
                <div className="certification-desc">
                  <div>
                    <h4 className="certification-name">Applied Plotting, Charting &amp; Data Visualization in Python</h4>
                  </div>
                  <p>November 2020</p>
                </div>
              </div>
            </a>
            <a className="certifications-link" href="https://coursera.org/share/c8305e2682bba6fe2a740626c8f6664a" target="_blank">
              <div className="certifications-card">
                <img className="certification-img" src="https://tse3.mm.bing.net/th?id=OIP.ZOIL4hdeJ6uQwSRXL5XYwwHaEo&pid=Api&P=0&h=180" alt="Coursera" />
                <div className="certification-desc">
                  <div>
                    <h4 className="certification-name">Introduction to Data Science in Python</h4>
                  </div>
                  <p>October 2020</p>
                </div>
              </div>
            </a>
            <a className="certifications-link" href="https://www.hackerrank.com/certificates/5bf928369fba" target="_blank">
              <div className="certifications-card">
                <img className="certification-img" src="https://tse3.mm.bing.net/th?id=OIP.pozJhOiXlD9d1SIDuABwpgHaEo&pid=Api&P=0&h=180" alt="HackerRank" />
                <div className="certification-desc">
                  <div>
                    <h4 className="certification-name">Problem Solving</h4>
                  </div>
                  <p>August 2020</p>
                </div>
              </div>
            </a>
            <a className="certifications-link" href="https://insidesherpa.s3.amazonaws.com/completion-certificates/Deloitte/FqFtWwQzNxJ8Qsh5H_Deloitte_mkoEH2ZpNYXGJtNi9_completion_certificate.pdf" target="_blank">
              <div className="certifications-card">
                <img className="certification-img" src="https://tse4.mm.bing.net/th?id=OIP.MGfeO_1WhfRoqaVuu9hW9gHaEo&pid=Api&P=0&h=180" alt="Deloitte" />
                <div className="certification-desc">
                  <div>
                    <h4 className="certification-name">Technology Consulting Virtual Internship</h4>
                  </div>
                  <p>May 2020</p>
                </div>
              </div>
            </a>
            <a className="certifications-link" href="https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=121&cvid=8nGcnz4m/pNMKbIfAcXkJw==" target="_blank">
              <div className="certifications-card">
                <img className="certification-img" src="https://tse2.mm.bing.net/th?id=OIP.SCxISk6MBKlzXDE4EioGcgHaEo&pid=Api&P=0&h=180" alt="Microsoft" />
                <div className="certification-desc">
                  <div>
                    <h4 className="certification-name">Microsoft Office Specialist</h4>
                  </div>
                  <p>April 2014</p>
                </div>
              </div>
            </a>
          </div>
        </section>
        <footer className="footer">
          <div className="bk-to-top">
            <a href="#profile">
              <svg className="upward" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10,4c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S6.69,4,10,4 M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7 c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3L10,3z M9.5,10v3h1v-3H13l-3-3l-3,3H9.5z" />
              </svg>
            </a>
            <p>Back To Top</p>
          </div>
        </footer>
      </div>
    </div>

  );
}

export default App;