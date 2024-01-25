$(document).ready(function() {
    const arrayTarefas = [];

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();

        if (arrayTarefas.includes(nomeTarefa)) {
            alert(`A tarefa ${nomeTarefa} já foi adicionada`);
        } else {
            const novaTarefa = $('<li style="display: none"></li>');

            $(`<p class="check-tarefa">${nomeTarefa}</p>`).appendTo(novaTarefa);
            $('<button type="reset" class="botao-remove" title="Clique aqui para remover tarefa">x</button>').appendTo(novaTarefa);
            $(novaTarefa).appendTo('ul');
            $(novaTarefa).fadeIn();
            $('#nome-tarefa').val('');

            arrayTarefas.push(nomeTarefa)
        }
    })

    $('ul').on('click', '.botao-remove', function() {
        $(this).closest('li').fadeOut(function() {
            $(this).remove();
        });
    });

    $('ul').on('click', '.check-tarefa', function() {
        $(this).closest('li').css('background-color', 'rgb(58, 223, 58)');
        
        $(this).css({
            'text-decoration': 'line-through'
        });
    });
})