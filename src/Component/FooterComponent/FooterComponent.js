import React from 'react'

import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <>
      <div id='Footer'>
        <footer className="text-center text-white">
          {/* <!-- Grid container --> */}
          <div className="container pt-4">
              {/* <!-- Section: Social media --> */}
              <section className="mb-4">
              {/* <!-- email --> */}
              <a className="btn btn-link btn-floating btn-lg text-light m-1" href="mailto:alirazaa51412@gmail.com"><i className="fa fa-envelope-open"></i></a>

              {/* <!-- watsapp --> */}
              <a className="btn btn-link btn-floating btn-lg text-light m-1"href="https://wa.me/03032763693" target="_blank" rel="noopener noreferrer"><i className="	fa fa-whatsapp"></i></a>

              {/* <!-- Linkedin --> */}
              <a className="btn btn-link btn-floating btn-lg text-light m-1" href="https://www.linkedin.com/in/ali-raza-a4a47a256/" target="_black"><i className="fa fa-linkedin-square"></i></a>
              </section>
              {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          <div className="text-center text-light p-3">
          Get connected with us on social networks:
          </div>
        </footer>
      </div>
    </>
  )
}
export default FooterComponent;