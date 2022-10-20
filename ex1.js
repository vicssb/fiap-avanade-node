import fs from 'fs';

const dir = 'upload';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log(`Criando diretorio: ${dir}`);
}else{
    console.log(`Acessando o diretorio: ${dir}`);
}

let msg = "Victor desenvolvedor";
let file = 'victor.txt';
let path = `${dir}/${file}`;

if(!fs.existsSync(path)){
    fs.writeFileSync(path, msg);
    console.log(`Arquivo ${path} criado com sucesso`);
}