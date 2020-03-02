// TODO: This is dummy data, remove it once connected to actual data store
const dummy = (captainName) => ([
    {
        vesselName: 'V1',
        arrivedOn: '2020-02-09T05:06:07.000',
        portName: 'London',
        captainName
    },
    {
        vesselName: 'V2',
        arrivedOn: '2020-02-05T05:06:07.000',
        portName: 'London',
        captainName
    }
]);

module.exports = {
    Query: {
        getPlacesVisitedByACaptain: async (_, { captainName }) => {
            console.log(captainName);
            // TODO: implement data source
            // Return dummy data. To get the endpoint working
            return dummy(captainName);
        },
        getPlacesVisitedByEveryCaptain: async () => {
            return [...dummy('GG'), ...dummy('RK')]
        }
    },
    Mutation: {
        logVesselArrival: async (_, {vesselArrival}) => {
            // TODO: implement data source
            return vesselArrival;
        }
    }
}