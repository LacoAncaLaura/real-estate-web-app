window.Estate = {

    API_URL: "http://localhost:8087",
    getEstates: function () {

        $.ajax({
            method: "GET",
            url: Estate.API_URL + "/estats"
        }).done(function (response) {
            console.log(response);
        })
    }
};
Estate.getEstates();