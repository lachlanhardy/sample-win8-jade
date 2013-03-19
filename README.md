sample-win8-jade
================

A sample Windows 8 JavaScript application using GruntJS to compile Jade in Visual Studio.

The objective here was to get the simplest build script possible to compile a symbiotic web transpiler language for use in a Windows 8 HTML5 app. 

It was written as a live code demo in a presentation so it's not the prettiest or the most useful as is. I'm starting a second project to make it production-ready (or at least production-feasible). I'll link that here when I've committed some code and can work out what to call it.


What does it do?
===

The VS Project file calls a simple gruntJS task as a pre-build step so that when the app is built the Jade has already been converted into HTML.
