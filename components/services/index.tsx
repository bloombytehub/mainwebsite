import React from "react";
import styles from "./styles.module.css";
import { services } from "@/utils/data";
import Image from "next/image";

const ServicesTab = () => {
  return (
    <div className={styles.pgContain}>
      {services?.map((item, index) => {
        return (
          <div className={index % 2 === 0 ? styles.even : styles.odd} key={index}>
            <Image src={item.image} alt="image" width={500} height={600} className={styles.imgTab} />
            <div className={styles.col2}>
              <h2>{item.title}</h2>
              <p>{item.textOne}</p>
              <p>{item.textTwo}</p>
              {item.textThree?.map((item, index) => {
                return (
                  <div className={styles.servicesText} key={index}>
                    <div></div>
                    <p>
                      <span>{item.title}</span> {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesTab;
