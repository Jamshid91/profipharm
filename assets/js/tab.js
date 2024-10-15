$(document).ready(function() {
    $('.tab-item').hide();
    $('.tab-item:first-child').show();
    $('.tab-btn').click(function() {
      let pageInfo = $(this).attr('data-tab');
      $('.tab-item').hide();
      $('.' + pageInfo).show();
    })
});