import React from "react"
import SpecialNavbar from "../components/SpecialNavbar"
import Section from "../components/Section"
import Footer from "../components/Footer"

const privacyPolicy = () => {
  return (
    <>
      <SpecialNavbar smallPopup />
      <section className="policy">
        <Section title="POLÍTICA DE COOKIES" />
        <p>
          The Ivy Co-working S.L., a través del presente documento, recoge su
          Política de recogida y tratamiento de cookies, en cumplimiento de lo
          dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y de Comercio Electrónico
          (LSSICE). Las cookies se almacenan en el equipo terminal del usuario
          (ordenador o dispositivo móvil) y recopilan información al visitar la
          página web www.thevycoworking.com con la finalidad de mejorar la
          usabilidad de las mismas, conocer los hábitos o necesidades de
          navegación de los usuarios para poder adaptarse a los mismos, así como
          obtener información con fines estadísticos. En el caso de aquellos
          usuarios que ya sean clientes de The Ivy Co-working S.L., la
          información recabada con las cookies servirá también para su
          identificación al acceder a las distintas herramientas que The Ivy
          Co-working S.L. pone a su disposición para la gestión de los
          servicios. La presente Política de Cookies será de aplicación a
          aquellos usuarios que voluntariamente visitan las páginas web de The
          Ivy Co-working S.L., cumplimentan formularios de recogida de datos,
          acceden a las herramientas que The Ivy Co-working S.L. pone a
          disposición de sus clientes para gestionar sus servicios, o utilizan
          cualquier otro servicio presente en el sitio web que implique la
          comunicación de datos a The Ivy Co-working S.L., o el acceso a datos
          por The Ivy Co-working S.L., para la prestación de sus servicios. The
          Ivy Co-working S.L. informa a los usuarios de sus páginas web, de la
          existencia de cookies y pone a su disposición la presente Política con
          la finalidad de informarles acerca del uso y del objeto de las mismas.
          El hecho de continuar la navegación a través de sus páginas, supone el
          conocimiento y la aceptación de la presente Política por parte de
          dichos usuarios. The Ivy Co-working S.L. utiliza los siguientes tipos
          de cookies: Clasificadas por su titularidad: Cookies propias: enviadas
          y gestionadas directamente porThe Ivy Co-working S.L. Cookies de
          terceros: enviadas y gestionadas por un tercero ajeno a The Ivy
          Co-working S.L., de forma anónima, con la finalidad de realizar
          estudios estadísticos de navegación por las páginas web de The Ivy
          Co-working S.L. Clasificadas por su finalidad:
        </p>
        <p>
          {" "}
          Cookies técnicas y/o de personalización: facilitan la navegación, al
          identificar la sesión, permitir el acceso a herramientas de acceso
          restringido, además de configurar a medida las opciones disponibles.
          Posibilitan la prestación del servicio solicitado previamente por el
          usuario.
        </p>
        <p>
          {" "}
          Cookies de análisis y/o publicidad: permiten conocer el número de
          visitas recibidas en las diferentes secciones de las páginas web, los
          hábitos y tendencias de sus usuarios y en consecuencia, poder mejorar
          la navegación y el servicio ofrecido por The Ivy Co-working S.L.
          (fundamentalmente, Google Analytics, Facebook Pixel Tracking), así
          como gestionar los espacios publicitarios incluidos en la página web
          visitada por el usuario. Recopila datos de forma anónima con la
          finalidad de obtener perfiles de navegación de los usuarios.
          Clasificadas por su duración:
        </p>
        <p>
          {" "}
          Cookies de sesión: recaban y almacenan los datos mientras el usuario
          accede a la página web.
        </p>
        <p>
          Cookies persistentes: recaban y almacenan los datos en el terminal del
          usuario durante un periodo de tiempo variable en función de cuál sea
          la finalidad para la que han sido utilizadas. El tiempo de
          conservación de las cookies dependerá del tipo de que se trate y
          siempre será el mínimo indispensable para cumplir su finalidad. En
          cualquier caso, los usuarios pueden configurar su navegador, de manera
          que se deshabilite o bloquee la recepción de todas o algunas de las
          cookies. El hecho de no desear recibir estas cookies, no constituye un
          impedimento para poder acceder a la información de los sitios web de
          The Ivy Co-working S.L. aunque el uso de algunos servicios podrá ser
          limitado. Si una vez otorgado el consentimiento para la recepción de
          cookies, se desease retirar éste, se deberán eliminar aquellas
          almacenadas en el equipo del usuario, a través de las opciones de los
          diferentes navegadores. La forma de configurar los diferentes
          navegadores para ejercitar las acciones señaladas en los párrafos
          anteriores, se puede consultar en:
        </p>
        <p>
          {" "}
          Explorer:{" "}
          <a
            href=" http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9
          </a>
        </p>
        <p>
          {" "}
          Chrome:{" "}
          <a
            href="https://support.google.com/chrome/answer/95647?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/chrome/answer/95647?hl=es
          </a>
        </p>
        <p>
          {" "}
          Firefox:{" "}
          <a
            href=" http://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocal
          e=en-US&redirectslug=Cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocal
            e=en-US&redirectslug=Cookies
          </a>
        </p>
      </section>
      <Footer />
    </>
  )
}

export default privacyPolicy
