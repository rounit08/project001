import React, { useState } from "react";
import "./TextOverflow.css";

function TextOverflow({ title }) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <>
      {seeMore
        ? title.split("\n").map((t) => (
            <>
              {t}
              <br />
            </>
          ))
        : title.substring(0, 22)}
      <span onClick={() => setSeeMore(!seeMore)}>
        <br></br>
        <div className="seeMore">{seeMore ? "See Less" : "See More"}</div>
      </span>
    </>
  );
}

export default TextOverflow;
