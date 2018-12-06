
document.addEventListener("DOMContentLoaded", function(event) {
    var beforeAfterList = document.querySelectorAll('.ba-wrap')

    beforeAfterList.forEach(function(item) {
        new BeforeAfter(item);
    })

});