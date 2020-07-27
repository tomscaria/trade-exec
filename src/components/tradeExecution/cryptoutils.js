import axios from "axios";
import moment from "moment"


export default async function nomics_getSparkLineData(ticker, startDate, endDate) {
  //https://api.nomics.com/v1/currencies/sparkline?key=9eda0d2628c582387bee18856e3224b6&ids=BTC&start=2018-04-14T00%3A00%3A00Z&end=2018-05-01T00%3A00%3A00Z
  let url =
    "https://api.nomics.com/v1/currencies/sparkline?key=9eda0d2628c582387bee18856e3224b6&ids=" +
    ticker +
    "&start=" +
    encodeURIComponent(moment(startDate).format("YYYY-MM-DDTHH:mm:ssZ")) +
    "&end=" +
    encodeURIComponent(moment(endDate).format("YYYY-MM-DDTHH:mm:ssZ"));

  console.log("url from nomics");
  console.log(url);

  let response = await axios.get(url);
  //  // Returns the name of the user
  return response;
}

