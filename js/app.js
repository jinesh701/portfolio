function showHomePage() {
  $('.home-page').click(event => {
    event.preventDefault();
    $('.about-me-section').hide();
    $('.projects-section').hide();
    $('.home-page-section').fadeIn('slow');
  });
}

function showAboutMe() {
  $('.about').click(() => {
    event.preventDefault();
    $('.home-page-section').hide();
    $('.projects-section').hide();
    $('.about-me-section').fadeIn('slow');
  });
}

function showProjects() {
  $('.projects').click(() => {
    event.preventDefault();
    $('.home-page-section').hide();
    $('.about-me-section').hide();
    $('.projects-section').fadeIn('slow');
  });
}

$(document).ready(() => {
  showHomePage();
  showAboutMe();
  showProjects();
});
