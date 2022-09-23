import ArgonauteModel from "../models/argonauteModel.js"

//GET Read All = Read

export const getArgonautes = async (_, res) => {
  const argonautes = await ArgonauteModel.find({})
  res.send(argonautes)
}

//GET Read One = Read

export const getArgonaute = async (_, res) => {
  const argonaute = await ArgonauteModel.find({_id: req.params.id})
  res.send(argonaute)
}

//POST Add One = Create
export const addArgonaute = async (req, res) => {
  const argonaute = new ArgonauteModel(req.body)
  await argonaute.save()
  res.send(argonaute)
}

//PATCH Update = Update

export const updateArgonaute = async (req, res) => {
  const argonaute = await ArgonauteModel.findByIdAndUpdate(req.params.id, req.body)
  await argonaute.save()
  res.send(argonaute)
}

//DELETE Delete = Delete

export const deleteArgonaute = async (req, res) => {
  const argonaute = await ArgonauteModel.findByIdAndDelete(req.params.id)
  if (!argonaute) {
    res.status(404).send('Aucun argonaute trouvé')
  }
  res.status(200).send()
}

