import React from "react";
import style from "./style.module.css";

const Page1 = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Supriya</h1>
      <h3 className={`${style.subhead} ${style.shimmer}`}>Portfolio</h3>
    </div>
  );
};

export default Page1;
