import React from "react";
import styles from "./styles.module.css";
import Projects from "@/svgs/projects";
import Counter from "../counter";
import Image from "next/image";
import User from "@/svgs/user";

const GrowthSection = () => {
  return (
    <>
      <div className={styles.pageContain}>
        <div className={styles.growthContain}>
          <div className={styles.growthText}>
            <h1>A Hub For Growth</h1>
            <p>
              BloomByte hub has a vision to shape the future of the tech space
              from Akure, Ondo state to the utmost part of Nigeria and Africa.
              We are on a mission, to see every young Nigerian equipped with at
              least a digital skill.
            </p>
            <div className={styles.counter}>
              <div className={styles.count1}>
                <User />
                <Counter count={159} text="Visitors" />
              </div>
              <div className={styles.count1}>
                <Projects />
                <Counter count={20} text="Projects" />
              </div>
            </div>
            <button className={styles.growthBtn}>Learn More</button>
          </div>
          <div className={styles.growthImg}>
            <Image
              src="/images/growth.png"
              width={500}
              height={500}
              alt="Growth"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthSection;
