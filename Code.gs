function doGet(){return HtmlService.createHtmlOutputFromFile('Index').setTitle('Lesson Planner Demo');}

function getPlan(){
  return {
    course:{id:'ENG10',name:'English 10',durationMonths:18},
    currentUnit:'Narrative Craft',
    weeks:[
      {label:'Week 1',lessons:[
        {id:'NW-01',day:'Mon',title:'Effective openings',objective:'Establish voice, setting and tension.',tags:['Voice','Tension']},
        {id:'NW-02',day:'Thu',title:'Show, don’t tell',objective:'Use detail to create inference.',tags:['Detail','Inference']}
      ]},
      {label:'Week 2',lessons:[
        {id:'NW-03',day:'Mon',title:'Controlling pace',objective:'Control narrative pace deliberately.',tags:['Pacing','Syntax']},
        {id:'NW-04',day:'Thu',title:'Dialogue with purpose',objective:'Use dialogue to reveal and advance.',tags:['Dialogue','Character']}
      ]},
      {label:'Week 3',lessons:[
        {id:'NW-05',day:'Mon',title:'Structural choices',objective:'Shape sequence and shifts for effect.',tags:['Structure']},
        {id:'NW-06',day:'Thu',title:'Timed narrative',objective:'Apply craft choices independently.',tags:['Assessment']}
      ]}
    ]
  };
}
