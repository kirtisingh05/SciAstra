import Razorpay from "razorpay";
import { createPayment } from "../models/payment.model.js";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'mock_key_id',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'mock_key_secret'    
});

export const createOrder = async (req, res) => {
    const { amount } = req.body;
    const options = {
        amount: amount * 100,
        currency: "INR",
    };
    const order = await razorpay.orders.create(options);
    res.status(201).json({ order });
};

export const confirmPayment = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    await createPayment(razorpay_order_id, razorpay_payment_id, razorpay_signature);
    res.status(200).json({ message: "Payment confirmed successfully" });
};
