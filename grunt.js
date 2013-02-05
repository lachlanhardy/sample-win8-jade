"use strict";

var path = require("path"),
    jade = require("jade");

module.exports = function (grunt) {

    grunt.registerTask('default', 'A simple build from Jade to HTML.', function () {

        function writeFile(src, dest) {
            var jadeFile = grunt.file.read(src),
                htmlFile = jade.compile(jadeFile, { filename: src, pretty: true })();

            grunt.file.write(dest, htmlFile);
            grunt.log.writeln("Main HTML file created at \"" + dest + "\".");
        };

        writeFile("default.jade", "default.html");

    });

};
