function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}

WebApp.prototype.getData = function () {
    return this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars
};

WebApp.prototype.reactBased = function (react) {
    if (this.technologies === react) {
        return "Technology is: " + react;
    } else {
        return "Technology is not: " + react
    }
};



WebApp.prototype.isCCLicence = function (creativeCommons) {
    if (this.licence === creativeCommons) {
        return true
    } else {
        return false
    }
};


WebApp.prototype.like = function () {
    return this.stars++;
};


WebApp.prototype.showStars = function () {
    console.log(this.stars.length)
}




function MobileApp(name, platforms, license, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = license;
    this.stars = stars;
};

MobileApp.prototype = Object.create(WebApp.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {

    return this.name + " " + this.platforms + " " + this.licence + " " + this.stars
};

MobileApp.prototype.forAndroid = function () {
    for (var i = 0; i < this.platforms.length; i++) {
        if (this.platforms[i].toLowerCase() === "aman") {
            return true;
        }

    }
    return false
}


//var app = new WebApp("clock", "", "android", "cc", 5);
// console.log(app.like());
// console.log(app.like());
var mobile = new MobileApp("rebtel", ["views", "menu", "android"], "creativeComomons", 10);
console.log(mobile.forAndroid());