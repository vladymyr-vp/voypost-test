const { Trip } = require('./model');
const axios = require('axios');

const resolvers = {
  Query: {
    trips: () => 'there are trips',
  },
  Mutation: {
    createTrip: ({ fromPlaceId, toPlaceId }) => {
      const getLocation = async (placeId) => {
        const baseURL = await axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${process.env.googleAPIkey}`
          )
          .then((response) => response.data);
        const location = baseURL.results.formatted_address;
        return location;
      };

      const fromLocation = getLocation(fromPlaceId);
      const toLocation = getLocation(toPlaceId);

      return new Trip({ fromLocation, toLocation });
    },
  },
};

module.exports = {
  resolvers,
};
