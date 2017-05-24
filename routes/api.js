
'use strict';
var index = require('./index');
var users = require('./users');
var categories = require('./categories');
var events = require('./events');
var venues = require('./venues');
var subscription = require('./subscription');
var user_event = require('./user_event');
var user_category = require('./user_category');

const express = require(`express`); /* eslint-disable new-cap */
const router = express.Router();    /* eslint-enable new-cap */

router.use('/', index);
router.use('/users', users);
router.use('/categories', categories);
router.use('/events', events);
router.use('/venues', venues);
router.use('/subscription', subscription);
router.use('/user_event', user_event);
router.use('/user_category', user_category);

module.exports = router;
