# Vessel Tracker

Vessel Tracker is a GraphQL API that facilitates following,

1. Create a Vessel Arrival Log
2. Get a list of places visited by a Captain
3. Get a list of all places every Captain has visited

## Assumptions

*   There is already an existing internal API that sends a log every time a vessel arrives in a port somewhere in the world
*   A Database store to capture all arrival logs
> Any kind of database system can be used but for simplicity of the test SQLite is used

## Architecture

The system is made up of,
    
    - A Mobile Application that end users will use to track arrival logs

    - A GraphQL API with one mutation and two queries

    - An existing API that provides arrival log every time a vessel arrives in a port somewhere in the world

    - A Data store that will store all ship arrivals

There are several ways in which a system architecture can be produced. [C4 model][c4Model] is used here to produce a component Level architecture diagram below,

![Vessel Tracker Architecture][Vessel-Tracker]
![Vessel Tracker Architecture Key][Vessel-Tracker-Key]

## GraphQL API

Vessel Tracker is a GraphQL API built using [Apollo Data Graph Platform][Apollo]

### Installation
```bash
    npm install
```

### Running the API
Once you've installed modules just run following command

```bash
    npm start
```

Running above command will setup an [**Apollo playground**][Playground].
Just simply paste http://localhost:4000/ and play with the Apollo playground to explore the API!

### Examples
There is one example for each mutation and query provided below but you can add as many mutations as you like and query the data.

> Launch  Apollo Playground by opening http://localhost:4000/ in a browser and then try some of the examples given below,

* logVesselArrival

    ```
    mutation {
        logVesselArrival(vesselArrival: { vesselName: "Vanessa", 
            arrivedOn: "2013-02-05T00:00:00.000Z", 
            portName: "New York", 
            captainName: "Hard Shell"}) {
            vesselName,
            arrivedOn,
            portName,
            captainName
        }
    }
    ```
* getPlacesVisitedByEveryCaptain
    
    ```
    query {
        getPlacesVisitedByEveryCaptain{
            vesselName,
            captainName,
            arrivedOn,
            portName
        }
    }
    ```
* getPlacesVisitedByACaptain

    ```
    query {
        getPlacesVisitedByACaptain(captainName: "Hard Shell") {
            vesselName,
            captainName,
            arrivedOn,
            portName
        }
    }
    ```

## Next steps

This is just a start and a lot can be done. However following are few things on our radar

### Must have
* Add unit tests - haven't added any tests yet please do that asap!!
* Sort by date is hard coded and can be moved out to query so data can be fetched using different order too

### Should have
* Add linting and other boilerplate code
* Setup CI

### Nice to have
* Add Apollo Client & add arrival log subscription so updates can be received by Mobile App automatically


[Playground]: http://localhost:4000/
[c4Model]: https://c4model.com/
[Vessel-Tracker]: ./Vessel-Tracker-ComponentView.png "Vessel-Tracker"
[Vessel-Tracker-Key]: ./Vessel-Tracker-ComponentView-key.png "Vessel-Tracker-Key"
[Apollo]: https://www.apollographql.com/