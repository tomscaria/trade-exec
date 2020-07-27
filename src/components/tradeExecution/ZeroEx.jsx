/*global zeroExInstant*/

import React from "react";
import Script from "react-load-script";

export default function Instant(props) {
  console.log(props.setClick)
  const defaultBuyAmount = parseInt(props.defaultBuyAmount);
  const loadZeroExPanel = () => {
    props.setClick(false)
    let renderJson;
    renderJson = {
      orderSource: "https://api.0x.org/sra/",
      defaultSelectedAssetData: props.asset,
      defaultAssetBuyAmount:defaultBuyAmount 
    };
    zeroExInstant.render(renderJson, "body");
  };
  return (
    <Script
      url="https://instant.0x.org/v3/instant.js"
      onLoad={loadZeroExPanel}
    />
  );
}

/* Usage */

// const [click, setClick] = useState(false)

//         {click && (<Instant
//         setClick={setClick}
//         asset="0xf47261b0000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
//         defaultBuyAmount="1"
//         ></Instant>)
//         }
