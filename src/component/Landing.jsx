import React from "react";

export default function LandingPage() {
  return (
    <section
      id="mainPage"
      className="mainPage min-hv-100 d-flex align-items-center"
    >
      <div className="container">
        <div className="row king">
          <div className="col-lg-6 d-flex flex-column justify-content-center text-start  order-2 order-lg-1 ">
            <h1 data-aos="fade-up">JBEEY</h1>
            <h1 data-aos="fade-up">Company.</h1>

            <h2 data-aos="fade-up" data-aos-delay="400">
              I provide tech <br />
              solutios.
            </h2>
            <p>
              Hi I am Jibril Yakubu a software developer and this is my project
            </p>
            <div
              data-aos="fade-in"
              data-aos-delay="600"
              className="d-flex flex-row gap-4 justify-content-ceter align-items-center"
            >
              {/** main page button setting */}
              <div className="text-center text-lg-start mt-4">
                <a
                  href="#about"
                  className=" btn btn-lg text-uppercase rounded-0 bg-primary rou scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  view my work
                  
                </a>
              </div>
              <div className="text-center text-lg-start mt-4">
                <a
                  href="#about"
                  className=" btn btn-lg text-uppercase rounded-0 btn-outline-primary rou scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  get in touch
                 
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img order-lg-1 order-1 rounded-4"
            data-aos="zoom-out"
            data-aos-delay="200"
            
          >
           
            <img src="/JBEEY.jpg" className=" img-fluid p-4 rounded-4 " alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
