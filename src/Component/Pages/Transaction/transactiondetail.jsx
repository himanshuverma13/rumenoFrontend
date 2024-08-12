import React from "react";
import Footer from "../../Common/Footer";
import { Helmet } from "react-helmet";
import KeysWords from "../../Common/apiData/keyWords";
// import axios from "axios";

const TransactionDetail = () => {
  const TransDetail = [
    {
      name: "admin",
      date: "7/1/24",
      amount: 70,
      transid: "hello@123",
      status: "pending",
    },
    {
      name: "panel",
      date: "8/1/24",
      amount: 77,
      transid: "admin@123",
      status: "success",
    },
  ];

  // const Transactiondetail = async () => {
  //   try {
  //     const response = await axios.get("https://api.example.com/data");
  //     const TransDetailData = response;
  //     console.log(TransDetailData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Transaction-Detail-Rumeno</title>
                <link rel="canonical" href="https://www.rumeno.in/transdetail" />
            </Helmet>
            <ul className="d-none">
  {KeysWords.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
            <a className="d-none" href="https://www.amazon.in/Sheep-Goat-Feed/b?ie=UTF8&node=28179044031"></a>
        <a className="d-none" href="https://www.amazon.in/goat-medicine/s?k=goat+medicine"></a>
        <a className="d-none" href="https://www.amazon.in/goat-farming-accessories/s?k=goat+farming+accessories"></a>
        <a className="d-none" href="https://www.amazon.in/cow-farm-equipment/s?k=cow+farm+equipment"></a>
        <a className="d-none" href="https://www.amazon.in/cow-feed/s?k=cow+feed"></a>
        <a className="d-none" href="https://www.amazon.in/cattle-medicine/s?k=cattle+medicine"></a>
        <a className="d-none" href="https://www.indiamart.com/shakyaworldtrade/goat-farming-equipment-and-accessories.html"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=goat%20feed&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=goat%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=cow%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
      <section className="home-backgroundColor">
        <div className="container py-5">
          <div className="my-5 text-white text-center">
            <h1>Your Transactions Details</h1>
          </div>
          <table className="table trasn-table">
            <thead>
              <tr>
                <th>
                  <div className="text-center my-1">#</div>
                </th>
                <th>
                  <div className="text-center">Name</div>
                </th>
                <th>
                  <div className="text-center">Date</div>
                </th>
                <th>
                  <div className="text-center">Amount</div>
                </th>
                <th>
                  <div className="text-center">Transactions </div>
                </th>
                <th>
                  <div className="text-center">Status</div>
                </th>
              </tr>
              <div className="my-3"></div>
            </thead>
            <tbody>
              {TransDetail.map((detail, index) => (
                <tr key={index} className="my-4">
                  <td>
                    <div className="text-center my-2">{index + 1}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">{detail.name}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">{detail.date}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">{detail.amount}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">{detail.transid}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">
                      <span
                        className={
                          detail.status === "pending"
                            ? "bg-danger shadow-lg rounded text-white p-1"
                            : "bg-success shadow-lg rounded text-white p-1"
                        }
                      >
                        {detail.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default TransactionDetail;
