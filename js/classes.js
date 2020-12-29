const seams = ['PUREWA TOP EAST', 'PUREWA TOP WEST', 'PUREWA BOTTOM EAST', 'PUREWA BOTTOM WEST', 'TURRA EAST', 'TURRA WEST'];

function ran(min=0, max=100) {
    let r = min + Math.floor((max - min) * Math.random());
    return r;
}


class Shovel {
    constructor(name) {
        this.name = name;
        this.east_factor = [45, 55, 90, 32, 37, 60];
        this.west_factor = [45, 40, 32, 27];
        this.initialize();
    }
    initialize = function () {
        this.data = {
            name: this.name,
            east: false,
            west: false,
            seam: null,
            east_coal_100: null,
            east_coal_120: null,
            east_coal_190: null,
            east_ob_100: null,
            east_ob_120: null,
            east_ob_190: null,
            west_coal_100: null,
            west_coal_85: null,
            west_ob_100: null,
            west_ob_85: null,
            remark: ""
        };
    };
    set = function (obj) {
        this.data = obj;
    }

    get = function () {
        return this.data;
    }

    remove = function (arg) {
        if (arg == 'east') {
            this.data.east = false;

            this.data.east_coal_100 = null;
            this.data.east_coal_120 = null;
            this.data.east_coal_190 = null;
            this.data.east_ob_100 = null;
            this.data.east_ob_120 = null;
            this.data.east_ob_190 = null;

        }
        if (arg == 'west') {
            this.data.west = false;
            this.data.west_coal_100 = null;
            this.data.west_coal_85 = null;
            this.data.west_ob_100 = null;
            this.data.west_ob_85 = null;

        }
    };
    inflate = function () {
        this.qty = {

            east_coal_100: this.data.east_coal_100 * this.east_factor[0],
            east_coal_120: this.data.east_coal_120 * this.east_factor[1],
            east_coal_190: this.data.east_coal_120 * this.east_factor[2],

            east_ob_100: this.data.east_ob_100 * this.east_factor[3],
            east_ob_120: this.data.east_ob_120 * this.east_factor[4],
            east_ob_190: this.data.east_ob_190 * this.east_factor[5],

            west_coal_100: this.data.west_coal_100 * this.west_factor[0],
            west_coal_85: this.data.west_coal_85 * this.west_factor[1],

            west_ob_100: this.data.west_ob_100 * this.west_factor[2],
            west_ob_85: this.data.west_ob_85 * this.west_factor[3],


            east_coal: this.data.east_coal_100 * this.east_factor[0] + this.data.east_coal_120 * this.east_factor[1] + this.data.east_coal_190 * this.east_factor[2],
            east_ob: this.data.east_ob_100 * this.east_factor[3] + this.data.east_ob_120 * this.east_factor[4] + this.data.east_ob_190 * this.east_factor[5],

            west_coal: this.data.west_coal_100 * this.west_factor[0] + this.data.west_coal_85 * this.west_factor[1],
            west_ob: this.data.west_ob_100 * this.west_factor[2] + this.data.west_ob_85 * this.west_factor[3],

            coal:
                this.data.east_coal_100 * this.east_factor[0] +
                this.data.east_coal_120 * this.east_factor[1] +
                this.data.west_coal_190 * this.east_factor[2] +
                this.data.west_coal_100 * this.west_factor[0] +
                this.data.west_coal_85 * this.west_factor[1],
            ob:
                this.data.east_ob_100 * this.east_factor[3] +
                this.data.east_ob_120 * this.east_factor[4] +
                this.data.west_ob_190 * this.east_factor[5] +
                this.data.west_ob_100 * this.west_factor[2] +
                this.data.west_ob_85 * this.west_factor[3],
        };
    };
    sum = function (x) {
        this.data.east_coal_100 += x.data.east_coal_100;
        this.data.east_coal_120 += x.data.east_coal_120;
        this.data.east_coal_190 += x.data.east_coal_190;

        this.data.east_ob_100 += x.data.east_ob_100;
        this.data.east_ob_120 += x.data.east_ob_120;
        this.data.east_ob_190 += x.data.east_ob_190;

        this.data.west_coal_100 += x.data.west_coal_100;
        this.data.west_coal_85 += x.data.west_coal_85;
        this.data.west_ob_100 += x.data.west_ob_100;
        this.data.west_ob_85 += x.data.west_ob_85;
    };

    randomize = function () {
        this.data = {
            name: this.name,
            east: true,
            west: true,
            seam: seams[ran(0,5)],
            east_coal_100: ran(),
            east_coal_120: ran(),
            east_coal_190: ran(),
            east_ob_100: ran(),
            east_ob_120: ran(),
            east_ob_190: ran(),
            west_coal_100: ran(),
            west_coal_85: ran(),
            west_ob_100: ran(),
            west_ob_85: ran(),
            remark: ""
        };
    }
}

class Dragline {
    constructor(name) {
        this.name = name;
        this.initialize();
    }
    initialize = function () {
        this.data = {
            name: this.name,
            solid: null,
            rehandling: null,
            wrk: null,
            mnt: null,
            bdn: null,
            remark: null
        }
    };
    set = function (obj) {
        this.data = obj;
    }

    get = function () {
        return this.data;
    }

    inflate = function () {
        this.qty = {
            solid: this.data.solid * 15,
            rehandling: this.data.rehandling * 15
        }
    };
    sum = function (x) {
        this.data.solid += x.data.solid;
        this.data.rehandling += x.data.rehandling;
    }

    randomize = function () {
        this.data = {
            name: this.name,
            solid: ran(),
            rehandling: ran(),
            wrk: ran(),
            mnt: ran(),
            bdn: ran(),
            remark: ran()
        }
    };
}

class SurfaceMiner {
    constructor(name) {
        this.name = name;
        this.initialize();
    }
    initialize = function () {
        this.data = {
            name: this.name,
            cutting: null,
            prod: null,
            wrk: null,
            remark: null
        }
    };
    set = function (obj) {
        this.data = obj;
    }
    get = function () {
        return this.data;
    }

    sum = function (x) {
        this.data.wrk += x.data.wrk;
        this.data.cutting += x.data.cutting;
        this.data.prod += x.data.prod;
    }
    randomize = function () {
        this.data = {
            name: this.name,
            cutting: ran(),
            prod: ran(),
            wrk: ran(),
            remark: ran()
        }
    };
}

class Outsourcing {
    constructor(name) {
        this.name = name;
        this.initialize();
    }
    initialize = function () {
        this.data = {
            name: this.name,
            qty: null,
            remark: null
        }
    };
    set = function (obj) {
        this.data = obj;
    }
    get = function () {
        return this.obj;
    }

    sum = function (x) {
        this.data.qty += x.data.qty;
    }
    randomize = function () {
        this.data = {
            name: this.name,
            qty: ran(),
            remark: ran()
        }
    };
}


class Dispatch {
    constructor(name) {
        this.name = name;
        this.initialize();
    }
    initialize = function () {
        this.data = {
            trips: [null, null, null, null, null, null, null],
            qty: [null, null, null, null, null, null, null]
        }
    }
    set = function (obj) {
        if (obj) {
            this.data = obj;
        }
        else {
            console.log('ERROR : Blank object');
        }
     
    }
    get = function () {
        this.data;
    }

    inflate = function () {

        this.chp = this.data.qty[2] + this.data.qty[3] + this.data.qty[5];
    };

    sum = function (obj) {
        for (i = 0; i < this.data.trips.length; i++) {
            this.data.trips[i] += x.data.trips[i];
            this.data.qty[i] += x.data.qty[i];
        }
    }
    randomize = function () {
        this.data = {
            trips: [ran(), ran(), ran(), ran(), ran(), ran(), ran()],
            qty: [ran(), ran(), ran(), ran(), ran(), ran(), ran()]
        }
    }
}

class Manpower {
    constructor(name) {
        this.name = name;
        this.initialize();
    }
    initialize = function () {
        this.data = {
            'SHOVEL OPTR': [null, null],
            'DUMPER OPTR': [null, null],
            'DOZER OPTR': [null, null],
            'GRADER OPTR': [null, null],
            'CABLE MAN': [null, null],
            'and shand': [null, null],
        }
    }

    get = function () {
        return this.data;
    }
    set = function (obj) {
        this.data = obj;
    }
    inflate = function () {

        Object.keys(this.data).forEach(x => {
            this.data[x][2] = this.data[x][0] + this.data[x][1];
        })
    }

   randomize = function () {
        this.data = {
            'SHOVEL OPTR': [ran(), ran()],
            'DUMPER OPTR': [ran(), ran()],
            'DOZER OPTR': [ran(), ran()],
            'GRADER OPTR': [ran(), ran()],
            'CABLE MAN': [ran(), ran()],
            'and shand': [ran(), ran()],
        }
    }

}