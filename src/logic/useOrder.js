import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "./cart";
import { add } from "./redux/messageSlice";

const useOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const order = (order) => {
    fetch("https://app.aaccent.su/js/confirm.php")
      .then((r) => r.json())
      .then((c) => {
        dispatch(add({ title: "the order is successful", type: "info" }));
        clearCart()
        navigate("/")
      });
  };

  return { order };
};

export default useOrder