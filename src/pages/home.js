import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
// import ProgressiveImage from "react-progressive-image";

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const transition = { duration: 0.6 };

const Home = ({ imageDetails, image }) => {
  const targetRef = useRef();
  const { scrollYprogress } = useScroll({
    target: targetRef,
    offset: ["ent end", "end start"],
  });
  const opacity = useTransform(scrollYprogress, [0, 0.5], [0, 0.5]);
  return (
    <>
      <main>
        {/* <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className="frame">
                <Link to={`/model/yasmeen-tariq`}>
                  <motion.img
                    src={require("../images/img-lg.png")}
                    alt="Yasmeen Tariq"
                    whileHover={{ scale: 1.1 }}
                    transition={transition}
                  />
                  
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information">
              <div className="title">Yasmeen Tariq</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div> */}
        <div id="app">
          <div data-reactroot="">
            <motion.div
              style={{ opacity }}
              ref={targetRef}
              className="home-container">
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
                  <div className="page-heading">
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
                      <div className="skill-name">
                        <div>Adobe Photoshop</div>
                        <div>Coral Draw</div>
                        <div>Adobe Illustrator</div>
                        <div>HTML5</div>
                        <div>CSS3+</div>
                        <div>Javascript</div>
                        <div>React JS</div>
                        <div>Stimulus JS</div>
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
                      <div className="skill-name">Black Ant Pvt. Ltd.</div>
                      <div className="skill-type">Graphic Designer</div>
                      <div className="skill-time">Nov 2007 - May 2013</div>
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
                      <div className="skill-name">
                        Astrika Infotech Pvt. Ltd.
                      </div>
                      <div className="skill-type">Front-end Developer</div>
                      <div className="skill-time">Jully 2014 - Sept 2018</div>
                    </li>
                    <li>
                      <div className="skill-name">Macann Erricson</div>
                      <div className="skill-type">Front-end Developer</div>
                      <div className="skill-time">Sept 2018 - Present</div>
                    </li>
                  </ul>
                  <div id="p3" className="page-heading">
                    <span className="overlay22"></span>Freelance Work
                  </div>
                  <ul
                    className="skills freelance  wow fadeInUp"
                    data-wow-delay="0.3s">
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
                          href="./srikantvilluri/index.html"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">CCUSA</div>
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
                          href="./ravebizz/index.html"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">Ravebizz Solutions</div>
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
                          href="./ravebizz/index.html"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">Magical Tarot</div>
                      <div className="skill-type">
                        <div>website</div>
                        <div>UI</div>
                      </div>
                      <div className="skill-time">1.5 Months</div>
                    </li>
                    <li className="fade-in">
                      <div className="skill-name">Massakali Sarees</div>
                      <div className="skill-type">
                        <div>application</div>
                        <div>website</div>
                        <div>design</div>
                        <div>UI</div>
                      </div>
                      <div className="skill-time">
                        2 Months{" "}
                        <a
                          href="./ravebizz/index.html"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit
                        </a>
                      </div>
                    </li>
                  </ul>

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
            {/* <div className="page-container wow fadeInUp" data-wow-delay="0.3s">
            <form action="" className="contact-form">
              <div className="g12">
                <div className="g1x2">
                  <div>
                    <input
                      placeholder="Name"
                      type="text"
                      id="field"
                      name="field"
                    />
                  </div>
                </div>

                <div className="g1x2">
                  <div>
                    <input
                      id="submit"
                      type="button"
                      value="Sumbmit"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div
                id="recaptcha"
                className="g-recaptcha"
                data-sitekey="6LcmzdwUAAAAAFDTv8rRuGWfESS1D0_KharJCtHW"
                data-callback="onSubmit"
                data-size="invisible"></div>
            </form>
          </div> */}

            <script>onload();</script>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
