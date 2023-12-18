import { de } from "date-fns/locale";
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ image, name, priceNew, priceMonths, info }) => {
  return (
    <>
      <section className="card">
        <img src={image} alt={name} className="card-image" />
        <div className="card-details">
          <h3 className="card-title">{name}</h3>
          <section>
            {info}
            <span className=""></span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{priceNew}</del>
              {priceMonths}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
