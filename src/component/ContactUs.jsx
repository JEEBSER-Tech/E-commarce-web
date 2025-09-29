import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <Link className="btn btn-lg btn-warning" href="https://wa.me/2348139673625">
                CHAT ON WHATSAPP
              </Link>
            </div>
          </div>
          <div className="col-4 ">
            <div  className="card">
              <Link className="btn btn-lg btn-primary" 
              href="mailto:jibrilyakub41@gmail.com?subject=hello&body=I%20wou1d%20contact%you">                
              SEND AN EMAIL
                 </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <Link className="btn btn-lg" href="tel:+234 8139673625">
              LINKEDIN
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
