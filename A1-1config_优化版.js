// A1-1基础句框练习配置（优化版：40个句子）
const appConfig = {
  // 标题信息
  "title": "至元德语 - A1-1基础句框练习",
  
  // A1-1例句数据（第一组：基础句框练习 - 40个句子）
  "examples": [
    {
      "chinese": "您经常度假吗？",
      "german": "Machen Sie oft Urlaub?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "Urlaub?"}
      ]
    },
    {
      "chinese": "您喜欢踢足球吗？",
      "german": "Spielen Sie gern Fußball?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Spielen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Fußball?"}
      ]
    },
    {
      "chinese": "您和您的家人一起去散步吗？",
      "german": "Gehen Sie mit Ihrer Familie spazieren?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "mit Ihrer Familie"},
        {"position": 5, "text": "spazieren?"}
      ]
    },
    {
      "chinese": "您现在有时间吗？",
      "german": "Haben Sie jetzt Zeit?",
      "verb": "haben",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Haben"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "jetzt"},
        {"position": 5, "text": "Zeit?"}
      ]
    },
    {
      "chinese": "您经常听音乐吗？",
      "german": "Hören Sie oft Musik?",
      "verb": "hören",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Hören"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "Musik?"}
      ]
    },
    {
      "chinese": "您的家庭喜欢在哪里度假？",
      "german": "Wo macht Ihre Familie gern Urlaub?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "Wo"},
        {"position": 2, "text": "macht"},
        {"position": 3, "text": "Ihre Familie"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Urlaub?"}
      ]
    },
    {
      "chinese": "您周一打网球吗？",
      "german": "Spielen Sie am Montag Tennis?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Spielen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "am Montag"},
        {"position": 5, "text": "Tennis?"}
      ]
    },
    {
      "chinese": "您经常去电影院吗？",
      "german": "Gehen Sie oft ins Kino?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "ins Kino?"}
      ]
    },
    {
      "chinese": "您喜欢喝可乐吗？",
      "german": "Trinken Sie gern Cola?",
      "verb": "trinken",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Trinken"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "Cola?"}
      ]
    },
    {
      "chinese": "您喜欢在超市购物吗？",
      "german": "Kaufen Sie gern im Supermarkt ein?",
      "verb": "kaufen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Kaufen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "gern im Supermarkt"},
        {"position": 5, "text": "ein?"}
      ]
    },
    {
      "chinese": "您现在在休息吗？",
      "german": "Machen Sie jetzt eine Pause?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "jetzt"},
        {"position": 5, "text": "eine Pause?"}
      ]
    },
    {
      "chinese": "您的儿子玩电脑吗？",
      "german": "Spielt Ihr Sohn Computer?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Spielt"},
        {"position": 3, "text": "Ihr Sohn"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Computer?"}
      ]
    },
    {
      "chinese": "您现在去睡觉吗？",
      "german": "Gehen Sie jetzt ins Bett?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "jetzt"},
        {"position": 5, "text": "ins Bett?"}
      ]
    },
    {
      "chinese": "您有兄弟姐妹吗？",
      "german": "Haben Sie Geschwister?",
      "verb": "haben",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Haben"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Geschwister?"}
      ]
    },
    {
      "chinese": "您预订一个酒店吗？",
      "german": "Buchen Sie ein Hotel?",
      "verb": "buchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Buchen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "ein Hotel?"}
      ]
    },
    {
      "chinese": "您什么时候休息？",
      "german": "Wann machen Sie Pause?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "machen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Pause?"}
      ]
    },
    {
      "chinese": "您的孩子们在哪里踢足球？",
      "german": "Wo spielen Ihre Kinder Fußball?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "Wo"},
        {"position": 2, "text": "spielen"},
        {"position": 3, "text": "Ihre Kinder"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Fußball?"}
      ]
    },
    {
      "chinese": "您有时去餐馆吗？",
      "german": "Gehen Sie manchmal ins Restaurant?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "manchmal"},
        {"position": 5, "text": "ins Restaurant?"}
      ]
    },
    {
      "chinese": "您（去）接您的朋友们吗？",
      "german": "Holen Sie Ihre Freunde ab?",
      "verb": "holen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Holen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Ihre Freunde ab?"}
      ]
    },
    {
      "chinese": "您周末拜访您的祖父母吗？",
      "german": "Besuchen Sie am Wochenende Ihre Großeltern?",
      "verb": "besuchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Besuchen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "am Wochenende"},
        {"position": 5, "text": "Ihre Großeltern?"}
      ]
    },
    {
      "chinese": "您周末去郊游吗？",
      "german": "Machen Sie am Wochenende einen Ausflug?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "am Wochenende"},
        {"position": 5, "text": "einen Ausflug?"}
      ]
    },
    {
      "chinese": "您什么时候玩电脑？",
      "german": "Wann spielen Sie Computer?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "spielen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Computer?"}
      ]
    },
    {
      "chinese": "您有时去音乐会吗？",
      "german": "Gehen Sie manchmal ins Konzert?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "manchmal"},
        {"position": 5, "text": "ins Konzert?"}
      ]
    },
    {
      "chinese": "您预订一张车票吗？",
      "german": "Buchen Sie eine Fahrkarte?",
      "verb": "buchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Buchen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "eine Fahrkarte?"}
      ]
    },
    {
      "chinese": "您每天都做运动吗？",
      "german": "Machen Sie jeden Tag Sport?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "jeden Tag"},
        {"position": 5, "text": "Sport?"}
      ]
    },
    {
      "chinese": "您一直打牌吗？",
      "german": "Spielen Sie immer Karten?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Spielen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "immer"},
        {"position": 5, "text": "Karten?"}
      ]
    },
    {
      "chinese": "您的女儿每天去上学吗？",
      "german": "Geht Ihre Tochter jeden Tag in die Schule?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Geht"},
        {"position": 3, "text": "Ihre Tochter"},
        {"position": 4, "text": "jeden Tag"},
        {"position": 5, "text": "in die Schule?"}
      ]
    },
    {
      "chinese": "您看书吗？",
      "german": "Lesen Sie Bücher?",
      "verb": "lesen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Lesen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Bücher?"}
      ]
    },
    {
      "chinese": "您在哪里骑自行车？",
      "german": "Wo fahren Sie Fahrrad?",
      "verb": "fahren",
      "parts": [
        {"position": 1, "text": "Wo"},
        {"position": 2, "text": "fahren"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Fahrrad?"}
      ]
    },
    {
      "chinese": "您今天吃冰淇淋吗？",
      "german": "Essen Sie heute Eis?",
      "verb": "essen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Essen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "heute"},
        {"position": 5, "text": "Eis?"}
      ]
    },
    {
      "chinese": "您每天都做家庭作业吗？",
      "german": "Machen Sie jeden Tag die Hausaufgaben?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "jeden Tag"},
        {"position": 5, "text": "die Hausaufgaben?"}
      ]
    },
    {
      "chinese": "您的家人什么时候打牌？",
      "german": "Wann spielt Ihre Familie Karten?",
      "verb": "spielen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "spielt"},
        {"position": 3, "text": "Ihre Familie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Karten?"}
      ]
    },
    {
      "chinese": "您喜欢去迪斯科舞厅吗？",
      "german": "Gehen Sie gern in die Disco?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Gehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "gern"},
        {"position": 5, "text": "in die Disco?"}
      ]
    },
    {
      "chinese": "您每天都上德语课吗？",
      "german": "Besuchen Sie jeden Tag Deutschkurs?",
      "verb": "besuchen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Besuchen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "jeden Tag"},
        {"position": 5, "text": "Deutschkurs?"}
      ]
    },
    {
      "chinese": "您的孩子们什么时候做家庭作业？",
      "german": "Wann machen Ihre Kinder die Hausaufgaben?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "machen"},
        {"position": 3, "text": "Ihre Kinder"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "die Hausaufgaben?"}
      ]
    },
    {
      "chinese": "您开汽车吗？",
      "german": "Fahren Sie Auto?",
      "verb": "fahren",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Fahren"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Auto?"}
      ]
    },
    {
      "chinese": "您周末举办烧烤派对吗？",
      "german": "Machen Sie am Wochenende eine Grillparty?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Machen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "am Wochenende"},
        {"position": 5, "text": "eine Grillparty?"}
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
      "chinese": "您的女朋友什么时候开派对？",
      "german": "Wann macht Ihre Freundin Party?",
      "verb": "machen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "macht"},
        {"position": 3, "text": "Ihre Freundin"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "Party?"}
      ]
    },
    {
      "chinese": "您经常什么时候去散步？",
      "german": "Wann gehen Sie oft spazieren?",
      "verb": "gehen",
      "parts": [
        {"position": 1, "text": "Wann"},
        {"position": 2, "text": "gehen"},
        {"position": 3, "text": "Sie"},
        {"position": 4, "text": "oft"},
        {"position": 5, "text": "spazieren?"}
      ]
    }
  ],
  
  // UI文本
  "uiText": {
    "header": "至元德语 - A1-1基础句框练习",
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