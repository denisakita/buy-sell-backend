import {query} from "../database";

export const updateListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}',
    handler: async (req, h) => {

        const {id} = req.params;
        const {name, description, price} = req.payload;
        const userId = 12;

        await query(
            `UPDATE listings
             SET name=?,
                 description=?,
                 price=?
             WHERE id = ?
               AND user_id = ?`,
            [name, description, price, id, userId]
        );

        const results = await query(
            'SELECT * FROM listings WHERE id=? AND user_id=?',
            [id, userId]
        );


        return results[0];
    }
};
