import {query} from '../database'; // Import the connectToDatabase function

export const getAllListingsRoute = {
    method: "GET",
    path: "/api/listings",
    handler: async (req, h) => {
        try {
            return await query('SELECT * FROM listings'); // Return the query results directly
        } catch (error) {
            console.error("Error fetching listings:", error.message);
            return h.response("Error fetching listings").code(500); // Return an error response
        }
    }
};