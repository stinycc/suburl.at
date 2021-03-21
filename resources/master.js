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
    var xhr = new XMLHttpRequest();
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
    var scriptTag = document.createElement('script');
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
    var regex, results
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function appCheck(scheme,delay){
    return new Promise(function(resolve, reject) {
        location.href = scheme
        heartbeat = setInterval(function intervalHeartbeat(){
            if(document.webkitHidden || document.hidden){
                clearTimers();
                resolve(true)
            }
        }, 50);
        timer = setTimeout(function() {
            resolve(false)
        }, delay);
        function clearTimers(){
            clearInterval(heartbeat);
            clearTimeout(timer);
        }
    })
}

function mobileCheck() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function animation(element,animationStyle){
    for(i in window.getComputedStyle(id(element))){
        id(element).style = id(element).style.cssText +';' + i + ':' + window.getComputedStyle(id(element))[i]
    }
    id(element).style.animation = ''
    void id(element).offsetWidth;
    id(element).style.animation = animationStyle
}

function id(elementId){
    return document.getElementById(elementId)
}

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//.offset('style')
HTMLElement.prototype.offset = function offsetFunction(style){ return window.getComputedStyle(this).getPropertyValue(style)}

//For browsers that doesn't support replaceAll function
String.prototype.replaceAll = function replaceAllFunction(search, replace) { return this.split(search).join(replace); }

opacityFadeIn = []
function elementFadeIn(elementId, time) {
    if(opacityFadeIn.indexOf(elementId) == -1){
        id(elementId).style.opacity = 0
    }
    if(time){
        animation(elementId, 'fadeIn ' + time/1000 + 's cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
    }else{
        animation(elementId, 'fadeIn .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
    }
    id(elementId).style.display = 'flex'
    resizeResponsiveElements()
}

cancelFadeOut = []
function elementFadeOut(elementId, time) {
    if(time){
        animation(elementId, 'fadeOut ' + time/1000 + 's cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
        setTimeout(function(){
            if(cancelFadeOut.indexOf(elementId) == -1){
                id(elementId).style.display = 'none'
            }else{
                cancelFadeOut.splice(cancelFadeOut.indexOf(elementId),1)
            }
        },time)
    }else{
        animation(elementId, 'fadeOut .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
        setTimeout(function(){
            if(cancelFadeOut.indexOf(elementId) == -1){
                id(elementId).style.display = 'none'
            }else{
                cancelFadeOut.splice(cancelFadeOut.indexOf(elementId),1)
            }
        },500)
    }
}

function cancelFadeIn(elementId){
    animation(elementId, 'fadeOut 0s both')
    id(elementId).style.display = 'none'
}
function cancelFadeOut(elementId){
    cancelFadeOut.push(elementId)
    animation(elementId, 'fadeIn 0s both')
    id(elementId).style.display = 'flex'
}

elementFadeIOAnimation = `
<style>
  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    100% {
      opacity: 0;
    }
  }
</style>
`
document.head.innerHTML += elementFadeIOAnimation
