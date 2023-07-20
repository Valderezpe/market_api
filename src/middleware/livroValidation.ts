import {body} from "express-validator"

export const livroCreateValidation =()=>{
    return[body ("title")
    .isString()
    .withMessage("Campo titulo é obrigatório!")
    .isLength({min: 5})
    .withMessage("O titulo precisa ter no minimo 5 caracteres."),
    body("rating").isNumeric().withMessage("A nota precisa ser um numero ")
    .custom((value:number) =>{
        if(value < 0 || value> 10){
            throw new Error("A nota precisa ser entre 0 a 10")
        }
        return true;
    }),
    body("description").isString().withMessage("A descrição e Obrigatória."),
    body("writer").isString().withMessage("O nome  obrigatório!"),
    body("poster").isURL().withMessage("A imagem precisa ser uma url.")
];
    
}