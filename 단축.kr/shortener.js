horizontalVerticalSetting()
window.addEventListener("resize", function() {
    horizontalVerticalSetting()
})
function horizontalVerticalSetting() {
    if (document.body.offsetWidth > document.body.offsetHeight && document.body.offsetHeight < 450) {
        id('shortenerFrame').setAttribute('R', 'height:h(90)')
        document.body.setAttribute('class', '')
        if(document.body.offsetHeight < 320){
           id('shortenerFrame').setAttribute('R', 'height:h(100)')
           document.body.setAttribute('class', 'topCenterAlign')
        }
    } else {
        id('shortenerFrame').setAttribute('R', 'height:h(50)')
        document.body.setAttribute('class', '')
    }
    resizeResponsiveElements()
}

uniqueButtonTextAnimation()
function uniqueButtonTextAnimation() {
    setInterval(function() {
        animation('uniqueButtonText', 'textOut 0.15s cubic-bezier(0.250, 0.460, 0.450, 0.940) both')
        setTimeout(function() {
            id('uniqueButtonText').innerHTML = pickRandom(domainList)
            animation('uniqueButtonText', 'textIn 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both')
        }, 150)
    }, 3500)
}
TextAnimation = `
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
document.head.innerHTML += TextAnimation
Kor = ['에쿱이의.단축.kr','더보이즈의.단축.kr','캐럿만의.단축.kr','원스의.단축.kr','레베럽의.단축.kr','손스윗.단축.kr','지은이만의.단축.kr','아미만의.단축.kr','정꾸기.단축.kr','스밍.총공용.단축.kr','사진.공유용.단축.kr','내.맘대로.단축.kr'];
Eng = ['MonstaX.sTiny.link','EXO-L.sTiny.link','ATINY.sTiny.link','MooMoo.sTiny.link','STAY.sTiny.link','NCTzen.sTiny.link','MIDZY.sTiny.link','M.O.A.sTiny.link','iGOT7.sTiny.link','Monbebe.sTiny.link','BLINK.sTiny.link','ONCE.sTiny.link','Carat.sTiny.link','Dino.sTiny.link','Vernon.sTiny.link','Mr.Boo.sTiny.link','Myungho.sTiny.link','Gyu.sTiny.link','DK.sTiny.link','Woozi.sTiny.link','Wonwoo.sTiny.link','Hoshi.sTiny.link','MoonJun.sTiny.link','Shua.sTiny.link','Hannie.sTiny.link','Asparagus.sTiny.link','Binnie.sTiny.link','KaiKai.sTiny.link','Yeonjunie.sTiny.link','Hyunie.sTiny.link','Beomie.sTiny.link','ReVeluv.sTiny.link','Yeriana.sTiny.link','Malgeumi.sTiny.link','Wen-laf.sTiny.link','Kkangseul.sTiny.link','Baechu.sTiny.link','IU.sTiny.link','ARMY.sTiny.link','BTS.sTiny.link','Junkookie.sTiny.link','Moonchild.sTiny.link','Hobi.sTiny.link','ChimChim.sTiny.link','TaeTae.sTiny.link','WWHandsome.sTiny.link','LilMeowMeow.sTiny.link']
Chi = []
Jap = []
Ara = []
Hin = []
domainList = [].concat(Kor, Eng, Chi, Jap, Ara, Hin)

//-----------------------------------------------------------------------------------------------------------------

id('urlInput').addEventListener('focus', function() {
    resetEraseInput()
})
id('urlInput').addEventListener('input', function() {
    resetEraseInput()
    id('urlInput').value = id('urlInput').value.split(' ').join('')
})
function resetEraseInput() {
    if (id('urlInput').value != '') {
        id('eraseInput').style.display = 'flex'
    } else {
        id('eraseInput').style.display = 'none'
    }
}

id('eraseInput').addEventListener('click', function() {
    id('urlInput').value = ''
    id('urlInput').focus()
    id('eraseInput').style.display = 'none'
})

//-----------------------------------------------------------------------------------------------------------------

id('urlInput').addEventListener('focus', function() {
    clearAnimations()
    inputFocusedTimer = setTimeout(function() {
        inputFocusedAnimation()
    }, 250)
})
id('buttonDescriptionBlur').style.animation = 'fadeOut 0s reverse'
function inputFocusedAnimation() {
    if(id('buttonDescriptionBlur').style.animation.indexOf('reverse') != -1){
        elementFadeIn('buttonDescriptionBlur')
        id('buttonDescriptionImg').style.display = 'block'
        animation('buttonDescriptionImg', 'descriptionImgEnter .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both')
        setTimeout(function() {
            animation('buttonDescriptionImg', 'upNdown 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both')
        }, 500)
    }
}

id('urlInput').addEventListener('blur', function() {
    clearAnimations()
    inputBlurredTimer = setTimeout(function() {
        inputBlurredAnimation()
    }, 200)
})
function inputBlurredAnimation() {
    if(id('buttonDescriptionBlur').style.animation.indexOf('reverse') == -1){
        elementFadeOut('buttonDescriptionBlur')
        animation('buttonDescriptionImg', 'descriptionImgEnter .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) reverse both')
        setTimeout(function() {
            id('buttonDescriptionImg').style.display = 'none'
        }, 500)
    }
}

var inputBlurredTimer, inputFocusedTimer
function clearAnimations() {
    clearTimeout(inputBlurredTimer)
    clearTimeout(inputFocusedTimer)
}
descriptionImgAnimation = `
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
document.head.innerHTML += descriptionImgAnimation

//-----------------------------------------------------------------------------------------------------------------

if (localStorage.getItem('subUrlCheckbox') == 'checked') {
    id('subUrlCheckbox').checked = true;
} else {
    id('subUrlCheckbox').checked = false;
}

id('subUrlCheckboxText').addEventListener('click', function() {
    subUrlPopupAnimation()
})
id('subUrlHelpButton').addEventListener('click', function() {
    subUrlPopupAnimation()
})
function subUrlPopupAnimation() {
    elementFadeIn('overlayFrame')
    elementFadeIn('subUrlHelpPopup')
}

id('subUrlOkButton').addEventListener('click', function() {
    subUrlCloseAnimation()
    id('subUrlCheckbox').checked = true;
})
id('subUrlNoButton').addEventListener('click', function() {
    subUrlCloseAnimation()
    id('subUrlCheckbox').checked = false;
})
function subUrlCloseAnimation() {
    elementFadeOut('overlayFrame')
    elementFadeOut('subUrlHelpPopup')
}

//-----------------------------------------------------------------------------------------------------------------

//Simple Button
id('simpleButton').addEventListener('click', function() {
    if (sessionStorage.getItem('shortCode')) {
        simpleShortenSuccess(sessionStorage.getItem('shortCode'))
        sessionStorage.removeItem('shortCode')
        clearAnimations()
        inputBlurredAnimation()
    } else {
        savedUrl = id('urlInput').value
        if (OtherShorteningToolsCheck(savedUrl) != 'New'){
            simpleShortenSuccess(OtherShorteningToolsCheck(savedUrl))
        } else if (validCheck(savedUrl) == 'valid') {
            loadingAnimation()
            getJSONP('https://apiserver.wixsite.com/litn/_functions/eedo/setURL?longLink=' + processLink(savedUrl) + '&func=simpleShortenSuccess')
        }
    }
})
//Unique Button
id('uniqueButton').addEventListener('click', function() {
    if (sessionStorage.getItem('shortCode')) {
        uniqueShortenSuccess(sessionStorage.getItem('shortCode'))
        sessionStorage.removeItem('shortCode')
        clearAnimations()
        inputBlurredAnimation()
    } else {
        savedUrl = id('urlInput').value
        if (OtherShorteningToolsCheck(savedUrl) != 'New'){
            uniqueShortenSuccess(OtherShorteningToolsCheck(savedUrl))
        } else if (validCheck(savedUrl) == 'valid') {
            loadingAnimation()
            getJSONP('https://apiserver.wixsite.com/litn/_functions/eedo/setURL?longLink=' + processLink(savedUrl) + '&func=uniqueShortenSuccess')
        }
    }
})
//Instant (Enter)
id('urlInput').addEventListener('keydown', function() {
    if (event.keyCode == 13) {
        id('urlInput').blur()
        savedUrl = id('urlInput').value
        if (OtherShorteningToolsCheck(savedUrl) != 'New'){
            instantShortenSuccess(OtherShorteningToolsCheck(savedUrl))
        } else if (validCheck(savedUrl) == 'valid') {
            loadingAnimation()
            getJSONP('https://apiserver.wixsite.com/litn/_functions/eedo/setURL?longLink=' + processLink(savedUrl) + '&func=instantShortenSuccess')
        }
    }
})
//Instant (Parameter)
if (getParameter('instantShorten')) {
    savedUrl = decodeURIComponent(getParameter('instantShorten'))
    if (OtherShorteningToolsCheck(savedUrl) != 'New'){
        instantShortenSuccess(OtherShorteningToolsCheck(savedUrl))
    } else if (validCheck(savedUrl) == 'valid') {
        loadingAnimation()
        getJSONP('https://apiserver.wixsite.com/litn/_functions/eedo/setURL?longLink=' + processLink(savedUrl) + '&func=instantShortenSuccess')
    }
}

function simpleShortenSuccess(shortCode) {
    var shortenedUrl, copyCount
    animation('urlInput', 'GreenWindow 4s linear both')
    if (id('subUrlCheckbox').checked == true) {
        shortenedUrl = '단축.kr' + '/' + shortCode + ' (SubURL.at/#' + shortCode + ')'
        localStorage.setItem('subUrlCheckbox', 'checked')
    } else {
        shortenedUrl = '단축.kr' + '/' + shortCode
        localStorage.setItem('subUrlCheckbox', 'unchecked')
    }
    editUrlInput(shortenedUrl)
    id('urlInput').select()
    document.execCommand("copy");
    id('urlInput').blur()
    id('eraseInput').style.display = 'none'
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
            id('eraseInput').style.display = 'flex'
        }
    }
}

function uniqueShortenSuccess(shortCode) {
    location.href = './library?shortCode=' + shortCode
}

function instantShortenSuccess(shortCode) {
    animation('urlInput','pickAButton 5s infinite both')
    sessionStorage.setItem('shortCode', shortCode)
    editUrlInput('버튼을 선택해주세요')
    clearAnimations()
    inputFocusedAnimation()
}

function OtherShorteningToolsCheck(url) {
    var protocolRemoved
    if (url.indexOf('://') != -1){
        protocolRemoved = (url.split('://'))[1]
    } else {
        protocolRemoved = url
    }
    alert(protocolRemoved.indexOf(caseInsensitive('bit.ly/')))
    if (protocolRemoved.indexOf(caseInsensitive('bit.ly/')) == 0) {
        return protocolRemoved.replace(caseInsensitive('bit.ly/'),'b:')
    } else if (protocolRemoved.indexOf(caseInsensitive('cutt.ly/')) == 0) {
        return protocolRemoved.replace(caseInsensitive('cutt.ly/'),'c:')
    } else {
        return 'New'
    }
    function caseInsensitive(string) {
        return RegExp(string,'ig')
    }
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
        if (urlHostname.indexOf(unvalidCharacter[i]) != -1) {
            errorAnimation()
            return
        }
    }
    return 'valid'
}

function processLink(url) {
    url = url.split(' ').join('')
    if (url.indexOf('://') == -1) {
        url = 'http://' + url
    }
    return encodeURIComponent(url)
}

function editUrlInput(editText) {
    id('urlInput').value = editText
}

function errorAnimation() {
    if(id('buttonDescriptionBlur').style.animation.indexOf('reverse') == -1){
        id('hiddenInput').focus()
    }
    inputBlurredAnimation()
    animation('urlInput', 'RedWindow 1.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both')
    editUrlInput('Wrong URL format')
    id('eraseInput').style.display = 'none'
    setTimeout(function() {
        editUrlInput(savedUrl)
        id('urlInput').focus()
    }, 1500)
}

function loadingAnimation() {
    animation('urlInput', 'YellowWindow 1.5s linear 10')
    editUrlInput('Loading....')
    id('eraseInput').style.display = 'none'
}
buttonFunctionAnimation = `
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
document.head.innerHTML += buttonFunctionAnimation

//-----------------------------------------------------------------------------------------------------------------

if(getParameter('report')){
    if(decodeURIComponent(getParameter('report')).length < 125){
        id('fullLinkText').innerHTML = decodeURIComponent(getParameter('report')).replaceAll(' ','+').replaceAll('&','&amp;')
    }else{
        id('fullLinkText').innerHTML = decodeURIComponent(getParameter('report')).replaceAll(' ','+').slice(0,123).replaceAll('&','&amp;') + '...'
    }
    elementFadeIn('overlayFrame')
    elementFadeIn('reportFrame')
    id('fullLinkButton').addEventListener('click', function (){
        window.open(decodeURIComponent(getParameter('report')))
    })

    var fullLinkInterval, fullLinkTimer1, fullLinkTimer2
    setTimeout(function(){
        setfullLinkTextAnimation()
    },500)
    window.addEventListener('focus', function (){
        if(id('reportFrame').style.display != 'none'){
            clearTimeout(fullLinkTimer1)
            clearInterval(fullLinkInterval)
            clearTimeout(fullLinkTimer2)
            setfullLinkTextAnimation()
        }
    })
    window.addEventListener('resize', function (){
        if(id('reportFrame').style.display != 'none'){
            clearTimeout(fullLinkTimer1)
            clearInterval(fullLinkInterval)
            clearTimeout(fullLinkTimer2)
            setfullLinkTextAnimation()
        }
    })
    function setfullLinkTextAnimation(){
        if(id('fullLinkText').offsetWidth > id('fullLinkTextFrame').offsetWidth){
            id('fullLinkTextFrame').className = 'leftCenterAlign'
            fullLinkAnimation()
            fullLinkInterval = setInterval(function(){
                clearTimeout(fullLinkTimer2)
                fullLinkAnimation()
            },(id('fullLinkText').offsetWidth - id('fullLinkTextFrame').offsetWidth) * 10 + 3000)
        }
        fullLinkTextAnimation = `
        <style>
          @keyframes fullLinkSlide {
            0%{
              transform:translateX(0%)
            }
            100%{
              transform:translateX(-` + String(id('fullLinkText').offsetWidth - id('fullLinkTextFrame').offsetWidth) + `px)
            }
          }
        </style>
        `
        document.head.innerHTML += fullLinkTextAnimation
    }
    function fullLinkAnimation(){
        animation('fullLinkText','fullLinkSlide 0s reverse')
        fullLinkTimer2 = setTimeout(function(){
            animation('fullLinkText','fullLinkSlide ' + (id('fullLinkText').offsetWidth - id('fullLinkTextFrame').offsetWidth)/100 + 's linear both')
        },1000)
    }
    
    id('closeText').addEventListener('click', function (){
        elementFadeOut('overlayFrame')
        elementFadeOut('reportFrame')
        clearTimeout(fullLinkTimer1)
        clearInterval(fullLinkInterval)
        clearTimeout(fullLinkTimer2)
    })
}

//-----------------------------------------------------------------------------------------------------------------
