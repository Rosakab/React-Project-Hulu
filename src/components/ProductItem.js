import { useNavigate } from "react-router";

const ProductItem = ({ images, title, price, id, handleAddToCart }) => {
  const navigate = useNavigate();

  const handleAddCart = (e) => {
    e.stopPropagation();
    handleAddToCart(id);
  };

  return (
    <div className="border-2 flex flex-col justify-between border-red-200 m-3 shadow-lg hover:bg-gray-200  ">
      <div>
        <img
          src={images[0]}
          alt="gallery"
          className="rounded mx-auto mt-3 shadow-md w-40 h-40  "
        />
        <h3 className="pl-3 pt-3 font-bold text-sm"> {title}</h3>
        <p className="pl-3 my-2 "> Price:${price}</p>
      </div>
      <div className="flex flex-row justify-between">
        <button
          onClick={() => navigate(`/products/${id}`)}
          className="mb-1 p-2 mr-1 ml-1 bg-rose-500 w-full text-white rounded-r-full font-bold pb-2 "
        >
          Read more...
        </button>
        <button
          className="mb-1 p-2 mr-1 bg-rose-500 w-full text-white rounded-l-full font-bold pb-2"
          onClick={handleAddCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
