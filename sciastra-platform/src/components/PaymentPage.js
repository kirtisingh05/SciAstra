import React, { useState } from 'react';
import axios from 'axios';

function PaymentPage() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [otp, setOtp] = useState('');
    const [orderId, setOrderId] = useState('');
    const [paymentId, setPaymentId] = useState('');
    const [signature, setSignature] = useState('');

    const handlePayment = async () => {
        try {
            const response = await axios.post('/api/payment', {
                orderId,
                paymentId,
                signature,
                paymentMethod,
                otp
            });
            alert(`Payment successful: ${response.data.message}`);
        } catch (error) {
            console.error("Error processing payment:", error);
            alert("Payment failed. Please try again.");
        }
    };

    return (
        <div className="payment-page">
            <h2>Choose Payment Method</h2>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="">Select...</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="upi">UPI</option>
            </select>
            <input
                type="text"
                placeholder="Enter Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Payment ID"
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Signature"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handlePayment}>Confirm Payment</button>
        </div>
    );
}

export default PaymentPage;