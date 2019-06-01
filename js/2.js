
//ternary sample
data=[{a:["0.6","0.3"],b:["0.25","0.2"],c:["0.15","0.5"],cliponaxis:!1,hoverinfo:"a+b+c",marker:{color:"#000",size:10},mode:"markers+text",text:["عنصر 1","عنصر 2"],textfont:{size:13},textposition:"bottom center",type:"scatterternary"}];
layout={dragmode:!1,autosize:!0,ternary:{aaxis:{gridcolor:"#04EDDC4C",linecolor:"#04EDDC",min:0,nticks:6,tickcolor:"#04EDDC",tickfont:{color:"#04EDDC"},ticklen:9,ticks:"outside",title:{font:{color:"#04EDDC"},text:"مقياس A"}},baxis:{gridcolor:"#FFD7004C",linecolor:"#FFD700",min:0,tickcolor:"#FFD700",tickfont:{color:"#FFD700"},ticklen:9,ticks:"outside",title:{font:{color:"#FFD700"},text:"مقياس B"}},caxis:{gridcolor:"#FF00FF4C",linecolor:"#FF00FF",min:0,
tickcolor:"#FF00FF",tickfont:{color:"#FF00FF"},ticklen:9,ticks:"outside",title:{font:{color:"#FF00FF"},text:"مقياس C"}},sum:1},xaxis:{autorange:!0},yaxis:{autorange:!0}};config={displayModeBar:!1,responsive:!0};

Plotly.plot('ternary-sample', {data: data, layout: layout, config: config});
