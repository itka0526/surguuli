function getUtmLabels() {
    var date = new Date();
    date.setDate(date.getDate() + 3);

    var url_params = location.search.substring(1);
    var parameter = url_params.split("&");
    var GETvalues = [];
    for (let i in parameter) {
        const j = parameter[i].split("=");
        GETvalues[j[0]] = unescape(j[1]);
    }

    if (typeof (GETvalues["utm_source"]) != "undefined") setCookie("utm_source", GETvalues["utm_source"], {
        expires: date,
        path: "/",
        domain: ".mirea.ru"
    });
    if (typeof (GETvalues["utm_medium"]) != "undefined") setCookie("utm_medium", GETvalues["utm_medium"], {
        expires: date,
        path: "/",
        domain: ".mirea.ru"
    });
    if (typeof (GETvalues["utm_campaign"]) != "undefined") setCookie("utm_campaign", GETvalues["utm_campaign"], {
        expires: date,
        path: "/",
        domain: ".mirea.ru"
    });
}

function setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;
    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }
    document.cookie = updatedCookie;
}

getUtmLabels();