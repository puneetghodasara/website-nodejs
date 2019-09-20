$(window).on('load', function () {
    var baseUrl = window.location.protocol + "//" + window.location.host;

    // This needs to always point ENTRY location
    $("#navbar-home-only-home-link").attr("href", "https://www.puneetghodasara.com/");
    // This refers to HomePage of single cloud hosting or actual homepage
    // $("#navbar-home-link").attr("href",baseUrl);
    $("#navbar-home-link").attr("href", "https://www.puneetghodasara.com/");

    // Relative Navbar values
    $("#navbar-stories").attr("href", "/story");
    $("#navbar-contact").attr("href", "#");

    // Hardcoded redirection from Entry location
    $("#selection-aws").attr("href", "https://aws.puneetghodasara.com");
    $("#selection-gcp").attr("href", "https://gcp.puneetghodasara.com");
    $("#selection-azure").attr("href", "#");

    $("#breadcrumb-aws").attr("href", "https://aws.puneetghodasara.com");
    $("#breadcrumb-gcp").attr("href", "https://gcp.puneetghodasara.com");
    $("#breadcrumb-azure").attr("href", "#");
    $("#breadcrumb-default").attr("href", baseUrl);

    // Redirection from Home-Section
    $("#home-section-writing").attr("href", "/story");
    $("#home-section-website").attr("href", "/info");

    $("#social-footer-facebook").attr("href", "https://www.facebook.com/punitghodasara");
    $("#social-footer-twitter").attr("href", "https://twitter.com/puneetghodasara");
    $("#social-footer-github").attr("href", "https://github.com/puneetghodasara/");
    $("#social-footer-linkedin").attr("href", "https://www.linkedin.com/in/punitghodasara/");
    //$("#social-footer-skype").attr("href", "#");

});
