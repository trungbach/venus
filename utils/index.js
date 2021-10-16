
export function checkProperties(obj) {
    for (var key in obj) {
        if (obj[key] !== null && obj[key] != "" && obj[key] !== 0)
            return false;
    }
    return true;
}

export function checkPropertiesFilterObj(obj) {
    for (var key in obj) {
        if(key !== 'page')
        if (obj[key] !== null && obj[key] != "")
            return false;
    }
    return true;
}

export function getTokenFromServer(req, res) {
    if(!req.headers.cookie) {
        res.writeHead(302, { Location: `/login?${req.url}` })
        res.end();
        
      } else {
        const tokenCookie =  req.headers.cookie.split(";")
        .find(c => c.trim().startsWith("token_crypt="));
        const token = tokenCookie && tokenCookie.split('=')[1]
        return token
      }
}

export function handleExprireToken (req, res) {
    res.setHeader('Set-Cookie','token_crypt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')
    res.setHeader('Set-Cookie','user_wallet=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')
    res.writeHead(302, { Location: `/login?${req.url || '/'}` })
    res.end();
}

export  function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

export function calculateTimeLeft (readyTime) {
    let currDate = new Date().getTime();
    let difference = readyTime - currDate;
    let timeDiff = {
      hours:   difference > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : 0,
      minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
      seconds: difference > 0 ? Math.floor((difference / 1000) % 60) : 0
    };

    timeDiff.hours = timeDiff.hours < 10 ? `0${timeDiff.hours}` : `${timeDiff.hours}`;
    timeDiff.minutes = timeDiff.minutes < 10 ? `0${timeDiff.minutes}` : `${timeDiff.minutes}`;
    timeDiff.seconds = timeDiff.seconds < 10 ? `0${timeDiff.seconds}` : `${timeDiff.seconds}`;
    return timeDiff;
};

export async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }