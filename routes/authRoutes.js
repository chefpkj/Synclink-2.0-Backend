import {Router} from "express";
import controller from "../controllers/authController.js";
const router = Router();


router.post("/login", controller.login);
router.post("/signup", controller.signup);





export default router;
// localhost:4000/api/auth
