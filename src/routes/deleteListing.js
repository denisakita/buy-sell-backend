import { query } from "../database";

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        await query(
            'DELETE FROM listings WHERE id=$1',
            [id],
        );
        return h.response("Listing deleted successfully").code(200);
    }
};

// Define other routes similarly for GET, POST, etc.
