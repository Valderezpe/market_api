import { Request, Response } from "express";
import { livroModel } from "../models/Livros";
import Logger from "../../config/logger";

export async function createLivro(req: Request, res: Response ){
    try {
        const data = req.body
        const livro = await livroModel.create(data)
        return res.status(201).json(livro);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor, tente mas tarde"})
        
    }
}

export async function  findLivroById(req:Request, res: Response){
    try {
        const id = req.params.id
        const livro = await livroModel.findById(id)

        if(!livro){
            return res.status(404).json({error:"Livro não cadastrado."})
        }
        return res.status(200).json(livro);

    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor, tente mas tarde"})
        
    }
}

export async function getAllLivros(req: Request, res: Response){

    try {
        const livros = await livroModel.find()
        return res.status(200).json(livros);
    }catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor, tente mas tarde"})
        
    }
}

export async function removeLivro (req: Request, res: Response){
    try {
        const id = req.params.id
        const livro = await livroModel.findById(id)

        if(!livro){
            return res.status(404).json({error: "Livro não encontrado."})
        }
        await livro.deleteOne()

        return res.status(200).json({msg: "Livro removido com sucesso!"})

    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor, tente mas tarde"})
        
    }
}

export async function updateLivro(req: Request, res: Response){
    try {
        const id = req.params.id
        const data = req.body;

        const livro = await livroModel.findById(id)

        if(!livro){
            return res.status(404).json({error: "Livro não encontrado."})
        }

        await livroModel.updateOne({_id: id}, data)
        return res.status(200).json(data);
        
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor, tente mas tarde"})
        
    }
}