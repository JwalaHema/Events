import { realWeddingsData } from "../data/RealWeddingsData";
import RealWeddingCard from "./RealWeddingCard";

const RealWeddingsList = () => {
  return (
    <section className="wide-tb-90 wedding_padding">
      <div className="container">
        <div className="row">

          {realWeddingsData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <RealWeddingCard item={item} variant="list" />
            </div>
          ))}

          {/* Pagination */}
          <div className="col-md-12">
            <div className="theme-pagination">
              <ul className="pagination justify-content-center">
                <li className="page-item active"><a className="page-link">1</a></li>
                <li className="page-item"><a className="page-link">2</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealWeddingsList;