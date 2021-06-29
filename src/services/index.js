// 调用数据/函数

import $ from "jquery";  //VS import Vue from 'vue'

var token = "ba271cb7990495ac11751679113b0737"
let types = null;
export function getTypes() {
    return new Promise((resolve, reject) => {
        if (types) {
            return setTimeout(() => {
                resolve(types);
            }, 1000);
        }

        $.ajax({
            url: "https://www.senyuan88.cn/cargo/infoTypes",
            headers: {
                token
            },
            success(res) {
                if (res.code != 0) {   //数据连接畅通
                    return reject(res.msg);
                }

                types = res.data;
                resolve(res.data);
            },
            error(err) {   //数据连接又问题，404
                reject(err);
            }
        })
    })
}

export function getData(call, tag, page = 0) {
    if (getData.isLoading) {    //getData.isLoading=false
        return
    }

    getData.isLoading = true;
    $.ajax({
        url: `https://www.senyuan88.cn/cargo/info?page=${page}&tag=${tag}&level=4&needExcept=0`,
        params: {},
        headers: {
            token
        },
        success(res) {
            if (res.code == 0) {
                return call && call(res.data.list);
            } else {
                console.log("错误", res)
            }
        },
        error(err) {
            console.log(err)
        },
        complete() {  //!!!
            getData.isLoading = false
        }
    })
}


export function time(at) {
    var day = new Date(at);
    var year = day.getFullYear() + "";
    var years = year.substr(2, 2) == 21 ? "" : year.substr(2, 2) + "-"
    var month = day.getMonth() < 9 ? "0" + Number(day.getMonth() + 1) : Number(day.getMonth() + 1);
    var date = day.getDate() < 10 ? "0" + day.getDate() : day.getDate();
    var hours = day.getHours() < 10 ? "0" + day.getHours() : day.getHours();
    var minutes = day.getMinutes() < 10 ? "0" + day.getMinutes() : day.getMinutes();
    var tim = years + month + "-" + date + " " + hours + ":" + minutes;
    return tim;
}

export function loc(region) {
    var location = region.split("-").join("•")
    return location;
}

export function down(callback) {
    window.onscroll = () => {
        var h = document.body.scrollHeight - (document.documentElement.scrollTop + innerHeight)
        if (h == 0) {
            callback()
        }
    }
}

//详情页
export function getInfo(id) {    //id在sec里面找 ??
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://www.senyuan88.cn/cargo/info/${id}`,
            headers: {
                token
            },
            success(res) {
                resolve(res.data);
            },
            error(err) {
                reject(err)
            }
        })
    })
}
