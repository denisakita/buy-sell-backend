import { query } from "../database";

// Function to generate a random integer between min and max (inclusive)
function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const createNewListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (req, h) => {
        const userId = 12;
        const id = generateRandomInt(1000, 9999); // Generate a random integer ID
        const { name = '', description = '', price = 0 } = req.payload;
        const views = 0;

        try {
            await query(
                `INSERT INTO listings (id, name, description, price, user_id, views)
                 VALUES ($1, $2, $3, $4, $5, $6)`,
                [id, name, description, price, userId, views]
            );

            return { id, name, description, price, user_id: userId, views };
        } catch (error) {
            console.error('Error inserting new listing:', error.message);
            throw error;
        }
    }
};
