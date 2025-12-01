import React from "react";
import { useCart } from "../pages/CartContext"; // ✅ correct import

function AddToCartButton({ product, hostName }) {
  const { cartItems, addToCart, removeFromCart } = useCart(); // ✅ use the hook

  const cartItem = cartItems.find((item) => item.id === product.productId);

  return (
    <div style={{ margin: "20px 0" }}>
      {cartItem ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#f8f9fa",
            padding: "10px 15px",
            borderRadius: "5px",
            width: "fit-content",
          }}
        >
          <button
            onClick={() => removeFromCart(product.productId)}
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              width: "30px",
              height: "30px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            −
          </button>

          <span style={{ minWidth: "30px", textAlign: "center" }}>
            {cartItem.quantity}
          </span>

          <button
            onClick={() =>
              addToCart({
                id: product.productId,
                name: product.productTitle,
                price: product.variants[0]?.pricePerUnit,
                currency: product.variants[0]?.currency,
                image: `${hostName}/${product.variants[0]?.productImage}`,
              })
            }
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              width: "30px",
              height: "30px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            addToCart({
              id: product.productId,
              name: product.productTitle,
              price: product.variants[0]?.pricePerUnit,
              currency: product.variants[0]?.currency,
              image: `${hostName}/${product.variants[0]?.productImage}`,
            })
          }
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default AddToCartButton;
