<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

<style>
	a,p,h3 {direction: rtl;}
.mc-word{
  padding-left:0.2em;
}

.mc-word:hover, .mc-word:hover + .mc-word { 
  color: red;
  border: 2px solid red;
  border-radius: 0px;
 }

.mc-word:hover{
   border-top-right-radius: 4px;
   border-bottom-right-radius: 4px;
   border-left: none;
   font-weight:bold;
}

.mc-word:last-of-type {
  padding-left:0;
}

.mc-word:hover + .mc-word, .mc-word:hover:last-of-type {
   border: 2px solid red;
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
   border-right: none;
}

em{
  direction:rtl;
  text-align:right;
}
</style>

### الكلمات المتفردة
من اولى التساؤلات التي خطرت على اذهاننا اي الخطباء يستخدم مفردات مميزة لم يستخدمها غيره؟ جميعنا شغوفين باللغة وفصاحتها ونطرب لبلاغتها ونرى ذلك كل جمعة فالخطباء يتفننون في استعراض قواميسهم الثرية فأي الخطباء أكثر تفردا من بقية أقرانه؟ قمنا بمعالجة نصوص الخطب واحصينا الكلمات التي ظهرت مرة واحدة فقط في جميع الخطب.
مثال : كلمة "متشاكسة" ظهرت مرة واحدة في جميع الخطب الموجودة على الموقع.
بعد ذلك خرجنا بمعيارين لكل خطيب، الأول متوسط نسبة الكلمات المتفردة في الخطبة (مثال: 1% لعبدالعزيز آل الشيخ تعني انه كل 100 كلمة يأتي بواحدة منهم متفردة لم يكررها او يأت بها خطيب آخر) ،	الثاني هو متوسط عدد الكلمات المتفردة بالخطبة الواحدة (مثال: 36 كلمة لعبدالرحمن السديس تشير لعدد الكلمات المتفردة التي يقدمها كل جمعة). بعد تحديد المعايير لإجابة هذا السؤال قمنا بحصر الخطباء الذين ننوي تحليل خطبهم إلى أعلى 50 خطيب من حيث عدد الخطب لكي يكون عدد الخطب (العينات) كافية للدراسة فلا يمكن مثلا تحليل خطيب بهذين المعيارين وهو يملك خطبة واحدة فقط.

<div id="words-div"></div>
<script>
	trace1 = {x: ['25', '8', '12', '14', '7', '10', '22', '10', '18', '8', '20', '18', '15', '23', '19', '19', '29', '17', '16', '9', '10', '14', '18', '10', '11', '36', '11', '13', '13', '16', '15', '10', '9', '21', '8', '25', '10', '10', '13', '4', '4', '24', '24', '13', '8', '17', '14', '21', '13', '21'], y: ['1.95%', '1.31%', '0.97%', '1.06%', '0.68%', '0.75%', '2.07%', '0.94%', '1.24%', '0.89%', '1.14%', '1.14%', '1.18%', '1.44%', '1.67%', '1.28%', '1.78%', '1.25%', '1.27%', '1.21%', '0.75%', '1.38%', '1.07%', '1.52%', '1.07%', '2.10%', '0.88%', '1.02%', '1.10%', '0.90%', '0.77%', '1.35%', '1.28%', '1.50%', '0.90%', '1.44%', '0.87%', '1.41%', '1.11%', '0.32%', '0.59%', '1.55%', '1.67%', '1.30%', '1.17%', '1.60%', '1.06%', '1.19%', '1.21%', '1.39%'], hoverinfo: 'x+text', marker: {maxdisplayed: 0, size: 8, sizemode: 'area', sizeref: 0.2, symbol: 'diamond-open-dot'}, mode: 'markers', text: ['إبراهيم بن محمد الحقيل','إسماعيل الخطيب','أحمد بن حسين الفقيهي','أحمد فريد','أسامة بن عبد الله خياط','حسين بن عبد العزيز آل الشيخ','حمزة بن فايع الفتحي','خالد بن عبد الله المصلح','خالد بن محمد الشارخ','داود بن أحمد العلواني','سعد بن عبد الله العجمة الغامدي','سعود بن إبراهيم الشريم','سعيد بن عبد الباري بن عوض','سعيد بن يوسف شعلان','صالح بن عبد الله الهذلول','صالح بن عبد الله بن حميد','صالح بن محمد الجبري','صالح بن محمد آل طالب','صلاح بن محمد البدير','عاصم بن لقمان يونس الحكيم','عبد الباري بن عوض الثبيتي','عبد الحليم توميات','عبد الحميد التركستاني','عبد الحميد بن جعفر داغستاني','عبد الرحمن بن الصادق القايدي','عبد الرحمن بن عبد العزيز السديس','عبد الرحمن بن علي العسكر','عبد العزيز بن الطاهر بن غيث','عبد العزيز بن عبد الفتاح قاري','عبد العزيز بن عبد الله آل الشيخ','عبد العزيز بن محمد القنام','عبد الكريم بن صنيتان العمري','عبد الله بن صالح القصير','عبد الله بن محمد البصري','عبد المجيد بن عبد العزيز الدهيشي','عبد المحسن بن عبد الرحمن القاضي','عبد المحسن بن محمد القاسم','عثمان بن جمعة ضميرية','عكرمة بن سعيد صبري','علي بن عبد الرحمن الحذيفي','فريح بن محمد الفريح','ماجد بن عبد الرحمن الفريان','مازن التويجري','محمد أحمد حسين','محمد بن صالح العثيمين','مراد وعمارة','مرزوق بن سالم الغامدي','ناصر بن محمد الأحمد','هاشم محمد علي المشهداني','يوسف بن عبد الوهاب أبو سنينه'], textfont: {family: 'Arial'}, textposition: 'bottom center', textsrc: 'mustafae:2:b245c8', type: 'scatter', uid: '0a414f', xsrc: 'mustafae:2:31ec84', ysrc: 'mustafae:2:42fc0b'};
	data = [trace1];
	layout = {annotations: [{x: 35.9321308801, y: 2.06314051569, ax: 11, ay: 30, showarrow: false, text: 'عبدالرحمن بن عبدالعزيز السديس', xanchor: 'center'}, {x: 4.00493066256, y: 0.274743953628, showarrow: false, text: 'علي بن عبدالرحمن الحذيفي'}], autosize: true, showlegend: false, title: {text: 'الكلمات المتفردة لكل خطبة'}, xaxis: {autorange: true, fixedrange: true, gridwidth: 1, range: [2.05828107709, 37.9417189229], showgrid: false, showline: false, showspikes: false, showticklabels: false, ticks: '', title: {text: 'نسبة التفرد في الخطبة'}, type: 'linear', zeroline: false}, yaxis: {autorange: true, fixedrange: true, range: [0.199434458571, 2.22056554143], showgrid: false, showspikes: false, showticklabels: false, ticks: '', title: {text: 'متوسط الكلمات المتفردة'}, zeroline: false}};
	Plotly.plot('words-div', {data: data, layout: layout});
</script>
    
بعد استعراض هذه المقارنة يتبادر إلى الذهن مجموعة من الاسئلة الاخرى، هل التفرد بالمصطلحات ميزة لهذا الخطيب وانعكاس لجودته وتوسع علمه وبحثه؟ ام انها تعاب عليه حيث يجب مخاطبة العامة بأبسط المصطلحات الممكنة؟ ام ان احد ادوار الخطيب رفع مستوى الثقافة والعلم لدى المستمع؟

### مقارنة الخطباء
عند المقارنة باستخدام مجموعة من المقاييس يجب تطبيع البيانات اولا (Normalization) وهو إيجاد وحدة قياس موحدة لجميع المقاييس لكي لا تطغى البيانات ذات وحدة القياس الاعلى على قرينتها الأدنى (مثال : عدد الكلمات المتفردة لكل خطبة وهو بعشرات الكلمات وطول الخطبة وهو بآلاف الكلمات). تم تطبيع المقاييس باستخدام القيمة العظمى والصغرى (Min-Max Scaling) وتطبيع القيم بين الصفر والواحد. بعد ذلك تم استخراج أربعة مقاييس للمقارنة:
⋅⋅* طول الخطبة: متوسط عدد الكلمات بالخطبة الواحدة
⋅⋅* نسبة الاستدلال: نسبة ما تمثله الأدلة المقتبسة من آيات وأحاديث إلى الخطبة كاملة
⋅⋅* الكلمات المتفردة: عدد الكلمات المتفردة التي يقدمها في كل خطبة
⋅⋅* عدد الخطب: يمثل عدد الخطب المحللة لهذا الخطيب
بعد تحديد وتطبيع المقاييس يمكنك استعراض اعلى 50 خطيب والمقارنة بينهم والمقارنة مع المتوسط العام لهذه المقاييس

<div id="radar-div"></div>
<script>
	trace1 = {r: ['32.50%', '44.52%', '15.41%', '16%','32.50%'], fill: 'toself', fillcolor: 'rgba(64, 155, 37, 0.5)', hoverinfo: 'r', hoveron: 'points', line: {color: 'rgb(29, 93, 10)'}, marker: {color: 'rgb(48, 165, 35)'}, mode: 'markers+lines', name: 'عبدالعزيز بن عبد الله آل الشيخ', theta: ['عدد الخطب', 'طول الخطبة', 'نسبة الإستدلال', 'عدد الكلمات المتفردة', 'عدد الخطب'], type: 'scatterpolar'};
	trace2 = {r: ['20.00%', '38.25%', '13.42%', '36%', '20.00%'], fill: 'toself', fillcolor: 'rgba(161, 60, 46, 0.5)', hoverinfo: 'r', hoveron: 'points', line: {color: 'rgb(161, 33, 10)'}, marker: {color: 'rgb(161, 33, 10)'}, mode: 'markers+lines', name: 'عبدالرحمن بن عبد العزيز السديس', theta: ['عدد الخطب', 'طول الخطبة', 'نسبة الإستدلال', 'عدد الكلمات المتفردة', 'عدد الخطب'], type: 'scatterpolar'};
	data = [trace1, trace2];
	layout = {autosize: true, dragmode: 'select', legend: {borderwidth: 0}, polar: {angularaxis: {rotation: 45, showgrid: true, showline: true, showticklabels: true, tickformat: '', ticks: 'outside', type: 'category'}, radialaxis: {angle: 0, autorange: false, nticks: 0, range: [0, 50], showgrid: true, showline: false, showticklabels: false, type: 'linear'}, sector: [0]}, showlegend: true, xaxis: {autorange: true}, yaxis: {autorange: true}};
	config = {displayModeBar: false, responsive: true};
	Plotly.react('radar-div', {data: data, layout: layout, config: config});
</script>
*ملاحظة: المقارنة بين خطب فقيهين مثل محمد ابن عثيمين وعبدالعزيز آل الشيخ يظهر نتيجة مثيرة للاهتمام

### عبدالرحمن السديس والتجميع بالمتوسطات
عند استعراضك لخطب الشيخ عبدالرحمن السديس واضعا طول الخطبة في المحور السيني ونسبة الاستدلال في الخطبة في المحور الصادي ستجد توزيع الخطب لا يشير إلى ظاهرة أو سلوك أو أساس يوضح آلية عمل الشيخ في كتابة خطبه.
 
مع مزيد من التمحيص اتضح أن هذه الخطب مقسمة على جامعين وهم جامع الفرقان والمسجد الحرام وعند تلوين هذه الخطب يمكنك بوضوح رؤية الاختلاف في الكتابة بين الجامعين.
 
في حال نقص البيانات من معلومة مؤثرة (كالجامع في حالتنا) بإمكانها تفسير هذا الاختلاف، هل بإمكان خوارزمية التجميع بالمتوسطات (K-Means Clustering) تقسيم هذه البيانات؟ التجميع بالمتوسطات هو احدى وسائل تصنيف البيانات التي تقوم بتجميع المتجهات عن طريق استحداث نقاط أولية وحساب المسافة الاقليدية بينها وبين البيانات لتشكيل مجموعة ومواصلة تحسين هذه العملية حتى تصل للتجميع النهائي
 

### الآيات المستدل بها
كما ذكر في الاعلى تم تقسيم الخطبة إلى قسمين الأول يحتوي الاقتباسات المستدل بها والآخر يحتوي على نص الخطيب نفسه. عند النظر إلى القسم الأول وجدنا ثلاث سور لم يقتبس منهم في الخطب المحللة وهم ("الكوثر" ، "الانشقاق" ، "فصلت") مما
 
### سلسلة ماركوف
خوارزمية سلسلة ماركوف تعتمد على مبدأ بسيط وهو أن الحالة الحاضرة (الآن) تكفي لمعرفة الحالة القادمة (المستقبل) وتوزيع نسب الاحتمالات على النتائج المحتملة دون الحاجة إلى العودة إلى الحالات السابقة (الماضي). تم استخدام هذه الخوارزمية لتوليد نصوص جديدة بناء على كافة الخطب المحللة وذلك باختيار كلمة عشوائية (الآن) وبمعرفة هذه الكلمة يمكننا معرفة قائمة الكلمات التي يمكن أن تتبعها (المستقبل) ونقوم باختيار كلمة عشوائية منها وبمعرفة هذه الكلمة المختارة يمكننا معرفة قائمة الكلمات التي يمكن أن تتبعها وهلم جرا حتى تشكل نص كامل. وبالمثال يتضح المقال فهذه بعض الجمل التي ولدتها الخوارزمية:

* ينبغي له أن يصلي ويصوم فقط في هذه الدار بعد بنائها خوفا من الله نفسه
* عباد الله: اتقوا الله وأطيعوه، وامتثلوا أمره واجتنبوا نواهيه، وتأدبوا بما أدبكم الله به شهر الصيام فإن زمن العمل الجاد
* انظر كيف اجترءوا على إبراز شخصية المسلم اليوم، إن شخصية المسلم هي الشخصية السوية العالمية؛ شخصية مباركة متماسكة، راسخة متناسقة، وجيهة غير متشاكسة، وأسوتنا المصطفى
* ذا حرام عليهم لاعتدائهم على نصوص الوحيين والتأويلات الباطلة حتى فسد الدين فسادا، لولا أن الله مالك لاتوفق بين إخوانك؟

<ul><li><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... أما بعد <b>عباد الله</b> يقول ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=8999'>فضل يوم عرفة والاستعداد للعيد</a>" >عباد</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... فاتقوا <b>الله اتقوا</b> الله أيها المسلمون ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=7365'>شهر الغنائم</a>" >الله</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... أيها الذين آمنوا <b>اتقوا الله</b> وقولوا ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=10542'>مرافقة النبي في الجنة</a>" >اتقوا</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... اتقوا الله واطيعوه فإن طاعته ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=9378'>من وصايا الرسول</a>" >الله</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... تعالى <b>وأطيعوه وامتثلوا</b> أمره واجتنبوا نهيه ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=8439'>حب الدنيا والمال</a>" >وأطيعوه</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... وأطيعوه <b>وامتثلوا أمره</b> ولا تعصوه ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=8987'>الحج من محاسن الإسلام</a>" >وامتثلوا</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... وامتثلوا <b>أمره واجتنبوا</b> نهيه ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=8439'>حب الدنيا والمال</a>" >أمره</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... وسلموا لأوامر الله <b>واجتنبوا نواهيه</b> ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=8414'>عيد الأضحى 1422هـ</a>" >واجتنبوا</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... واجتنبوا <b>نواهيه وتأدبوا</b> ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=6236'>وقل للمؤمنين يغضوا من أبصارهم</a>" >نواهيه</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... <b>وتأدبوا بما</b> أدبكم به ربكم ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=6236'>وقل للمؤمنين يغضوا من أبصارهم</a>" >وتأدبوا</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... وتأدبوا <b>بما أدبكم</b> الله ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=2288'>في جمل من الآداب</a>" >بما</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... <b>أدبكم الله</b> به على لسان رسوله ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=2288'>في جمل من الآداب</a>" >أدبكم</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... أدبكم <b>الله به</b> على لسان رسوله ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=995'>اللحية وبعض الآداب</a>" >الله</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... أنعم الله به على العبد ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=10009'>القلب بين الحياة والغفلة</a>" >به</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... يستقبل به شهر رمضان ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=10774'>رمضان وأحوال الأمة</a>" >شهر</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... لتوكم من شهر الصيام ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=6941'>خطبة عيد فطر 1419هـ</a>" >الصيام</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... انقضى شهر الصيام فإن ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=9392'>دوام الأعمال الصالحة</a>" >فإن</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... فإن <b>زمن العمل</b> لا ينقضي ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=10093'>وداع رمضان</a>" >زمن</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... فإن زمن العمل لا ينقضي ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=2532'>عيد الفطر 1418هـ</a>" >العمل</span><span class="mc-word" data-toggle="tooltip" data-html="true" title="<em>... الحاجة الى العمل <b>الجاد</b> ...</em> - <a href='http://www.alminbar.net/alkhutab/khutbaa.asp?mediaURL=2702'>الآثار الجاهلية</a>" >الجاد</span></li></ul>


<script>
$( document ).ready(function() {
   $('span[data-toggle="tooltip"]').tooltip({animated: 'fade', placement: 'bottom'});
};</script>

في الجملة الاولى مثلا نشهد العشوائية بشكل كامل حيث كل كلمة تحمل سلسلة متنوعة من الكلمات التي تلحقها فلا يمكنك بمعرفة "ينبغي" أو "يصلي" أو "يصوم" أن تتوقع بدقة عالية الكلمة القادمة.
في الجملة الثانية وقع الاختيار على كلمات متكررة في خطب كثيرة مما زاد احتمالية ترابط النص وتماسكه من حيث المعنى والبناء رغم عشوائية الاختيار حتى وصل إلى "فإن" فانحرف المعنى بسبب عمومية الكلمة.
في الجملة الثالثة والرابعة قللت العشوائية حيث أصبحت الحالة الحاضرة (الآن) تحتوي على كلمتين لتوقع الكلمة القادمة عوضا عن كلمة كما كان في الجملتين السابقة ونلحظ في هذه الجملتين أن العشوائية انخفضت لقلة النتائج المحتملة ولكن نشهد في نهاية الجملة الرابعة "لولا أن الله مالك لاتوفق" والاشكال وقع هنا لاستبعادنا للتشكيل عندما عالجنا النصوص حيث ان "مالِك" اختلطت بـ"مالَك" 
