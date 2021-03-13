urlAnchor = (location.href.split('#'))[1]
if (urlAnchor) {
    if ((urlAnchor.split('b:'))[0] == '') {
        longLink = 'https://' + urlAnchor.replace('b:', 'bit.ly/')
        location.href = longLink
        //window.open(longLink)
        //location.href = '?report=' + encodeURIComponent(longLink)
    } else if ((urlAnchor.split('c:'))[0] == '') {
        longLink = 'https://' + urlAnchor.replace('c:', 'cutt.ly/')
        location.href = longLink
        //window.open(longLink)
        //location.href = '?report=' + encodeURIComponent(longLink)
    } else if (urlAnchor.indexOf('.') != -1) {
        var splitedUrl, splitedProtocol, protocol, longLink
        splitedUrl = urlAnchor.split('.')
        if (splitedUrl[0].indexOf('/') != -1) {
            splitedProtocol = splitedUrl[0].split('/')
            for (i in splitedProtocol) {
                if (i == 0) {
                    protocol = splitedProtocol[0] + '//'
                } else {
                    protocol += splitedProtocol[i]
                }
            }
            splitedUrl[0] = protocol
        }
        for (i in splitedUrl) {
            if (i == 0) {
                longLink = splitedUrl[0]
            } else {
                longLink += '.' + splitedUrl[i]
            }
        }
        location.href = '/단축.kr/?instantShorten=' + encodeURIComponent(longLink)
    } else {
        location.href = 'https://cutt.ly/onlyforsuburlto' + urlAnchor
        //getJSONP('https://apiserver.wixsite.com/litn/_functions/eedo/getURL?shortCode=' + urlAnchor)
    }
} else {
    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            //return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            return false;
        }
        // other browser
        return false;
    }
    if (detectIE()) {
        alert('😥 인터넷 익스플로러 브라우저에서는 이용할 수 없어요. 엣지 익스플로러 브라우저로 이동할게요!')
        location.href = "microsoft-edge:" + location.href
    }
}

function longLinkLoaded(longLink) {
    longLink = longLink.replaceAll('%27', "'")
    location.href = longLink
    //window.open(longLink)
    //location.href = '?report=' + encodeURIComponent(longLink)
}

function noSuchCode() {
    alert('😥 잘못된 코드를 받은 것 같아요. 링크 제공자에게 알려주세요!')
    location.href = '/단축.kr/'
}
