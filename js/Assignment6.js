
// Different Tools
$(".axe").on("click", function changeToAxe() {
    $(".wood").on("click", function removeWood() {
        $(this).removeClass("wood").addClass("sky");
        updateInventory("wood");
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
});


// Inventory
var inventory;

function updateInventory(material) {
    inventory = material;
    if (inventory === "wood") {
        $("#inventory").attr("class", "wood")
    } else if (inventory === "stone") {
        $("#inventory").attr("class", "stone")
    } else if (inventory === "dirt") {
        $("#inventory").attr("class", "dirt")
    }
}

$("#inventory").on("click", function checkMaterial() {
    if ($(this).hasClass("wood")) {
        $(".sky").on("click", function addWood() {
            $(this).addClass("wood").removeClass("sky");
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
    }
})