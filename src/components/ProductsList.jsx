import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  decreaseAmount,
  increaseAmount,
  removeItem,
} from "../features/products/productsSlice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  return (
    <ul className="flex flex-col gap-4">
      {products.map((product) => (
        <li
          className="card  card-compact  bg-base-100 shadow-xl"
          key={product.id}
        >
          <div className="flex items-center justify-between">
            <img
              className="rounded-lg"
              src={product.images[1]}
              alt=""
              width={250}
              height={250}
            />
            <div className=" lg:w-72">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.price}$ US dollars</p>
              <div className="card-actions ">
                <button
                  onClick={() => {
                    dispatch(removeItem(product.id));
                  }}
                  className="btn btn-primary  "
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex p-5 gap-2 ">
              <button
                onClick={() => {
                  dispatch(increaseAmount(product.id));
                }}
                className="btn"
              >
                +
              </button>
              <h3 className="btn">{product.amount}</h3>
              <button
                onClick={() => {
                  if (product.amount > 1) {
                    dispatch(decreaseAmount(product.id));
                  } else {
                    dispatch(removeItem(product.id));
                  }
                }}
                className="btn"
              >
                -
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
  
};

export default ProductsList;
