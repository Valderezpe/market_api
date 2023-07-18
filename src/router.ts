import {Router, Response, Request} from "express";

const router = Router()
export default router.get("/produto", (rea:Request, res: Response) => {
    res.status(201).send("API Working!");
});