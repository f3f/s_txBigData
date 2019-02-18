function isbuy(prodts) {

    localStorage['ProductsAndServices'] = prodts;
    $.ajax({
        url: serviceAddress + "api/IndustryChain/Index",
        type: "GET",
        cache: false,
        data: { ProductsAndServices: prodts, CountryClassificationCode: '', KeyId: localStorage.KeyId, IsService: 1, UserId: localStorage.UserID},
        dataType: 'json',
        success: function (json) {
            var isbuy = json.isbuy;
            localStorage.qiyename='';
            localStorage.chuang='';
            localStorage.f1='';
            localStorage.f2 = '';
            localStorage.f3 = '';
            localStorage.f4 = '';
            localStorage.EmployeesBegin = '';
            localStorage.startGui = '';
            localStorage.c1 = '';
            localStorage.c2 = '';
            localStorage.c3 = '';
            CountryClassificationCode = '';

            if (isbuy == 0) {
             
                location.href = '../property/property-content.html';//20150721修改，传递参数chainType=1
            } else {
                location.href = '../property/isbuy-property-content.html';
            }
            

        }
    })
}

function tiao(prodts) {

    localStorage['ProductsAndServices'] = prodts;
    
    $.ajax({
        url: serviceAddress + "api/IndustryChain/Index",
        type: "GET",
        cache: false,
        data: { ProductsAndServices: prodts, CountryClassificationCode: '', KeyId: localStorage.KeyId, IsService: 1, UserId: localStorage.UserID},
        dataType: 'json',
        success: function (json) {
            var isbuy = json.isbuy;
            localStorage.qiyename = '';
            localStorage.chuang = '';
            localStorage.f1 = '';
            localStorage.f2 = '';
            localStorage.f3 = '';
            localStorage.f4 = '';
            localStorage.EmployeesBegin = '';
            localStorage.startGui = '';
            localStorage.c1 = '';
            localStorage.c2 = '';
            localStorage.c3 = '';
            CountryClassificationCode='';
            if (isbuy == 0) {
                location.href = 'property/property-content.html?index';
            } else {
                location.href = 'property/isbuy-property-content.html?index';
            }


        }
    })

}
//购买记录进行跳转

function zfcg(EntName, LegalName, Province, City, District, ProductsAndServices, EmployeesBegin, OperatingIncomeRMBBegin, CountryClassificationCode) {  
    localStorage.qiyename = EntName;
    localStorage.ProductsAndServices = ProductsAndServices;
    localStorage.chuang= LegalName;
    localStorage.EmployeesBegin = EmployeesBegin;
    localStorage.startGui = OperatingIncomeRMBBegin;
    localStorage.c1 = Province;
    localStorage.c2 = City;
    localStorage.c3 = District;
    localStorage.CountryClassificationCode = CountryClassificationCode;
    
    location.href = '../property/isbuy-property-content.html';
}

function zfsb(EntName, LegalName, Province, City, District, ProductsAndServices, EmployeesBegin, OperatingIncomeRMBBegin, CountryClassificationCode) {

    localStorage.qiyename = EntName;
    localStorage.ProductsAndServices = ProductsAndServices;
    localStorage.chuang = LegalName;
    localStorage.EmployeesBegin = EmployeesBegin;//人员规模
    localStorage.startGui = OperatingIncomeRMBBegin;//营收规模
    localStorage.c1 = Province;
    localStorage.c2 = City;
    localStorage.c3 = District;
    localStorage.CountryClassificationCode= CountryClassificationCode;
   

    location.href = '../property/property-Content-payStyle.html';
}
function goutiao(EntId) {
    var UserID = localStorage.UserID;
    var EntID = EntId;
    localStorage['EntID'] = EntId;
 
    var yhmma = {
        EntID: EntID,
        UserID: UserID, KeyId: localStorage.KeyId
    }
    $.ajax({
        url: serviceAddress + "api/Ent/EntBaseInfo",
        type: "GET",
        data: yhmma,
        success: function (json) {
          
            if (json != null && json != '') {

                if (json.result == '0') {
                    //var nishan = "";
                    var isbuy = json.isbuy;
                    var qy = json['data']['企业名称'];
                    var xz = json['data']['企业性质'];
                    var zz = json['data']['组织机构代码'];
                    var fr = json['data']['法人代表_姓名'];
                    var gd = json['data']['国代分类名称'];
                    localStorage.国代分类名称 = json['data']['国代分类名称'];
                    localStorage.国代分类代码 = json['data']['国代分类代码'];
                    localStorage.gdfldm = json['data']['国代分类代码'];
                    var yf = json['data']['企业成立时间'];
                    var gs = json['data']['工商注册号'];

                    var ss = json['data']['is_ipo'];
                    var zg = json['data']['从业人数'];

                    // var yq = json['data']['所在省份'] + json['data']['所在区域'];//没有（）
                    var yq = json['data']['ZoneName'];

                    var hy = json['data']['国代分类KW'];
                    var cf = json['data']['产品及服务'];

                    var hd = json['data']['主要业务活动1'];
                    var dh = json['data']['总台电话'];
                    var cz = json['data']['传真号码'];
                    var wz = json['data']['企业网址'];
                    var yb = json['data']['邮政编码'];
                    var xx = json['data']['企业地址'];
                    var jj = json['data']['企业简介'];
                    var jc = json['data']['企业简称'];
                    var cpfw = json['data']['产品及服务'];
                    var yq = json['data']['ZoneName'];

                    var zgs = qy + '完整大数据分析';

                    //新添加交易意向
                    var rzxq = json['data']['融资需求'];
                    var rzed = json['data']['融资额度'] + '万';

                    var nishan = json['data']['国内上市板块'];
                    var jwshan = json['data']['国外上市板块'];

                    var bbkn = json['data']['并购需求_被并购可能性'];
                    var bgfx = json['data']['并购需求_并购方向'];
                    var bgdy = json['data']['并购需求_被并购动因'];
                    var bglx = json['data']['并购需求_期望并购类型'];

                    if (ss == '0') {
                        ss = '否';
                    } else {
                        ss = '是';
                    }


                    if (qy == null || qy == '') {
                        qy = '-';
                    }
                    if (xz == null || xz == '') {
                        xz = '-';
                    }
                    if (zz == null || zz == '') {
                        zz = '-';
                    }
                    if (fr == null || fr == '') {
                        fr = '-';
                    }
                    if (gd == null || gd == '') {
                        gd = '-';
                    }
                    if (yf == null || yf == '') {
                        yf = '-';
                    }
                    if (gs == null || gs == '') {
                        gs = '-';
                    }
                    if (ss == null || ss == '') {
                        ss = '-';
                    }
                    if (zg == null || zg == '') {
                        zg = '-';
                    }
                    if (yq == null || yq == '') {
                        yq = '-';
                    }
                    if (hy == null || hy == '') {
                        hy = '-';
                    }
                    if (cf == null || cf == '') {
                        cf = '-';
                    }
                    if (hd == null || hd == '') {
                        hd = '-';
                    }
                    if (dh == null || dh == '') {
                        dh = '-';
                    }
                    if (cz == null || cz == '') {
                        cz = '-';
                    }
                    if (wz == null || wz == '') {
                        wz = '-';
                    }
                    if (yb == null || yb == '') {
                        yb = '-';
                    }
                    if (xx == null || xx == '') {
                        xx = '-';
                    }
                    if (jj == null || jj == '') {
                        jj = '-';
                    }
                    if (jc == null || jc == '') {
                        jc = '-';
                    }
                    if (yq == null || yq == '') {
                        yq = '-';
                    }
                    //新添加交易意向
                    if (rzxq == 'null' || rzxq == '') {
                        rzxq = '-';
                    }

                    if (nishan == null || nishan == '') {
                        //nishang = '-';
                        nishan = '-';//nishang与nishan
                    }
                    if (jwshan == null || jwshan == '') {
                        jwshan = '-';
                    }
                    if (bbkn == null || bbkn == '') {
                        bbkn = '-';
                    }
                    if (bgfx == null || bgfx == '') {
                        bgfx = '-';
                    }
                    if (bgdy == null || bgdy == '') {
                        bgdy = '-';
                    }
                    if (bglx == null || bglx == '') {
                        bglx = '-';
                    }
                    localStorage['qy'] = qy;
                    localStorage['jc'] = jc;
                    localStorage['xz'] = xz;
                    localStorage['zz'] = zz;
                    localStorage['fr'] = fr;
                    localStorage['gd'] = gd;
                    localStorage['yf'] = yf;
                    localStorage['gs'] = gs;
                    localStorage['ss'] = ss;
                    localStorage['zg'] = zg;
                    localStorage['yq'] = yq;
                    localStorage['hy'] = hy;
                    localStorage['cf'] = cf;
                    localStorage['hd'] = hd;
                    localStorage['dh'] = dh;
                    localStorage['cz'] = cz;
                    localStorage['wz'] = wz;
                    localStorage['yb'] = yb;
                    localStorage['xx'] = xx;
                    localStorage['jj'] = jj;
                    localStorage['zgs'] = zgs;
                    localStorage['yq'] = yq;
                    
                    //新添加交易意向
                    localStorage.rzxq = rzxq;
                    localStorage.rzed = rzed;
                    localStorage.nishan = nishan;
                    localStorage.jwshan = jwshan;
                    localStorage.bbkn = bbkn;
                    localStorage.bgfx = bgfx;
                    localStorage.bgdy = bgdy;
                    localStorage.bglx = bglx;


                    
                    if (isbuy == 1) {
                        location.href = '../enterprise-Content/gouresult.html';
                    } else {
                        location.href = '../enterprise-Content/enterprise-Content-payStyle.html';

                    }


                } else {
                    alert(json.msg);

                }

            }

           
        }
    });


}










