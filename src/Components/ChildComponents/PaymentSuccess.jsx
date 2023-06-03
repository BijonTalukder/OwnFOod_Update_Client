import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BaseURL } from "../../Helper/config";
import { toast } from "react-hot-toast";
import { Table } from "react-bootstrap";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const PaymentSuccess = () => {
  const [order, setOrder] = useState({});
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionID = query.get("transactionID");
  useEffect(() => {
    fetch(`${BaseURL}/orders-by-transaction-id/${transactionID}`)
      .then((res) => res.json())
      .then((data) => setOrder(data.data));
  }, [transactionID]);
  if (order) {
    toast.success("Order Successful !", {
      position: "bottom-center",
    });
  }
  else{
    toast.error("Something  Wrong !", {
        position: "bottom-center",
      });

  }
  console.log(order);
  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>
{
    order[0]?.orderStatus===true? <div style={{ margin: "200px" }}>
    <Table striped bordered hover size='sm'>
      <thead>
        <h2>Congratulation!!! 👌  SuccessFully Paid</h2>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Quantity</th>
          <th> Price</th>
          <th>seller Name</th>
        </tr>
      </thead>
      <tbody>
        {order[0]?.orderItems?.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item?.foodName}</td>
            <td>{item?.foodQty}</td>
            <td>{item?.foodPrice}</td>
            <td>{item?.sellerName}</td>
          </tr>
        ))}

        <tr>
          <td colSpan={4}>
            <h4>Total</h4>
          </td>
          <td>{order[0]?.orderTotalAmount}</td>
        </tr>
      </tbody>
    </Table>
    {/* <button className="btn btn-primary " onClick={()=>window.print()}>Print</button> */}
  </div>:<h2>something wrong</h2>
}

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
