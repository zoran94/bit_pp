
function renderData(arr) {
    var $div = $("<div>");  // this is how element is created

    arr.forEach(post => {
        var $p = $('<p>')
            .text(post.title)
            .attr("data-post-id", post.id)
            .on("click", saveData);

        $div.append($p);
    });

    $('body').append($div);
}

var request = $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
}).then(renderData)

function saveData(e) {
    localStorage.setItem("data-post-id", this.id);
    location.href = "./index2.html"
};













