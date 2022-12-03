class Club {
    constructor (pos, name, pl, w, d, l, gd, sf) {
        this.pos = pos
        this.name = name
        this.pl = pl
        this.w = w
        this.d = d
        this.l = l
        this.gd = gd
        this.pts = this.w*3 + this.d*1 + this.l*0
        this.sf = sf
    }
}

export default Club