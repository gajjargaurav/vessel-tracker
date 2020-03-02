module.exports = {
    Query: {
        getPlacesVisitedByACaptain: async (_, { captainName }, { dataSources }) => await dataSources.dataStore.getPlacesVisitedByACaptain({captainName}),
        getPlacesVisitedByEveryCaptain: async (_, __, { dataSources }) => await dataSources.dataStore.getPlacesVisitedByEveryCaptain(),
    },
    Mutation: {
        logVesselArrival: async (_, {vesselArrival}, { dataSources }) => await dataSources.dataStore.logVesselArrival({ ...vesselArrival })
    }
}