// A1-3高级句框练习配置（优化版：45个句子）
const appConfig = {
  // 标题信息
  "title": "至元德语 - A1-3高级句框练习",
  
  // A1-3例句数据（第三组：高级句框练习 - 45个句子）
  "examples": [
    {
      "chinese": "你在学校休息吗？",
      "german": "Machst du in der Schule Pause?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "in der Schule"},
        {"position": 5, "text": "Pause?"}
      ]
    },
    {
      "chinese": "你喜欢玩电脑吗？",
      "german": "Spielst du gern Computer?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Spielst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Computer?"}
      ]
    },
    {
      "chinese": "你在业余时间去电影院吗？",
      "german": "Gehst du in der Freizeit ins Kino?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "in der Freizeit"},
        {"position": 5, "text": "ins Kino?"}
      ]
    },
    {
      "chinese": "你现在预订这个酒店吗？",
      "german": "Buchst du jetzt das Hotel?",
      "verb": "buchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Buchst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "jetzt"},
        {"position": 5, "text": "das Hotel?"}
      ]
    },
    {
      "chinese": "你周四给我打电话吗？",
      "german": "Rufst du mich am Donnerstag an?",
      "verb": "rufen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Rufst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "am Donnerstag"},
        {"position": 5, "text": "mich an?"}
      ]
    },
    {
      "chinese": "你周二拜访你的朋友们吗？",
      "german": "Besuchst du am Dienstag deine Freunde?",
      "verb": "besuchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Besuchst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "am Dienstag"},
        {"position": 5, "text": "deine Freunde?"}
      ]
    },
    {
      "chinese": "你参观那些名胜古迹吗？",
      "german": "Besichtigst du die Sehenswürdigkeiten?",
      "verb": "besichtigen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Besichtigst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "die Sehenswürdigkeiten?"}
      ]
    },
    {
      "chinese": "你写一张明信片吗？",
      "german": "Schreibst du eine Postkarte?",
      "verb": "schreiben",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Schreibst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "eine Postkarte?"}
      ]
    },
    {
      "chinese": "你和你的朋友们一起庆祝生日吗？",
      "german": "Feierst du mit deinen Freunden Geburtstag?",
      "verb": "feiern",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Feierst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "mit deinen Freunden"},
        {"position": 5, "text": "Geburtstag?"}
      ]
    },
    {
      "chinese": "你今天会见你的朋友们吗？",
      "german": "Triffst du heute deine Freunde?",
      "verb": "treffen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Triffst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "heute"},
        {"position": 5, "text": "deine Freunde?"}
      ]
    },
    {
      "chinese": "你喜欢读报纸吗？",
      "german": "Liest du gern Zeitung?",
      "verb": "lesen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Liest"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Zeitung?"}
      ]
    },
    {
      "chinese": "您的家庭喜欢看电影吗？",
      "german": "Sieht Ihre Familie gern Filme an?",
      "verb": "sehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Sieht"},
        {"position": 3, "text": "Ihre Familie"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Filme an?"}
      ]
    },
    {
      "chinese": "你从不吃冰淇淋吗？",
      "german": "Isst du nie Eis?",
      "verb": "essen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Isst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "nie"},
        {"position": 5, "text": "Eis?"}
      ]
    },
    {
      "chinese": "你周末开汽车吗？",
      "german": "Fährst du am Wochenende Auto?",
      "verb": "fahren",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Fährst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "am Wochenende"},
        {"position": 5, "text": "Auto?"}
      ]
    },
    {
      "chinese": "你现在乘坐公交车吗？",
      "german": "Nimmst du jetzt den Bus?",
      "verb": "nehmen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Nimmst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "jetzt"},
        {"position": 5, "text": "den Bus?"}
      ]
    },
    {
      "chinese": "您的儿子今天穿什么？",
      "german": "Was trägt Ihr Sohn heute?",
      "verb": "tragen",
      "parts": [
        {"position": 1, "text": "Was"},
        {"position": 2, "text": "trägt"},
        {"position": 3, "text": "Ihr Sohn"},
        {"position": 4, "text": "heute"},
        {"position": 5, "text": "-"}
      ]
    },
    {
      "chinese": "您什么时候给您的朋友们打电话？",
      "german": "Wann rufen Sie Ihre Freunde an?",
      "verb": "rufen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "rufen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Ihre Freunde an?"}
      ]
    },
    {
      "chinese": "您什么时候拜访您的邻居们？",
      "german": "Wann besuchen Sie Ihre Nachbarn?",
      "verb": "besuchen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "besuchen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Ihre Nachbarn?"}
      ]
    },
    {
      "chinese": "您喜欢和您的朋友们一起骑自行车吗？",
      "german": "Fahren Sie gern mit ihren Freunden Fahrrad?",
      "verb": "fahren",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Fahren"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "gern mit ihren Freunden"},
        {"position": 5, "text": "Fahrrad?"}
      ]
    },
    {
      "chinese": "您经常乘坐出租车吗？",
      "german": "Nehmen Sie oft Taxi?",
      "verb": "nehmen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Nehmen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "Taxi?"}
      ]
    },
    {
      "chinese": "您的儿子听什么音乐？",
      "german": "Welche Musik hört Ihr Sohn?",
      "verb": "hören",
      "parts": [
        {"position": 1, "text": "Welche Musik"},
        {"position": 2, "text": "hört"},
        {"position": 3, "text": "Ihr Sohn"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "-"}
      ]
    },
    {
      "chinese": "您最喜欢看哪部电影？",
      "german": "Welchen Film sehen Sie am liebsten an?",
      "verb": "sehen",
      "parts": [
        {"position": 1, "text": "Welchen Film"},
        {"position": 2, "text": "sehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "am liebsten"},
        {"position": 5, "text": "an?"}
      ]
    },
    {
      "chinese": "您今天探望病人吗？",
      "german": "Besuchen Sie heute den Kranken?",
      "verb": "besuchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Besuchen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "heute"},
        {"position": 5, "text": "den Kranken?"}
      ]
    },
    {
      "chinese": "您周三参观市政厅吗？",
      "german": "Besichtigen Sie am Mittwoch das Rathaus?",
      "verb": "besichtigen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Besichtigen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "am Mittwoch"},
        {"position": 5, "text": "das Rathaus?"}
      ]
    },
    {
      "chinese": "您在周五写一封邀请函吗？",
      "german": "Schreiben Sie am Freitag eine Einladung?",
      "verb": "schreiben",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Schreiben"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "am Freitag"},
        {"position": 5, "text": "eine Einladung?"}
      ]
    },
    {
      "chinese": "你现在在做你的家庭作业吗？",
      "german": "Machst du jetzt deine Hausaufgaben?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "jetzt"},
        {"position": 5, "text": "deine Hausaufgaben?"}
      ]
    },
    {
      "chinese": "你喜欢打牌吗？",
      "german": "Spielst du gern Karten?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Spielst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Karten?"}
      ]
    },
    {
      "chinese": "你喜欢去餐馆吗？",
      "german": "Gehst du gern ins Restaurant?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "ins Restaurant?"}
      ]
    },
    {
      "chinese": "你在网上预订一张车票吗？",
      "german": "Buchst du im Internet eine Fahrkarte?",
      "verb": "buchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Buchst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "im Internet"},
        {"position": 5, "text": "eine Fahrkarte?"}
      ]
    },
    {
      "chinese": "你来机场接我吗？",
      "german": "Holst du mich am Flughafen ab?",
      "verb": "holen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Holst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "am Flughafen"},
        {"position": 5, "text": "mich ab?"}
      ]
    },
    {
      "chinese": "你夏天上一个德语课吗？",
      "german": "Besuchst du im Sommer einen Deutschkurs?",
      "verb": "besuchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Besuchst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "im Sommer"},
        {"position": 5, "text": "einen Deutschkurs?"}
      ]
    },
    {
      "chinese": "你收集邮票吗？",
      "german": "Sammelst du Briefmarken?",
      "verb": "sammeln",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Sammelst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Briefmarken?"}
      ]
    },
    {
      "chinese": "你邀请我去派对吗？",
      "german": "Lädst du mich zur Party ein?",
      "verb": "laden",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Lädst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "zur Party"},
        {"position": 5, "text": "mich ein?"}
      ]
    },
    {
      "chinese": "你冬天滑雪吗？",
      "german": "Fährst du im Winter Ski?",
      "verb": "fahren",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Fährst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "im Winter"},
        {"position": 5, "text": "Ski?"}
      ]
    },
    {
      "chinese": "你喜欢穿牛仔裤吗？",
      "german": "Trägst du gern Jeans?",
      "verb": "tragen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Trägst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Jeans?"}
      ]
    },
    {
      "chinese": "您什么时候邀请您的同事们？",
      "german": "Wann laden Sie Ihre Kollegen ein?",
      "verb": "laden",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "laden"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Ihre Kollegen ein?"}
      ]
    },
    {
      "chinese": "您每年庆祝生日吗？",
      "german": "Feiern Sie jedes Jahr Geburtstag?",
      "verb": "feiern",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Feiern"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "jedes Jahr"},
        {"position": 5, "text": "Geburtstag?"}
      ]
    },
    {
      "chinese": "您邀请您的朋友们来烧烤派对吗？",
      "german": "Laden Sie Ihre Freunde zur Grillparty ein?",
      "verb": "laden",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Laden"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "zur Grillparty"},
        {"position": 5, "text": "Ihre Freunde ein?"}
      ]
    },
    {
      "chinese": "您和谁一起打网球？",
      "german": "Mit wem spielen Sie Tennis?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "Mit wem"},
        {"position": 2, "text": "spielen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Tennis?"}
      ]
    },
    {
      "chinese": "您和谁一起去音乐会？",
      "german": "Mit wem gehen Sie ins Konzert?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "Mit wem"},
        {"position": 2, "text": "gehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "ins Konzert?"}
      ]
    },
    {
      "chinese": "您的孩子最喜欢读什么？",
      "german": "Was liest Ihr Kind am liebsten?",
      "verb": "lesen",
      "parts": [
        {"position": 1, "text": "Was"},
        {"position": 2, "text": "liest"},
        {"position": 3, "text": "Ihr Kind"},
        {"position": 4, "text": "am liebsten"},
        {"position": 5, "text": "-"}
      ]
    },
    {
      "chinese": "您的女儿多久去一次电影院？",
      "german": "Wie oft geht Ihre Tochter ins Kino?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "Wie oft"},
        {"position": 2, "text": "geht"},
        {"position": 3, "text": "Ihre Tochter"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "ins Kino?"}
      ]
    },
    {
      "chinese": "您圣诞节（会）做一份礼物吗？",
      "german": "Machen Sie zu Weihnachten ein Geschenk?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "zu Weihnachten"},
        {"position": 5, "text": "ein Geschenk?"}
      ]
    },
    {
      "chinese": "你周六去迪斯科舞厅吗？",
      "german": "Gehst du am Samstag in die Disco?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "am Samstag"},
        {"position": 5, "text": "in die Disco?"}
      ]
    },
    {
      "chinese": "你周六看医生吗？",
      "german": "Besuchst du am Samstag den Arzt?",
      "verb": "besuchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Besuchst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "am Samstag"},
        {"position": 5, "text": "den Arzt?"}
      ]
    }
  ],
  
  // UI文本
  "uiText": {
    "header": "至元德语 - A1-3高级句框练习",
    "btnAnswer": "看答案",
    "btnReset": "重试",
    "btnNext": "下一句",
    "instructionsTitle": "如何使用造句器",
    "instructionSteps": [
      "阅读中文句子",
      "按照5位模型造句",
      "依次点击卡片验证",
      "不会造句-点击\"看答案\"",
      "重新尝试-点击\"重试\"",
      "完成造句-点击\"下一句\""
    ],
    "copyrightLines": [
      "仅至元德语内部学员使用",
      "未经同意请勿转发和商用"
    ]
  },
  
  // 样式配置
  "styles": {
    "headerColor": "#f3a233",
    "buttonColors": {
      "answer": "#e74c3c",
      "reset": "#f39c12", 
      "next": "#27ae60"
    }
  }
};