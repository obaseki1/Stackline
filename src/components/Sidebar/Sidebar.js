import Tag from '../Tag/Tag.js';
import React from "react";
import { useSelector } from "react-redux";

function Sidebar() {
  const product = useSelector((state) => state.products[0]);
  
  return (
    <div
      style={{
        maxHeight: 600,
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0px 2px 5px 0 rgb(0, 0 ,0, 15%)",
      }}
    >
      <img
        src={product?.image}
        alt={product?.title}
        style={{ objectFit: "contain", height: 125, marginTop: 15 }}
      />
      <h2 style={{ marginTop: 20, marginBottom: 20, fontSize: 20 }}>
        {product?.title}
      </h2>
      <span
        style={{
          textAlign: "center",
          paddingLeft: 35,
          paddingRight: 35,
          color: "rgba(60, 72, 89, 0.6)",
          fontSize: 12,
        }}
      >
        {product?.subtitle}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 15,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 10,
          paddingBottom: 10,
          borderTopWidth: 0.5,
          borderTopStyle: "solid",
          borderBottomWidth: 0.5,
          borderBottomStyle: "solid",
          borderColor: "rgba(60, 72, 89, 0.3)",
        }}
      >
        {product?.tags.map((tag) => {
          return (
            <div key={tag}>
              <Tag text={tag} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
