import {query} from "../database";
import Boom from '@hapi/boom';

export const addViewToListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}/add-view',
    handler: async (req, h) => {
        try {
            const id = req.params.id;

            await query('UPDATE listings SET views = views + 1 WHERE id = $1', [id]);

            const [listing] = await query('SELECT * FROM listings WHERE id = $1', [id]);

            return listing || Boom.notFound(`Listing does not exist with id ${id}`);
        } catch (error) {
            console.error('Error adding view to listing:', error.message);
            throw Boom.boomify(error, {statusCode: 500});
        }
    }
};
