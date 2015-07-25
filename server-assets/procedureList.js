var dentalImplant = [
	{
		procedureGen: "dental implants",
		name: "dentalImp",
		descriptor: "dental work",
		surgeon: "dentists",
		center: "dental",
		procedure: "Two (2) dental implants",
		webAddress: "http://www.yourdentistryguide.com/",
		webTitle: "Your Dentistry Guide"

	},
	// from dentalimplantcostguide.com - 1 implant
	{
		country: "Major US Cities",
		price: 5500,
		time: 1
	},
	{
		country: "Central America",
		price: 2500,
		time: 2
	},
	{
		country: "South America",
		price: 3000,
		time: 3
	},
	{
		country: "Eastern Europe",
		price: 2700,
		time: 3
	},
	{
		country: "Southeast Asia",
		price: 4000,
		time: 6
	},
	{
		country: "East Asia",
		price: 5000,
		time: 5
	},
	{
		country: "West Virginia",
		price: 4500,
		time: 1.5
	}
]
var breastImplant = [
	{
		procedure: "breast implants",
		name: "breastImp",
		descriptor: "cosmetic work",
		surgeon: "cosmetic surgeons",
		center: "cosmetic",
		procedure: "Breast Implants",
		webAddress: "http://www.yourdentistryguide.com/",
		webTitle: "Breast Implants Guide"
	},
	// Total costs from http://breastprocedures.org/ - 2014, US and Mexico
	// http://www.betterlooks.co.cr/breast_implants.htm Costa Rica
	//http://www.nhs.uk/Conditions/Breast-implants/Pages/Introduction.aspx UK
	//http://www.meditourshungary.com/site/DM/Cosmetic%20surgery/Surgery%20Prices/6/ Hungary
	//http://www.bangkokplasticsurgery.com/breast-augmentation-surgery.html Thailand
	//http://indiasurgery.indicure.com/2012/04/how-much-does-breast-augmentation-cost.html India
	{
		country: "Major US Cities",
		price: 5500,
		time: 1
	},
	{
		country: "Central America",
		price: 2500,
		time: 2
	},
	{
		country: "South America",
		price: 3000,
		time: 3
	},
	{
		country: "Eastern Europe",
		price: 2700,
		time: 3
	},
	{
		country: "Southeast Asia",
		price: 4000,
		time: 6
	},
	{
		country: "East Asia",
		price: 5000,
		time: 5
	},
	{
		country: "West Virginia",
		price: 4500,
		time: 1.5
	}
]

var procedures = [dentalImplant,breastImplant];

module.exports.getProcedures = function(){
  return procedures;
};