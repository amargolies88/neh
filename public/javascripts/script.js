$(document).ready(function () {
    $(".devour-btn").on("click", function (event) {
        event.preventDefault();
        const id = $(this).val();
        $.ajax({
            method: "PUT",
            url: `/burgers/${id}`
        }).then(data => {
            location.reload();
        });
    });
});
