function deleteCoin(id) {

    var img_node = $("#" + id).children($(".trashcol")).children().children().get(0);
    var span_node = $("#" + id).children($(".trashcol")).children().children().get(1);

    img_node.style.display = "none";
    span_node.style.display="inline";
}