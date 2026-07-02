const personalities = [
    "Highly ambitious and determined",
    "Emotionally sensitive but strong",
    "Creative thinker with unique ideas",
    "Natural leader personality",
    "Introvert who observes deeply",
    "Very loyal in relationships",
    "Overthinks small situations",
    "Good at understanding people",
    "Independent mindset",
    "Quick learner and adaptable",
    "Calm outside but emotional inside",
    "Funny and entertaining personality",
    "Hardworking but easily distracted",
    "Spiritual and thoughtful",
    "Competitive by nature"
];

const currentProblems = [
    "Career confusion",
    "Overthinking issues",
    "Emotional instability",
    "Financial pressure",
    "Relationship stress",
    "Lack of motivation",
    "Trust issues",
    "Fear of failure",
    "Family pressure",
    "Difficulty focusing",
    "Low confidence phase",
    "Loneliness",
    "Burnout from work",
    "Difficulty expressing emotions",
    "Stress about future"
];

const futurePredictions = [
    "A major life change is approaching",
    "Financial growth is likely soon",
    "A new relationship may enter your life",
    "Career opportunities will increase",
    "You may reconnect with someone important",
    "Travel opportunities are visible",
    "A difficult phase will soon end",
    "Unexpected success may arrive",
    "You will gain confidence gradually",
    "A hidden talent may become your strength",
    "Your social circle will change",
    "Luck may favor you in upcoming months",
    "Personal growth will increase",
    "New responsibilities are coming",
    "A positive transformation is ahead"
];

const recommendations = [
    "Focus on discipline over motivation",
    "Improve your sleep schedule",
    "Avoid impulsive decisions",
    "Spend more time learning",
    "Trust yourself more",
    "Reduce unnecessary overthinking",
    "Maintain consistency daily",
    "Stay away from toxic people",
    "Take care of mental health",
    "Be patient with your progress",
    "Try meditation or journaling",
    "Improve communication skills",
    "Control emotional reactions",
    "Invest time in self-development",
    "Balance work and personal life"
];
const luckyColors = [
    "Blue",
    "Black",
    "White",
    "Golden",
    "Silver",
    "Green",
    "Purple",
    "Orange",
    "Red",
    "Pink",
    "Yellow",
    "Sky Blue",
    "Dark Green",
    "Maroon",
    "Grey"
];

const luckyNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    11, 12, 14, 17, 18, 21,
    22, 24, 27, 33, 36, 44,
    49, 55, 64, 72, 81, 99
];

const partnerNature = [
    "Very caring and emotional",
    "Supportive and understanding",
    "Ambitious and career-focused",
    "Funny and entertaining",
    "Mature and calm personality",
    "Highly loyal partner",
    "Protective by nature",
    "Emotionally expressive",
    "Creative and artistic",
    "Introverted but deeply loving",
    "Confident and bold",
    "Spiritual mindset",
    "Family-oriented personality",
    "Intelligent and practical",
    "Romantic and affectionate"
];

const marriageYears = [
    2026, 2027, 2028, 2029, 2030,
    2031, 2032, 2033, 2034, 2035,
    2036, 2037, 2038, 2039, 2040
];
const dangerWarnings = [

    "Avoid trusting strangers too quickly",

    "Financial loss may happen due to careless spending",

    "Someone close may hide important truth from you",

    "Overthinking can damage your mental peace",

    "A toxic relationship may drain your energy",

    "Avoid unnecessary arguments this month",

    "Emotional decisions may create regret later",

    "Be careful while making career changes",

    "Someone may try to manipulate your emotions",

    "Do not ignore your health issues",

    "Your anger may create problems in relationships",

    "A fake friend may reveal themselves soon",

    "Avoid risky investments for now",

    "Lack of sleep may affect your productivity",

    "Past mistakes may return for a short time",

    "Be careful with confidential information",

    "Do not trust promises too easily",

    "A stressful phase may test your patience",

    "Family misunderstandings may increase temporarily",

    "Negative thinking may block opportunities",

    "Avoid making decisions under pressure",

    "Someone from the past may disturb your peace",

    "Your confidence may temporarily decrease",

    "Be cautious while handling money matters",

    "Avoid unnecessary emotional attachment",

    "Unexpected expenses may appear suddenly",

    "Do not ignore your intuition",

    "Overworking may affect your health",

    "Your kindness may be misused by someone",

    "Stay away from unnecessary drama",

    "Fear of failure may stop your growth",

    "Be careful while sharing personal secrets",

    "A wrong opportunity may look attractive",

    "Your emotions may cloud logical thinking",

    "A temporary loneliness phase may appear",

    "Be cautious in online interactions",

    "A misunderstanding can affect close relationships",

    "Avoid making impulsive purchases",

    "Your energy may feel low for some time",

    "Someone may become jealous of your progress",

    "Trust issues may create emotional distance",

    "Be careful while signing important documents",

    "Your focus may get distracted easily",

    "A hidden competitor may appear in your work",

    "Avoid reacting emotionally in serious situations",

    "Your impatience may create unnecessary problems",

    "An old unresolved issue may return",

    "Be careful with time management",

    "Do not let self-doubt control your decisions",

    "Unexpected emotional news may affect your mood"

];

const form = document.getElementById("form");
const prediction = document.getElementById("prediction")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const first_name = document.getElementById("first_name").value;
    const Surname = document.getElementById("Surname").value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const place = document.getElementById("place").value;

    prediction.textContent = `Hi ${first_name} ${Surname}. 
    ${personalities[first_name.length*year % personalities.length]}.
    ${currentProblems[Surname.length*year % currentProblems.length]}.
    ${futurePredictions[day*year % futurePredictions.length]}.
    ${recommendations[month*year % recommendations.length]}.
    Your Lucky Color is ${luckyColors[year*year%luckyColors.length]}.
    Your Lucky Number is ${luckyNumbers[place.length*year%luckyNumbers.length]}.
    Your marriage probabily held in ${marriageYears[(day*month*year)%marriageYears.length]}.
    And Your Partner will ${partnerNature[day*year%partnerNature.length]}.
    ${dangerWarnings[(day+year+month)%dangerWarnings.length]}`

    prediction.style.backgroundColor = "Gray";

})