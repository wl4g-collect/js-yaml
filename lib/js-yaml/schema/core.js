'use strict';


var Schema = require('../schema');


module.exports = new Schema({
  implicit: [
    require('../type/null'),
    require('../type/bool'),
    require('../type/int'),
    require('../type/float')
  ],
  explicit: [
    require('../type/str'),
    require('../type/seq'),
    require('../type/map'),
    require('../type/timestamp'),
    require('../type/binary'),
    require('../type/omap'),
    require('../type/pairs'),
    require('../type/set'),
    require('../type/merge')
  ]
});