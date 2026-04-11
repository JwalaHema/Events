import type { ContactSectionData } from "../types/ContactTypes";

type Props = {
  data: ContactSectionData;
};

const ContactSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="wedding-contact-modern">
      <div className="container">

        {/* Header */}
        <div className="intro-box">
          <h2>{data.heading}</h2>
          <p className="mini">{data.subHeading}</p>
          <p className="desc">{data.description}</p>
        </div>

        <div className="content-grid">

          {data.cards.map((card, index) => (
            <div className="info-card" key={index}>

              <h3>{card.title}</h3>
              <p>{card.description}</p>

              {/* TEAM CARD */}
              {card.type === "team" && card.subBlocks && (
                <div className="contact-dual">
                  {card.subBlocks.map((item, i) => (
                    <div key={i}>
                      <h4>
                        {item.icon && <i className={item.icon}></i>} {item.title}
                      </h4>
                      <p>{item.email}</p>
                      <p>{item.phone}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* OFFICE CARD */}
              {card.type === "office" && (
                <div className="map-block">
                  <i className="fa-solid fa-location-dot"></i>
                  {card.address?.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              )}

              {/* SUBSCRIBE CARD */}
              {card.type === "subscribe" && (
                <>
                  <input
                    type="email"
                    placeholder={card.inputPlaceholder}
                    className="subscribe-email"
                  />
                </>
              )}

              {/* BUTTON */}
              {card.buttonText && (
                <button
                  className={
                    card.type === "team"
                      ? "talk-btn"
                      : card.type === "office"
                      ? "map-btn"
                      : card.type === "subscribe"
                      ? "sub-line-btn"
                      : "cta-btn"
                  }
                >
                  {card.buttonText}
                </button>
              )}

              {/* SOCIAL ICONS */}
              {card.type === "vendor" && card.socialIcons && (
                <div className="social-icons">
                  {card.socialIcons.map((icon, i) => (
                    <a href="#" key={i}>
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ContactSection;