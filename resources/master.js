function resizeResponsiveElements(){
    var everyElementOnPage,elementBeingChecked,responsiveStyle,parentWidth,parentHeight,parentShort,parentLong
    everyElementOnPage = document.getElementsByTagName('*')
    for (i=0; i < everyElementOnPage.length; i++ ){
        elementBeingChecked = everyElementOnPage[i]
        responsiveStyle = elementBeingChecked.getAttribute('R')
        if(responsiveStyle){
            parentWidth = elementBeingChecked.parentElement.offsetWidth / 100
            parentHeight = elementBeingChecked.parentElement.offsetHeight / 100
            if(parentWidth < parentHeight){parentShort = parentWidth}else{parentShort = parentHeight}
            if(parentWidth > parentHeight){parentLong = parentWidth}else{parentLong = parentHeight}
            responsiveStyle = ';' + responsiveStyle + ';'
            elementBeingChecked.style = elementBeingChecked.style.cssText + responsiveStyle.replaceAll('w(', 'calc(' + parentWidth + 'px*').replaceAll('h(', 'calc(' + parentHeight + 'px*').replaceAll('s(', 'calc(' + parentShort + 'px*').replaceAll('l(', 'calc(' + parentLong + 'px*')
        }
    }
}

function setTranslations(){
    var everyElementOnPange,elementBeingChecked,hasTranslation
    everyElementOnPage = document.getElementsByTagName('*')
    for (i=0; i < everyElementOnPage.length; i++ ){
        elementBeingChecked = everyElementOnPage[i]
        hasTranslation = elementBeingChecked.getAttribute('translateOf')
        if(hasTranslation){
            id(hasTranslation).innerHTML = elementBeingChecked.innerHTML
            elementBeingChecked.innerHTML = ''
            elementBeingChecked.removeAttribute('translateOf')
        }
    }
}

function importHTML(frameId,htmlSource) {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            id(frameId).style.display = 'flex'
            if (this.status == 200) {
                id(frameId).innerHTML += this.responseText;
            }
            if (this.status == 404) {
                id(frameId).innerHTML = "Page not found.";
            }
        }
    };
    xhr.open("GET", htmlSource, true);
    xhr.send();
    return;
}

function importJS(scriptSource) {
    var scriptTag
    scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', scriptSource);
    document.body.appendChild(scriptTag);
}

function getJSONP(url, success) {
    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;
    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };
    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);
}

function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function ifNoApp(msg){
    function clearTimers(){
        clearInterval(heartbeat);
        clearTimeout(timer);
    }

    function intervalHeartbeat(){
        if(document.webkitHidden || document.hidden){
            clearTimers();
        }
    }
    heartbeat = setInterval(intervalHeartbeat, 50);
    var deLay = 1000;
    timer = setTimeout(function() {
        msg()
    }, deLay);
}

function mobileCheck() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function animation(element,animationStyle){
    targetElement = id(element)
    targetElement.style.animation = ''
    void targetElement.offsetWidth;
    targetElement.style.animation = animationStyle
}

function id(elementId){
    return document.getElementById(elementId)
}

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//For browsers that doesn't support replaceAll function
String.prototype.replaceAll = function replaceAlltext(search, replace) { return this.split(search).join(replace); }

function elementFadeIn(elementId) {
    animation(elementId, 'fadeIn .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
    id(elementId).style.display = 'flex'
    resizeResponsiveElements()
}

function elementFadeOut(elementId) {
    animation(elementId, 'fadeIn .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) reverse both')
    setTimeout(function(){
        id(elementId).style.display = 'none'
    },500)
}

elementFadeIOAnimation = `
<style>
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
`
document.head.innerHTML += elementFadeIOAnimation
