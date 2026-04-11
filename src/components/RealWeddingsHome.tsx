import { realWeddingsData } from "../data/RealWeddingsData";
import RealWeddingCard from "./RealWeddingCard";
import { Link } from "react-router-dom";

const RealWeddingsHome = () => {
  return (
    <section className="wide-tb-120">
      <div className="container">

        <div className="section-title text-center">
          <h1>Real Weddings</h1>
          <p>Beautiful love stories from couples across India</p>
        </div>

        <div className="row">
          {realWeddingsData.slice(0, 3).map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <RealWeddingCard item={item} variant="home" />
            </div>
          ))}
        </div>

        <div className="text-center">
            <Link to="/real-weddings" className="btn btn-default btn-rounded btn-lg">View More Real Weddings</Link>
        </div>

      </div>
    </section>
  );
};

export default RealWeddingsHome;