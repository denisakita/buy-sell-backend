import {query} from "../database";
import * as admin from "firebase-admin";

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const token = req.headers.authToken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = user.user_id;

        const {id} = req.params;
        await query(
            'DELETE FROM listings WHERE id=$1 AND user_id=$2',
            [id, userId],
        );
        return h.response("Listing deleted successfully").code(200);
    }
};

// Define other routes similarly for GET, POST, etc.
