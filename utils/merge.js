var _ = require('lodash');

class Merge {

    constructor(object, source)
    {
        this.object = object;
        this.source = source;
    }

    merge(){
        return _.merge(this.object, this.source);
    }
}

module.exports = Merge;