var dhruv = function () {
    this.name="dhruv";
    this.age="21";
    this.email="dhruvlallukarshanwala6165@gmail.com";

}

dhruv.prototype={
    address:"surat",
    getName:function () {
        return this.name;

    }
}

var lk = new dhruv();
console.log(lk.getName());
