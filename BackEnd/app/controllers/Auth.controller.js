const bcrypt = require('bcrypt');
const db = require("../models");
const jst = require('jsonwebtoken');
const authConfig = require('../config/Auth.config.js');
const Usuario = db.usuarios;
module.exports=
{   
    signIn(req,res){

        let{Username,Password}= req.body;
        console.log(req.body);
        Usuario.findOne({
            where:{
                Username: Username

            }
        }).then( async usuario=>{
            console.log(usuario);
            if(!usuario){
                res.status(404).json({msg:"User not found"})
            }else{
                console.log(usuario.Password);
                let check= await  bcrypt.compare(Password,usuario.Password);
               if(check){
                   
                let token = jst.sign({usuario: usuario},authConfig.secret, {
                    expiresIn: authConfig.expires
                })
                res.json({
                    usuario: usuario,
                    token: token
                })

               }else{
                res.status(401).json({msg:"Password doesnt match"})
               }

            }

        }).catch(err=>{
            res.status(500).json(err)
        })


    },
  



}