'use strict';

var fs = require('fs-extra');

const exceltojson = require('convert-excel-to-json');
 
const result = exceltojson({
    source: fs.readFileSync('testdata.xlsx'),
    header:
    {
        rows :1
    }
});

console.log('excel output::', result)

var dataRequired = function (this: any) {

    this.testConfig = {
    loginname : result.Sheet1[0].A,
    loginpass : result.Sheet1[0].B,
    itemname : result.Sheet1[0].c,

};

}

module.exports = new dataRequired();