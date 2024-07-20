import { Container } from "@mui/material";
import ResponsiveAppBar from "./navbar";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <ResponsiveAppBar />

      <Container>
        <div className="mx-auto col-lg-5 col-md-5 col-10">
          <Image src="/alberto.jpg" className="img-fluid" alt="Alberto sitting on the stairs" width={500} height={500} />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">👋 Alberto, a digital nomad</h1>
        </div>
      </Container>

      <Container>
        <section className="about section-padding" id="about">
          <div className="container">
            <div className="row">

              <div className="col-lg-6 col-md-6 col-12">
                <h3 className="mb-4">About me:</h3>
                <p>My name is Alberto Hurtado, I am based in Madrid</p>
                <p>
                  I am a full stack developer specialized in Scala and Angular with MongoDB.
                  I am passionate about quality software craftmanship following good practices and agile
                  methodologies.
                </p>
                <p> My programming languages of preference are: Scala, Java, Typescript and Python.</p>
                <p>I also have some experience with AWS</p>
              </div>

              <div className="col-lg-5 mx-auto col-md-6 col-12">
                <Image src="/true-agency.jpg" className="about-image img-fluid"
                  alt="Alberto's Resume HTML Template" width={100}
                  height={24} />
              </div>

            </div>
            <h4 className="mb-4">Work experience:</h4>
            <div className="row about-third">
              <div className="col-lg-4 col-md-4 col-12">
                <h3>Axpe Consulting</h3>
                <p>November 2023 - current</p>
                <p>Working for the Spanish client Telefonica, in a project for privacy management
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <h3>Alten delivery center</h3>
                <p>19th July 2021 - November 2023</p>
                <p>Working for the Belgian client Macq, in a project for smart mobility management
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <h3>IF LASTMILE</h3>
                <p>27th February 2021 - 20th June 2021</p>
                <p>Internship at a start up, which integrated with the main e-commerce platforms to offer extra shipping options</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <h3>Amazon</h3>
                <p>6th July 2020 - 31st December 2020</p>
                <p>Internship at Amazon Business, where I did a project to automate manual tasks done by the person on call when he received monitoring alarms</p>
              </div>
            </div>
          </div>
        </section>

      </Container>

      <Container>
        <section className="contact section-padding pt-0" id="contact">
          <div className="container">
            <div className="row">
              <div className="mx-auto col-lg-4 col-md-6 col-12">
                <h3 className="my-4 pt-4 pt-lg-0">Say hello</h3>

                <p className="mb-1">010-020-0340</p>

                <p>
                  <a href="#">
                    alberto.hurt.99@gmail.com
                    <i className="fas fa-arrow-right custom-icon"></i>
                  </a>
                </p>

                <ul className="social-links mt-2">
                  <li><a href="https://fb.com/tooplate" rel="noopener" className="fab fa-facebook"></a></li>
                  <li><a href="#" rel="noopener" className="fab fa-twitter"></a></li>
                  <li><a href="#" rel="noopener" className="fab fa-instagram"></a></li>
                  <li><a href="#" rel="noopener" className="fab fa-linkedin"></a></li>
                  <li><a href="#" rel="noopener" className="fab fa-youtube"></a></li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </Container>

      <div>
                    <a href="./CV-AlbertoHurtado.pdf" download="CV-AlbertoHurtado.pdf">Download CV</a>
                </div>

    </main>
  );
}
