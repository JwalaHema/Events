import type { RealWedding } from "../types/RealWeddingTypes";

type Props = {
  item: RealWedding;
  variant: "home" | "list";
};

const RealWeddingCard: React.FC<Props> = ({ item, variant }) => {
  return (
    <div className={`real-wedding-wrap ${variant === "home" ? "top-heading" : ""}`}>

      <div className="real-wedding">

        {/* HOME DESIGN: TITLE ON TOP */}
        {variant === "home" && (
          <div className="head">
            <h3><a href={item.link}>{item.title}</a></h3>
            <p><i className="fa fa-map-marker"></i> {item.location}</p>
          </div>
        )}

        {/* IMAGE */}
        <div className="img">
          <div className="overlay">
            <i className="weddingdir_heart_double_alt"></i>
            Our Story
          </div>

          <a href={item.link}>
            <img src={item.mainImage} alt={item.title} />
          </a>

          <div className="date">{item.date}</div>
        </div>

        {/* GALLERY */}
        <ul className="list-unstyled gallery">
          {item.gallery.map((img, i) => (
            <li key={i}>
              <a href={item.link}>
                {i === 2 && (
                  <div className="load-more">Load <br /> More</div>
                )}
                <img src={img} alt="" />
              </a>
            </li>
          ))}
        </ul>

      </div>

      {/* LIST DESIGN: TITLE BELOW */}
      {variant === "list" && (
        <>
          <h3><a href={item.link}>{item.title}</a></h3>
          <p><i className="fa fa-map-marker"></i> {item.location}</p>
        </>
      )}

    </div>
  );
};

export default RealWeddingCard;