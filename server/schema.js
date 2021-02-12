const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    trips(offset: Int, limit: Int): [Trip!]!
  }

  type Mutation {
    createTrip(input: CreateTripInput!): Trip
  }

  type Trip {
    id: ID! # format "urn::trip:<mongo object id>"
    from: Location!
    to: Location!
  }

  type Location {
    name: String!
  }

  input CreateTripInput {
    fromPlaceId: String! # https://developers.google.com/places/web-service/place-id
    toPlaceId: String!
  }
`;

module.exports = {
  typeDefs,
};
