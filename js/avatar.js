function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile-image-uploaded').attr('src', e.target.result);
            $('#profile-image-uploaded').addClass("has-image");
            $('#profile-image-mid').attr('src', e.target.result);
            $('#profile-image-mid').addClass("has-image");
            $('#profile-image-mini').attr('src', e.target.result);
            $('#profile-image-mini').addClass("has-image");
        }

        reader.readAsDataURL(input.files[0]);
    }
}
$(function() {
  $("#imgInp").change(function(){
      readURL(this);
  });
  $(document).on('click', '#remove-avatar', function(event) {
    event.preventDefault();
    $('#profile-image-uploaded').removeAttr('src');
    $('#profile-image-uploaded').removeClass("has-image");
    $('#profile-image-mid').removeAttr('src');
    $('#profile-image-mid').removeClass("has-image");
    $('#profile-image-mini').removeAttr('src');
    $('#profile-image-mini').removeClass("has-image");
});
});
