const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {

    const texto = req.body.text;

    if(!texto){
        return res.json({error:"Texto requerido"});
    }

    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(texto)}&tl=es&client=tw-ob`;

    try{

        const response = await axios({
            url:url,
            method:"GET",
            responseType:"arraybuffer"
        });

        res.set("Content-Type","audio/mpeg");
        res.send(response.data);

    }catch(error){

        res.status(500).json({
            error:"Error generando audio"
        });

    }

});

module.exports = router;
