$( document ).ready(function() {
    var baseUrl = window.location.protocol + "//" + window.location.host;

    // This needs to always point ENTRY location
    $("#navbar-home-only-home-link").attr("href","http://www.puneetghodasara.com/");
    // This refers to HomePage of single cloud hosting
    $("#navbar-home-link").attr("href",baseUrl);

    // Relative Navbar values
    $("#navbar-stories").attr("href","/story");
    $("#navbar-contact").attr("href","#");

    // Hardcoded redirection from Entry location
    $("#selection-aws").attr("href","http://aws.puneetghodasara.com");
    $("#selection-gcp").attr("href","http://gcp.puneetghodasara.com");
    $("#selection-azure").attr("href","#");
});