import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import { calculateTotal } from "./features/products/productsSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, []);
  return (
    <div className="max-w-5xl mx-auto py-4">
      <Navbar className="mb-5" />
      <ProductsList />
    </div>
  );
};

export default App;
