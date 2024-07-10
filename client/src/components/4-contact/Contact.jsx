import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/animation.json";
import animationContact from '../../animation/animationContact.json';

export default function Contact() {
  //   بحسابك بالايميل   formspree لازم يكون باسمك يعني راجع  موقع (xvgpowqk) <- ال

  const [state, handleSubmit] = useForm("xvgpowqk");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        contact us
      </h1>

      <p className="sub-title" >
        {" "}
        
        
        للتواصل يرجى كتابة الايميل وأسفل الايميل الرساله
      </p>
      <p className="sub-title">. وأتمنى  أن أكون على حسن ظنكم</p>

      <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex " style={{ marginTop: "24px" }}>
            <label htmlFor="message"> Your message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "...جاري الإرسال" : "إرسال"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "16px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              .تم إرسال رسالتك بنجاح شكراً لك
            </p>
          )}
        </form>
        <div className=" animation">
        
        <Lottie
            className="animation-Contact"

            style={{ height: 355 }}
                animationData={animationContact}
              />
        </div>
      </div>
    </section>
  );
}
