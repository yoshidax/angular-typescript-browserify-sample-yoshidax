/// <reference path="../../../typings/tsd" />

import angular = require('angular');

import routes = require('./routes');

function config(): void {
	routes();
}

export = config;