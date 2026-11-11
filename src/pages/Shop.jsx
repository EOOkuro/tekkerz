import { useEffect } from "react";
import { PRODUCTS } from "../data/products.js";

export default function Shop() {
  useEffect(() => { document.title = "Shop | Tekkerz"; }, []);
  return (
    <div className="container">
      <div className="shop-head">
        <h1 className="page-title">Shop</h1>
        <button type="button" className="btn snipcart-checkout">Cart (<span className="snipcart-items-count">0</span>)</button>
      </div>
      <p className="lede">Tekkerz jerseys.</p>
      <div className="products">
        {PRODUCTS.map((p) => {
          const live = p.price > 0;
          return (
            <article className="product" key={p.id}>
              {p.image
                ? <img src={p.image} alt={p.name} loading="lazy" />
                : <div className="product-photo" role="img" aria-label={`${p.name} photo coming soon`}>Photo coming soon</div>}
              <h3>{p.name}</h3>
              <p className="product-price">{live ? `$${p.price.toFixed(2)}` : "Price coming soon"}</p>
              {live ? (
                <>
                  <label className="product-size">Size
                    <select id={`size-${p.id}`} defaultValue={p.sizes[0]} onChange={(e) => e.currentTarget.closest("article").querySelector("button").setAttribute("data-item-custom1-value", e.currentTarget.value)}>
                      {p.sizes.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                  <button
                    type="button"
                    className="btn snipcart-add-item"
                    data-item-id={p.id}
                    data-item-name={p.name}
                    data-item-price={p.price}
                    data-item-description={p.description}
                    data-item-url="/products.json"
                    data-item-image={p.image}
                    data-item-custom1-name="Size"
                    data-item-custom1-options={p.sizes.join("|")}
                    data-item-custom1-value={p.sizes[0]}
                  >Add to cart</button>
                </>
              ) : (
                <button type="button" className="btn" disabled>Coming soon</button>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
