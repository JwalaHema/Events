import type { BreadcrumbData } from "../types/BreadcrumbsTypes";
import { Link } from "react-router-dom";

type Props = {
  data: BreadcrumbData;
};

const Breadcrumbs: React.FC<Props> = ({ data }) => {
  return (
    <section
      className="breadcrumbs-page"
      style={
        data.backgroundImage
          ? {
              backgroundImage: `url(${data.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "start",
            }
          : {}
      }
    >
      <div className="container">
        <h1>{data.title}</h1>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">

            {data.items.map((item, index) => {
              const isLast = index === data.items.length - 1;

              return (
                <li
                  key={index}
                  className={`breadcrumb-item ${isLast ? "active" : ""}`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.link && !isLast ? (
                    <Link to={item.link}>
                      {item.icon && <i className={item.icon}></i>}
                    </Link>
                  ) : (
                    <>
                      {item.icon && <i className={item.icon}></i>} {item.label}
                    </>
                  )}
                </li>
              );
            })}

          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;