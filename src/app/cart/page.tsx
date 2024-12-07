'use client';
import { useCartContext } from "@/components/context/CartContext";
import { CardCart } from "./CardCart";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function CartFavorites() {
  const { cart } = useCartContext();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: quantity,
    }));
    console.log(quantities)
  };

  const calcTotal = cart.reduce((acc, card) => {
    const quantity = quantities[card.id] || 1;
    return acc + (+card.price * quantity);
  }, 0);

  return (
    <section className={styles.containerMain}>
      <div>
        <div className={styles.wrapperCards}>
          {cart?.map((card) => (
            <CardCart
              key={card.id}
              {...card}
              quantity={quantities[card.id] || 1}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
        <div className={styles.totalValueCart}>
          <div className={styles.wrapperTotal}>
            <p className={styles.title}>Total</p>
            <div>
              <p>SubTotal</p>
              <span>R$ {calcTotal}</span>
            </div>
            <div>
              <p>Taxa de envio</p>
              <span>R$ {cart.length === 0 ? 0 : 10}</span>
            </div>
            <div>
              <p>Total</p>
              <span>R$ {calcTotal === 0 ? 0 : calcTotal + 10}</span>
            </div>
            <button>Finalizar pedido</button>
          </div>
        </div>
      </div>
    </section>
  );
}
