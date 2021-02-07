const validate = (form, fields) => {
  fields.forEach((field) => {
    field.removeClass("input-error");
    if (field.val().trim() == "") {
      field.addClass("input-error")
    }
  })
  const error = form.find(".input-error");
  return error.length == 0;
}
$('.form').submit(e => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");

  const modal = $("#modal");
  const content = modal.find(".modal__content")

  modal.removeClass("error-modal");

  const isValid = validate(form, [name, phone, comment, to])

  if (isValid){
    const request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val()
      },
      error: (data) =>{},
    })
  

  request.done((data) => {
    content.text(data.message)
    form.each(() =>{
      $(".form__input").val("")
    });
  })

  request.fail((data) => {
    content.text(data.responseJSON.message)
    modal.addClass("error-modal")
  })

  request.always(() => {
    $.fancybox.open({
      src: "#modal",
      type: "inline"
    })
  })
}
});


$(".js-submit-btn").click(e => {
  e.preventDefault();

  $.fancybox.close()
})