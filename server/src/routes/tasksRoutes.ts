import { Router } from "express";

import { getTasks ,createTasks, updateTaskStatus} from "../controllers/tasksController";

const router = Router();

router.get("/",getTasks);
router.post("/create",createTasks);
router.patch("/:statusId/status",updateTaskStatus)

export default router