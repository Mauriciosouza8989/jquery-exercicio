$(document).ready(()=>{
    
    $('form').on('submit', (e) =>{
        e.preventDefault();
        const adicionarTarefa = $('#adicionarTarefa').val();
        $(`<li>${adicionarTarefa}</li>`).appendTo('#tarefas');
        $('li').click(function() {
            $(this).addClass("finished");
        });
    });

    
});
