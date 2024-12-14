
var pro_1 = 2095;
var pro_2 = 799;
var pro_3 = 1599
var pro_4 = 499;
var tax = 0.1;
var avoid_inaccuracy = 100; 

var total = (pro_1 + pro_2 + pro_3 + pro_4) / avoid_inaccuracy + Math.round((pro_1+pro_2+pro_3+pro_4)*tax) / avoid_inaccuracy;
document.write(total);



//console running
//(2095 + 799 + 1899 + 499) / 100 + Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100