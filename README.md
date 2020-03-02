# Vessel Tracker

Vessel Tracker is a GraphQL API that facilitates following,

1. Create a Vessel Arrival Log
2. Get a list of places visited by a Captain
3. Get a list of all places every Captain has visited

## Assumptions

*   There is already an existing internal API that sends a log every time a vessel arrives in a port somewhere in the world.
*   A Database store to capture all arrival logs


## Architecture

There are several ways in which a system architecture can be produced. C4 model is used here to produce a Component Level architecture diagram that highlights the GraphQL API we are going to produce

![Vessel Tracker Architecture][Vessel-Tracker]
![Vessel Tracker Architecture Key][Vessel-Tracker-Key]


## GraphQL API

Vessel Tracker is a GraphQL API built using [Apollo Data Graph Platform][Apollo]

It uses SQLite as a temporary data store.

### Installation
```bash
npm install
```

### Running the API
Once you've installed modules just run following command

```bash
npm start
```

Running above command will setup an Apollo playground on http://localhost:4000/
just simply paste that URL and play with the Apollo playground to explore the API!

## Next steps

* Add unit tests - haven't added any tests yet please do that asap!!
* Sort by date is hard coded and can be moved out to query so data can be fetched using different order too
* Add linting and other boilerplate code
* Setup CI


[Vessel-Tracker]: ./Vessel-Tracker-ComponentView.png "Vessel-Tracker"
[Vessel-Tracker-Key]: ./Vessel-Tracker-ComponentView-key.png "Vessel-Tracker-Key"
[Apollo]: https://www.apollographql.com/