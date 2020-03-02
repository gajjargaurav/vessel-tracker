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


## The solution (TO BE IMPLEMENTED)

Vessel Tracker is a GraphQL API built using [Apollo Data Graph Platform][Apollo] . It also uses SQLite as a temporary data store. 

[Vessel-Tracker]: ./Vessel-Tracker-ComponentView.png "Vessel-Tracker"
[Vessel-Tracker-Key]: ./Vessel-Tracker-ComponentView-key.png "Vessel-Tracker-Key"
[Apollo]: https://www.apollographql.com/