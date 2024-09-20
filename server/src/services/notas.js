import {prisma} from '../lib/prisma.js'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function getNotas(req, res){
    try {
        const notas = await prisma.nota.findMany()
        res.status(200).json(notas)
    } catch (error) {
        if(error instanceof Error)
            return res.status(500).json({message: error.message})
    }
}

export async function getNota(req, res){
    try {
        const {id} = req.params;
        const nota = await prisma.nota.findFirst({
            where: {
                id: Number(id)
            }
        })
        if(!nota) return res.status(404).json({message: `El id ${id} no se encuentra`})
        res.status(200).json(nota)
    } catch (error) {
        if(error instanceof Error)
            return res.status(500).json({message: error.message})
    }
}

export async function postNota(req, res){
    try {
        const {titulo, descripcion} = req.body;
        const nota = await prisma.nota.create({
            data:{
                titulo,
                descripcion
            }
        })
        res.status(200).json(nota)
    } catch (error) {
        if(error instanceof Error)
            return res.status(500).json({message: error.message})
    }
}

export async function putNota(req, res){
    try {
        const {id} = req.params;
        const {titulo, descripcion} = req.body;
        const nota = await prisma.nota.update({
            data:{
                titulo,
                descripcion
            },
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(nota)
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError)
            return res.status(404).json({message: `El id ${req.params.id} no se encuentra`})
        if(error instanceof Error)
            return res.status(500).json({message: error.message})
    }
}

export async function deleteNota(req, res){
    try {
        const {id} = req.params;
        const nota = await prisma.nota.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(nota)
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError)
            return res.status(404).json({message: `El id ${req.params.id} no se encuentra`})
        if(error instanceof Error)
            return res.status(500).json({message: error.message})
    }
}