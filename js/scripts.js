function showMap() {
    document.getElementById("modal-map").style.display = "block";
    document.getElementById("modal-overlay").style.display = "block";
}

function hideMap() {
    document.getElementById("modal-map").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
}

function showWriteUs() {
    document.getElementById("modal-writeus").style.display = "block";
    document.getElementById("modal-overlay").style.display = "block";
}

function hideWriteUs() {
    document.getElementById("modal-writeus").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
}

function hideAllModal() {
    hideWriteUs();
    hideMap();
}

document.getElementById("modal-map-image").style.display = "none";
