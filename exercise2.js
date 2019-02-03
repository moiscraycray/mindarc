$(document).ready(function() {
  $("div.b-accordian-section__content-container:not(:first)").hide();

  function hideSection() {
    var section = $(".b-accordian-section__content-container");
    var isVisible = section.is(":visible");
    if (isVisible) {
      section.slideUp('fast');
    }
  };

  $(".b-accordian-section").on("click", function() {
    hideSection();
    $(this).find(".b-accordian-section__content-container").slideToggle('fast');
  });
});
