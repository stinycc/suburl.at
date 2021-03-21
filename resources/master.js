function resizeResponsiveElements(){
    var everyElementOnPage,elementBeingChecked,responsiveStyle,parentWidth,parentHeight,parentShort,parentLong,viewportWidth,viewportHeight
    everyElementOnPage = document.getElementsByTagName('*')
    for (i=0; i < everyElementOnPage.length; i++ ){
        elementBeingChecked = everyElementOnPage[i]
        responsiveStyle = elementBeingChecked.getAttribute('R')
        if(responsiveStyle){
            parentWidth = elementBeingChecked.parentElement.offsetWidth / 100
            parentHeight = elementBeingChecked.parentElement.offsetHeight / 100
            if(parentWidth < parentHeight){parentShort = parentWidth}else{parentShort = parentHeight}
            if(parentWidth > parentHeight){parentLong = parentWidth}else{parentLong = parentHeight}
            viewportWidth = document.documentElement.offsetWidth / 100
            viewportHeight = document.documentElement.offsetHeight / 100
            responsiveStyle = ';' + responsiveStyle + ';'
            elementBeingChecked.style = elementBeingChecked.style.cssText + responsiveStyle.replaceAll('vw(', 'calc(' + viewportWidth + 'px*').replaceAll('vh(', 'calc(' + viewportHeight + 'px*').replaceAll('w(', 'calc(' + parentWidth + 'px*').replaceAll('h(', 'calc(' + parentHeight + 'px*').replaceAll('s(', 'calc(' + parentShort + 'px*').replaceAll('l(', 'calc(' + parentLong + 'px*')
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

function animation(element,animationStyle,styleList){
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

//function for ".offset('style')"
HTMLElement.prototype.offset = function offsetFunction(style){ return window.getComputedStyle(this).getPropertyValue(style)}

//For browsers that doesn't support replaceAll function
String.prototype.replaceAll = function replaceAllFunction(search, replace) { return this.split(search).join(replace); }

opacityFadeIn = []
cancelList = []
function elementFadeIn(elementId, time, state) {
    if(time == 'reset'){
        time = 0
        state = 'reset'
    }
    if(opacityFadeIn.indexOf(elementId) == -1){
        opacityFadeIn.push(elementId)
        id(elementId).style.opacity = 0
    }else if(state == 'reset'){
        id(elementId).style.opacity = 0
    }else{
        id(elementId).style.opacity = id(elementId).offset('opacity')
    }
    if(cancelList.indexOf(elementId) == -1){
        cancelList.push(elementId)
    }
    if(time){
        animation(elementId, 'fadeIn ' + time/1000 + 's cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
    }else{
        animation(elementId, 'fadeIn .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
    }
    id(elementId).style.display = 'flex'
    resizeResponsiveElements()
}

function elementFadeOut(elementId, time, state) {
    if(time == 'reset'){
        time = 0
        state = 'reset'
    }
    if(state == 'reset'){
        id(elementId).style.opacity = 1
    }else{
        id(elementId).style.opacity = id(elementId).offset('opacity')
    }
    try{cancelList.splice(cancelList.indexOf(elementId),1)}catch{}
    if(time){
        animation(elementId, 'fadeOut ' + time/1000 + 's cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
        setTimeout(function(){
            if(cancelList.indexOf(elementId) == -1){
                id(elementId).style.display = 'none'
                id(elementId).style.opacity = 0
            }else{
                cancelList.splice(cancelList.indexOf(elementId),1)
            }
        },time)
    }else{
        animation(elementId, 'fadeOut .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
        setTimeout(function(){
            if(cancelList.indexOf(elementId) == -1){
                id(elementId).style.display = 'none'
                id(elementId).style.opacity = 0
            }else{
                cancelList.splice(cancelList.indexOf(elementId),1)
            }
        },500)
    }
}

function cancelFadeIn(elementId){
    animation(elementId, 'fadeOut 0s both')
    id(elementId).style.display = 'none'
}
function cancelFadeOut(elementId){
    if(cancelList.indexOf(elementId) == -1){
        cancelList.push(elementId)
    }
    animation(elementId, 'fadeIn 0s both')
    id(elementId).style.display = 'flex'
}

function customAlert(message, time) {
    if (id('alertFrame').style.display == 'none') {
        elementFadeIn('alertFrame')
        id('alertText').innerHTML = message
        if (time) {
            customAlertTimeout = setTimeout(function() {
                elementFadeOut('alertFrame')
            }, time)
        }
    } else {
        try {
            clearTimeout(customAlertTimeout)
        } catch {}
        cancelFadeOut('alertFrame')
        if (time) {
            customAlertTimeout = setTimeout(function() {
                elementFadeOut('alertFrame')
            }, time)
        }
    }
}

/*alertFrameHTML = `
<div id='alertFrame' R='width:100vw; height:100vh;' style='display:none; position:absolute; z-index:999999999; background:rgba(0,0,0,0.25); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);'>
  <div R='width:w(90); height:h(60); max-width:300px; max-height:200px; border-radius:s(5);' style='position:absolute; background:white;'>
    <b id='alertText' R='font-size:w(5);' style='color:black;'></b>
  </div>
</div>
`
document.body.innerHTML += alertFrameHTML*/

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
