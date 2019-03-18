
function renderJustData() {
    var $div = $("<div>");  // this is how element is created


    var p = $("<p>");
    p.text(title);
    $div.append(p);

    $('body').append($div);
}



var newRequest = $.ajax({
    url: "https://jsonplaceholder.typicode.com/comments?posts/" + localStorage.getItem("id"),
    method: "GET"
}).then(function (data) {



})


