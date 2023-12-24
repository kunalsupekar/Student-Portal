import React, { useState } from 'react';

import './Deposit.css';

export default function Deposit() {
    const [amount, setAmount] = useState(1);


    const loadScript = (src) => {
        return new Promise((resovle) => {
          const script = document.createElement("script");
          script.src = src;
    
          script.onload = () => {
            resovle(true);
          };
    
          script.onerror = () => {
            resovle(false);
          };
    
          document.body.appendChild(script);
        });
      };
    
      const displayRazorpay = async (amount) => {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
          alert("You are offline... Failed to load Razorpay SDK");
          return;
        }
    
        const options = {
          // key: "rzp_test_YFItJan72ybMww",
          key: "rzp_test_fAWowSLz8TK8w3",
          currency: "INR",
          amount: amount * 100,
          name: "Nidhi Bank",
          description: "Thanks for booking through our portal",
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert("Payment Successfully");
            
          },
          prefill: {
            name: "UserName",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      return (
        <div className="container-deposit">
          <div className="row">
            <div className="col-md-8">
              <input
                type="number"
                placeholder="Enter amount to deposit"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-block" onClick={() => displayRazorpay(amount)}>
                DEPOSIT
              </button>

            </div>
            <p className="text-muted small mt-2">This is a test mode payment.</p>
        <p className="text-info small">No actual transactions will be processed.</p>
          </div>
        </div>
      )
      
      
      
}


