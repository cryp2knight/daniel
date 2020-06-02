 /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
 particlesJS.load('particles-js', 'particles.json', function() {
     console.log('callback - particles.js config loaded');
 });
 var typed = new Typed('#typed', {
     stringsElement: '#typed-strings',
     typeSpeed: 90
 });
 $("#rssLoading").html('<div class="spinner-border"></div>&nbsp;&nbsp;Loading...')
 $("#projectsLoading").html('<div class="spinner-border"></div>&nbsp;&nbsp;Loading...')
 $("#rss").rss("https://medium.com/feed/@decastrodanield", {
     limit: 50,
     layoutTemplate: '{entries}',
     entryTemplate: '<div><h4><a href="{url}">{title}</a></h4><p><small>Updated {date}</small></p><p>{shortBody}...</p>{tags}</div><hr>',
     dateFormatFunction: function(date) {
         return jQuery.timeago(date)
     },
     tokens: {
         tags: function(entry, tokens) {
             temp = "Tags: "
             $.each(entry.categories, function(i, status) {
                 temp += '<span class="badge badge-info">' + status.name + '</span>&nbsp;&nbsp;'
             })
             return temp
         }
     },
     success: function() {
         $("#rssLoading").text('')
     }
 })
 // Create a request variable and assign a new XMLHttpRequest object to it.
 var request = new XMLHttpRequest()
 // Open a new connection, using the GET request on the URL endpoint
 request.open('GET', 'https://api.github.com/users/cryp2knight/repos', true)
 request.onload = function() {
     // Begin accessing JSON data here
     var data = JSON.parse(this.response);
     console.log(data)
     var statusHTML = '';
     $.each(data, function(i, status) {
         statusHTML += '<div>';
         statusHTML += '<a href="' + status.html_url + '"><h4>' + status.name + '</h4></a>';
         statusHTML += '<p>' + status.description + '</p>';
         statusHTML += '<span class="badge badge-success">' + status.language + '</span>';
         statusHTML += '<p><small>Updated ' + jQuery.timeago(status.updated_at) + '</small></p>'
         statusHTML += '</div><hr>';
     });
     $('#projects').html(statusHTML);
     $("#projectsLoading").text('')
 }
 // Send request
 request.send();