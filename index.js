#!/bin/node

var browserify = require('browserify');

var b = browserify({
			entries: [
					'./src/js/main.js'
			],
			bundleExternal: false
		});

b.bundle().pipe(process.stdout);
