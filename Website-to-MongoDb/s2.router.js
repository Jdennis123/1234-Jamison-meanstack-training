let express = require("express");   // Load express for routing
let router = express.Router();      // Router reference. 
let ChatController = require("../controller/s2.controller.js");

// Mapping sub path with http methods. 
router.post("/storeChatDetails",ChatController.storeChatDetails);      // Use post method for store

module.exports = router;
