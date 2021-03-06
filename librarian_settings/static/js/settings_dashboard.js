// Generated by CoffeeScript 1.10.0
(function(window, $, templates) {
  var errorMessage, form, removeMessage, submitData, successMessage, url, win;
  form = $('#settings-form');
  url = form.attr('action');
  errorMessage = templates.settingsSaveError;
  successMessage = templates.settingsSaveOK;
  win = $(window);
  removeMessage = function() {
    return (form.find('.o-form-message')).slideUp(function() {
      return ($(this)).remove();
    });
  };
  submitData = function(data) {
    var res;
    res = $.post(url, data);
    res.done(function(data) {
      form.html(data);
      form.prepend(successMessage);
      (form.parents('.o-collapsible-section')).trigger('remax');
      win.trigger('settings-saved');
      return setTimeout(removeMessage, 5000);
    });
    return res.fail(function() {
      return form.prepend(errorMessage);
    });
  };
  return form.on('submit', function(e) {
    var data;
    e.preventDefault();
    data = form.serialize();
    return submitData(data);
  });
})(this, this.jQuery, this.templates);
