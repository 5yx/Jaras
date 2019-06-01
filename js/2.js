
//ternary sample
data=[{a:[.6,.3],b:[.25,.2],c:[.15,.5],cliponaxis:!1,hoverinfo:"a+b+c",marker:{color:"#000",size:10},mode:"markers+text",text:["عنصر 1","عنصر 2"],textfont:{size:13},textposition:"bottom center",type:"scatterternary"}];
layout={dragmode:!1,autosize:!0,ternary:{aaxis:{gridcolor:"#04EDDC4C",linecolor:"#04EDDC",min:0,nticks:6,tickcolor:"#04EDDC",tickfont:{color:"#04EDDC"},ticklen:9,ticks:"outside",title:{font:{color:"#04EDDC"},text:"مقياس A"}},baxis:{gridcolor:"#FFD7004C",linecolor:"#FFD700",min:0,tickcolor:"#FFD700",tickfont:{color:"#FFD700"},ticklen:9,ticks:"outside",title:{font:{color:"#FFD700"},text:"مقياس B"}},caxis:{gridcolor:"#FF00FF4C",linecolor:"#FF00FF",min:0,
tickcolor:"#FF00FF",tickfont:{color:"#FF00FF"},ticklen:9,ticks:"outside",title:{font:{color:"#FF00FF"},text:"مقياس C"}},sum:1},xaxis:{autorange:!0},yaxis:{autorange:!0}};config={displayModeBar:!1,responsive:!0};

Plotly.plot('ternary-sample',{data:data,layout:layout,config:config});


//ternary data
data=[{a:[0,.61,.16,0,.58,.65,0,0,0,0,.95,.04,0,.7,0,0,.09,0,.49,.01,.31,.36,0,0,0,0,.67,.69,0,0,0,0,0,.91,.12,0,0,0,.43,.11,.82,0,.01,0,0,1,.01,.01,1,0,.02,.87,0,0,0,.89,.97,.88,0,.96,.02,.02,1,0,0,.09,0,0,0,0,0,0,0,.99,0,.73,.04,.02,0,0,0,0,.28,.26,.07,.21,0,.79,.87,0,.96,0,0,.23,.57,.65,0,0,0,0,0,0,0,0,0,0,.04,1,.01,0,.21,.19,1,0,.77,0,0,0,.11,0,.79,0,0,0,0,1,1,0,.97,0,.52,0,0,.78,.34,.03,.34,0,.98,.56,.58,0,.43,0,.15,.15,0,0,0,0,.76,0,0,0,.23,0,0,.97,1,1,.26,0,.19,1,0,.63,.52,0,.53,0,0,0,0,0,
0,0,0,0,.01,.13,0,.55,1,0,0,.29,.08,0,1,0,.01,0,.91,0,0,0,0,0,0,.39,0,.87,0,0,0,1,0,0,0,0,0,0,0,0,0,.42,0,0,.71,1,0,0,.63,.05,.27,1,.91,.55,.3,0,0,.84,0,0,0,.32,0,.02,1,0,.03,.99,.03,.87,0,0,0,1,0,.82,0,.34,0,.39,.01,1,.31,0,.87,0,0,.86,0,.76,.01,1,0,0,0,.49,0,0,.29,1,.31,.96,0,0,0,0,0,.02,.43,.16,0,0,0,0,0,0,0,0,.63,0,.98,0,0,0,0],b:[.15,.18,.37,.34,.25,.12,.46,.46,.17,.63,.03,.48,.27,.12,.41,.35,.45,.21,.33,.49,.3,.26,.41,.65,.85,.3,.19,.13,.47,.33,.08,.45,.48,.05,.02,.74,.3,.29,.18,.42,.08,.4,
.02,.56,.14,0,.12,.68,0,.61,.22,.13,.2,.42,.54,.04,.03,.12,.37,.01,.42,.65,0,.27,.31,.33,.14,.06,.61,.12,.25,.62,.14,0,.21,.11,.22,.8,.47,.11,.35,.05,.28,.21,.39,.52,.41,.13,.04,.37,.02,.46,.17,.26,.19,.13,.32,.35,.29,.36,.88,.54,.64,.8,.03,.39,.35,0,.12,.21,.03,.62,0,.23,.14,.74,.32,.07,.4,.06,.18,.09,.4,.33,.03,0,0,.72,.02,.75,.13,.49,0,.1,.26,.6,.29,.29,.01,.08,.12,.39,.14,.03,.34,.51,.35,.33,.81,.83,.07,.58,.57,0,.11,.21,.89,.02,0,0,.59,.06,.12,0,.37,.19,.07,.11,.41,.4,0,.33,.1,.36,.22,.72,.16,
.38,.62,.57,.36,.14,0,.43,.86,.23,.27,.26,0,.39,.79,.19,.08,.16,.16,.21,.11,0,0,0,.05,.01,.55,.41,.48,0,0,.59,0,.89,.1,.57,.34,0,.33,.07,.45,.2,.03,0,.18,0,.18,.26,.34,0,.05,.23,.67,.09,.55,.09,.01,1,0,.29,.52,.78,0,.89,.66,.01,.54,.06,.39,.15,.23,0,0,.06,0,.12,.09,.1,.49,0,.55,.13,.09,.33,.63,.14,.56,.24,.48,0,.56,.63,.2,.23,.5,0,.4,0,.54,0,.08,.47,.27,.25,1,.67,.31,.7,0,.62,0,.33,.86,.06,0,.16,.01,.09,.01,.28,.25,.67,.49],c:[.85,.22,.47,.66,.17,.23,.54,.54,.83,.37,.02,.48,.73,.18,.59,.65,.46,.79,
.19,.5,.39,.38,.59,.35,.15,.7,.15,.18,.53,.67,.92,.55,.52,.04,.86,.26,.7,.71,.38,.47,.11,.6,.97,.44,.86,0,.87,.3,0,.39,.75,0,.8,.58,.46,.06,0,.01,.63,.03,.55,.33,0,.73,.69,.58,.86,.94,.38,.88,.75,.38,.86,.01,.79,.16,.73,.17,.53,.89,.65,.95,.43,.53,.53,.26,.59,.08,.09,.63,.03,.54,.83,.51,.25,.23,.68,.65,.71,.64,.12,.46,.36,.2,.97,.61,.61,0,.87,.79,.76,.18,0,.77,.09,.26,.68,.93,.49,.94,.03,.91,.6,.67,.97,0,0,.28,.02,.25,.35,.51,1,.12,.4,.36,.37,.71,0,.36,.3,.61,.43,.97,.5,.34,.65,.67,.19,.17,.17,.42,
.43,1,.66,.79,.11,.02,0,0,.15,.94,.69,0,.63,.18,.41,.89,.06,.6,1,.67,.9,.64,.78,.28,.84,.62,.38,.3,.64,.31,0,.57,.14,.48,.65,.74,0,.61,.21,.81,.02,.84,.84,.79,.89,1,1,.61,.95,.11,.45,.59,.52,0,1,.41,1,.11,.9,.43,.66,1,.67,.5,.55,.8,.25,0,.82,1,.19,.69,.39,0,.04,.22,.02,.91,.45,.07,.99,0,1,.39,.48,.21,0,.11,.31,0,.42,.06,.61,.85,.77,0,1,.12,1,.54,.91,.51,.51,0,.14,.87,.04,.67,.37,0,.44,0,.52,0,.44,.38,.8,.28,.5,1,.3,0,.15,.04,.92,.53,.73,.75,0,.31,.25,.13,1,.38,1,.67,.14,.94,1,.84,.37,.91,.02,.72,
.75,.33,.51],cliponaxis:!1,hoverinfo:"a+b+c+text",marker:{color:[0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,
0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1],colorscale:[["0","#a50026"],["1","#006837"]],size:7},mode:"markers",text:"'صدر دجاج;بيض;ماء;بصل;طحين;حليب;طماطم;بطاطس;دجاج;مرق دجاج;سكر;جزر;لحم مفروم;زبدة;بندورة;فطر;عصير ليمون;روبيان;دقيق;زيت زيتون;لبن زبادي;زيت نباتي;كوسا;خس;مرق خضار;ثوم;جبن كريمي;كريمة;سبانخ;معكرونة;لحم;بندورة كرزية;باذنجان;بسكويت;هيل;خيار;فلفل أخضر;جبن موزاريلا;جوز;ماء ساخن;صفار بيض;بروكولي;أرز بسمتي;بقدونس;لحم غنم;سكر بودرة;أرز;ذرة;شوكولاتة;طماطم كرزية;كريمة طبخ;فراولة;لحم بقر;فلفل أحمر;زيتون أسود;موز;كريمة خفق;تمر;بقسماط;قشطة;خبز;أفوكادو;بسكويت أوريو;جمبري;بطاطا;لبن;لحم خروف;فيليه سلمون;مايونيز;ستيك;جوانح دجاج;حمص;لحم عجل;جوز هند;فيليه دجاج;بياض بيض;ليمون;شمندر;تونا;سمك فيليه;جبنة شيدر;أفخاذ دجاج;زيت;توست;ملح;ماء دافئ;هليون;تفاح;سكر بني;فليفلة خضراء;فستق حلبي;جبن شيدر;صلصة طماطم;خبز توست;لوز;جبنة;فليفلة ملونة;فاصولياء;مرق لحم;فليفلة حمراء;جرجير;بصل أخضر;زيتون;ملفوف;سمك;جبن بارميزان;جبنة موتزاريلا;بسكويت دايجستف;خبز تورتيلا;فلفل أسود;قرنفل;برتقال;حليب مركز محلى;عصير طماطم;حليب بودرة;برغل;جبنة بارميزان;فيليه سمك;خبز فرنسي;فيليه لحم;شوفان;سلمون;بازيلاء;كزبرة خضراء;باستا;شيرة;سميد ناعم;كرفس;سميد;مرق;كريما;بصل ربيع;فيليه هامور;سمنة;حليب جوز هند;قرع;زبادي;فليفلة صفراء;سكر ناعم;عصير برتقال;نشاء;نقانق;عسل;محار;زيت ذرة;طحينية;بازلاء;توست اسمر;فاصوليا حمراء;فجل;سمن;جبنة فيتا;بطاطا حلوة;لحم ريش;جبن ريكوتا;خيار مخلل;جبن فيتا;شوكولاتة نيوتيلا;بودرة كاكاو;بسكويت ليدي فنجرز;عجينة بف باستيري;عجينة بيتزا;أرز مصريّ;سميد خشن;بصل أحمر;مانغو;زبيب;هامور;أناناس;كراث;بامية;ريحان;صويا صوص;قرنبيط;نودلز;لبنة;معجون طماطم;خبز عربي;نعناع;ماء فاتر;كزبرة;معجون تمر;رقائق شوكولاته;فريكة;عدس;برش ليمون;صنوبر;سلمون مدخن;شيرة;فلفل أصفر;كينوا;كفتة;قشدة;صلصة بشاميل;فلفل أخضر حار;زيتون أخضر;دجاجة;كبش قرنفل;سباغتي;مشمش مجفّف;لحم ضأن;كرز;خرشوف;حبار;فاصوليا خضراء;مارشميلو;خبز برغر;ورق سبانخ;أرز أمريكي;ذرة حلوة;ملوخية;فاصولياء بيضاء;فلفل احمر حار;لازانيا;فلفل حار;توت بري;كلماري;صلصة بيتزا;قرفة;قطايف;مرق سمك;لحم بتلو;كريما سائلة;زنجبيل;عجينة باف باستري;شوكولا سوداء;فستق;سمسم;جبنة بيضاء;لومي;لوبياء;حليب مكثّف;لحم ضاني;كستناء;فخذ خروف;بشر ليمون;خضار مشكلة;قرع أصفر;أوريو بالشوكولاتة;رمان;جبنة حلوم;فانيليا;خل;عجينة عثملية;بصل ابيض;لحم راس عصفور;كاتشاب;باشن فروت إستوائية;حمام;زبدة فول سوداني;فيليه صدر دجاج;كريما طازجة;سباغيتي;كاجو;خل أبيض;عجينة كنافة;شعيرية;أوراق حبق;بيكنج بودر;كالاماري;ورق عنب;كيري;فول;جبن عكاوي;خل بلسمك;بريتزل;سمك أنشوفة;كبد دجاج;أرز قصير حبة;تين;فلافل;كباب;ماء بارد;شوكولاتة بيضاء;عنب;ماء ورد;ورق غار;كسكس;صلصة بيستو;فلفل أخضر حلو;مقادم;يقطين;كورن فليكس;عجينة;فيتوتشيني;دبس رمان;سمك لقز;كعكة سمسم;مكعب مرق دجاج;صلصة صويا;هيل أخضر;فليفلة;زعفران;فيليه لحم بقر;ماء زهر;لحم بقر مفروم;فلفل رومي أخضر;شبت;فلفل'".split(";"),
type:"scatterternary"}];layout={autosize:!0,ternary:{aaxis:{title:{text:"الحلويات"}},baxis:{title:{text:"المقبلات"}},caxis:{title:{text:"أطباق رئيسية"}}},xaxis:{autorange:!0},yaxis:{autorange:!0},margin:{t:40,l:40,r:40,b:40}};config={displayModeBar:!1,responsive:!0};

Plotly.plot("ternary-data",{data:data,layout:layout,config:config});
