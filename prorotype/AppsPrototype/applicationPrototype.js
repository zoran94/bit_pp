class WebApp {

    constructor(name, url, technologies, licence, stars) {
        this.name = name;
        this.url = url;
        this.technologies = technologies;
        this.licence = licence;
        this.stars = stars;
    }
    getData() {
        return `${this.name} ${this.url} ${this.technologies} ${this.licence} ${this.stars}`
    };

    reactBased(react) {
        if (this.technologies === react) {
            return `Technology is ${react}`;
        } else {
            return `Technology is not  ${react}`;
        }
    };

    isCCLicence(creativeCommons) {
        if (this.licence === creativeCommons) {
            return true
        } else {
            return false
        }
    };


    like() {
        return `${this.stars++}`;
    };


    showStars() {
        console.log(`${this.stars.length}`)
    }

}



class MobileApp extends WebApp {
    constructor(name, platforms, license, stars) {
        super(name, license, stars)
        this.name = name;
        this.platforms = platforms;
        this.licence = license;
        this.stars = stars;
    };
    getData() {

        return `${this.name} ${this.platforms} ${this.licence} ${this.stars}`
    };

    forAndroid() {
        for (let i = 0; i < this.platforms.length; i++) {
            if (this.platforms[i].toLowerCase() === "android") {
                return true;
            }

        }
        return false
    }
}



//var app = new WebApp("clock", "", "android", "cc", 5);
// console.log(app.like());
// console.log(app.like());
const mobile = new MobileApp("rebtel", ["views", "menu", "android"], "creativeComomons", 10);
console.log(mobile.forAndroid());