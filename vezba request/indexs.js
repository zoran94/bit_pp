

var body = $("body");

function render(arr){
    arr.forEach(element => {
        var p = $("<p>");
        p.text(element.body);
        body.append(p)
        console.log(element.name)
    });
    
}

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/comments?postId/" + localStorage.getItem("data-post-id")
        
    }).then(function (data) {
        
     render(data);
      
    })
    


