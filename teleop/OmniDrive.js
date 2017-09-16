//  This program does one basic thing: it drives a 
//  robot that uses Andymark omniwheels. It keeps
//  the controls that are normally used for a tank
//  style drive robot while applying them to a 
//  robot with four angled omniwheels.
// TODO:
// - Change everything from the default blank progam.

var sdk, controller;
alicorn.shard("OmniDrive")
    .create(function(self) {
        sdk = self.require("AndroidFTC"); // Get the library for interfacing with FTC parts
    })
    .update(function(self) {
      
    });
