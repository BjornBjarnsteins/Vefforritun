$('form').submit(function (e) {
  var form = $(this);

  var name = form.find('input.name').val();
  var email = form.find('input.email').val();
  var address = form.find('input.address').val();
  var gender = $('input[name=gender]:checked', form).val();

  var mailingList = $('#mailing-list').is(':checked');
  var comment = $('.comments').val();

  var result = validate({name:    name,
                         email:   email,
                         address: address,
                         gender:  gender})

  e.preventDefault();
});

function validate(p) {
  var list = $("div.results ul");

  list.empty();

  if (!p.name) {
    $(".name").addClass("invalid");
    $("<li>Vantar nafn</li>").appendTo(list);
  }

  if (!p.email) {
    $(".email").addClass("invalid");
    $("<li>Vantar email</li>").appendTo(list);
  }

  if (!p.address) {
    $(".address").addClass("invalid");
    $("<li>Vantar heimilisfang</li>").appendTo(list);
  }

  var emailRE = /.+@.+\..+/;

  if (!emailRE.exec(p.email)) {
    $("<li>Póstfang skal vera á forminu [address]@[provider].[isp]</li>").appendTo(list);
  }

  var addressRE = /^(\D)+ (\d)+$/;

  if (!addressRE.exec(p.address)) {
    $("<li>Heimilisfang skal vera á forminu [götuheiti] [húsnúmer]</li>").appendTo(list);
  }

  if (!p.gender) {
    $(".genderoption").parent().addClass("invalid");
    $("<li>Vantar kyn</li>").appendTo(list);
  }

  var numberOfErrors = list.children().length;

  if (numberOfErrors === 0) {
    list.removeClass("failure");
    list.addClass("success");
    list.text("Form submitted!");
  } else {
    list.removeClass("success");
    list.addClass("failure");
  }

  list.show();
}

$('textarea').keyup(function (e) {
  var wordCount = $('.wordcount');
  var textArea = $(this);

  var newWordCount = textArea.val().length;
  var outputString = "Hámark 100 stafir. " + (100 - newWordCount) + " eftir.";

  wordCount.text(outputString);
});
