import React from "react";

function Tag({ text }) {
  return (
    <div
      style={{
        margin: 5,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: "grey",
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 3,
        justifyContent: "center",
        fontSize: 12,
        color: "rgb(60, 72, 89)",
      }}
    >
      {text}
    </div>
  );
}

export default Tag;
