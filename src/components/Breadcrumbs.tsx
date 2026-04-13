import type { BreadCrumbsData } from "../types/BreadcrumbsTypes";
import { Link } from "react-router-dom";

type Props = {
  data: BreadCrumbsData;
};

const BreadCrumbs: React.FC<Props> = ({ data }) => {
  const isSearch = data.variant === "search";

  return (
    <section
      className={
        isSearch
          ? "search-result-header banner-image"
          : "breadcrumbs-page"
      }
      style={
        data.backgroundImage
          ? {
              backgroundImage: `url(${data.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="container">

        {/* 🔥 SEARCH VARIANT */}
        {isSearch ? (
          <div className="row">
            <div className="col-lg-9 mx-auto mb-5">
              <h1>{data.title}</h1>
              <p className="lead">{data.subtitle}</p>

              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-light"
                  placeholder={data.searchPlaceholder1}
                />

                <input
                  type="text"
                  className="form-control form-light left-border"
                  placeholder={data.searchPlaceholder2}
                />

                <div className="input-group-prepend input-group-prepend-search">
                  <button type="submit" className="btn btn-default btn-default-search">
                    {data.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 🔥 DEFAULT VARIANT */
          <h1>{data.title}</h1>
        )}

        {/* ✅ COMMON BREADCRUMB */}
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
                      {item.icon && <i className={item.icon}></i>}{" "}
                      {item.label}
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

export default BreadCrumbs;