import User from "../modelapp/modelaplikasi.js";

export const tampilkanData = async (req,res)=> {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getUsersById = async (req, res)=> {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}


export const buatData = async (req,res)=> {
    try {
       await User.create(req.body);
       res.status(201).json({msg: "Data telah di buat"})
    } catch (error){
        console.log(error.message);
    }
}


export const updateData = async (req,res)=> {
    try {
       await User.update(req.body,{
        where:{
            id: req.params.id
        }
       });
       res.status(200).json({msg: "Data telah di update"})
    } catch (error){
        console.log(error.message);
    }
}


export const hapusData = async (req, res)=> {
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data telah di hapus"});
    } catch (error){
        console.log(error.message);
    }
}