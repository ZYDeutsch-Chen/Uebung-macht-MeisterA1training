// A1-2进阶句框练习配置（优化版：42个句子）
const appConfig = {
  // 标题信息
  "title": "至元德语 - A1-2进阶句框练习",
  
  // A1-2例句数据（第二组：进阶句框练习 - 42个句子）
  "examples": [
    {
      "chinese": "您的孩子多久喝一次可乐？",
      "german": "Wie oft trinkt Ihr Kind Cola?",
      "verb": "trinken",
      "parts": [
        {"position": 1, "text": "Wie oft"},
        {"position": 2, "text": "trinkt"},
        {"position": 3, "text": "Ihr Kind"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Cola?"}
      ]
    },
    {
      "chinese": "您的家庭周末采购什么？",
      "german": "Was kauft Ihre Familie am Wochenende ein?",
      "verb": "kaufen",
      "parts": [
        {"position": 1, "text": "Was"},
        {"position": 2, "text": "kauft"},
        {"position": 3, "text": "Ihre Familie"},
        {"position": 4, "text": "am Wochenende"},
        {"position": 5, "text": "ein?"}
      ]
    },
    {
      "chinese": "您在哪里预订这个酒店？",
      "german": "Wo buchen Sie das Hotel?",
      "verb": "buchen",
      "parts": [
        {"position": 1, "text": "Wo"},
        {"position": 2, "text": "buchen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "das Hotel?"}
      ]
    },
    {
      "chinese": "您在哪里接您的女儿？",
      "german": "Wo holen Sie ihre Tochter ab?",
      "verb": "holen",
      "parts": [
        {"position": 1, "text": "Wo"},
        {"position": 2, "text": "holen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "ihre Tochter ab?"}
      ]
    },
    {
      "chinese": "您的家庭在柏林参观什么？",
      "german": "Was besichtigt Ihre Familie in Berlin?",
      "verb": "besichtigen",
      "parts": [
        {"position": 1, "text": "Was"},
        {"position": 2, "text": "besichtigt"},
        {"position": 3, "text": "Ihre Familie"},
        {"position": 4, "text": "in Berlin"},
        {"position": 5, "text": "-"}
      ]
    },
    {
      "chinese": "您周末会见您的朋友们吗？",
      "german": "Treffen Sie am Wochenende Ihre Freunde?",
      "verb": "treffen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Treffen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "am Wochenende"},
        {"position": 5, "text": "Ihre Freunde?"}
      ]
    },
    {
      "chinese": "您每天都看电视吗？",
      "german": "Sehen Sie jeden Tag fern?",
      "verb": "sehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Sehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "jeden Tag"},
        {"position": 5, "text": "fern?"}
      ]
    },
    {
      "chinese": "您的女儿喜欢吃冰淇淋吗？",
      "german": "Isst Ihre Tochter gern Eis?",
      "verb": "essen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Isst"},
        {"position": 3, "text": "Ihre Tochter"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Eis?"}
      ]
    },
    {
      "chinese": "您喜欢滑雪吗？",
      "german": "Fahren Sie gern Ski?",
      "verb": "fahren",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Fahren"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Ski?"}
      ]
    },
    {
      "chinese": "您什么时候乘坐公交车？",
      "german": "Wann nehmen Sie den Bus?",
      "verb": "nehmen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "nehmen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "den Bus?"}
      ]
    },
    {
      "chinese": "您怎样预订一张车票？",
      "german": "Wie buchen Sie eine Fahrkarte?",
      "verb": "buchen",
      "parts": [
        {"position": 1, "text": "Wie"},
        {"position": 2, "text": "buchen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "eine Fahrkarte?"}
      ]
    },
    {
      "chinese": "您的孩子在哪里上德语课？",
      "german": "Wo besucht Ihr Kind den Deutschkurs?",
      "verb": "besuchen",
      "parts": [
        {"position": 1, "text": "Wo"},
        {"position": 2, "text": "besucht"},
        {"position": 3, "text": "Ihr Kind"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "den Deutschkurs?"}
      ]
    },
    {
      "chinese": "您什么时候会见您的朋友们？",
      "german": "Wann treffen Sie ihre Freunde?",
      "verb": "treffen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "treffen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "ihre Freunde?"}
      ]
    },
    {
      "chinese": "您的儿子什么时候看电视？",
      "german": "Wann sieht Ihr Sohn fern?",
      "verb": "sehen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "sieht"},
        {"position": 3, "text": "Ihr Sohn"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "fern?"}
      ]
    },
    {
      "chinese": "您的家里谁开汽车？",
      "german": "Wer fährt Auto in Ihrer Familie?",
      "verb": "fahren",
      "parts": [
        {"position": 1, "text": "Wer"},
        {"position": 2, "text": "fährt"},
        {"position": 3, "text": "Auto"},
        {"position": 4, "text": "in Ihrer Familie"},
        {"position": 5, "text": "-"}
      ]
    },
    {
      "chinese": "您的孩子什么时候去睡觉？",
      "german": "Wann geht Ihr Kind ins Bett?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "geht"},
        {"position": 3, "text": "Ihr Kind"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "ins Bett?"}
      ]
    },
    {
      "chinese": "您的孩子怎么去学校？",
      "german": "Wie kommt Ihr Kind in die Schule?",
      "verb": "kommen",
      "parts": [
        {"position": 1, "text": "Wie"},
        {"position": 2, "text": "kommt"},
        {"position": 3, "text": "Ihr Kind"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "in die Schule?"}
      ]
    },
    {
      "chinese": "您的女朋友什么时候去迪斯科舞厅？",
      "german": "Wann geht Ihre Freundin in die Disco?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "geht"},
        {"position": 3, "text": "Ihre Freundin"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "in die Disco?"}
      ]
    },
    {
      "chinese": "您的丈夫什么时候有时间？",
      "german": "Wann hat Ihr Mann Zeit?",
      "verb": "haben",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "hat"},
        {"position": 3, "text": "Ihr Mann"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Zeit?"}
      ]
    },
    {
      "chinese": "您的家庭喜欢去哪里郊游？",
      "german": "Wohin macht Ihre Familie den Ausflug?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "Wohin"},
        {"position": 2, "text": "macht"},
        {"position": 3, "text": "Ihre Familie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "den Ausflug?"}
      ]
    },
    {
      "chinese": "您的女儿怎样庆祝生日？",
      "german": "Wie feiert Ihre Tochter Geburtstag?",
      "verb": "feiern",
      "parts": [
        {"position": 1, "text": "Wie"},
        {"position": 2, "text": "feiert"},
        {"position": 3, "text": "Ihre Tochter"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Geburtstag?"}
      ]
    },
    {
      "chinese": "您经常看电影吗？",
      "german": "Sehen Sie oft Filme an?",
      "verb": "sehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Sehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "Filme an?"}
      ]
    },
    {
      "chinese": "您的家庭在哪里滑雪？",
      "german": "Wo fährt Ihre Familie Ski?",
      "verb": "fahren",
      "parts": [
        {"position": 1, "text": "Wo"},
        {"position": 2, "text": "fährt"},
        {"position": 3, "text": "Ihre Familie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Ski?"}
      ]
    },
    {
      "chinese": "您有多少个兄弟姐妹？",
      "german": "Wie viele Geschwister haben Sie?",
      "verb": "haben",
      "parts": [
        {"position": 1, "text": "Wie viele Geschwister"},
        {"position": 2, "text": "haben"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "-"}
      ]
    },
    {
      "chinese": "您喜欢收集邮票吗？",
      "german": "Sammeln Sie gern Briefmarken?",
      "verb": "sammeln",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Sammeln"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Briefmarken?"}
      ]
    },
    {
      "chinese": "你喜欢和你的朋友们一起度假吗？",
      "german": "Machst du gern mit deinen Freunden Urlaub?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern mit deinen Freunden"},
        {"position": 5, "text": "Urlaub?"}
      ]
    },
    {
      "chinese": "你经常踢足球吗？",
      "german": "Spielst du oft Fußball?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Spielst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "Fußball?"}
      ]
    },
    {
      "chinese": "你喜欢散步吗？",
      "german": "Gehst du gern spazieren?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "spazieren?"}
      ]
    },
    {
      "chinese": "你喜欢去音乐会吗？",
      "german": "Gehst du gern ins Konzert?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "ins Konzert?"}
      ]
    },
    {
      "chinese": "你喜欢去学校吗？",
      "german": "Gehst du gern in die Schule?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "in die Schule?"}
      ]
    },
    {
      "chinese": "你有兄弟姐妹吗？",
      "german": "Hast du Geschwister?",
      "verb": "haben",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Hast"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Geschwister?"}
      ]
    },
    {
      "chinese": "你经常喝可乐吗？",
      "german": "Trinkst du oft Cola?",
      "verb": "trinken",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Trinkst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "Cola?"}
      ]
    },
    {
      "chinese": "你喜欢采购吗？",
      "german": "Kaufst du gern ein?",
      "verb": "kaufen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Kaufst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "ein?"}
      ]
    },
    {
      "chinese": "你喜欢看电视吗？",
      "german": "Siehst du gern fern?",
      "verb": "sehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Siehst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "fern?"}
      ]
    },
    {
      "chinese": "你经常骑自行车吗？",
      "german": "Fährst du oft Fahrrad?",
      "verb": "fahren",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Fährst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "Fahrrad?"}
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
      "chinese": "你经常在晚上做运动吗？",
      "german": "Machst du oft am Abend Sport?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "oft am Abend"},
        {"position": 5, "text": "Sport?"}
      ]
    },
    {
      "chinese": "你今天在哪里开派对？",
      "german": "Wo machst du heute die Party?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "Wo"},
        {"position": 2, "text": "machst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "heute"},
        {"position": 5, "text": "die Party?"}
      ]
    },
    {
      "chinese": "你经常打网球吗？",
      "german": "Spielst du oft Tennis?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Spielst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "Tennis?"}
      ]
    },
    {
      "chinese": "你今天早睡觉吗？",
      "german": "Gehst du heute früh ins Bett?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "heute früh"},
        {"position": 5, "text": "ins Bett?"}
      ]
    },
    {
      "chinese": "你周日有时间吗？",
      "german": "Hast du am Sonntag Zeit?",
      "verb": "haben",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Hast"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "am Sonntag"},
        {"position": 5, "text": "Zeit?"}
      ]
    },
    {
      "chinese": "您的儿子做什么运动？",
      "german": "Welcher Sport macht Ihr Sohn?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "Welcher Sport"},
        {"position": 2, "text": "macht"},
        {"position": 3, "text": "Ihr Sohn"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "-"}
      ]
    }
  ],
  
  // UI文本
  "uiText": {
    "header": "至元德语 - A1-2进阶句框练习",
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