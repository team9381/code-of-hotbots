var sdk, controller;
alicorn.shard("BasicDrive")
    .create(function(self) {
        sdk = self.require("AndroidFTC"); // Get the library for interfacing with FTC parts
        controller = sdk.get("gamepad");  // Create an object for the gamepad
    })
    .update(function(self) {
        var x = controller.get("x2");     // Get the controller stick's X axis
        var y = controller.get("y1");     // Get the controller stick's Y axis
        
        var left = (x - y);               // Get the power of the motors on the left side of the robot
        var right = (x + y);              // Get the power of the motors on the right side of the robot
        
        sdk.set("leftFront", left);       // Set the motor named "leftFront"'s power to the variable left
        sdk.set("leftBack", left);        // Set the motor named "leftBack"'s power to the variable left
        sdk.set("rightFront", right);     // Set the motor named "rightFront"'s power to the variable right
        sdk.set("rightBack", right);      // Set the motor named "rightBack"'s power to the variable right
    });
