'use strict';

var r = require('axios');
var o = require('https');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);
var o__default = /*#__PURE__*/_interopDefault(o);

var t=class{termId;pageSize;studentId;studentName;instance;constructor({termId:n,pageSize:e=10,studentId:i="",studentName:s=""}){this.termId=n,this.pageSize=e,this.studentId=i,this.studentName=s;let a=new o__default.default.Agent({rejectUnauthorized:!1});this.instance=r__default.default.create({baseURL:"https://daotaodaihoc.uet.vnu.edu.vn",httpsAgent:a});}async getList(){return await this.instance.get("/qldt",{params:{"SinhvienLmh[term_id]":this.termId,"SinhvienLmh[pageSize]":this.pageSize,"SinhvienLmh[masvTitle]":this.studentId,"SinhvienLmh[hotenTitle]":this.studentName}}).then(e=>e.data)}};

exports.UETDangkymon = t;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map