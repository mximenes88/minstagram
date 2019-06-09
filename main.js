function addEvent(){
$(".hide").on("click",function(e){
    $(this).closest('.post').fadeOut(1000);
  });
 
$(".like").on("click",function(e){
    $(this).toggleClass('heartFade');
});

$(".mode").on('click',function(e){
  $('body').toggleClass('changeMode');
});
};


function createPost(element){
  return $.parseHTML(element)

}

function prependPost(element){
 $("#post-container").prepend($(element).fadeIn(1000));
 addEvent();
}

let newPost = createPost(postData[0]);

setTimeout(function() {
 prependPost(newPost);
}, 2000);





/*
Make a function called createPost that takes in HTML as a string and returns a jQuery element
○
Make a function called prependPost that takes in a jQuery element and puts it at the top of the main post
 container
○
Use these functions and the post data to make a new post appear after 2 seconds
○
Make the new post fade in or slide down (stretch)
○
Add

*/