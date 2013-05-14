﻿(function($,defaultConfig){
    $(function () {
        var gameConfig = {};

        var requestHandler = {
            saveGameConfig: function (req) {

            },
            saveBattleConfig: function (req, sender, sendResponse) {//保存战斗配置
                gameConfig.battle = req.battle;
                localStorage['GameConfig'] = JSON.stringify(gameConfig);
            },
            getGameConfig: function (req, sender, sendResponse) {
                sendResponse(gameConfig);
            }
        };


        if (localStorage['GameConfig'] === undefined) {
            gameConfig = defaultConfig;
            localStorage['GameConfig'] = JSON.stringify(defaultConfig);
        } else {
            gameConfig = JSON.parse(localStorage['GameConfig']);
        }


        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            console.log(2);
            requestHandler[request.action](request,sender,sendResponse);//根据request.action执行相应处理，request为参数
        });


    });



})(jQuery,DefaultConfig);



