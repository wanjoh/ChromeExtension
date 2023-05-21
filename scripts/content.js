var elements = document.querySelectorAll("*[style]");

Array.prototype.forEach.call(elements, function(elem) {
    var overflow = elem.style.overflow || "";
    var filter = elem.style.filter || "";
    if (overflow != "")
        elem.style.overflow = "visible";
    
})

elements = document.querySelectorAll("div, *[class]");

Array.prototype.forEach.call(elements, function(elem) {
    var class_names = elem.className;
        if (class_names.toString().toLowerCase().includes("blocking"))
            elem.remove();
})