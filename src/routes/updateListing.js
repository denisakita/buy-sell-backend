import {query} from "../database";

export const updateListingRoute = {
    method: 'PUT',
    path: '/api/listings/{id}',
    handler: async (req, h) => {

        const {id} = req.params;
        const {name, description, price} = req.payload;
        const userId = 12;

        await query(
            `UPDATE listings
             SET name=$1,
                 description=$2,
                 price=$3
             WHERE id = $4 AND user_id = $5`,
            [name, description, price, id, userId],
        );

        const results = await query(
            'SELECT * FROM listings WHERE id=$1 AND user_id=$2',
            [id, userId]
        );


        return results[0];
    }
};
