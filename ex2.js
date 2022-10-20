import fs from 'fs';

const dir = './upload';
const file = 'lakes.txt';
const path = `${dir}/${file}`;

if(!fs.existsSync(dir)){
    fs.mkdir(dir, (err) => {
        if (err) throw err;
        console.log(`Diretorio ${dir} criado com sucesso`);
    });
} else{
    console.log(`Acessando diretório: ${dir}`);
}

let msg="O segundo melhor time";
if(!fs.existsSync(path)){
    fs.writeFile(path, msg, (err) => {
        if (err) throw err;
        console.log(`Arquivo ${file} criado com sucesso`);
    });
}