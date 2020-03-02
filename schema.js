const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    getPlacesVisitedByACaptain(captainName: String): [ArrivalLog]
    getPlacesVisitedByEveryCaptain: [ArrivalLog]
}
type Mutation {
    logVesselArrival(vesselArrival: VesselArrival): ArrivalLog
}
input VesselArrival {
    vesselName: String,
    arrivedOn: String,
    portName: String,
    captainName: String
}

type ArrivalLog {
    vesselName: String,
    arrivedOn: String,
    portName: String,
    captainName: String
}
`;

module.exports = typeDefs;