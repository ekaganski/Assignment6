
// $(".sky").on("click", function something(){
//     // $("#axe").removeClass("changeToolColor");
//     alert("something");
// })

// Different Tools
$(".axe").on("click", function () {
    $(".axe").addClass("changeToolColor");
    $(".newDiv:not(.wood,.trunk)").addClass("noClick");
    $(".wood").removeClass("noClick");
    $(".trunk").removeClass("noClick");
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
    $(".shovel").removeClass("changeToolColor");
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
    assignClass();
}
function assignClass() {
    assign(0, 3, 0, 31, "sky");
    assign(3, 5, 0, 10, "sky");
    assign(3, 5, 10, 12, "sun");
    assign(3, 5, 12, 31, "sky");
    assign(5, 6, 0, 31, "sky");
    assign(6, 7, 0, 6, "sky");
    assign(6, 7, 6, 8, "cloud");
    assign(6, 7, 8, 31, "sky");
    assign(7, 8, 0, 4, "sky");
    assign(7, 8, 4, 9, "cloud");
    assign(7, 8, 9, 31, "sky");
    assign(8, 9, 0, 4, "sky");
    assign(8, 9, 4, 10, "cloud");
    assign(8, 9, 10, 31, "sky");
    assign(9, 10, 0, 6, "sky");
    assign(9, 10, 6, 9, "cloud");
    assign(9, 10, 9, 23, "sky");
    assign(9, 10, 23, 24, "wood");
    assign(9, 10, 24, 31, "sky");
    assign(10, 11, 0, 22, "sky");
    assign(10, 11, 22, 25, "wood");
    assign(10, 11, 25, 31, "sky");
    assign(11, 12, 0, 21, "sky");
    assign(11, 12, 21, 26, "wood");
    assign(11, 12, 26, 31, "sky");
    assign(12, 13, 0, 1, "sky");
    assign(12, 13, 1, 2, "wood");
    assign(12, 13, 2, 21, "sky");
    assign(12, 13, 21, 26, "wood");
    assign(12, 13, 26, 31, "sky");
    assign(13, 14, 0, 3, "wood");
    assign(13, 14, 3, 19, "sky");
    assign(13, 14, 19, 20, "wood");
    assign(13, 14, 20, 21, "sky");
    assign(13, 14, 21, 26, "wood");
    assign(13, 14, 26, 31, "sky");
    assign(14, 15, 0, 4, "wood");
    assign(14, 15, 4, 18, "sky");
    assign(14, 15, 18, 21, "wood");
    assign(14, 15, 21, 22, "sky");
    assign(14, 15, 22, 25, "wood");
    assign(14, 15, 25, 31, "sky");
    assign(15, 16, 0, 4, "wood");
    assign(15, 16, 4, 17, "sky");
    assign(15, 16, 17, 25, "wood");
    assign(15, 16, 25, 31, "sky");
    assign(16, 17, 0, 3, "wood");
    assign(16, 17, 3, 17, "sky");
    assign(16, 17, 17, 22, "wood");
    assign(16, 17, 22, 23, "sky");
    assign(16, 17, 23, 24, "trunk");
    assign(16, 17, 24, 31, "sky");
    assign(17, 18, 0, 1, "sky");
    assign(17, 18, 1, 2, "trunk");
    assign(17, 18, 2, 4, "sky");
    assign(17, 18, 4, 6, "stone");
    assign(17, 18, 6, 18, "sky");
    assign(17, 18, 18, 21, "wood");
    assign(17, 18, 21, 23, "sky");
    assign(17, 18, 23, 24, "trunk");
    assign(17, 18, 24, 31, "sky");
    assign(18, 19, 0, 1, "sky");
    assign(18, 19, 1, 2, "trunk");
    assign(18, 19, 2, 3, "sky");
    assign(18, 19, 3, 7, "stone");
    assign(18, 19, 7, 19, "sky");
    assign(18, 19, 19, 20, "trunk");
    assign(18, 19, 20, 23, "sky");
    assign(18, 19, 23, 24, "trunk");
    assign(18, 19, 24, 31, "sky");
    assign(19, 20, 24, 31, "sky");
    assign(19, 20, 0, 1, "sky");
    assign(19, 20, 1, 2, "trunk");
    assign(19, 20, 2, 8, "stone");
    assign(19, 20, 8, 19, "sky");
    assign(19, 20, 19, 20, "trunk");
    assign(19, 20, 20, 23, "sky");
    assign(19, 20, 23, 24, "trunk");
    assign(19, 20, 24, 31, "sky");
    assign(20, 21, 0, 1, "sky");
    assign(20, 21, 1, 2, "trunk");
    assign(20, 21, 2, 9, "stone");
    assign(20, 21, 9, 11, "sky");
    assign(20, 21, 11, 13, "stone");
    assign(20, 21, 13, 19, "sky");
    assign(20, 21, 19, 20, "trunk");
    assign(20, 21, 20, 23, "sky");
    assign(20, 21, 23, 24, "trunk");
    assign(20, 21, 24, 28, "sky");
    assign(20, 21, 28, 29, "stone");
    assign(20, 21, 29, 31, "sky");
    assign(21, 22, 0, 1, "sky");
    assign(21, 22, 1, 2, "trunk");
    assign(21, 22, 2, 10, "stone");
    assign(21, 22, 10, 11, "sky");
    assign(21, 22, 11, 14, "stone");
    assign(21, 22, 14, 19, "sky");
    assign(21, 22, 19, 20, "trunk");
    assign(21, 22, 20, 23, "sky");
    assign(21, 22, 23, 24, "trunk");
    assign(21, 22, 24, 27, "sky");
    assign(21, 22, 27, 29, "stone");
    assign(21, 22, 29, 31, "sky");
    assign(22, 23, 0, 31, "dirt-with-grass");
    assign(23, 31, 0, 31, "dirt");
}
function assign(startRow, finishRow, startColumn, finishColumn, classToAdd) {
    for (var j = startRow; j < finishRow; j++) {
        for (var i = startColumn; i < finishColumn; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass(`${classToAdd}`);
        }
    }
}

// modal
$(document).ready(function () {
    $("#myModal").modal("show");
})

//new game
$("#new-game").on("click", function refresh() {
    window.location.reload();
});

// instructions
$("#instructions").on("click", function modal() {
    $("#myModal").modal("show");
});

