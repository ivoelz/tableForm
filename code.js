$(document).ready(function () {

    function tableForm() {
        var rowOne;
        var rowOnePrice = $("#learn-jquery-qty").data("price");
        var rowTwo;
        var rowTwoPrice = $("#jquery-donation-qty").data("price");
        var total;

        $("#learn-jquery-qty").change(textboxOne);
        $("#jquery-donation-qty").change(textboxTwo);

        function textboxOne() {
            rowOnePrice = $("#learn-jquery-qty").val();
            $("#learnTotal").text(rowOne + rowOnePrice).toFixed(2);
        }

        function textboxTwo() {
            rowTwoPrice = $("#jquery-donation-qty").val();
            $("#donTotal").text(rowTwo + rowTwoPrice).toFixed(2);
        }

        $("#grandTotal").show(total);
    }
});