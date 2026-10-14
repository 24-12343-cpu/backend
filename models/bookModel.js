import pool from '../Config/db.js';

export const fetch = async () => {
    const [rows] = await pool.query('SELECT * FROM Book');
    return rows;
};
