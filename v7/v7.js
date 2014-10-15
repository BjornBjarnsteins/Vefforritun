$('form').submit(function (e) {
    console.log('button pressed');
    var form = $(this);

    var searchTerms = form.find('input.search').val();

    $.ajax({
      'url': 'http://apis.is/company',
      'type': 'GET',
      'dataType': 'json',
      'data': {'name': searchTerms},
      'success': function(response) {
          postResults(response.results);
      },
      'error': function(request, status, error) {
          postError(error);
      }
    });

    return false;
});

function postResults(results) {
    var list = $('ul.results');
    list.empty();

    if (results.length === 0) {
        list.text("Engar niðurstöður fundust");
    } else {
        for (var i = 0; i < results.length; i++) {
            var li = $('<li></li>');
            $('<p></p>').text(results[i].name)
                        .addClass('name')
                        .appendTo(li);
            $('<p></p>').text(results[i].address)
                        .addClass('address')
                        .appendTo(li);
            li.appendTo(list);
        }
    }
}

function postError(error) {
    var list = $('ul.results');
    list.empty();

    list.text("Villa kom upp " + error);
}
