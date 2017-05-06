/*function getNewQuote() {
  var URLEndpoint = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

  $.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(data) {
    alert(JSON.strigify(data));
    var response = JSON.stringify(data);
    var quotes = response.shift();
    $('#quoteText').html(quotes.content);
    $('#quoteAuthor').text('-' + quotes.title);
   }
    .error(function(xhr) {
      alert(xhr);
   })
 );
}

$(document).ready(function() {
    $('#btnNewQuote').on('click', getNewQuote);
});*/

/*-----------------------*/

$(document).ready(function() {
  $('#btnNewQuote').on('click', getQuote);
  getQuote();
});

//$('#btnNewQuote').on('click', function(e) {
    //e.preventDefault();
function getQuote() {
    $.ajaxSetup({
      global:false,
      type: "GET",
      beforeSend: function() {
        $(".modal").show();
      },
      complete: function() {
        $(".modal").hide();
      }
    });
  
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quoteText').html(post.content);
        $('#quoteAuthor').text('-' + post.title);
       

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  }
