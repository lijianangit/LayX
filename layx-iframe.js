window.onload = function () {
    window.onclick = function () {
        if (self != top && self.frameElement && self.frameElement.tagName == "IFRAME") {
            var layxContainer = self.frameElement.parentNode.parentElement;
            layxContainer.click();
        }
    }
}