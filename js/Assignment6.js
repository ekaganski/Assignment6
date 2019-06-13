
// Different Tools
$(".axe").on("click", function changeToAxe() {
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
    $(".stone").on("click", function removeStone() {
        $(this).removeClass("stone").addClass("sky");
        updateInventory("stone");
    })
});

$(".shovel").on("click", function changeToShovel() {
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

// function assignClass(startRow, finishRow, startColumnWithRow, startColumn, finishColumn, classToAdd) {

//     var startRow = 0;
//     var startColumnWithRow = 0;
//     var finishRow = 3;

//     var startColumn = 0;
//     var finishColumn = 31;
//     var classToAdd = "sky";


//     /* paints column from startRow till finishRow */
//     for (startRow; startRow < finishRow; startRow++) {
//         var point = $(`[row=${startRow}][column=${startColumnWithRow}]`);
//         point.addClass(`${classToAdd}`);
//     }

//     /* paints row from startColumn till finishColumn */
//     for (startColumn; startColumn < finishColumn; startColumn++) {
//         var point = $(`[row=${startRow}][column=${startColumn}]`);
//         point.addClass(`${classToAdd}`);
//     }


// }

// // assignClass (0, 3, 0, 0, 31, "sky");




function assignClass() {
    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 3; j < 5; j++) {
        for (var i = 0; i < 10; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 3; j < 5; j++) {
        for (var i = 10; i < 12; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sun");
        }
    }
    for (var j = 3; j < 5; j++) {
        for (var i = 12; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 5; j < 6; j++) {
        for (var i = 0; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 6; j < 7; j++) {
        for (var i = 0; i < 6; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 6; j < 7; j++) {
        for (var i = 6; i < 8; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("cloud");
        }
    }
    for (var j = 6; j < 7; j++) {
        for (var i = 8; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 7; j < 8; j++) {
        for (var i = 0; i < 4; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 7; j < 8; j++) {
        for (var i = 4; i < 9; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("cloud");
        }
    }
    for (var j = 7; j < 8; j++) {
        for (var i = 9; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 8; j < 9; j++) {
        for (var i = 0; i < 4; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 8; j < 9; j++) {
        for (var i = 4; i < 10; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("cloud");
        }
    }
    for (var j = 8; j < 9; j++) {
        for (var i = 10; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 9; j < 10; j++) {
        for (var i = 0; i < 6; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 9; j < 10; j++) {
        for (var i = 6; i < 9; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("cloud");
        }
    }
    for (var j = 9; j < 10; j++) {
        for (var i = 9; i < 23; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 9; j < 10; j++) {
        for (var i = 23; i < 24; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 9; j < 10; j++) {
        for (var i = 24; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 10; j < 11; j++) {
        for (var i = 0; i < 22; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 10; j < 11; j++) {
        for (var i = 22; i < 25; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 10; j < 11; j++) {
        for (var i = 25; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 11; j < 12; j++) {
        for (var i = 0; i < 21; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 11; j < 12; j++) {
        for (var i = 21; i < 26; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 11; j < 12; j++) {
        for (var i = 26; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 12; j < 13; j++) {
        for (var i = 0; i < 1; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 12; j < 13; j++) {
        for (var i = 1; i < 2; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 12; j < 13; j++) {
        for (var i = 2; i < 21; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 12; j < 13; j++) {
        for (var i = 21; i < 26; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 12; j < 13; j++) {
        for (var i = 26; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 13; j < 14; j++) {
        for (var i = 0; i < 3; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 13; j < 14; j++) {
        for (var i = 3; i < 20; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 13; j < 14; j++) {
        for (var i = 19; i < 20; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 13; j < 14; j++) {
        for (var i = 20; i < 21; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 13; j < 14; j++) {
        for (var i = 21; i < 26; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 13; j < 14; j++) {
        for (var i = 26; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 14; j < 15; j++) {
        for (var i = 0; i < 4; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 14; j < 15; j++) {
        for (var i = 4; i < 18; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 14; j < 15; j++) {
        for (var i = 18; i < 21; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 14; j < 15; j++) {
        for (var i = 21; i < 22; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 14; j < 15; j++) {
        for (var i = 22; i < 25; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 14; j < 15; j++) {
        for (var i = 25; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 15; j < 16; j++) {
        for (var i = 0; i < 4; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 15; j < 16; j++) {
        for (var i = 4; i < 17; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 15; j < 16; j++) {
        for (var i = 17; i < 25; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 15; j < 16; j++) {
        for (var i = 25; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 16; j < 17; j++) {
        for (var i = 0; i < 3; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 16; j < 17; j++) {
        for (var i = 3; i < 17; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 16; j < 17; j++) {
        for (var i = 17; i < 22; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 16; j < 17; j++) {
        for (var i = 22; i < 23; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 16; j < 17; j++) {
        for (var i = 23; i < 24; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 16; j < 17; j++) {
        for (var i = 24; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    
    for (var j = 17; j < 18; j++) {
        for (var i = 0; i < 1; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 17; j < 18; j++) {
        for (var i = 1; i < 2; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 17; j < 18; j++) {
        for (var i = 2; i < 4; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 17; j < 18; j++) {
        for (var i = 4; i < 6; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("stone");
        }
    }
    for (var j = 17; j < 18; j++) {
        for (var i = 6; i < 18; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 17; j < 18; j++) {
        for (var i = 18; i < 21; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("wood");
        }
    }
    for (var j = 17; j < 18; j++) {
        for (var i = 21; i < 23; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 17; j < 18; j++) {
        for (var i = 23; i < 24; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 17; j < 18; j++) {
        for (var i = 24; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 18; j < 19; j++) {
        for (var i = 0; i < 1; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 18; j < 19; j++) {
        for (var i = 1; i < 2; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 18; j < 19; j++) {
        for (var i = 2; i < 3; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 18; j < 19; j++) {
        for (var i = 3; i < 7; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("stone");
        }
    }
    for (var j = 18; j < 19; j++) {
        for (var i = 7; i < 19; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 18; j < 19; j++) {
        for (var i = 19; i < 20; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 18; j < 19; j++) {
        for (var i = 20; i < 23; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 18; j < 19; j++) {
        for (var i = 23; i < 24; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 18; j < 19; j++) {
        for (var i = 24; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 19; j < 20; j++) {
        for (var i = 0; i < 1; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 19; j < 20; j++) {
        for (var i = 1; i < 2; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 19; j < 20; j++) {
        for (var i = 2; i < 8; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("stone");
        }
    }
    for (var j = 19; j < 20; j++) {
        for (var i = 8; i < 19; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 19; j < 20; j++) {
        for (var i = 19; i < 20; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 19; j < 20; j++) {
        for (var i = 20; i < 23; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 19; j < 20; j++) {
        for (var i = 23; i < 24; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 19; j < 20; j++) {
        for (var i = 24; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 0; i < 1; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 1; i < 2; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 2; i < 9; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("stone");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 9; i < 11; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 11; i < 13; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("stone");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 13; i < 19; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 19; i < 20; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 21; i < 23; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 23; i < 24; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 24; i < 28; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 28; i < 29; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("stone");
        }
    }
    for (var j = 20; j < 21; j++) {
        for (var i = 29; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 0; i < 1; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 1; i < 2; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 2; i < 10; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("stone");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 10; i < 11; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 11; i < 14; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("stone");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 13; i < 19; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 19; i < 20; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 21; i < 23; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 23; i < 24; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("trunk");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 24; i < 27; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 27; i < 29; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("stone");
        }
    }
    for (var j = 21; j < 22; j++) {
        for (var i = 29; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("sky");
        }
    }
    for (var j = 22; j < 23; j++) {
        for (var i = 0; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("dirt-with-grass");
        }
    }
    for (var j = 23; j < 31; j++) {
        for (var i = 0; i < 31; i++) {
            var point = $(`[row=${j}][column=${i}]`);
            point.addClass("dirt");
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
