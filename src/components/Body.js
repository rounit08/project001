import React, { useState } from "react";
import "./Body.css";
import TextOverflow from "./TextOverflow";
import Footer from "./Footer";
import image from "../components/bodyimage.png";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function Body() {
  const changeColor = () => {
    let btn = document.querySelector("#likibut");
    btn.style.color = "#000000";
  };

  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="body">
      <div className="title">
        <h2>Issue while opening React Native project in xcode</h2>
      </div>
      <div className="description">
        <p>
          I opened react native project (ios/[app_name].xcworkspace) file, while
          opening the <br></br> project keeps loading and it doesn't load the
          project. Can anyone help me what might be the <br></br>reason for
          that?
        </p>
      </div>
      <div className="issuetitle">
        <p>The below image is what its happening when I opened my project.</p>
      </div>
      <div className="issueimage">
        <img src={image} />
      </div>
      <div className="seemore">
        <TextOverflow
          title={`The solution I tried:
          
          1. uninstalled Xcode and installed it again.
          
          2. deleted Developer file from Users/library`}
        />

        <div className="divide">
          ______________________________________________________________________________{" "}
        </div>
      </div>
      <div className="footer">
        <div className="liki">
          <button onClick={changeColor} id="likibut">
            <span className="lik">
              <ThumbUpOutlinedIcon />
              Like
            </span>
          </button>
        </div>
        <div className="comm">
          <Footer icon={<ChatBubbleOutlineOutlinedIcon />} title="Comment" />
        </div>
        <div className="eight">
          {" "}
          <Footer icon="8" title="comments" />
        </div>
      </div>
    </div>
  );
}

export default Body;
