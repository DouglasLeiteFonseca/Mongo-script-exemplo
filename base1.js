db = db.getSiblingDB('Blog');

//apaga todos os registros de posts
db.posts.drop();

pts = [
    {
        "_id":ObjectId("5bd7a759afb1ba1e8d85ce56"),
        "titulo": "Quem roubar vai para cadeia e ele joga a chave fora', diz futuro ministro sobre governo Bolsonaro",
        "conteudo":"RIO - Futuro ministro-chefe da Casa Civil do governo de Jair Bolsonaro (PSL), o deputado federal Onyx Lorenzoni (DEM-RS) criticou, nesta segunda-feira, os escândalos de corrupção na Petrobras e sugeriu punições severas a quem cometer crimes contra a administração pública.",
        "tags":["politica","Bolsonaro","eleições"]
    },
    {
        "_id":ObjectId("5bd7a759afb1ba1e8d85ce57"),
        "titulo": "Ribeirão Preto e Taubaté serão as primeiras cidades com batalhão especial da PM e Deic, diz Doria",
        "conteudo":"O governador eleito de São Paulo, João Doria (PSDB), afirmou na noite desta segunda-feira (29) em entrevista concedida ao SP2 que Ribeirão Preto e Taubaté serão as primeiras cidades a receber Batalhões de Ações Especiais da PM (Baep) e Departamento de Investigações Criminais (Deic).         O tucano derrotou o atual governador, Márcio França (PSB), e foi eleito no domingo (28) com 51,75% dos votos válidos. Nesta segunda, mais cedo, em entrevista ao SP1, Doria havia afirmado que pretende fazer um “governo de conciliação” e que não vai tratar como “inimiga” a população que não votou nele. Na noite desta segunda, Doria foi questionado pelo jornalista Carlos Tramontina quais serão as três primeiras cidades a receber os Baep's. “Ribeirão Preto será uma delas porque o problema, infelizmente, é recorrente em Ribeirão. Taubaté será a segunda. A terceira nós estamos decidindo. Serão três batalhões especiais, cada um com 300 policiais militares – é a Força Tática e a Rota, é a elite da elite, declarou. Questionado sobre o prazo para a instalação dos Baeps, Doria informou que isso ocorrerá 'no mais curto espaço de tempo possível\". \"Vamos preparar a tropa fisicamente para colocá-la e locá-la exatamente onde ela deverá estar. Mas não será apenas a Polícia Militar, será também o Deic - Departamento de Investigações Criminais\" .",
        "tags":["politica","Doria","eleições"]
    },
    {
        "_id":ObjectId("5bd7a759afb1ba1e8d85ce58"),
        "titulo": "Novo governador do RJ, Wilson Witzel já tem apoio de um terço dos deputados eleitos para Alerj",
        "conteudo":"O recém-eleito governador do Rio de Janeiro, Wilson Witzel (PSC), terá mais de um terço dos deputados da Alerj compondo sua base governista na Casa. Estreando na função, o ex-juiz federal também já conta com deputados que formam a oposição na assembleia. Entre seus aliados, estão três parlamentares da sua coligação de campanha nas eleições do PSC e Pros; 13 do PSL, partido que declarou apoio à sua candidatura; e outros partidos se juntaram a ele durante a corrida eleitoral. Nome importante, que declarou apoio à Witzel, é o do prefeito Marcelo Crivella (PRB), que tem outros três deputados eleitos na Alerj. O PSD tem duas cadeiras e também é um partido que estará ao lado do próximo governador, apesar do candidato Indio da Costa ter se declarado neutro no segundo turno. Já o policial militar e também candidato nas eleições de 2018, André Monteiro, apoiou Wilson Witzel. Na oposição, entram em cena os partidos de esquerda PSOL e PT, que somam oito parlamentares na Alerj a partir de 2019. O PSDB ocupou duas vagas e também deve compor a bancada contrária ao governo, já que participou da coligação do adversário Eduardo Paes (DEM). No total, este grupo contava com 12 partidos, mas nem todos participantes se manifestaram. Além desses, três deputados eleitos pelo PDT também formam a oposição de Wilson Witzel. Mesmo com o apoio do candidato Pedro Fernandes à candidatura do ex-juiz federal, o partido afirmou que era uma posição isolada.",
        "tags":["politica","Witzel","eleições"]
    },
    {
        "_id":ObjectId("5bd7a759afb1ba1e8d85ce59"),
        "titulo": "Reta Final: Beto promete perdoar Karola em troca do paradeiro de Remy",
        "conteudo":"Beto (Emilio Dantas) precisa descobrir o paradeiro de Remy (Vladimir Brichta) para provar a inocência de Luzia (Giovanna Antonelli). Certo de que Karola (Deborah Secco) sabe onde o irmão se esconde, ele vai até a cobertura da ex: \"Quantas vezes eu fiquei deprimido, como você tá agora, e você me levantou, me mostrou que eu tinha que seguir vivendo pelo bem de nosso filho? Agora chegou a minha vez de fazer o mesmo por você!\".",
        "tags":["novela","Segundo Sol"]
    }
];
//insere todos os registros de posts
db.posts.insert(pts);

print("Total de registros: "+db.posts.count());



map = function(){
    this.conteudo.split(' ').forEach(function(world){
        emit(world,1);
    });
};
reduce = function(key,values){
    var count = 0;
    values.forEach(function(value){
        count += 1;
    });
    return count;
}

// cria estrutura de palavras com a quantidade que aparece nos documentos
palavras = (db.posts.mapReduce(map,reduce, {out:{inline:1}}));
db.palavras.insert(palavras.results);
//db.palavras.find()
// ----------------------------------- ---------------------------

map = function(){
    this.tags.forEach(function(tag){
        emit(tag,1);
    });
};
reduce = function(key,values){
    var count = 0;
    values.forEach(function(value){
        count += 1;
    });
    return count;
}

// cria estrutura de tags com a quantidade que aparece nos documentos
tags = (db.posts.mapReduce(map,reduce, {out:{inline:1}}));
db.tags.insert(tags.results);
//db.tags.find()
//ordenar objeto
//db.palavras.find().sort({value:-1})

//palavras que aparecem mais de 10 vezes

//db.palavras.find({value: {$gt:10}})

//palavras que aparecem menos de 10 vezes

//db.palavras.find({value: {$lt:10}})

// quantidade de palavras que aparecem mais de 10 vezes

//db.palavras.find({value: {$gt:10}}).count()

// quantidade de palavras que aparecem entre 8 e 16 vezes

// db.palavras.find({value: {$gt:8, $lt:16}}).count()

//palavras que aparecem entre 4 e 10 vezes

// db.palavras.find({value: {$gt:4, $lt:10}}).sort({value:-1})

// Remove todas as palavras que aparecem entre 4 e 10 vezes
//db.palavras.find({value: {$gt:4, $lt:10}})


//alterar um post
// db.posts.update({"_id":ObjectId("5bd7a759afb1ba1e8d85ce58")}, {"titulo": "Novo governador do RJ, Wilson Witzel já tem apoio de um terço dos deputados eleitos para Alerj"} )

//db.posts.find({"_id":ObjectId("5bd7a759afb1ba1e8d85ce58")});

/* 
    db.posts.update({"_id":ObjectId("5bd7a759afb1ba1e8d85ce58")}, 
        {"titulo": "Novo governador do RJ, Wilson Witzel já tem apoio de um terço dos deputados eleitos para Alerj",
        "conteudo":"O recém-eleito governador do Rio de Janeiro, Wilson Witzel (PSC), terá mais de um terço dos deputados da Alerj compondo sua base governista na Casa. Estreando na função, o ex-juiz federal também já conta com deputados que formam a oposição na assembleia. Entre seus aliados, estão três parlamentares da sua coligação de campanha nas eleições do PSC e Pros; 13 do PSL, partido que declarou apoio à sua candidatura; e outros partidos se juntaram a ele durante a corrida eleitoral. Nome importante, que declarou apoio à Witzel, é o do prefeito Marcelo Crivella (PRB), que tem outros três deputados eleitos na Alerj. O PSD tem duas cadeiras e também é um partido que estará ao lado do próximo governador, apesar do candidato Indio da Costa ter se declarado neutro no segundo turno. Já o policial militar e também candidato nas eleições de 2018, André Monteiro, apoiou Wilson Witzel. Na oposição, entram em cena os partidos de esquerda PSOL e PT, que somam oito parlamentares na Alerj a partir de 2019. O PSDB ocupou duas vagas e também deve compor a bancada contrária ao governo, já que participou da coligação do adversário Eduardo Paes (DEM). No total, este grupo contava com 12 partidos, mas nem todos participantes se manifestaram. Além desses, três deputados eleitos pelo PDT também formam a oposição de Wilson Witzel. Mesmo com o apoio do candidato Pedro Fernandes à candidatura do ex-juiz federal, o partido afirmou que era uma posição isolada.",
        "tags":["politica","Witzel","eleições"]} 
    )
*/