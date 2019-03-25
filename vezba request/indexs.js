

var body = $("body");

function render(element) {
    // arr.forEach(element => {
    var p = $("<p>").attr("data-post-id", element.id);
    p.text(element.id);
    body.append(p)

    //});

}

$.ajax({
    url: "https://jsonplaceholder.typicode.com/comments?postId=" + localStorage.getItem("data-post-id")

}).then(function (data) {

    console.log(data);
    render(data);

})



