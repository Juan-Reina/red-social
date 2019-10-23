var buscador = $("#table").datatable();

$("#input-search").keyup(function(){

  buscador.search($(this).val()).draw();

  if ($("#input-search").val() == "") {
    $(".content-search").fadeOut(300);
  }else{
    $(".content-search").fadein(300);
  }
})
