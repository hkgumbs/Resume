document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName("textarea")[0].select();
    document.execCommand("Copy");
});
