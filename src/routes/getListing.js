import { fakeListing } from "./fake-data";
import Boom from "@hapi/boom";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listing/{id}',
    handler: (req, h) => {
        const id = req.params.id;
        const listing = fakeListing.find(listing => listing.id === id);
        if (!listing) {
            throw Boom.notFound(`Listing does not exist with id ${id}`);
        }
        return listing;
    }
}
