"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksController_1 = require("../controllers/tasksController");
const router = (0, express_1.Router)();
router.get("/", tasksController_1.getTasks);
router.post("/create", tasksController_1.createTasks);
router.patch("/:statusId/status", tasksController_1.updateTaskStatus);
exports.default = router;
