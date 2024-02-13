//your JS code here. If required.
  document.getElementById("btn").addEventListener("click", function () {
        var selectElement = document.getElementById("colorSelect");
        var selectedIndex = selectElement.selectedIndex;

        if (selectedIndex !== -1) {
            selectElement.remove(selectedIndex);
        }
    });