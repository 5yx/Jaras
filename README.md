<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

### الكلمات المتفردة
من اولى التساؤلات التي خطرت على اذهاننا اي الخطباء يستخدم مفردات مميزة لم يستخدمها غيره؟ جميعنا شغوفين باللغة وفصاحتها ونطرب لبلاغتها ونرى ذلك كل جمعة فالخطباء يتفننون في استعراض قواميسهم الثرية فأي الخطباء أكثر تفردا من بقية أقرانه؟ قمنا بمعالجة نصوص الخطب واحصينا الكلمات التي ظهرت مرة واحدة فقط في جميع الخطب.
مثال : كلمة "متشاكسة" ظهرت مرة واحدة في جميع الخطب الموجودة على الموقع.
بعد ذلك خرجنا بمعيارين لكل خطيب، الأول متوسط نسبة الكلمات المتفردة في الخطبة (مثال: 1% لعبدالعزيز آل الشيخ تعني انه كل 100 كلمة يأتي بواحدة منهم متفردة لم يكررها او يأت بها خطيب آخر) ،	الثاني هو متوسط عدد الكلمات المتفردة بالخطبة الواحدة (مثال: 36 كلمة لعبدالرحمن السديس تشير لعدد الكلمات المتفردة التي يقدمها كل جمعة). بعد تحديد المعايير لإجابة هذا السؤال قمنا بحصر الخطباء الذين ننوي تحليل خطبهم إلى أعلى 50 خطيب من حيث عدد الخطب لكي يكون عدد الخطب (العينات) كافية للدراسة فلا يمكن مثلا تحليل خطيب بهذين المعيارين وهو يملك خطبة واحدة فقط.

<div id="plotly-div"></div>
    <script>
trace1 = {
  r: ['32.50%', '44.52%', '15.41%', '16%','32.50%'],
  fill: 'toself', 
  fillcolor: 'rgba(64, 155, 37, 0.5)', 
  hoverinfo: 'r', 
  hoveron: 'points', 
  line: {color: 'rgb(29, 93, 10)'}, 
  marker: {color: 'rgb(48, 165, 35)'}, 
  mode: 'markers+lines', 
  name: 'عبدالعزيز بن عبد الله آل الشيخ',
  theta: ['عدد الخطب', 'طول الخطبة', 'نسبة الإستدلال', 'عدد الكلمات المتفردة', 'عدد الخطب'],
  type: 'scatterpolar'
};
trace2 = {
  r: ['20.00%', '38.25%', '13.42%', '36%', '20.00%'], 
  fill: 'toself', 
  fillcolor: 'rgba(161, 60, 46, 0.5)', 
  hoverinfo: 'r', 
  hoveron: 'points', 
  line: {color: 'rgb(161, 33, 10)'}, 
  marker: {color: 'rgb(161, 33, 10)'}, 
  mode: 'markers+lines', 
  name: 'عبدالرحمن بن عبد العزيز السديس', 
  theta: ['عدد الخطب', 'طول الخطبة', 'نسبة الإستدلال', 'عدد الكلمات المتفردة', 'عدد الخطب'], 
  type: 'scatterpolar'
};
data = [trace1, trace2];
layout = {
  autosize: true, 
  dragmode: 'select', 
  legend: {borderwidth: 0}, 
  polar: {
    angularaxis: {
      rotation: 45, 
      showgrid: true, 
      showline: true, 
      showticklabels: true, 
      tickformat: '', 
      ticks: 'outside', 
      type: 'category'
    }, 
    radialaxis: {
      angle: 0, 
      autorange: false, 
      nticks: 0, 
      range: [0, 50], 
      showgrid: true, 
      showline: false, 
      showticklabels: false, 
      type: 'linear'
    }, 
    sector: [0]
  }, 
  showlegend: true, 
  xaxis: {autorange: true}, 
  yaxis: {autorange: true}
};

config = {
	displayModeBar: false,
	responsive: true
	};

Plotly.react('plotly-div', {
  data: data,
  layout: layout,
  config: config
});
    </script>
    
بعد استعراض هذه المقارنة يتبادر إلى الذهن مجموعة من الاسئلة الاخرى، هل التفرد بالمصطلحات ميزة لهذا الخطيب وانعكاس لجودته وتوسع علمه وبحثه؟ ام انها تعاب عليه حيث يجب مخاطبة العامة بأبسط المصطلحات الممكنة؟ ام ان احد ادوار الخطيب رفع مستوى الثقافة والعلم لدى المستمع؟


<div id="text"></div>
 
<script>
document.getElementById("text").innerHTML = "Text added by JavaScript code";
</script>
