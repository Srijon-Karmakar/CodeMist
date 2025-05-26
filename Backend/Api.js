const express = require("express");
const app = express();
const bodyP = require("body-parser");
const compiler = require("compilex"); 
const options = { stats: true };
compiler.init(options);
app.use(bodyP.json());
app.use(express.static("C:/Users/srijo/OneDrive/Documents/_PROJECTS_/_CODEMIST_/Frontend"));
app.get("/", (req, res) =>{
    compiler.flush(() => {});
    res.sendFile("C:/Users/srijo/OneDrive/Documents/_PROJECTS_/_CODEMIST_/Frontend/home-page.html");
});

app.post("/compile", (req, res) => {
    const {code, input, lang} = req.body;
    let envData;
    try{
        if(lang == "C++" || lang == "C"){
            envData = { OS : "windows" , cmd : "g++", options:{timeout:15000}}; 
            if(!input) {
                compiler.compileCPP(envData , code , (data) => {
                    if(data.output) {
                        res.send(data);
                    }else{
                        res.send({ output : "error" })
                    }
                });
            }
            else {
                compiler.compileCPPWithInput(envData , code , input , (data) => {
                    if(data.output) {
                        res.send(data);
                    }else{
                        res.send({ output : "error" })
                    }
                });
            }
        }
        else if(lang == "Java"){
            envData = { OS : "windows" , options:{timeout:15000}}; 
            if(!input) {
                compiler.compileJava(envData , code , (data) => {
                    if(data.output) {
                        res.send(data);
                    }else{
                        res.send({ output : "error" })
                    }
                });
            }
            else {
                compiler.compileJavaWithInput(envData , code , input , (data) => {
                    if(data.output) {
                        res.send(data);
                    }else{
                        res.send({ output : "error" })
                    }
                });
            }
        }
        else if(lang == "Python"){
            envData = { OS : "windows" , options:{timeout:15000}}; 
            if(!input) {
                compiler.compilePython(envData , code , (data) => {
                    if(data.output) {
                        res.send(data);
                    }else{
                        res.send({ output : "error" })
                    }
                });
            }
            else {
                compiler.compilePythonWithInput(envData , code , input , (data) => {
                    if(data.output) {
                        res.send(data);
                    }else{
                        res.send({ output : "error" })
                    }
                });
            }
        }
    }
    catch(err){
        console.error(err);
    }
});
app.listen(10000);