if (localStorage.KeyId != undefined && localStorage.KeyId != '' && localStorage.KeyId !=null ) {
    $.ajax({
        url: serviceAddress + "api/MobileUser/CheckLogin",
        type: "GET",
        data: { KeyId: localStorage.KeyId },
        success: function (json) {
            // debugger;
            if (json.result == 1) {
                alert('用户已在其他设备登录');
                localStorage.clean = 1;
                location.href = serviceAddress+'/H5/login.html';
                // location.href = 'http://tbdm.jusfoun.com/h5/index.html';
               //location.href = 'http://localhost/h5/index.html';
                //location.href = 'http://192.168.1.9:8014/H5/index.html';
            }
        }
    });
}

