class jornalista {
    constructor(nome, foto) {
        this.nome = nome;
        this.foto = foto;

    }
    analisarnoticias(){
        console.log ('Analizando notícias ...');
    }
}

class noticia extends jornalista {
    analisarNoticias(){
        super.analisarnoticias()
        console.log('Você agora está informado');
    }
    inserirVideos(){
        console.log('Video 1')
        console.log('Video 2')
        console.log('Video 3')
    }
    jornalistaFamoso(nome, funcao){
        console.log ('James')
        console.log ('Ancora')
    }
}

const conhecimento = new jornalista();
conhecimento.analisarnoticias();

const videos = new noticia();
videos.inserirVideos();

const viajante = new noticia();
videos.jornalistaFamoso();

const canais = new String('15','23','48');

const funcionarios = new String('Renan','Sirio','Silverman');

    function removeVogaisString( remove ){
        return remove.replace(/[aeiouà-ú]/gi,'');
     }
    var resultado = removeVogaisString( "Renan" );
    var resultado = removeVogaisString( "Sirio" );
    var resultado = removeVogaisString( "Silverman" );
     
     console.log( resultado );
