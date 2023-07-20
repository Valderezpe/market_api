import {Router, Response, Request} from "express";
import { createLivro } from "./controllers/livroControllers";
import {validate} from "./middleware/handleValidation";
import { livroCreateValidation } from "./middleware/livroValidation";

const router = Router()
export default router.get("/produto", (rea:Request, res: Response) => {
    res.status(200).send("API Working!");
})
.post("/livro",  livroCreateValidation(),validate, createLivro);