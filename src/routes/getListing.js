import Boom from '@hapi/boom';
import {query} from "../database";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        try {
            const id = req.params.id;
            const result = await query(
                'SELECT * FROM listings WHERE id = $1',
                [id],
            );

            const listing = result[0];

            if (!listing) {
                throw Boom.notFound(`Listing does not exist with id ${id}`);
            }

            return listing;
        } catch (error) {
            console.error('Error retrieving listing by ID:', error.message);
            throw Boom.badImplementation('An error occurred while retrieving the listing.');
        }
    }
}
