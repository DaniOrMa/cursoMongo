import Curso from "../models/curso";

export const getCurso = async (req, res) => {
    const curso = await Curso.find();
    res.status(200).json(curso);
}

export const createCurso = async (req, res) => {
    const{
        profesor,
        status,
        materia
    } = req.body;
    const newCurso = new Curso({
        profesor,
        status,
        materia
    })
    await newCurso.save();
    res.status(200).json({messages: "CORRECTO"})
}

export const updateCursoById = async (req, res) => {
    const curso = await Curso.findByIdAndUpdate(req.params.CursoId, req.body, {new: true});
    res.status(200).json({messages: "CORRECTO"})
}

export const deleteCursoByName = async(req, res) => {
    await Curso.findByIdAndDelete(req.params.CursoId);
    res.status(204).json();
}