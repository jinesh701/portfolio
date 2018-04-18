function showHomePage() {
  $('.home-page').click(event => {
    event.preventDefault();
    $('.about-me-section').hide();
    $('.projects-section').hide();
    $('.home-link').addClass('current-page');
    $('.projects-link').removeClass('current-page');
    $('.about-link').removeClass('current-page');
    $('.home-page-section').fadeIn('slow');
  });
}

function showAboutMe() {
  $('.about').click(event => {
    event.preventDefault();
    $('.home-page-section').hide();
    $('.projects-section').hide();
    $('.about-link').addClass('current-page');
    $('.home-link').removeClass('current-page');
    $('.projects-link').removeClass('current-page');
    $('.about-me-section').fadeIn('slow');
  });
}

function showProjects() {
  $('.projects').click(event => {
    event.preventDefault();
    $('.home-page-section').hide();
    $('.about-me-section').hide();
    $('.projects-link').addClass('current-page');
    $('.about-link').removeClass('current-page');
    $('.home-link').removeClass('current-page');
    $('.projects-section').fadeIn('slow');
  });
}

$(document).ready(() => {
  showHomePage();
  showAboutMe();
  showProjects();
});
