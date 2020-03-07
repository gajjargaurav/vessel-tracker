const resolvers = require('../src/resolvers');


describe('Query', () => {
    const mockContext = {
        dataSources: {
            dataStore: {
                getPlacesVisitedByACaptain: jest.fn(),
                getPlacesVisitedByEveryCaptain: jest.fn(),
                logVesselArrival: jest.fn()
            }
        }
    }

    describe('getPlacesVisitedByACaptain', () => {
        it('returns empty array if no response', async () => {
            // Arrange
            const { getPlacesVisitedByACaptain } = mockContext.dataSources.dataStore;
            getPlacesVisitedByACaptain.mockReturnValueOnce([]);

            // Act
            const res = await resolvers.Query.getPlacesVisitedByACaptain(null, { captainName: 'Jack Sparrow' }, mockContext);

            // Assert
            expect(res).toEqual([]);
        });

        it('returns places visited by a captain if the name matches', async () => {
            // Arrange
            const { getPlacesVisitedByACaptain } = mockContext.dataSources.dataStore;
            const expectedResult = {
                vesselName: 'Black Pearl',
                captainName: 'Jack Sparrow',
                arrivedOn: '2003-07-09T00:00:00.000Z',
                portName: 'Port Royal'
            }
            getPlacesVisitedByACaptain.mockReturnValueOnce(expectedResult);

            // Act
            const res = await resolvers.Query.getPlacesVisitedByACaptain(null, { captainName: expectedResult.captainName }, mockContext);

            // Assert
            expect(res).toEqual(expectedResult);
        });
    });


    describe('getPlacesVisitedByEveryCaptain?', () => {
        it('returns empty array if the log is empty', async () => {
            // Arrange
            const { getPlacesVisitedByEveryCaptain } = mockContext.dataSources.dataStore;
            getPlacesVisitedByEveryCaptain.mockReturnValueOnce([]);

            // Act
            const res = await resolvers.Query.getPlacesVisitedByEveryCaptain(null, null, mockContext);

            // Assert
            expect(res).toEqual([]);
        });

        it('returns places visited by a captain if the name matches', async () => {
            // Arrange
            const { getPlacesVisitedByEveryCaptain } = mockContext.dataSources.dataStore;
            const expectedResult = [{
                vesselName: 'Black Pearl',
                captainName: 'Jack Sparrow',
                arrivedOn: '2003-07-09T00:00:00.000Z',
                portName: 'Port Royal'
            },
            {
                vesselName: 'Titanic',
                captainName: 'Edward John Smith',
                arrivedOn: '1997-12-19T00:00:00.000Z',
                portName: 'New York' // Well it never arrived really. Remember it sank!!!
            }];

            getPlacesVisitedByEveryCaptain.mockReturnValueOnce(expectedResult);

            // Act
            const res = await resolvers.Query.getPlacesVisitedByEveryCaptain(null, null, mockContext);

            // Assert
            expect(res).toEqual(expectedResult);
        });
    });
});


describe('Mutation', () => {
    const mockContext = {
        dataSources: {
            dataStore: {
                logVesselArrival: jest.fn()
            }
        }
    }
    describe('logVesselArrival', () => {
        it('returns vessel data back if succeeds', async () => {
            // Arrange
            const { logVesselArrival } = mockContext.dataSources.dataStore;
            const vesselArrival = {
                vesselName: 'Vanessa',
                arrivedOn: '2013-02-05T00:00:00.000Z',
                portName: 'New York',
                captainName: 'Hard Shell'
            }

            logVesselArrival.mockReturnValueOnce(vesselArrival);

            // Act
            const res = await resolvers.Mutation.logVesselArrival(null, { vesselArrival }, mockContext);

            // Assert
            expect(res).toEqual(vesselArrival);
        });

        it('returns error if correct data is not passed', async () => {
            // Arrange
            const { logVesselArrival } = mockContext.dataSources.dataStore;
            const vesselArrival = {
                vesselName: 'Vanessa',
                arrivedOn: '2013-02-05T00:00:00.000Z',
                captainName: 'Hard Shell'
            }
            const expectedError = { errors: [] };

            logVesselArrival.mockReturnValueOnce(expectedError)

            // Act
            const res = await resolvers.Mutation.logVesselArrival(null, { vesselArrival }, mockContext);

            // Assert
            expect(res).toEqual(expectedError);
        });
    });
});
