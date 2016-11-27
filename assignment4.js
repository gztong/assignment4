// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
    var data = [];
    $.ajax({
      url: "http://www.mattbowytz.com/simple_api.json?data=all",
      type: "GET"
    }).done(function(ret){
      for(item in ret.data.programming) data.push(ret.data.programming[item].toLowerCase()); 
      for(item in ret.data.interests) data.push(ret.data.interests[item].toLowerCase());
    });

    console.log(data);
   $(".flexsearch-input").keyup(function(event){
     var input = $(".flexsearch-input").val() || "";
     input = input.toLowerCase();
     if(input === ""){
      $("#dropdown-list").html("");
    }else{
      $("#dropdown-list").html( match(input) );
    }
     
   });


   function match(input){
    var ret = "";
    for(item in data){
      if( data[item].substring(0, input.length) === input ) {
        ret += ( "<li><a href='http://www.google.com/search?q="+data[item]+"'>" + data[item] + "</a></li>" );
      }
    }
    return ret;
   }


})();


