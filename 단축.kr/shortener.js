horizontalVerticalSetting()
window.addEventListener("resize", function() {
    horizontalVerticalSetting()
})
function horizontalVerticalSetting() {
    if (document.body.offsetWidth > document.body.offsetHeight && document.body.offsetHeight < 450) {
        document.getElementById('shortenerFrame').setAttribute('R', 'height:h(90)')
    } else {
        document.getElementById('shortenerFrame').setAttribute('R', 'height:h(50)')
    }
    resizeResponsiveElements()
}

uniqueButtonTextAnimation()
function uniqueButtonTextAnimation() {
    setInterval(function() {
        animation('uniqueButtonText', 'textOut 0.15s cubic-bezier(0.250, 0.460, 0.450, 0.940) both')
        setTimeout(function() {
            document.getElementById('uniqueButtonText').innerHTML = pickRandom(domainList)
            animation('uniqueButtonText', 'textIn 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both')
        }, 150)
    }, 3500)
}
/*TextAnimation = `
<style>
  @keyframes textIn {
    0% {
      letter-spacing: -0.5em;
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes textOut {
    0% {
      filter: blur(0.01);
    }
    100% {
      filter: blur(12px) opacity(0%);
    }
  }
<style>
`
document.head.innerHTML += TextAnimation*/
Kor = ['널향한.내맘을.단축.kr','에쿱이만의.단축.kr','Got7.sTiny.link','JB.sTiny.link','셔누만의.단축.kr','투바투의.단축.kr','ITZY.sTiny.link','더보이즈만의.단축.kr','아스트로의.단축.kr','UP10TION.sTiny.link','캐럿만의.단축.kr','Carat.sTiny.link','아미만의.단축.kr','MonstaX.sTiny.link','몬스타엑스의.단축.kr','IU.sTiny.link','지은이의.단축.kr','아이유.단축.kr','엑소.단축.kr','Jungkookie.sTiny.link','버논만의.단축.kr','방탄.사진용.단축.kr','내가.작명한.단축.kr'];
Eng = []
Chi = []
Jap = []
Ara = []
Hin = []
domainList = [].concat(Kor, Eng, Chi, Jap, Ara, Hin)

//-----------------------------------------------------------------------------------------------------------------

document.getElementById('urlInput').addEventListener('focus', function() {
    resetEraseInput()
})
document.getElementById('urlInput').addEventListener('input', function() {
    resetEraseInput()
    document.getElementById('urlInput').value = document.getElementById('urlInput').value.replaceAll(' ', '')
})
function resetEraseInput() {
    if (document.getElementById('urlInput').value != '') {
        document.getElementById('eraseInput').style.display = 'flex'
    } else {
        document.getElementById('eraseInput').style.display = 'none'
    }
}

document.getElementById('eraseInput').addEventListener('click', function() {
    document.getElementById('urlInput').value = ''
    document.getElementById('urlInput').focus()
    document.getElementById('eraseInput').style.display = 'none'
})

//-----------------------------------------------------------------------------------------------------------------

document.getElementById('urlInput').addEventListener('focus', function() {
    clearAnimations()
    inputFocusedTimer = setTimeout(function() {
        inputFocusedAnimation()
    }, 250)
})
document.getElementById('buttonDescriptionBlur').style.animation = 'fadeOut 0s reverse'
function inputFocusedAnimation() {
    if(document.getElementById('buttonDescriptionBlur').style.animation.indexOf('reverse') != -1){
        elementFadeIn('buttonDescriptionBlur')
        document.getElementById('buttonDescriptionImg').style.display = 'block'
        animation('buttonDescriptionImg', 'descriptionImgEnter .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
        setTimeout(function() {
            animation('buttonDescriptionImg', 'upNdown 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both')
        }, 500)
    }
}

document.getElementById('urlInput').addEventListener('blur', function() {
    clearAnimations()
    inputBlurredTimer = setTimeout(function() {
        inputBlurredAnimation()
    }, 200)
})
function inputBlurredAnimation() {
    if(document.getElementById('buttonDescriptionBlur').style.animation.indexOf('reverse') == -1){
        elementFadeOut('buttonDescriptionBlur')
        animation('buttonDescriptionImg', 'descriptionImgEnter .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) reverse both')
        setTimeout(function() {
            document.getElementById('buttonDescriptionImg').style.display = 'none'
        }, 500)
    }
}

var inputBlurredTimer, inputFocusedTimer
function clearAnimations() {
    clearTimeout(inputBlurredTimer)
    clearTimeout(inputFocusedTimer)
}
/*descriptionImgAnimation = `
<style>
  @keyframes descriptionImgEnter {
    0% {
      opacity: 0;
      transform-origin: top;
      transform: rotateX(-100deg);
    }
    100% {
      opacity: 1;
      transform-origin: top;
      transform: rotateX(0deg);
    }
  }
  @keyframes upNdown {
    0%,100% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-5%);
    }
  }
</style>
`
document.head.innerHTML += descriptionImgAnimation*/

//-----------------------------------------------------------------------------------------------------------------
if (localStorage.getItem('subUrlCheckbox') == 'checked') {
    document.getElementById('subUrlCheckbox').checked = true;
} else {
    document.getElementById('subUrlCheckbox').checked = false;
}

document.getElementById('subUrlCheckboxText').addEventListener('click', function() {
    subUrlPopupAnimation()
})
document.getElementById('subUrlHelpButton').addEventListener('click', function() {
    subUrlPopupAnimation()
})
function subUrlPopupAnimation() {
    elementFadeIn('overlayFrame')
    elementFadeIn('subUrlHelpPopup')
}

document.getElementById('subUrlOkButton').addEventListener('click', function() {
    subUrlCloseAnimation()
    document.getElementById('subUrlCheckbox').checked = true;
})
document.getElementById('subUrlNoButton').addEventListener('click', function() {
    subUrlCloseAnimation()
    document.getElementById('subUrlCheckbox').checked = false;
})
function subUrlCloseAnimation() {
    elementFadeOut('overlayFrame')
    elementFadeOut('subUrlHelpPopup')
}
//-----------------------------------------------------------------------------------------------------------------

//Simple Button
document.getElementById('simpleButton').addEventListener('click', function() {
    if (sessionStorage.getItem('shortCode')) {
        simpleShortenSuccess(sessionStorage.getItem('shortCode'))
        sessionStorage.removeItem('shortCode')
        clearAnimations()
        inputBlurredAnimation()
    } else {
        savedUrl = document.getElementById('urlInput').value
        if (validCheck(savedUrl) == 'valid') {
            loadingAnimation()
            getJSONP('https://apiserver.wixsite.com/litn/_functions/eedo/setURL?longLink=' + processLink(savedUrl) + '&func=simpleShortenSuccess')
        }
    }

})
//Unique Button
document.getElementById('uniqueButton').addEventListener('click', function() {
    if (sessionStorage.getItem('shortCode')) {
        uniqueShortenSuccess(sessionStorage.getItem('shortCode'))
        sessionStorage.removeItem('shortCode')
        clearAnimations()
        inputBlurredAnimation()
    } else {
        savedUrl = document.getElementById('urlInput').value
        if (validCheck(savedUrl) == 'valid') {
            loadingAnimation()
            getJSONP('https://apiserver.wixsite.com/litn/_functions/eedo/setURL?longLink=' + processLink(savedUrl) + '&func=uniqueShortenSuccess')
        }
    }
})
//Instant (Enter)
document.getElementById('urlInput').addEventListener('keydown', function() {
    if (event.keyCode == 13) {
        document.getElementById('urlInput').blur()
        savedUrl = document.getElementById('urlInput').value
        if (validCheck(savedUrl) == 'valid') {
            loadingAnimation()
            getJSONP('https://apiserver.wixsite.com/litn/_functions/eedo/setURL?longLink=' + processLink(savedUrl) + '&func=instantShortenSuccess')
        }
    }
})
//Instant (Parameter)
if (getParameter('instantShorten')) {
    savedUrl = decodeURIComponent(getParameter('instantShorten'))
    if (validCheck(savedUrl) == 'valid') {
        loadingAnimation()
        getJSONP('https://apiserver.wixsite.com/litn/_functions/eedo/setURL?longLink=' + processLink(savedUrl) + '&func=instantShortenSuccess')
    }
}

function simpleShortenSuccess(shortCode) {
    var shortenedUrl, copyCount
    animation('urlInput', 'GreenWindow 4s linear both')
    if (document.getElementById('subUrlCheckbox').checked == true) {
        shortenedUrl = '단축.kr' + '/' + shortCode + ' (SubURL.at/#' + shortCode + ')'
        localStorage.setItem('subUrlCheckbox', 'checked')
    } else {
        shortenedUrl = '단축.kr' + '/' + shortCode
        localStorage.setItem('subUrlCheckbox', 'unchecked')
    }
    editUrlInput(shortenedUrl)
    document.getElementById('urlInput').select()
    document.execCommand("copy");
    document.getElementById('urlInput').blur()
    document.getElementById('eraseInput').style.display = 'none'
    copyCount = 3
    copiedMessage()

    function copiedMessage() {
        editUrlInput('클립보드에 자동 복사됨 ' + copyCount)
        if (copyCount != 0) {
            copyCount -= 1
            setTimeout(function() {
                copiedMessage()
            }, 1000)
        } else {
            editUrlInput(shortenedUrl)
            document.getElementById('eraseInput').style.display = 'flex'
        }
    }
}

function uniqueShortenSuccess(shortCode) {
    location.href = '/단축kr/library?shortCode=' + shortCode
}

function instantShortenSuccess(shortCode) {
    animation('urlInput','pickAButton 5s infinite both')
    sessionStorage.setItem('shortCode', shortCode)
    editUrlInput('버튼을 선택해주세요')
    clearAnimations()
    inputFocusedAnimation()
}

function validCheck(url) {
    var urlHostname
    //empty?
    if (url == '') {
        errorAnimation()
        return
    }
    //valid host name?
    if (url.split('.').length == 1) {
        errorAnimation()
        return
    }
    
    if (url.indexOf('/') != -1) {
        urlHostname = (url.split('/'))[0]
    }else if(url.indexOf('?') != -1) {
        urlHostname = (url.split('?'))[0]
    }else if(url.indexOf('#') != -1) {
        urlHostname = (url.split('#'))[0]
    }else{
        urlHostname = (url.split('.'))[0]
    } 
    //already shortened?
    if (urlHostname.indexOf('단축.kr') != -1) {
        alert('이미 단축된 링크같습니다!')
        errorAnimation()
        return
    }
    //valid characters?
    unvalidCharacter = ['+', '=', '<', '>', '&', '^', '%', '!', '~', '*', '(', ')', '"', ';', ',', '{', '}', '[', ']', '$', '#', '@', '?', '|', "'"]
    for (var i = 0; i < unvalidCharacter.length; i++) {
        if (urlHostname.indexOf(i) != -1) {
            errorAnimation()
            return
        }
    }
    return 'valid'
}

function processLink(url) {
    url = url.replaceAll(' ', '')
    if (url.indexOf('//') === -1) {
        url = 'http://' + url
    }
    return encodeURIComponent(url)
}

function editUrlInput(editText) {
    document.getElementById('urlInput').value = editText
}

function errorAnimation() {
    if(document.getElementById('buttonDescriptionBlur').style.animation.indexOf('reverse') == -1){
        document.getElementById('hiddenInput').focus()
    }
    inputBlurredAnimation()
    animation('urlInput', 'RedWindow 1.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both')
    editUrlInput('Wrong URL format')
    document.getElementById('eraseInput').style.display = 'none'
    setTimeout(function() {
        editUrlInput(savedUrl)
        document.getElementById('urlInput').focus()
    }, 1500)
}

function loadingAnimation() {
    animation('urlInput', 'YellowWindow 1.5s linear 10')
    editUrlInput('Loading....')
    document.getElementById('eraseInput').style.display = 'none'
}
/*buttonFunctionAnimation = `
<style>
  @keyframes GreenWindow {
    0%{
      background:#F5F6CE;
      color:#DF7401;
    }
    10%,90%{
      background:#a4f8e8;
      color: darkgreen;
    }
    100%{
      background: whitesmoke;
      color:black;
    }
  }
  @keyframes YellowWindow{
    0% {
      transform:scale(1);
      background:#F5F6CE;
      color:#DF7401;
    }
    10% {
      transform:scale(0.955);
      background:#F5F6CE;
      color:#DF7401;
    }
    17% {
      transform:scale(0.99);
      background:#F5F6CE;
      color:#DF7401;
    }
    33% {
      transform:scale(0.935);
      background:#F5F6CE;
      color:#DF7401;
    }
    45%,100% {
      transform:scale(1);
      background:#F5F6CE;
      color:#DF7401;
    }
  }
  @keyframes RedWindow {
    0%,6%,12%,18%,24% {
      transform:translateX(1.5%);
      background:pink;
      color:red;
    }
    3%,9%,15%,21%,27% {
      transform:translateX(-1.5%);
      background:pink;
      color:red;
    }
    30%,95%{
      transform:translateX(0);
      background:pink;
      color:red;
    }
    100% {
      transform:translateX(0);
      background:whitesmoke;
      color:black;
    }
  }
  @keyframes pickAButton {
    0%,30%,100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
      background:#F5F6CE;
      color:#DF7401;
    }
    5% {
      transform: translateX(-6%) rotate(-3deg);
      background:#F5F6CE;
      color:#DF7401;
    }
    10% {
      transform: translateX(3%) rotate(3deg);
      background:#F5F6CE;
      color:#DF7401;
    }
    15% {
      transform: translateX(-3%) rotate(-1.8deg);
      background:#F5F6CE;
      color:#DF7401;
    }
    20% {
      transform: translateX(2%) rotate(1.2deg);
      background:#F5F6CE;
      color:#DF7401;
    }
    25% {
      transform: translateX(-1%) rotate(-0.6deg);
      background:#F5F6CE;
      color:#DF7401;
    }
  }
</style>
`
document.head.innerHTML += buttonFunctionAnimation*/

document.getElementById('fullUrlText').innerHTML = decodeURIComponent(getParameter('report'))
document.getElementById('fullUrlText').href = decodeURIComponent(getParameter('report'))
//closeButton
document.getElementById('closeText').addEventListener('click', function (){
    elementFadeOut('overlayFrame')
    elementFadeOut('reportFrame')
})
//-----------------------------------------------------------------------------------------------------------------
