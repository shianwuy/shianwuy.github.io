var productList = [
	{
		"productID": "au",
		"productName": "黄金",
		"multiplier": 1000,
		"multiplierType": "克/手",
		"priceType": "元/克",
		"marginType": "元/手",
		"rateValue": 12
	},
	{
		"productID": "cu",
		"productName": "黄铜",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 14
	},
	{
		"productID": "al",
		"productName": "铝",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "zn",
		"productName": "锌",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15
	},
	{
		"productID": "pb",
		"productName": "铅",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 14
	},
	{
		"productID": "ru",
		"productName": "橡胶",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 16
	},
	{
		"productID": "fu",
		"productName": "燃料油",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 16
	},
	{
		"productID": "rb",
		"productName": "螺纹钢",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17
	},
	{
		"productID": "wr",
		"productName": "线材",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15
	},
	{
		"productID": "ag",
		"productName": "白银",
		"multiplier": 15,
		"multiplierType": "千克/手",
		"priceType": "元/千克",
		"marginType": "元/手",
		"rateValue": 14
	},
	{
		"productID": "bu",
		"productName": "沥青",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 14
	},
	{
		"productID": "hc",
		"productName": "热卷",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 16
	},
	{
		"productID": "ni",
		"productName": "镍",
		"multiplier": 1,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 14
	},
	{
		"productID": "sn",
		"productName": "锡",
		"multiplier": 1,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 15
	},
	{
		"productID": "a",
		"productName": "黄大豆",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "b",
		"productName": "黄豆2号",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "c",
		"productName": "玉米",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11
	},
	{
		"productID": "cs",
		"productName": "淀粉",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11
	},
	{
		"productID": "m",
		"productName": "豆粕",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 14
	},
	{
		"productID": "y",
		"productName": "豆油",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 12
	},
	{
		"productID": "p",
		"productName": "棕榈油",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 12
	},
	{
		"productID": "l",
		"productName": "聚乙烯",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "v",
		"productName": "聚氯乙烯",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "j",
		"productName": "焦炭",
		"multiplier": 100,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17
	},
	{
		"productID": "jm",
		"productName": "焦煤",
		"multiplier": 60,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 17
	},
	{
		"productID": "i",
		"productName": "铁矿石",
		"multiplier": 100,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 16
	},
	{
		"productID": "jd",
		"productName": "鸡蛋",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/500千克",
		"marginType": "元/手",
		"rateValue": 12
	},
	{
		"productID": "bb",
		"productName": "胶合板",
		"multiplier": 500,
		"multiplierType": "张/手",
		"priceType": "元/张",
		"marginType": "元/手",
		"rateValue": 25
	},
	{
		"productID": "fb",
		"productName": "纤维板",
		"multiplier": 500,
		"multiplierType": "张/手",
		"priceType": "元/张",
		"marginType": "元/手",
		"rateValue": 25
	},
	{
		"productID": "pp",
		"productName": "聚丙烯",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "WH",
		"productName": "强麦",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 26
	},
	{
		"productID": "RI",
		"productName": "早籼稻",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11
	},
	{
		"productID": "LR",
		"productName": "晚籼稻",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11
	},
	{
		"productID": "CF",
		"productName": "棉一号",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "SR",
		"productName": "白砂糖",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11
	},
	{
		"productID": "TA",
		"productName": "PTA",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 12
	},
	{
		"productID": "OI",
		"productName": "菜籽油",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "MA",
		"productName": "甲醇",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "PM",
		"productName": "普麦",
		"multiplier": 50,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11
	},
	{
		"productID": "FG",
		"productName": "玻璃",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "RS",
		"productName": "油菜籽",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 26
	},
	{
		"productID": "RM",
		"productName": "菜籽粕",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 12
	},
	{
		"productID": "ZC",
		"productName": "动力煤",
		"multiplier": 100,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 16
	},
	{
		"productID": "JR",
		"productName": "粳稻",
		"multiplier": 20,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11
	},
	{
		"productID": "SF",
		"productName": "硅铁",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "SM",
		"productName": "锰硅",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "IF",
		"productName": "沪深300",
		"multiplier": 300,
		"multiplierType": "元/点",
		"priceType": "点/手",
		"marginType": "元/手",
		"rateValue": 15
	},
	{
		"productID": "TS",
		"productName": "两年国债",
		"multiplier": 20000,
		"multiplierType": "百元",
		"priceType": "元",
		"marginType": "元/手",
		"rateValue": 1.5
	},
	{
		"productID": "TF",
		"productName": "五年国债",
		"multiplier": 10000,
		"multiplierType": "百元",
		"priceType": "元",
		"marginType": "元/手",
		"rateValue": 2.2
	},
	{
		"productID": "T",
		"productName": "十年国债",
		"multiplier": 10000,
		"multiplierType": "百元",
		"priceType": "元",
		"marginType": "元/手",
		"rateValue": 3
	},
	{
		"productID": "IH",
		"productName": "上证50",
		"multiplier": 300,
		"multiplierType": "元/点",
		"priceType": "点/手",
		"marginType": "元/手",
		"rateValue": 20
	},
	{
		"productID": "IC",
		"productName": "中证500",
		"multiplier": 200,
		"multiplierType": "元/点",
		"priceType": "点/手",
		"marginType": "元/手",
		"rateValue": 20
	},
	{
		"productID": "CY",
		"productName": "棉纱",
		"multiplier": 5,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 11
	},
	{
		"productID": "AP",
		"productName": "苹果",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 14
	},
	{
		"productID": "sc",
		"productName": "原油",
		"multiplier": 1000,
		"multiplierType": "桶/手",
		"priceType": "元/桶",
		"marginType": "元/手",
		"rateValue": 16
	},
	{
		"productID": "sp",
		"productName": "纸浆",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	},
	{
		"productID": "eg",
		"productName": "乙二醇",
		"multiplier": 10,
		"multiplierType": "吨/手",
		"priceType": "元/吨",
		"marginType": "元/手",
		"rateValue": 13
	}
]