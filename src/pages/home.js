import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
// const transition = { duration: 0.6 };

const Home = ({ imageDetails, image }) => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["ent end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.5]);
  return (
    <>
      <main>
        <div id="app">
          <div data-reactroot="">
            <motion.div ref={targetRef} className="home-container my-name">
              <div className="my-name">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.75, ...transition },
                  }}>
                  <h1>mukesh thankar</h1>
                </motion.div>
                <div className="dnd">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 1, ...transition },
                    }}>
                    <Link to={`/designs`}>designer</Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "100%",
                      transition: { delay: 1, ...transition },
                    }}
                    className="devider">
                    |
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 1, ...transition },
                    }}>
                    <Link to={`/development`}>developer</Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <div id="p0" className="page-container">
              <div className="about-details">
                <div>
                  <div className="page-heading demo-gradient">
                    <span className="overlay22"></span>Me
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="0.3s">
                    <p>
                      I am <span className="mt">Mukesh Thankar</span>, a graphic
                      designer and web developer living in Mumbai, India. I am
                      primarily focused on web design, and development but love
                      taking on any good design/development challenge. I love
                      getting to collaborate with clients to find a strategic
                      and creative solution for any and all of their design
                      needs. When I am not designing, you can find me drawing,
                      playing games.
                    </p>
                  </div>
                </div>

                <div className="work-exp-block">
                  <div id="p1" className="page-heading">
                    <span className="overlay22"></span>
                    Skills
                  </div>
                  <ul className="skills skill">
                    <li className="fade-in">
                      <div className="skill-name soft">
                        <div>Adobe Photoshop</div>
                        <div>Coral Draw</div>
                        <div>Adobe Illustrator</div>
                        <div>HTML5</div>
                        <div>CSS3+</div>
                        <div>Javascript</div>
                        <div>React JS</div>
                      </div>
                    </li>
                  </ul>
                  <div id="p2" className="page-heading">
                    <span className="overlay22"></span>Work Experience
                  </div>
                  <ul
                    className="skills work-exp wow fadeInUp"
                    data-wow-delay="0.3s">
                    <li>
                      <div className="skill-name">11Challengers Pvt. Ltd.</div>
                      <div className="skill-type">Front-end Developer</div>
                      <div className="skill-time">Feb 2024 - June 2015</div>
                    </li>
                    <li>
                      <div className="skill-name">Navneet Futuretech Ltd.</div>
                      <div className="skill-type">Front-end Developer</div>
                      <div className="skill-time">Jan 2022 - Present</div>
                    </li>
                    <li>
                      <div className="skill-name">Coinlock LLC</div>
                      <div className="skill-type">Front-end Developer</div>
                      <div className="skill-time">Apr 2021 - Jan 2022</div>
                    </li>
                    <li>
                      <div className="skill-name">McCann World group</div>
                      <div className="skill-type">Front-end Developer</div>
                      <div className="skill-time">Sept 2018 - Aug 2020</div>
                    </li>
                    <li>
                      <div className="skill-name">
                        Astrika Infotech Pvt. Ltd.
                      </div>
                      <div className="skill-type">Front-end Developer</div>
                      <div className="skill-time">Jully 2014 - Sept 2018</div>
                    </li>
                    <li>
                      <div className="skill-name">
                        Hotels &amp; More Pvt. Ltd.
                      </div>
                      <div className="skill-type">
                        Web Designer &amp; Developer
                      </div>
                      <div className="skill-time">May 2013 - June 2014</div>
                    </li>
                    <li>
                      <div className="skill-name">Black Ant Pvt. Ltd.</div>
                      <div className="skill-type">Graphic Designer</div>
                      <div className="skill-time">Nov 2007 - May 2013</div>
                    </li>
                  </ul>
                  <div id="p3" className="page-heading">
                    <span className="overlay22"></span>Freelance Work
                  </div>
                  <ul
                    className="skills freelance  wow fadeInUp"
                    data-wow-delay="0.3s">
                    <li className="fade-in">
                      <div className="skill-name">Starstake</div>
                      <div className="skill-type">
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                        <div>UX</div>
                      </div>
                      <div className="skill-time">
                        3 Months{" "}
                        <a href="https://starstake.com/#/" target="_blank">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">BlackAnt</div>
                      <div className="skill-type">
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                        <div>UX</div>
                      </div>
                      <div className="skill-time">
                        3 Months{" "}
                        <a
                          href="https://black-ant.vercel.app/index.html"
                          target="_blank">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">Srikant Villuri</div>
                      <div className="skill-type">
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                        <div>UX</div>
                      </div>
                      <div className="skill-time">
                        3 Months{" "}
                        <a
                          href="https://srikantvilluri.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">Amfah Air Purifiers</div>
                      <div className="skill-type">
                        <div>application</div>
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                        <div>UX</div>
                      </div>
                      <div className="skill-time">
                        3 Months{" "}
                        <a
                          href="https://amfah.com/"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">The Dot Studio</div>
                      <div className="skill-type">
                        <div>application</div>
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                        <div>UX</div>
                      </div>
                      <div className="skill-time">
                        3 Months{" "}
                        <a
                          href="https://thedotwebstudio.github.io/"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">Aleixo Technologies</div>
                      <div className="skill-type">
                        <div>website</div>
                        <div>UI</div>
                      </div>
                      <div className="skill-time">
                        1.5 Months{" "}
                        <a href="https://ig-tech.vercel.app/">Visit</a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">i-xpertz</div>
                      <div className="skill-type">
                        <div>application</div>
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                      </div>
                      <div className="skill-time">
                        2 Months{" "}
                        <a
                          href="https://xpertz.vercel.app/home.html"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name"> Trades-app</div>
                      <div className="skill-type">
                        <div>application</div>
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                      </div>
                      <div className="skill-time">
                        1 Months{" "}
                        <a
                          href="https://trades-app.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name"> IIFL</div>
                      <div className="skill-type">
                        <div>application</div>
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                      </div>
                      <div className="skill-time">
                        1 Months{" "}
                        <a
                          href="https://iifl.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">
                        {" "}
                        Prabhudas Liladhar India
                      </div>
                      <div className="skill-type">
                        <div>application</div>
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                      </div>
                      <div className="skill-time">
                        1 Months{" "}
                        <a
                          href="https://plindia-1.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                  </ul>

                  {/* <!--FREELANCE WORK--> */}
                  {/* <div id="p3" className="page-heading">
                    <span className="overlay22"></span>experimental Work
                  </div>
                  <ul
                    className="skills freelance wow fadeInUp"
                    data-wow-delay="0.3s">
                    <li className="fade-in">
                      <div className="skill-name">Experiment 01</div>
                      <div className="skill-type">
                        <div>UI</div>
                        <div>UX</div>
                      </div>
                      <div className="skill-time">
                        0 Months{" "}
                        <a
                          href="./experiment/01/index.html"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">Experiment 02</div>
                      <div className="skill-type">
                        <div>UI</div>
                        <div>UX</div>
                      </div>
                      <div className="skill-time">
                        0 Months{" "}
                        <a
                          href="./experiment/02/index.html"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">Experiment 03</div>
                      <div className="skill-type">
                        <div>UI</div>
                        <div>UX</div>
                      </div>
                      <div className="skill-time">
                        0 Months{" "}
                        <a
                          href="./experiment/03/index.html"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                  </ul> */}
                  {/* <!--EDUCATION--> */}

                  <div id="p4" className="page-heading">
                    <span className="overlay22"></span>Education
                  </div>
                  <ul className="skills edu wow fadeInUp" data-wow-delay="0.3s">
                    <li>
                      <div className="skill-name">BCA</div>
                      <div className="skill-type">Pune Univercity</div>
                      <div className="skill-time">Feb 2012 - 2013</div>
                    </li>
                    <li>
                      <div className="skill-name">Graphic Design</div>
                      <div className="skill-type">Digicom Institute</div>
                      <div className="skill-time">Feb 2011 - 2012</div>
                    </li>
                    <li>
                      <div className="skill-name">HSC</div>
                      <div className="skill-type">Birla Collage</div>
                      <div className="skill-time">Feb 2011 - 2012</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="page-container wow fadeInUp"
              data-wow-delay="0.3s"></div>
          </div>
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
