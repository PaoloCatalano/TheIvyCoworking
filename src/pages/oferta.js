import React from "react"
import SpecialNavbar from "../components/SpecialNavbar"
import Footer from "../components/Footer"
import Seo from "../components/Seo"
import Covid from "../components/Covid"
import Review from "../components/Review"
import Services from "../components/Services"
import Img from "gatsby-background-image"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import SliderOferta from "../components/SliderOferta"
import TwoLangBtn from "../components/TwoLangBtn"
import Countdown from "../components/Countdown"

const Oferta = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [content, setContent] = React.useState("")
  const [eng, setEng] = React.useState(false)
  const {
    oferta,
    pic1,
    pic2,
    pic3,
    pic4,
    fanny,
    giulia,
    michele,
  } = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo2.png" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      oferta: file(relativePath: { eq: "theivycoworking-1.webp" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic1: file(relativePath: { eq: "pic1.webp" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic2: file(relativePath: { eq: "pic2.webp" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic3: file(relativePath: { eq: "pic3.webp" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic4: file(relativePath: { eq: "pic4.webp" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fanny: file(relativePath: { eq: "fanny.webp" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      giulia: file(relativePath: { eq: "giulia.webp" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      michele: file(relativePath: { eq: "michele.webp" }) {
        c: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={{ overflowX: "hidden" }}>
      <Seo
        title="The Ivy Coworking Fotos"
        lang="es"
        description="Nuestro coworking se sitúa en un local de 160 m2 distrubuidos en dos plantas. Es un acogedor espacio, en el que poder refugiarse de los ruidos de la ciudad, pero aún así, estar a dos pasos de ella."
        keywords="SALA REUNIONS, CABINA TELEFÒNICA, PATIO SECRETO, ZONA CHILL Y COMEDOR"
      />
      <SpecialNavbar esp />
      <TwoLangBtn eng={eng} setEng={setEng} />
      <div className="landing">
        <div style={{ position: "relative" }}>
          <Img fluid={oferta.c.f} style={{ height: "100%" }}>
            <div
              style={{
                // zIndex: 20,
                background: "rgb(40, 19, 19, 0.58)",
                // position: "absolute",
                width: "100vw",
                height: "auto",
                top: 0,
                display: "grid",
                placeItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    placeContent: "center",
                  }}
                >
                  <article
                    className="oferta"
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                      width: "30vw",
                      margin: "1rem",
                      minWidth: 350,
                    }}
                  >
                    <h1 style={{ fontSize: 35, textTransform: "uppercase" }}>
                      {eng
                        ? "Do you need a place to work that inspires you? "
                        : "¿NECESITAS UN ESPACIO DONDE TRABAJAR Y QUE TE INSPIRE?"}
                    </h1>
                    <p>
                      {eng
                        ? "Are you struggling to focus on your job and you are constantly distracted while working from home?  "
                        : "¿No puedes centrarte en el trabajo en casa y estas continuamente distraído?"}
                    </p>
                    <p>
                      {eng
                        ? "Are you looking for a new way of working in a comfortable, motivating and  welcoming place close to the beautiful Sagrada Familia? "
                        : "¿Buscas una nueva forma de trabajar, en un espacio confortable y acogedor cerca de la Sagrada Familia, que te motive?"}
                    </p>
                    <p>
                      {eng
                        ? "If so, The Ivy coworking is your place and this is the offer for you! "
                        : " ¡Entonces The Ivy coworking es tu espacio y esta oferta es para ti!"}
                    </p>
                  </article>
                  <article
                    style={{
                      width: "30vw",
                      minWidth: 350,
                      margin: "1rem",
                      backgroundColor: "#ffffff",
                      textAlign: "center",
                      padding: "2rem 1rem",
                    }}
                  >
                    <div id="form"></div>
                    <strong style={{ fontSize: 50 }}>
                      {eng ? "OFFER" : "OFERTA"}
                    </strong>
                    <div
                      className="grassetto"
                      style={{
                        fontSize: 51,
                        fontWeight: 900,
                        color: "#077287",
                      }}
                    >
                      {eng ? "1 FREE WEEK" : "1 SEMANA GRATIS!"}
                    </div>
                    <h3
                      className="grassetto"
                      style={{ margin: "1rem", fontSize: 18 }}
                    >
                      {eng
                        ? "From the 1st to the 30th of April"
                        : "Dal 6 al 30 de April 2021"}
                    </h3>
                    <h4
                      style={{
                        color: "#000000",
                        fontSize: 25,
                        fontWeight: 500,
                        lineHeight: "1.4em",
                        letterSpacing: 1,
                      }}
                    >
                      {eng
                        ? "Book it here and enjoy a 1 week trial at no cost and no commitment!"
                        : " ¡Reserva aquí y disfruta de 1 semana de prueba sin coste ni compromiso!"}
                    </h4>

                    <form>
                      <div className="form-group">
                        <div
                          style={{
                            display: "flex",
                            transform: "translateX(5px)",
                          }}
                        >
                          <input
                            style={{
                              border: `solid 1px ${name ? "black" : "#F94144"}`,
                            }}
                            type="text"
                            name="name"
                            placeholder={`${eng ? "Name" : "Tu nombre"}`}
                            className="form-control"
                            required
                            onChange={e => {
                              setName(e.target.value)
                            }}
                          />
                          <span style={{ color: "#F94144", paddingLeft: 3 }}>
                            *
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            transform: "translateX(5px)",
                          }}
                        >
                          <input
                            style={{
                              border: `solid 1px ${
                                email.includes("@") ? "black" : "#F94144"
                              }`,
                            }}
                            type="email"
                            placeholder={`${eng ? "E-mail" : "Tu email"}`}
                            name="email"
                            className="form-control"
                            required
                            onChange={e => {
                              setEmail(e.target.value)
                            }}
                          />
                          <span style={{ color: "#F94144", paddingLeft: 3 }}>
                            *
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            transform: "translateX(5px)",
                          }}
                        >
                          <textarea
                            style={{
                              border: `solid 1px ${
                                content ? "black" : "#F94144"
                              }`,
                            }}
                            name="message"
                            placeholder={`${
                              eng
                                ? "When would you like to start?"
                                : "Cuando quieres empezar?"
                            }`}
                            className="form-control"
                            required
                            onChange={e => {
                              setContent(e.target.value)
                            }}
                          ></textarea>
                          <span style={{ color: "#F94144", paddingLeft: 3 }}>
                            *
                          </span>
                        </div>
                        <p
                          style={{
                            color: "#F94144",
                            marginBottom: 20,
                            textAlign: "left",
                          }}
                        >
                          * {eng ? "Required" : "Requerido"}
                        </p>
                      </div>
                      <Link
                        className={`submit-btn btn  ${
                          name && email.includes("@") && content
                            ? "active-btn"
                            : "inactive-btn"
                        }`}
                        to="/confirm/"
                        alt="confirm page"
                        state={{
                          name: `${name}`,
                          email: `${email}`,
                          content: `${content}`,
                        }}
                        style={{
                          borderRadius: "0.25rem",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                        onClick={() => {
                          if (typeof window !== "undefined") {
                            if (window.fbq != null) {
                              window.fbq("track", "Lead", {
                                value: 100,
                                currency: "EUR",
                              })
                            }
                          }
                        }}
                      >
                        {eng ? "Book Now" : "Reserva aquì"}
                      </Link>
                    </form>
                  </article>
                </div>
              </div>
            </div>
          </Img>
          <div style={{ display: "grid", placeItems: "center" }}>
            <div style={{ maxWidth: 1500, width: "100vw" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: 900,
                  fontSize: 50,
                  color: "#333333",
                  margin: "2rem",
                }}
              >
                {eng ? "WHAT WE OFFER" : "QUE OFRECEMOS"}
              </h1>
              <article className="oferta" style={{ textAlign: "center" }}>
                <p>
                  {eng
                    ? "A safe workspace adapted to the current anti-COVID regulations and furnished with ergonomic pieces of furniture."
                    : "Un espacio seguro adaptado a la normativa actual anti COVID y con mobiliario ergonomico."}
                </p>
                <p>
                  {eng
                    ? "A 160 m2 of a cozy workspace where to seek refuge from the city’s noises at two feet from the city itself! "
                    : "Un espacio acogedor de 160 m2, en el que podrás refugiarte de los ruidos de la ciudad estando a dos pasos de ella!"}
                </p>
              </article>
              <SliderOferta />
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: 900,
                  fontSize: 50,
                  color: "#333333",
                  margin: "2rem",
                }}
              >
                {eng
                  ? "DISCOVER THE ADVANTAGES OF WORKING HERE"
                  : "DESCUBRES LAS VENTAJAS DE TRABAJAR AQUÌ"}
              </h1>
              <div className="contenitore-servizi cubi">
                <div className="coppia">
                  <div className="servizio">
                    <Image fluid={pic1.c.f} />
                  </div>
                  <div className="servizio testo">
                    <p>
                      {eng
                        ? "You will enjoy a naturally enlightened cozy workspace distributed over two floors with high-speed WiFi, printer facilities and close to the metro station. "
                        : "Disfrutarás de un acogedor espacio de luz natural, distribuido en dos plantas, con WiFi de alta velocidad, impresora/fotocopiadora y ubicado en proximidad del metro."}
                    </p>
                  </div>
                </div>
                <div className="coppia">
                  <div className="servizio">
                    <Image fluid={pic2.c.f} />
                  </div>
                  <div className="servizio testo">
                    <p>
                      {eng
                        ? "During the day, you can enjoy a coffee/lunch break in a nice and quiet interior patio. "
                        : "Durante el dìa podrás disfrutar de un coffee break o un lunch break en un acogedor patio interior. "}
                    </p>
                    <p>
                      {eng
                        ? "Furthermore, afterwork with free beer every Friday!"
                        : "¡Y además el viernes un afterwork con free beer!"}
                    </p>
                  </div>
                </div>
                <div className="coppia rev">
                  <div className="servizio testo">
                    <p>
                      {eng
                        ? "A cafeteria with a wide selection of teas, american coffee and biscuits"
                        : "Una cafetería con un amplia variedad de té, galletas y cafè americano."}
                    </p>
                    <p>
                      {eng
                        ? "We also provide free breakfast on Monday morning!"
                        : "¡Además el lunes por la mañana te ofrecemos el desayuno!"}
                    </p>
                  </div>
                  <div className="servizio">
                    <Image fluid={pic3.c.f} />
                  </div>
                </div>
                <div className="coppia rev">
                  <div className="servizio testo">
                    <p>
                      {eng
                        ? "You can also bring your dog with you."
                        : "La posibilidad también de traer tu propia mascota."}
                    </p>
                    <p>
                      {eng
                        ? "If you need it, we will walk him/her when you are busy!"
                        : "Si lo necesitas, la llevaremos a pasear."}
                    </p>
                  </div>
                  <div className="servizio">
                    <Image fluid={pic4.c.f} />
                  </div>
                </div>
              </div>

              <h1
                style={{
                  textAlign: "center",
                  fontWeight: 900,
                  fontSize: 50,
                  color: "#333333",
                  margin: "5rem 0 1rem 0",
                }}
              >
                {eng
                  ? "WHAT DO OUR COMMUNITY SAY ABOUT US?"
                  : "¿QUE DICE NUESTRA COMUNIDAD?"}
              </h1>
              <div className="contenitore-servizi reviews">
                <Review
                  fluid={fanny.c.f}
                  cinque
                  name="Fanny"
                  comment={`${
                    eng
                      ? "The workspace is very cool, bright and quiet. The patio is super nice with lots of plants. It’s a very nice space to work but there are also other areas where to have a coffee and disconnect from work."
                      : "El espacio es muy chulo, luminoso y tranquilo. El patio es super agradable con muchas plantas. Es un espacio muy guay para trabajar pero tambien hay espacios para tomar un café y desconectar del trabajo."
                  }`}
                />
                <Review
                  fluid={giulia.c.f}
                  cinque
                  name="Giulia"
                  comment={`${
                    eng
                      ? "The Ivy Coworking has a very pleasant and practical environment to work in complete tranquility. Lots of natural light, good Wi-Fi, a cozy interior patio and a decoration that is carefully detailed. The coffee is great and the kitchen is equipped with everything you need. The attention of the owners is 10/10 and last but not least it’s pet friendly! My experience has been very positive!"
                      : "The Ivy coworking tiene un ambiente muy agradable y práctico para trabajar en toda tranquilidad. Mucha luz natural, buen wifi, un acogedor patio interior y una decoración cuidada al detalle. El café está buenísimo y la cocina está equipada con todo lo necesario. La atención de las dueñas es de 10 y encima es pet friendly! Mi experiencia ha sido muy positiva!"
                  }`}
                />
                <Review
                  fluid={michele.c.f}
                  quattro
                  name="Michele"
                  comment={`${
                    eng
                      ? "Outstanding workspace, bright, quiet and equipped with everything you may need to work comfortably. Cleanliness and safety guaranteed by the management. The cozy patio is ideal for your breaks and for enjoying the great coffee they make there."
                      : "Espacio de trabajo excepcional, luminoso, silencioso y equipado con todo lo que puedas necesitar para trabajar cómodamente. Limpieza y seguridad garantizadas por la dirección. El acogedor patio es ideal para los descansos y para disfrutar del excelente café que hacen allì."
                  }`}
                />
              </div>
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: 900,
                  fontSize: 50,
                  color: "#333333",
                  margin: "5rem 0 1rem 0",
                }}
              >
                {eng ? "OUR SERVICES" : "NUESTROS SERVICIOS"}
              </h1>
              <Services lang={`${eng ? "en" : "es"}`} />
            </div>
          </div>
          <Countdown lang={`${eng ? "en" : "es"}`} />
          <Covid lang={`${eng ? "en" : "es"}`} />
        </div>
      </div>
      <Footer lang={`${eng ? "en" : "es"}`} />
    </div>
  )
}

export default Oferta
