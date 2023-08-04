import { AiFillMail } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-items">
          <div className="contact-item">
            <AiFillMail />
            <p>ezhilvendhanponnaiyan.com</p>
          </div>
          <div className="contact-item">
            <BsPhoneFill />
            <p>+91 9943998963</p>
          </div>
          <div className="contact-item">
            <MdLocationOn />
            <p>Salem</p>
          </div>
        </div>
      </div>
    </div>
  );
}
