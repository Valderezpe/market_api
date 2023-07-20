import {Router, Response, Request} from "express";
import { createLivro, findLivroById, getAllLivros, removeLivro, updateLivro } from "./controllers/livroControllers";
import {validate} from "./middleware/handleValidation";
import { livroCreateValidation } from "./middleware/livroValidation";

const router = Router()
export default router
    .get("/produto", (rea:Request, res: Response) => {
    res.status(200).send("API Working!");
})
    .post("/livro",  livroCreateValidation(),validate, createLivro)
    .get("/livro/:id", findLivroById)
    .get("/livro", getAllLivros)
    .delete("/livro/:id", removeLivro)
    .patch("/livro/:id",  livroCreateValidation(),validate, updateLivro);