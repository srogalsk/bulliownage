/*Function called upon pressing trash icon. Removes display of trash and shows "Are you sure? yes no" */
function deleteCoin(id) {

    var img_node = $("#" + id).children($(".trashcol")).children().children().get(1);
    var span_node = $("#" + id).children($(".trashcol")).children().children().get(2);
    img_node.style.display = "none";
    span_node.style.display="inline";
}