// Module revealing Pattern
let MyApp = MyApp || {};
MyApp.sapient = {};
MyApp.sapient.nitro = {};

export default MyApp.sapient.nitro = (function(ns){
    'use strict';

    ns.methodA = function(){
        return{
            getDay:function(){
                return new Date().getDay();
            }
        }
    }
    ns.methodB = function(){
        return{
            getMonth:function(){
                return new Date().getMonth();
            }
        }
    }

    // Closures to expose private members as public interfaces
    return ns
}(MyApp.sapient.nitro || {}));