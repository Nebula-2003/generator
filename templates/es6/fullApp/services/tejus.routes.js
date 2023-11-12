import controller from"./tejus.controller"
import { Router } from "express";
import { guard } from "../../helper";

const router = Router();

/*
 *  Add
 */
router.post("/create", controller.create);

/*
 *  Get By Id
 */
router.get("/get/:id", controller.get);

/*
 *  List All
 */
router.get("/list", controller.list);

/*
 *  Update
 */
router.put("/update/:id", controller.update);

/*
 *  Delete
 */
router.delete("/delete/:id", controller.delete);

export default router;
