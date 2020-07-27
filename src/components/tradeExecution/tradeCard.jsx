import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import config from "../common/config";
import Button from "@material-ui/core/Button";
import coinbaseLogo from "./coinbase.png";
import zeroExLogo from "./zeroEx.png";



import Instant from "./ZeroEx";

function isSparklineIncreasing(sparklineData) {
  const firstDataPoint = sparklineData[0];
  const lastDataPoint = sparklineData[sparklineData.length - 1];
  let isIncreasing = true;

  if (firstDataPoint <= lastDataPoint) {
    isIncreasing = true;
  } else {
    isIncreasing = false;
  }
  return isIncreasing;
}

const TradeCard = React.memo(
  ({ ticker, name, logo, coinbase, zeroExAPI, address }) => {
    const [click, setClick] = useState(false);

   

    return (
      <div>
        {click && (
          <Instant
            setClick={setClick}
            asset={address}
            defaultBuyAmount="1"
          ></Instant>
        )}
        <Box
          bgcolor={config.bodyBackgroundColor}
          borderRadius={8}
          border={4}
          borderColor={config.defaultBackgroundColor}
          p={1}
          m={1}
          style={{
            "maxWidth": "600px",
            "minHeight": "200px",
            margin: "auto",
          }}
        >
          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Grid
                container
                justify="center"
                alignContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Box textAlign="center">
                    <img
                      src={logo}
                      style={{
                        width: "25%",
                        height: "25%",
                      }}
                      alt={""}
                    ></img>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    style={{
                      fontFamily: config.landingFont,
                      fontSize: config.defaultLargeTextSize,
                      color: config.secondaryTextColor,
                      textAlign: `center`,
                    }}
                  >
                    {name} {" - "} {ticker}{" "}
                  </Typography>

                
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontFamily: config.landingFont,
                    fontSize: config.defaultLargeTextSize,
                    color: config.secondaryTextColor,
                    textAlign: `center`,
                  }}
                >
                  Trade On
                </Typography>
              </Grid>
              <Grid
                container
                justify="center"
                alignContent="center"
                alignItems="center"
              >
 

                {zeroExAPI ? (
                  <Grid item xs={6}>
                    <Box textAlign="center" pt={4} pl={4} pr={4}>
                      <Button
                        variant="contained"
                        style={{ borderRadius: "8px" }}
                        fullWidth
                        color="secondary"
                        disableElevation
                        onClick={() => setClick(true)}
                      >
                        {
                          <Typography
                            style={{
                              fontFamily: config.landingFont,
                              fontSize: config.defaultLargeTextSize,
                              color: config.secondaryTextColor,
                              fontWeight: "bold",
                            }}
                          >
                            {
                              <img
                                src={zeroExLogo}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                }}
                                alt={""}
                              ></img>
                            }
                          </Typography>
                        }
                      </Button>
                    </Box>
                  </Grid>
                ) : (
                  <div></div>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
);

export default TradeCard;
