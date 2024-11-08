import db from "../database/db.js";

export const createPayment = async (userId, courseId, paymentId, amount, status) => {
    const [result] = await db.execute("INSERT INTO payments (userId, courseId, paymentId, amount, status) VALUES (?, ?, ?, ?, ?)", [userId, courseId, paymentId, amount, status]);
    return result;
};
   
