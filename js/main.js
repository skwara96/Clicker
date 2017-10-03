$(document).ready(function () {
    var licznik = 0;
    var mnoznik = 1;
    $("li").click(function () {
        mnoznik = $(this).val()
    })
    $(".cookie").click(function () {
        licznik = licznik + 1 * mnoznik;
        $(".count").text(licznik);
    });
});