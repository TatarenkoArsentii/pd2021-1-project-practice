import React from "react";
import faq from "./faqs.json";
import styles from "./FaqArticlesList.module.sass";
import CONSTANTS from "../../constants";

function FaqFunc() {
  return (
    <div className={styles.articlesMainContainer}>
      {faq.map((col, i) => (
        <div className={styles.ColumnContainer} key={i}>
          {col.map((articles, j) => {
            return (
              <div key={j}>
                <div className={styles.headerArticle}>{articles.title}</div>
                <div className={styles.article}>{articles.body}</div>
              </div>
            );
          })}

          {i == 1 && (
            <>
              <div className={styles.headerArticle}>
                I have other questions! How can I get in touch with Squadhelp?
              </div>
              <div className={styles.article}>
                Check out our <span className={styles.orangeSpan}>FAQs</span> or
                send us a <span className={styles.orangeSpan}> message</span>.
                For assistance with launching a contest, you can also call us at
                {CONSTANTS.CONTACTS.TEL} or schedule a
                <span className={styles.orangeSpan}>
                  {" "}
                  Branding Consultation
                </span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqFunc;
