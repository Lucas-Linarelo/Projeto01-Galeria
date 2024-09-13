$(document).ready(function(){
    var formVisivel = false;

    $('#btn-fixo').click(function() {
        if(!formVisivel){
            $('form').slideDown(); 
            formVisivel = true;
            $(this).addClass('active');         /* Troquei o  "$('button header').add..." por this facilitando a aplicação o código.*/
            $('#add-img').hide();
            $('#rmv-img').show();

            /*Ao ativar o botão "+" traz a página para o topo do formulário melhorando a interação do usuário*/
            $('html, body').animate({
                scrollTop: $('form').offset().top
            }, 800);

        } else {
            $('form').slideUp(); 
            formVisivel = false;
            $(this).removeClass('active');     /* Ao fechar o formulário, a classe ativa é removida. */
            $('#add-img').show();
            $('#rmv-img').hide();
        }
    });

        /* Aqui lidamos com a adição de novas imagens */
        $('form').submit(function(event) {
            event.preventDefault();
            var novaImagemUrl = $('#endereco-image-nova').val();  /* Obtém a URL digitada pelo usuário */
            if(novaImagemUrl) {
                // var novoItem = $('<li><img src="'+novaImagemUrl+'" alt="Imagem nova"><div class="overlay-image-link"><a href="'+novaImagemUrl+'" target="_blank">Abrir</a></div></li>'); //versão antiga com link
                var novoItem = $('<li><img src="'+novaImagemUrl+'" alt="Imagem nova"></li>');
                /* Adiciona a nova imagem à lista */
                $('ul').append(novoItem);
    
                /* Limpa o campo de entrada após a adição */
                $('#endereco-image-nova').val('');
            }
        });


    /* Esta função permite a exibição de imagens em tamanho grande ao clicar na imagem pequena */
    $('ul').on('click', 'li img', function() {
        var src = $(this).attr('src');
        $('#modal-img').attr('src', src);
        $('#image-modal').fadeIn();
    });

    /* Função para fechar o modal ao clicar no "X" */
    $('.close-modal').click(function() {
        $('#image-modal').fadeOut();      /* Fecha o modal de visualização de imagem. */
    });

    /* Ao clicar fora da imagem no modal, ele também fecha */
    $('#image-modal').click(function(e) {
        if (e.target === this) {
            $(this).fadeOut();
        }
    });


});
