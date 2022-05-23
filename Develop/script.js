$(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id"); 

    //set items in local storage.
    localStorage.setItem(time, text);
})