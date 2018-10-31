db = db.getSiblingDB('Pessoas');

//apaga todos os registros de pessoas1
db.pessoas1.drop();

pts = [
    {
        nome:"Joao",
        sexo:"Masculino",
        estado_civil:"Casado",
        cpf:"123.123.123-12",
        filhos:[
            {
                nome:"Joao Filho",
                sexo:"Masculino",
                estado_civil:"Solteiro",
                cpf:"123.123.123-13",
                filhos:[
                    {
                        nome:"Joao Neto",
                        sexo:"Masculino",
                        estado_civil:"Solteiro",
                        cpf:"123.123.123-14",
                        filhos:[]
                    }
                ]
            }            
        ]
    },
    {
        nome:"Maria",
        sexo:"Feminino",
        estado_civil:"Casado",
        cpf:"123.123.123-15",
        filhos:[
            {
                nome:"Joao Filho",
                sexo:"Masculino",
                estado_civil:"Solteiro",
                cpf:"123.123.123-13",
                filhos:[
                    {
                        nome:"Joao Neto",
                        sexo:"Masculino",
                        estado_civil:"Solteiro",
                        cpf:"123.123.123-14",
                        filhos:[]
                    }
                ]
            }            
        ]
    }
];
//insere todos os registros de pessoas
db.pessoas1.insert(pts);

print("Total de registros: "+db.pessoas1.count());



/// SEGUNDA FORMA 

//apaga todos os registros de pessoas 2
db.pessoas2.drop();

pts = [
    {
        nome:"Joao",
        sexo:"Masculino",
        estado_civil:"Casado",
        cpf:"123.123.123-12",
        pai:null,
        mae:null
    },
    {
        nome:"Joao Filho",
        sexo:"Masculino",
        estado_civil:"Solteiro",
        cpf:"123.123.123-13",
        pai:{
            nome:"Joao",
            sexo:"Masculino",
            estado_civil:"Casado",
            cpf:"123.123.123-12",
            pai:null,
            mae:null
        },
        mae:{
            nome:"Maria",
            sexo:"Feminino",
            estado_civil:"Casado",
            cpf:"123.123.123-15",
        }
    },
    {
        nome:"Joao Neto",
        sexo:"Masculino",
        estado_civil:"Solteiro",
        cpf:"123.123.123-14",
        pai:{
            nome:"Joao Filho",
            sexo:"Masculino",
            estado_civil:"Solteiro",
            cpf:"123.123.123-13"
        },
        mae:null
    },
    {
        nome:"Maria",
        sexo:"Feminino",
        estado_civil:"Casado",
        cpf:"123.123.123-15",
        pai:null,
        mae:null
    }
];
//insere todos os registros de pessoas
db.pessoas2.insert(pts);

print("Total de registros 2: "+db.pessoas2.count());


// TERCEIRA FORMA
//apaga todos os registros de posts
db.pessoas3.drop();

pts = [
    {
        nome:"Joao",
        sexo:"Masculino",
        estado_civil:"Casado",
        cpf:"123.123.123-12",
        cpf_pai:null,
        cpf_mae:null
    },
    {
        nome:"Joao Filho",
        sexo:"Masculino",
        estado_civil:"Solteiro",
        cpf:"123.123.123-13",
        cpf_pai:"123.123.123-12",
        cpf_mae:"123.123.123-15",
    },
    {
        nome:"Maria Filha",
        sexo:"Feminino",
        estado_civil:"Solteiro",
        cpf:"123.123.123-13",
        cpf_pai:"123.123.123-12",
        cpf_mae:"123.123.123-15",
    },
    {
        nome:"Joao Neto",
        sexo:"Masculino",
        estado_civil:"Solteiro",
        cpf:"123.123.123-14",
        cpf_pai:"123.123.123-13",
        mae:null
    },
    {
        nome:"Maria",
        sexo:"Feminino",
        estado_civil:"Casado",
        cpf:"123.123.123-15",
        cpf_pai:null,
        cpf_mae:null
    }
];
//insere todos os registros de pessoas
db.pessoas3.insert(pts);

print("Total de registros 3: "+db.pessoas3.count());

//pegar uma pessoa de um cpf especifico
//db.pessoas3.find({cpf:"123.123.123-13"}).pretty();

//pegar todos os filhos de um determinado pai
//db.pessoas3.find({cpf_pai:"123.123.123-12"}).pretty();


