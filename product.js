var productList = [
	// shfe
	{
		"productID": "cu",
		"productName": "黄铜",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 18,
		"product_type":"futures"
	},
	{
		"productID": "al",
		"productName": "铝",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17,
		"product_type":"futures"
	},
	{
		"productID": "zn",
		"productName": "锌",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 18,
		"product_type":"futures"
	},
	{
		"productID": "pb",
		"productName": "铅",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 18,
		"product_type":"futures"
	},
	{
		"productID": "ru",
		"productName": "橡胶",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 20,
		"product_type":"futures"
	},
	{
		"productID": "au",
		"productName": "黄金",
		"multiplier": 1000,
		"multiplierType": "克/手",
		"priceType": "元/克",
		"marginType": "元/手",
		"rateValue": 16,
		"product_type":"futures"
	},	
	{
		"productID": "fu",
		"productName": "燃料油",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 21,
		"product_type":"futures"
	},
	{
		"productID": "rb",
		"productName": "螺纹钢",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 18,
		"product_type":"futures"
	},
	{
		"productID": "wr",
		"productName": "线材",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 24,
		"product_type":"futures"
	},
	{
		"productID": "ag",
		"productName": "白银",
		"multiplier": 15,
		"multiplierType": "千克/手",
		"priceType": "元/千克",
		"marginType": "元/手",
		"rateValue": 19,
		"product_type":"futures"
	},
	{
		"productID": "bu",
		"productName": "沥青",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 21,
		"product_type":"futures"
	},
	{
		"productID": "hc",
		"productName": "热卷",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 18,
		"product_type":"futures"
	},
	{
		"productID": "ni",
		"productName": "镍",
		"multiplier": 1,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 19,
		"product_type":"futures"
	},
	{
		"productID": "ss",
		"productName": "不锈钢",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 18,
		"product_type":"futures"
	},
	{
		"productID": "sn",
		"productName": "锡",
		"multiplier": 1,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 18,
		"product_type":"futures"
	},
	{
		"productID": "sp",
		"productName": "纸浆",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15,
		"product_type":"futures"
	},
	{
		"productID": "cu-P",
		"productName": "铜看跌期权",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 18,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "cu-C",
		"productName": "铜看涨期权",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 18,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	{
		"productID": "au-P",
		"productName": "黄金看跌期权",
		"multiplier": 1000,
		"multiplierType": "克/手",
		"priceType": "元/克",
		"marginType": "元/手",
		"rateValue": 16,
		'strike_type': "克/手",
		'last_type': "克/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "au-C",
		"productName": "黄金看涨期权",
		"multiplier": 1000,
		"multiplierType": "克/手",
		"priceType": "元/克",
		"marginType": "元/手",
		"rateValue": 16,
		'strike_type': "克/手",
		'last_type': "克/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	{
		"productID": "ru-P",
		"productName": "橡胶看跌期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 20,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "ru-C",
		"productName": "橡胶看涨期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 20,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	// ine
	{
		"productID": "sc",
		"productName": "原油",
		"multiplier": 1000,
		"multiplierType": "桶/手",
		"priceType": "元/桶",
		"marginType": "元/手",
		"rateValue": 24,
		"product_type":"futures"
	},
	{
		"productID": "nr",
		"productName": "20号胶",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 20,
		"product_type":"futures"
	},
	// dce
	{
		"productID": "a",
		"productName": "黄大豆",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "b",
		"productName": "黄豆2号",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "c",
		"productName": "玉米",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11,
		"product_type":"futures"
	},
	{
		"productID": "cs",
		"productName": "淀粉",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11,
		"product_type":"futures"
	},
	{
		"productID": "m",
		"productName": "豆粕",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "y",
		"productName": "豆油",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "p",
		"productName": "棕榈油",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 16,
		"product_type":"futures"
	},
	{
		"productID": "l",
		"productName": "聚乙烯",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17,
		"product_type":"futures"
	},
	{
		"productID": "v",
		"productName": "聚氯乙烯",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17,
		"product_type":"futures"
	},
	{
		"productID": "j",
		"productName": "焦炭",
		"multiplier": 100,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17,
		"product_type":"futures"
	},
	{
		"productID": "jm",
		"productName": "焦煤",
		"multiplier": 60,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17,
		"product_type":"futures"
	},
	{
		"productID": "i",
		"productName": "铁矿石",
		"multiplier": 100,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 19,
		"product_type":"futures"
	},
	{
		"productID": "jd",
		"productName": "鸡蛋",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/500千克",
		"marginType": "元/手",
		"rateValue": 16,
		"product_type":"futures"
	},
	{
		"productID": "bb",
		"productName": "胶合板",
		"multiplier": 500,
		"multiplierType": "张/手",
		"priceType": "元/张",
		"marginType": "元/手",
		"rateValue": 30,
		"product_type":"futures"
	},
	{
		"productID": "fb",
		"productName": "纤维板",
		"multiplier": 10,
		"multiplierType": "立方米/手",
		"priceType": "元/立方米",
		"marginType": "元/手",
		"rateValue": 25,
		"product_type":"futures"
	},
	{
		"productID": "pp",
		"productName": "聚丙烯",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17,
		"product_type":"futures"
	},
	{
		"productID": "eg",
		"productName": "乙二醇",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 21,
		"product_type":"futures"
	},
	{
		"productID": "rr",
		"productName": "粳米",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11,
		"product_type":"futures"
	},
	{
		"productID": "eb",
		"productName": "苯乙烯",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 20,
		"product_type":"futures"
	},
	{
		"productID": "m-P",
		"productName": "豆粕看跌期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "m-C",
		"productName": "豆粕看涨期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	{
		"productID": "c-P",
		"productName": "玉米看跌期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "c-C",
		"productName": "玉米看涨期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	{
		"productID": "i-P",
		"productName": "铁矿石看跌期权",
		"multiplier": 100,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "i-C",
		"productName": "铁矿石看涨期权",
		"multiplier": 100,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	// czce
	{
		"productID": "WH",
		"productName": "强麦",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15,
		"product_type":"futures"
	},
	{
		"productID": "RI",
		"productName": "早籼稻",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 40,
		"product_type":"futures"
	},
	{
		"productID": "LR",
		"productName": "晚籼稻",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 40,
		"product_type":"futures"
	},
	{
		"productID": "CF",
		"productName": "棉一号",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "SR",
		"productName": "白砂糖",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 12,
		"product_type":"futures"
	},
	{
		"productID": "TA",
		"productName": "PTA",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 16,
		"product_type":"futures"
	},
	{
		"productID": "OI",
		"productName": "菜籽油",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "MA",
		"productName": "甲醇",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17,
		"product_type":"futures"
	},
	{
		"productID": "PM",
		"productName": "普麦",
		"multiplier": 50,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 40,
		"product_type":"futures"
	},
	{
		"productID": "FG",
		"productName": "玻璃",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11,
		"product_type":"futures"
	},
	{
		"productID": "RS",
		"productName": "油菜籽",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 40,
		"product_type":"futures"
	},
	{
		"productID": "RM",
		"productName": "菜籽粕",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 14,
		"product_type":"futures"
	},
	{
		"productID": "ZC",
		"productName": "动力煤",
		"multiplier": 100,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "JR",
		"productName": "粳稻",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 40,
		"product_type":"futures"
	},
	{
		"productID": "SF",
		"productName": "硅铁",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15,
		"product_type":"futures"
	},
	{
		"productID": "SM",
		"productName": "锰硅",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15,
		"product_type":"futures"
	},
	{
		"productID": "CY",
		"productName": "棉纱",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 25,
		"product_type":"futures"
	},
	{
		"productID": "AP",
		"productName": "苹果",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15,
		"product_type":"futures"
	},
	{
		"productID": "CJ",
		"productName": "红枣",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "UR",
		"productName": "尿素",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 12,
		"product_type":"futures"
	},
	{
		"productID": "SA",
		"productName": "纯碱",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 12,
		"product_type":"futures"
	},
	{
		"productID": "CF-P",
		"productName": "棉花看跌期权",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "CF-C",
		"productName": "棉花看涨期权",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	{
		"productID": "SR-P",
		"productName": "白糖看跌期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 12,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "SR-C",
		"productName": "白糖看涨期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 12,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	{
		"productID": "TA-P",
		"productName": "PTA看跌期权",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 16,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "TA-C",
		"productName": "PTA看涨期权",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 16,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	{
		"productID": "MA-P",
		"productName": "甲醇看跌期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 14,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "P",
		"product_type":"options"
	},
	{
		"productID": "MA-C",
		"productName": "甲醇看涨期权",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 14,
		'strike_type': "吨/手",
		'last_type': "吨/手",
		'otm_type': '元/手',
		"options_type": "C",
		"product_type":"options"
	},
	// cffex
	{
		"productID": "IF",
		"productName": "沪深300",
		"multiplier": 300,
		"multiplierType": "元/点",
		"priceType": "点/手",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "IH",
		"productName": "上证50",
		"multiplier": 300,
		"multiplierType": "元/点",
		"priceType": "点/手",
		"marginType": "元/手",
		"rateValue": 13,
		"product_type":"futures"
	},
	{
		"productID": "IC",
		"productName": "中证500",
		"multiplier": 200,
		"multiplierType": "元/点",
		"priceType": "点/手",
		"marginType": "元/手",
		"rateValue": 15,
		"product_type":"futures"
	},
	{
		"productID": "TS",
		"productName": "两年国债",
		"multiplier": 20000,
		"multiplierType": "元",
		"priceType": "元",
		"marginType": "元/手",
		"rateValue": 1.0,
		"product_type":"futures"
	},
	{
		"productID": "TF",
		"productName": "五年国债",
		"multiplier": 10000,
		"multiplierType": "元",
		"priceType": "元",
		"marginType": "元/手",
		"rateValue": 2.2,
		"product_type":"futures"
	},
	{
		"productID": "T",
		"productName": "十年国债",
		"multiplier": 10000,
		"multiplierType": "元",
		"priceType": "元",
		"marginType": "元/手",
		"rateValue": 3,
		"product_type":"futures"
	},
	{
		"productID": "IO-P",
		"productName": "沪深300看涨期权",
		"multiplier": 100,
		"multiplierType": "元/点",
		"priceType": "点/手",
		"marginType": "元/手",
		"rateValue": 13,
		"coefficient": 50,
		'strike_type': "元/点",
		'last_type': "元/点",
		'otm_type': '元/点',
		"options_type": "P",
		"product_type":"spotoption"
	}
	,
	{
		"productID": "IO-C",
		"productName": "沪深300看跌期权",
		"multiplier": 100,
		"multiplierType": "元/点",
		"priceType": "点/手",
		"marginType": "元/手",
		"rateValue": 13,
		"coefficient": 50,
		'strike_type': "元/点",
		'last_type': "元/点",
		'otm_type': '元/点',
		"options_type": "C",
		"product_type":"spotoption"
	}
]