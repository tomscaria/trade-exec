import React from "react";
import config from "../common/config.js";
import { styled } from "@material-ui/core/styles";



import { createDatastructure } from "./fakeProducts";
import Typography from "@material-ui/core/Typography";


import Grid from "@material-ui/core/Grid";
import TradeCard from "./tradeCard";
//import "firebase/auth";
//import "firebase/firestore";


const MyGrid = styled(Grid)({
  padding: "2% 2% 64px",
  "@media screen and (max-width: 599px)": {
    padding: "8px 8px 64px",
  },
});

export default function TradePanel() {
  return (
    <div
      style={{
        "minHeight": "600px",
        margin: "auto",
      }}
    >
      

      <MyGrid
        container
        spacing={3}
        justify="start"
        alignContent="start"
        alignItems="start"
      >
        <Grid item xs={12}>
          <Typography
            style={{
              fontFamily: config.landingFont,
              fontSize: config.defaultLargeTextSize,
              color: config.secondaryTextColor,
              textAlign: `center`,
            }}
          >
            Top Coins By Social Media Mentions Today
          </Typography>
        </Grid>
        {createDatastructure().map((asset) => {
          return (
            <Grid item xs={12} md={6} lg={6}>
              <TradeCard
                name={asset.name}
                ticker={asset.ticker}
                logo={asset.logo}
                coinbase={asset.coinbase}
                zeroExAPI={asset.zeroExAPI}
                address={asset.address}
              ></TradeCard>
            </Grid>
          );
        })}
      </MyGrid>
      
    </div>
  );
}
//)export default Profile;
