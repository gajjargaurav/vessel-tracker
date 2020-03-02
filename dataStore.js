const { DataSource } = require('apollo-datasource');

class DataStore extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    initialize(config) {
        this.context = config.context;
    }

    async getPlacesVisitedByEveryCaptain() {
        const res = await this.store.vesselLogs.findAll({ order: [['updatedAt', 'DESC']] });
        return res && res.length ? res : [];
    }

    async getPlacesVisitedByACaptain({ captainName }) {
        const res = await this.store.vesselLogs.findAll({ where: { captainName }, order: [['updatedAt', 'DESC']] });
        return res && res.length ? res : [];
    }
    async logVesselArrival({ vesselName, arrivedOn, portName, captainName }) {
        const res = await this.store.vesselLogs.findOrCreate({
            where: { vesselName, arrivedOn, portName, captainName },
        });
        return res && res.length ? res[0].get() : false;
    }
}

module.exports = DataStore;
