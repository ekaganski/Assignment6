
// Different Tools
$(".axe").on("click", function changeToAxe() {
    $(".axe").addClass("changeToolColor");
    $(".pickaxe").removeClass("changeToolColor");
    $(".shovel").removeClass("changeToolColor");
    $(".wood").on("click", function removeWood() {
        $(this).removeClass("wood").addClass("sky");
        updateInventory("wood");
    })
    $(".trunk").on("click", function removeTrunk() {
        $(this).removeClass("trunk").addClass("sky");
        updateInventory("trunk");
    })
    $(".stone").on("click", function () {
        $(".axe").removeClass("changeToolColor");
    })
});

$(".pickaxe").on("click", function changeToPickaxe() {
    $(".pickaxe").addClass("changeToolColor");
    $(".axe").removeClass("changeToolColor");
    $(".shovel").removeClass("changeToolColor");
    $(".stone").on("click", function removeStone() {
        $(this).removeClass("stone").addClass("sky");
        updateInventory("stone");
    })
});

$(".shovel").on("click", function changeToShovel() {
    $(".shovel").addClass("changeToolColor");
    $(".axe").removeClass("changeToolColor");
    $(".pickaxe").removeClass("changeToolColor");
    $(".dirt").on("click", function removeDirt() {
        $(this).removeClass("dirt").addClass("sky");
        updateInventory("dirt");
    })
    $(".dirt-with-grass").on("click", function removeDirtWithGrass() {
        $(this).removeClass("dirt-with-grass").addClass("sky");
        updateInventory("dirt-with-grass");
    })
});


// Inventory
var inventory;

function updateInventory(material) {
    inventory = material;
    if (inventory === "wood") {
        $("#inventory").attr("class", "wood")
    } else if (inventory === "trunk") {
        $("#inventory").attr("class", "trunk")
    } else if (inventory === "stone") {
        $("#inventory").attr("class", "stone")
    } else if (inventory === "dirt") {
        $("#inventory").attr("class", "dirt")
    } else if (inventory === "dirt-with-grass") {
        $("#inventory").attr("class", "dirt-with-grass")
    }
}

$("#inventory").on("click", function checkMaterial() {
    if ($(this).hasClass("wood")) {
        $(".sky").on("click", function addWood() {
            $(this).addClass("wood").removeClass("sky");
            $("#inventory").attr("class", "");
            $(".sky").off("click");
        })
    } else if ($(this).hasClass("trunk")) {
        $(".sky").on("click", function addTrunk() {
            $(this).addClass("trunk").removeClass("sky");
            $("#inventory").attr("class", "");
            $(".sky").off("click");
        })
    } else if ($(this).hasClass("stone")) {
        $(".sky").on("click", function addStone() {
            $(this).addClass("stone").removeClass("sky");
            $("#inventory").attr("class", "");
            $(".sky").off("click");
        })
    } else if ($(this).hasClass("dirt")) {
        $(".sky").on("click", function addDirt() {
            $(this).addClass("dirt").removeClass("sky");
            $("#inventory").attr("class", "");
            $(".sky").off("click");
        })
    } else if ($(this).hasClass("dirt-with-grass")) {
        $(".sky").on("click", function addDirtWithGrass() {
            $(this).addClass("dirt-with-grass").removeClass("sky");
            $("#inventory").attr("class", "");
            $(".sky").off("click");
        })
    }
})

// board
$(document).ready(makeBricks);

function makeBricks() {
    for (var j = 0; j < 31; j++) {
        var row = [];

        for (var i = 0; i < 31; i++) {
            var newDiv = $("<div/>");
            newDiv.attr("class", "newDiv");
            newDiv.attr("column", `${i}`).attr("row", `${j}`);
            row.push(newDiv);
        }
        $("#boardArray").append(row);
    }
}

// modal
$(document).ready(function () {
    $("#myModal").modal("show");
})