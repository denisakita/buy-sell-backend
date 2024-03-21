import {query} from "../database";

export const createNewListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (req, h) => {
        const userId = 22;
        const {name = '', description = '', price = 0} = req.payload;
        const views = 0;

        const result = await query(`
            INSERT INTO listings (name, description, price, user_id, views)
            VALUES (?, ?, ?, ?, ?) RETURNING id;`, [name, description, price, userId, views]
        );

        const id = result.rows[0].id;

        return {id, name, description, price, user_id: userId, views};
    }
};
