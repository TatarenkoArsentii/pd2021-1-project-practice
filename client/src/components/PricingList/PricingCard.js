import React from "react";
import pricingCard from "./pricingCard.json";
import styles from "./PricingCard.module.sass";

function PricingCard() {
  return (
    <div className={styles.container}>
      {pricingCard.map((card) => (
        <article className={styles.card_container}>
          <header
            className={styles.cardWrapper}
            style={{ borderColor: card.color }}
          >
            <h2 style={{ color: card.color }} className={styles.card_title}>
              {card.title}
            </h2>
            <div className={styles.card_body}>{card.body}</div>
            <div style={{ color: card.color }} className={styles.card_price}>
              {card.price}
            </div>
          </header>
          <main>
            <ul>
              {card.pricingDescr.map((descr) => (
                <li>{descr}</li>
              ))}
            </ul>
          </main>
          <button style={{ backgroundColor: card.color }}>Start</button>
        </article>
      ))}
    </div>
  );
}

export default PricingCard;
