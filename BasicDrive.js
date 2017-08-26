var sdk, controller;
alicorn.shard("BasicDrive")
    .create(function(self) {
        sdk = self.require("AndroidFTC"); // Get the library for interfacing with FTC parts
        controller = sdk.get("gamepad"); // Create an object for the gamepad
    })
    .update(function(self) {
        // Get the value of each axis of the joystick on the controller
        var x = controller.get("x2");
        var y = controller.get("y1");
        
        // Get the power of the motors on the left side of the robot
        var left = (x - y);
        var right = (x + y);
        
        // Set the motor power to the controller's axis
        sdk.set("leftFront", left); 
        sdk.set("leftBack", left); 
        sdk.set("rightFront", right); 
        sdk.set("rightBack", right); 
    });
