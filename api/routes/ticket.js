const express = require("express");
const router = express.Router();
const ticketControllers = require("../controller/ticket");

router.get("/", ticketControllers.getTicket);
router.get("/:id", ticketControllers.getSpecificTicket);
router.put("/:id", ticketControllers.updateTicket);
router.delete("/:id", ticketControllers.deleteTicket);
router.post("/", ticketControllers.addTicket);

module.exports = router;
