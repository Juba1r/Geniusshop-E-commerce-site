import "./contactUs.css";
import productbg from "../../assets/customerproductbg.jpg";
import callicon from "../../assets/callplusicon.png";
import callicon2 from "../../assets/callplusicon2.png";
import faxicon from "../../assets/faxicon.png";
import mailicon from "../../assets/emailicon.png";

const ContactUs = () => {
  return (
    <>
      <div className="customer-products-fst-img">
        <img src={productbg} alt="" height={300} width={1519} />
        <div className="customer-products-text">
          <h2 className="text-white">Contact Us</h2>
          <p className="text-white">Home // Contact us </p>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {/* Left Side: Contact Information */}
          <div className="col-md-5">
            <h2 className="fw-bold contactus-first-h2">Get in Touch</h2>

            <div className="contact-info mt-4">
              <div className="info-box-call mb-3 p-3 d-flex align-items-center">
                <div className="contactus-call-icon  text-white me-3">
                  <img src={callicon} />
                </div>
                <div>
                  <h5>Our Office Address</h5>
                  <p>3584 Hickory Heights Drive, USA</p>
                </div>
              </div>

              <div className="info-box-call-2 mb-3 p-3 d-flex align-items-center">
                <div className="contactus-call-icon-2 bg-orange text-white me-3">
                  <img src={callicon2} />
                </div>
                <div>
                  <h5>Contact Number</h5>
                  <p>00 000 000 000</p>
                </div>
              </div>

              <div className="info-box-fax mb-3 p-3 d-flex align-items-center">
                <div className="contactus-fax-icon text-white me-3">
                  <img src={faxicon} />
                </div>
                <div>
                  <h5>Fax</h5>
                  <p>00 000 000 000</p>
                </div>
              </div>

              <div className="info-box-mail mb-3 p-3 d-flex align-items-center">
                <div className="contactus-mail-icon  text-white me-3">
                  <img src={mailicon} />
                </div>
                <div>
                  <h5>Email Address</h5>
                  <p>admin@geniusocean.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-md-7">
            <h2 className="fw-bold contactus-second-h2">
              Feel free to message us
            </h2>
            <form className="mt-4">
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control form-control-comment"
                  rows="4"
                  placeholder="Write Your Comment"
                ></textarea>
              </div>
              <div className="mb-3">
                {/* Placeholder for reCAPTCHA */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="notRobot"
                  />
                  <label className="form-check-label" htmlFor="notRobot">
                    I&apos;m not a robot
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100 py-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
