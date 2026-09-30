const groups=[
["chest","Грудь"],["quads","Квадрицепс"],["glutes","Ягодицы"],["hamstrings","Бицепс бедра"],["calves","Икры"],
["lats","Спина — широчайшие"],["upperback","Верх спины / ромбовидные"],["traps","Трапеции"],
["frontdelt","Передняя дельта"],["middelt","Средняя дельта"],["reardelt","Задняя дельта"],
["biceps","Бицепс"],["triceps","Трицепс"],["forearms","Предплечья"],["abs","Пресс"]
];

const raw=[
["Грудь","Жим штанги лёжа","Грудные мышцы, передняя дельта, трицепс","Ляг на скамью, сведи лопатки и поставь стопы на пол. Опускай штангу к нижней/средней части груди, затем выжимай вверх без потери контроля."],
["Грудь","Жим гантелей лёжа","Грудные мышцы, передняя дельта, трицепс","Опускай гантели по бокам груди с контролем, затем своди их вверх по естественной траектории, не сталкивая."],
["Грудь","Жим в тренажёре","Грудные мышцы, передняя дельта, трицепс","Настрой сиденье так, чтобы рукояти были примерно на уровне середины груди. Выжми рукояти вперёд и медленно верни."],
["Грудь","Жим гантелей на наклонной скамье","Верх груди, передняя дельта, трицепс","Установи скамью примерно на 20–40°. Опускай гантели к верхней части груди и выжимай вверх без чрезмерного прогиба."],
["Грудь","Жим штанги на наклонной скамье","Верх груди, передняя дельта, трицепс","Ляг на наклонную скамью, сведи лопатки. Опускай штангу к верхней части груди и выжимай по стабильной траектории."],
["Грудь","Разводка с гантелями","Грудные мышцы","Слегка согни локти. Разводи руки до комфортного растяжения груди и своди гантели над грудью, не превращая движение в жим."],
["Грудь","Сведение рук в кроссовере","Грудные мышцы","Сделай небольшой наклон корпуса, мягко согни локти и своди рукояти перед собой, сокращая грудь."],
["Грудь","Сведение рук в тренажёре","Грудные мышцы","Прижми спину к спинке, своди рычаги перед собой и контролируемо возвращай их назад."],
["Грудь","Отжимания от пола","Грудь, трицепс, передняя дельта, кор","Корпус держи прямой, опускай грудь к полу и выжимайся вверх, сохраняя нейтральное положение таза."],
["Грудь","Отжимания на брусьях","Грудь, трицепс, передняя дельта","Для акцента на груди слегка наклони корпус вперёд, опустись до комфортной глубины и мощно выжми себя вверх."],

["Квадрицепс","Приседания со штангой","Квадрицепс, ягодицы, мышцы корпуса","Поставь штангу устойчиво, вдохни и напряги корпус. Сядь вниз и назад, колени веди по направлению носков, затем встань."],
["Квадрицепс","Фронтальные приседания","Квадрицепс, ягодицы, кор","Держи штангу на передних дельтах, сохраняя высокий корпус. Сядь вниз между ног и встань, не теряя положения локтей."],
["Квадрицепс","Гакк-приседания","Квадрицепс, ягодицы","Плотно прижми спину к платформе. Опускайся контролируемо до комфортной глубины и выжимай платформу через всю стопу."],
["Квадрицепс","Жим ногами","Квадрицепс, ягодицы, бицепс бедра","Поставь стопы стабильно на платформу. Опускай платформу до комфортной глубины, не отрывая таз, затем выжимай без блокировки коленей."],
["Квадрицепс","Болгарские приседания","Квадрицепс, ягодицы","Одну ногу поставь сзади на опору. Опускай таз вниз, сохраняя опорную стопу устойчивой, затем вернись вверх."],
["Квадрицепс","Выпады","Квадрицепс, ягодицы","Сделай шаг вперёд, опустись до комфортной глубины и оттолкнись опорной ногой. Колено контролируй над стопой."],
["Квадрицепс","Выпады назад","Квадрицепс, ягодицы","Сделай шаг назад, опусти колено почти к полу и вернись в исходное положение, сохраняя корпус стабильным."],
["Квадрицепс","Разгибание ног в тренажёре","Квадрицепс","Зафиксируй таз и разгибай колени плавно. В верхней точке кратко напряги квадрицепс и медленно опусти валик."],
["Квадрицепс","Степ-апы","Квадрицепс, ягодицы","Поставь всю стопу на платформу, поднимись преимущественно усилием рабочей ноги и контролируемо опустись."],
["Квадрицепс","Приседания с гантелью","Квадрицепс, ягодицы","Держи гантель у груди, опускайся вниз с ровным корпусом и вставай через устойчивую стопу."],

["Ягодицы","Ягодичный мост","Большая ягодичная, задняя поверхность бедра","Ляг на спину, согни ноги. Подними таз за счёт ягодиц, сохраняя рёбра опущенными, затем медленно опусти."],
["Ягодицы","Hip Thrust","Большая ягодичная, задняя поверхность бедра","Верх спины опирается на скамью. Подними таз до разгибания в тазобедренном суставе, не переразгибая поясницу."],
["Ягодицы","Румынская тяга","Ягодицы, бицепс бедра","Отводи таз назад при слегка согнутых коленях, держи вес близко к ногам и поднимись за счёт ягодиц и задней поверхности бедра."],
["Ягодицы","Болгарские приседания","Ягодицы, квадрицепс","Длиннее поставь переднюю ногу и слегка наклони корпус. Опускай таз вниз и поднимайся усилием передней ноги."],
["Ягодицы","Выпады назад","Ягодицы, квадрицепс","Шагни назад, слегка наклони корпус и опустись вниз. Вернись вверх, давя передней стопой в пол."],
["Ягодицы","Выпады с шагом","Ягодицы, квадрицепс","Делай последовательные выпады вперёд, удерживая корпус стабильным и контролируя положение колена."],
["Ягодицы","Отведение ноги назад в кроссовере","Большая ягодичная","Закрепи манжету, отводи ногу назад без раскачки и возвращай её под контролем."],
["Ягодицы","Отведение ноги в тренажёре","Средняя и большая ягодичные","Зафиксируй корпус и отводи рабочую ногу назад или в заданном тренажёром направлении без рывка."],
["Ягодицы","Разведение ног в тренажёре","Средняя и малая ягодичные","Стабилизируй таз и разводи колени в стороны, затем медленно возвращай их, сохраняя напряжение."],
["Ягодицы","Step-up","Ягодицы, квадрицепс","Поставь одну стопу на платформу, подними тело усилием рабочей ноги и опустись обратно под контролем."],

["Бицепс бедра","Румынская тяга","Бицепс бедра, ягодицы, разгибатели спины","Отводи таз назад, сохраняя нейтральную спину и мягкие колени. Опускай вес до сильного, но комфортного растяжения задней поверхности бедра."],
["Бицепс бедра","Становая тяга","Задняя поверхность бедра, ягодицы, разгибатели спины","Подойди к штанге, напряги корпус, подними её через разгибание ног и таза, удерживая штангу близко к телу."],
["Бицепс бедра","Сгибание ног лёжа","Бицепс бедра, икры","Зафиксируй таз и сгибай колени, подтягивая валик к ягодицам. Медленно выпрямляй ноги."],
["Бицепс бедра","Сгибание ног сидя","Бицепс бедра","Прижми таз и спину к опоре. Сгибай колени под себя и возвращай их медленно, не теряя контакта с сиденьем."],
["Бицепс бедра","Сгибание одной ноги","Бицепс бедра","Работай одной ногой, сохраняя таз неподвижным. Выполняй полную контролируемую амплитуду."],
["Бицепс бедра","Good Morning","Бицепс бедра, ягодицы, разгибатели спины","Положи лёгкий вес на плечи, отведи таз назад и наклони корпус с нейтральной спиной, затем вернись вверх."],
["Бицепс бедра","Nordic Curl","Бицепс бедра, ягодицы","Зафиксируй голени, медленно опускай корпус вперёд, тормозя движение задней поверхностью бедра, затем помоги себе вернуться."],
["Бицепс бедра","Гиперэкстензия","Ягодицы, бицепс бедра, разгибатели спины","Сохраняй нейтральную спину, наклоняйся из тазобедренного сустава и поднимай корпус сокращением ягодиц и задней поверхности бедра."],
["Бицепс бедра","Тяга на прямых ногах","Бицепс бедра, ягодицы","Держи ноги почти прямыми, отводи таз назад и опускай вес близко к телу, затем возвращайся за счёт задней цепи."],

["Икры","Подъём на носки стоя","Икроножная и камбаловидная мышцы","Поднимись на носки через большой палец, задержись вверху и медленно опустись до растяжения."],
["Икры","Подъём на носки сидя","Камбаловидная мышца, икры","Сядь с согнутыми коленями, поднимай пятки вверх и медленно опускай их вниз."],
["Икры","Подъём на носки в тренажёре","Икры","Выполняй подъём через полную комфортную амплитуду, без пружинящих движений."],
["Икры","Подъём на носки в жиме ногами","Икры","Поставь переднюю часть стоп на платформу и выполняй движение только в голеностопе, контролируя пятки."],
["Икры","Подъём на одной ноге","Икры","Опираясь одной ногой, поднимись на носок и медленно опустись, сохраняя баланс и полную амплитуду."],

["Спина — широчайшие","Подтягивания","Широчайшие, бицепс, мышцы корпуса","Возьмись за перекладину, подтяни грудь вверх за счёт спины и опустись под контролем, не раскачиваясь."],
["Спина — широчайшие","Подтягивания обратным хватом","Широчайшие, бицепс","Возьмись ладонями к себе. Подтяни грудь к перекладине, сводя лопатки и сгибая локти, затем плавно опустись."],
["Спина — широчайшие","Тяга верхнего блока","Широчайшие, бицепс","Сядь устойчиво, тяни рукоять к верхней части груди, направляя локти вниз, затем медленно выпрямляй руки."],
["Спина — широчайшие","Тяга верхнего блока узким хватом","Широчайшие, бицепс","Тяни узкую рукоять к груди, удерживая корпус стабильным и концентрируясь на движении локтей вниз."],
["Спина — широчайшие","Тяга верхнего блока обратным хватом","Широчайшие, бицепс","Ладони к себе, тяни рукоять к верхней части груди и контролируемо возвращай её вверх."],
["Спина — широчайшие","Тяга гантели одной рукой","Широчайшие, ромбовидные, задняя дельта","Опираясь рукой и коленом на скамью, тяни гантель к тазу, сохраняя плечо под контролем."],
["Спина — широчайшие","Тяга штанги в наклоне","Широчайшие, ромбовидные, задняя дельта","Наклони корпус с нейтральной спиной, тяни штангу к нижней части живота и медленно опускай."],
["Спина — широчайшие","Тяга Т-грифа","Широчайшие, ромбовидные, трапеции","Сохраняй нейтральную спину и тяни рукоять к корпусу, направляя локти назад."],
["Спина — широчайшие","Тяга горизонтального блока","Широчайшие, ромбовидные","Сядь ровно, тяни рукоять к животу, своди лопатки и медленно отпускай вперёд."],
["Спина — широчайшие","Пуловер в кроссовере","Широчайшие","Слегка наклонись, держи локти почти фиксированными и дугой тяни рукоять к бёдрам, затем возвращай под контролем."],
["Спина — широчайшие","Пуловер с гантелью","Широчайшие, грудь","Ляг на скамью, держи гантель над грудью и плавно отводи её за голову, затем возвращай за счёт широчайших."],

["Верх спины / ромбовидные","Тяга штанги в наклоне","Ромбовидные, средняя трапеция, широчайшие","Наклони корпус, удерживай лопатки под контролем и тяни штангу к животу."],
["Верх спины / ромбовидные","Тяга гантелей","Ромбовидные, трапеции, широчайшие","Наклони корпус с нейтральной спиной и тяни две гантели к нижним рёбрам, сводя лопатки."],
["Верх спины / ромбовидные","Тяга Т-грифа","Ромбовидные, средняя трапеция, широчайшие","Тяни рукоять к корпусу, сохраняя грудную клетку стабильной и не переразгибая поясницу."],
["Верх спины / ромбовидные","Горизонтальная тяга","Ромбовидные, средняя трапеция, широчайшие","Тяни рукоять к животу, в конце движения мягко своди лопатки и возвращай вес."],
["Верх спины / ромбовидные","Тяга гантели одной рукой","Ромбовидные, широчайшие","Тяни гантель к тазу, не вращая корпус и контролируя опускание."],
["Верх спины / ромбовидные","Face Pull","Задняя дельта, ромбовидные, средняя/нижняя трапеция","Тяни канат к лицу, разводя кисти и направляя локти в стороны. Возвращай канат медленно."],
["Верх спины / ромбовидные","Обратная разводка","Задняя дельта, ромбовидные","Наклони корпус, слегка согни локти и разводи руки в стороны без рывков."],

["Трапеции","Шраги со штангой","Верхняя трапеция","Подними плечи строго вверх, кратко задержись и медленно опусти. Не вращай плечами."],
["Трапеции","Шраги с гантелями","Верхняя трапеция","Держи гантели по бокам и выполняй вертикальное движение плечами вверх-вниз под контролем."],
["Трапеции","Шраги в тренажёре","Верхняя трапеция","Зафиксируй корпус и поднимай плечи вверх, не сгибая локти и не выполняя круговых движений."],
["Трапеции","Тяга штанги к подбородку","Трапеция, средняя дельта","Тяни штангу вверх близко к телу до комфортной высоты, не заставляя плечевой сустав уходить в болезненную амплитуду."],
["Трапеции","Farmer's Walk","Трапеции, предплечья, кор","Возьми тяжёлые гантели, выпрями корпус и иди короткими контролируемыми шагами, удерживая плечи стабильными."],
["Трапеции","Face Pull","Трапеции, задняя дельта, ромбовидные","Тяни канат к лицу, разводя локти и внешне вращая плечи, затем медленно вернись."],

["Передняя дельта","Жим штанги над головой","Передняя и средняя дельта, трицепс","Напряги корпус и выжимай штангу вертикально вверх, удерживая рёбра и таз под контролем."],
["Передняя дельта","Жим гантелей сидя","Передняя и средняя дельта, трицепс","Сядь с опорой, опускай гантели до комфортной глубины и выжимай вверх без чрезмерного прогиба."],
["Передняя дельта","Жим гантелей стоя","Передняя и средняя дельта, трицепс, кор","Стой устойчиво, напряги пресс и ягодицы и выжимай гантели вверх по контролируемой траектории."],
["Передняя дельта","Армейский жим","Передняя и средняя дельта, трицепс","Выжимай штангу над головой из устойчивой стойки, не компенсируя движение сильным прогибом поясницы."],
["Передняя дельта","Жим в тренажёре","Передняя дельта, средняя дельта, трицепс","Настрой сиденье, выжми рукояти вверх и плавно верни их до комфортной глубины."],
["Передняя дельта","Жим Арнольда","Передняя и средняя дельта, трицепс","Начни с гантелями перед лицом ладонями к себе, разворачивай ладони наружу и выжимай вверх, затем вернись."],
["Передняя дельта","Подъём гантелей перед собой","Передняя дельта","Поднимай прямые или слегка согнутые руки перед собой примерно до уровня плеч, не раскачивая корпус."],

["Средняя дельта","Разведения гантелей в стороны","Средняя дельта","Слегка согни локти и поднимай руки в стороны до уровня плеч, сохраняя движение плавным."],
["Средняя дельта","Разведения в тренажёре","Средняя дельта","Прижми корпус к опоре и разводи руки в стороны без рывка, затем медленно возвращай."],
["Средняя дельта","Разведения одной рукой в кроссовере","Средняя дельта","Отводи рукоять в сторону дугой до уровня плеч, удерживая корпус неподвижным."],
["Средняя дельта","Подъём руки в сторону с нижнего блока","Средняя дельта","Встань боком к блоку и поднимай руку в сторону до комфортного уровня плеч."],
["Средняя дельта","Жим гантелей","Передняя и средняя дельта, трицепс","Выполняй вертикальный жим гантелей с устойчивым корпусом и контролируемой амплитудой."],

["Задняя дельта","Обратная разводка с гантелями","Задняя дельта, ромбовидные","Наклони корпус и разводи гантели в стороны, не поднимая плечи к ушам."],
["Задняя дельта","Обратная разводка в тренажёре","Задняя дельта, верх спины","Прижми грудь к опоре и разводи рукояти назад за счёт задних дельт."],
["Задняя дельта","Face Pull","Задняя дельта, трапеции, ромбовидные","Тяни канат к лицу, разводя кисти и локти в стороны, затем контролируемо выпрямляй руки."],
["Задняя дельта","Разведение рук в кроссовере","Задняя дельта","Перекрёстно возьми рукояти и разводи руки назад/в стороны, удерживая плечи стабильными."],
["Задняя дельта","Тяга каната к лицу","Задняя дельта, ромбовидные, трапеции","Тяни канат к уровню лица, разводя его в стороны и не поднимая плечи."],

["Бицепс","Подъём штанги на бицепс","Бицепс, плечелучевая мышца","Прижми локти к корпусу, сгибай руки без раскачки и медленно опускай штангу."],
["Бицепс","Подъём EZ-штанги","Бицепс, плечелучевая мышца","Возьми EZ-гриф удобным хватом, сгибай локти и поднимай вес без движения плеч вперёд."],
["Бицепс","Подъём гантелей","Бицепс","Поочерёдно или одновременно сгибай руки, сохраняя локти близко к корпусу."],
["Бицепс","Молотки","Бицепс, плечелучевая, плечевая","Держи ладони друг к другу и сгибай локти без вращения кистей, затем медленно опускай."],
["Бицепс","Подъём гантели на скамье Скотта","Бицепс","Зафиксируй плечо на подушке и сгибай локоть, не отрывая плечо от опоры."],
["Бицепс","Сгибание рук на скамье Скотта","Бицепс","Положи плечи на подушку, опускай вес до контролируемого растяжения и сгибай руки обратно."],
["Бицепс","Сгибание рук в кроссовере","Бицепс","Сохраняй локти стабильными и сгибай руки против сопротивления блока, контролируя разгибание."],
["Бицепс","Концентрированный подъём","Бицепс","Сядь, упрись локтем в бедро и медленно сгибай руку, концентрируясь на работе бицепса."],
["Бицепс","Сгибание на наклонной скамье","Бицепс","Ляг на наклонную скамью, дай рукам опуститься назад и сгибай локти, не двигая плечами."],
["Бицепс","Сгибание одной руки в тренажёре","Бицепс","Зафиксируй плечо в опоре тренажёра и выполни плавное сгибание и разгибание локтя."],

["Трицепс","Жим узким хватом","Трицепс, грудь, передняя дельта","Возьми штангу уже обычного хвата, опускай к нижней части груди и выжимай, удерживая локти подконтрольно."],
["Трицепс","Отжимания на брусьях","Трицепс, грудь, передняя дельта","Для большего акцента на трицепсе держи корпус более вертикально и выжимайся вверх без провала плеч."],
["Трицепс","Французский жим","Трицепс","Удерживай плечи стабильными, сгибай локти и опускай вес за голову, затем разгибай руки."],
["Трицепс","Разгибание рук с канатом","Трицепс","Прижми локти к корпусу, разгибай руки вниз и внизу слегка разводи концы каната."],
["Трицепс","Разгибание рук с прямой рукоятью","Трицепс","Стабилизируй локти и разгибай руки вниз, не раскачивая корпус."],
["Трицепс","Разгибание одной руки в кроссовере","Трицепс","Работай одной рукой, удерживая плечо неподвижным и полностью контролируя разгибание локтя."],
["Трицепс","Разгибание из-за головы","Длинная головка трицепса","Подними локти, опускай рукоять за голову и разгибай руки, сохраняя плечи стабильными."],
["Трицепс","Разгибание гантели из-за головы","Длинная головка трицепса","Держи одну гантель двумя руками или одной рукой, опускай за голову и разгибай локти."],

["Предплечья","Сгибание кистей со штангой","Сгибатели предплечья","Опирай предплечья на скамью, сгибай кисти вверх и медленно опускай."],
["Предплечья","Разгибание кистей со штангой","Разгибатели предплечья","Зафиксируй предплечья и разгибай кисти вверх, контролируя обратное движение."],
["Предплечья","Сгибание кистей с гантелями","Сгибатели предплечья","Работай кистями с гантелями, удерживая предплечья неподвижными."],
["Предплечья","Обратные сгибания рук","Плечелучевая, разгибатели предплечья, бицепс","Возьми штангу прямым хватом, сгибай локти без раскачки и медленно опускай."],
["Предплечья","Farmer's Walk","Предплечья, трапеции, кор","Иди с тяжёлыми гантелями, удерживая кисти нейтрально и корпус стабильно."],
["Предплечья","Удержание веса","Предплечья, сила хвата","Удерживай тяжёлый вес заданное время, не сгибая кисти и сохраняя плечи стабильными."],
["Предплечья","Вис на перекладине","Сила хвата, предплечья, мышцы корпуса","Повисни на перекладине, удерживая плечи активными и корпус контролируемым."],

["Пресс","Скручивания","Прямая мышца живота","Подкрути грудную клетку к тазу, не тянув голову руками, и медленно вернись."],
["Пресс","Скручивания на блоке","Прямая мышца живота","Встань на колени перед верхним блоком, подкручивай корпус вниз за счёт пресса и возвращайся под контролем."],
["Пресс","Скручивания на наклонной скамье","Прямая мышца живота","Ляг на наклонную скамью и плавно поднимай верх корпуса за счёт сгибания позвоночника."],
["Пресс","Подъём туловища","Прямая мышца живота, сгибатели бедра","Поднимай корпус контролируемо, избегая рывков и чрезмерного давления на поясницу."],
["Пресс","Подъём ног лёжа","Прямая мышца живота, сгибатели бедра","Поднимай прямые или слегка согнутые ноги, удерживая поясницу подконтрольно, затем медленно опускай."],
["Пресс","Подъём ног в висе","Пресс, сгибатели бедра","Из виса поднимай ноги к комфортной высоте без раскачки, подкручивая таз в верхней части."],
["Пресс","Подъём коленей в висе","Пресс, сгибатели бедра","Из виса подтягивай колени к груди, подкручивая таз и не раскачивая тело."],
["Пресс","Обратные скручивания","Прямая мышца живота","Подкручивай таз к грудной клетке, отрывая таз от пола, и медленно опускай."],
["Пресс","Русские скручивания","Косые мышцы живота, прямая мышца живота","Сядь с напряжённым корпусом и поворачивай грудную клетку из стороны в сторону без резких движений."],
["Пресс","Боковые скручивания","Косые мышцы живота","Сокращай боковую стенку живота, сближая плечо и таз, без рывка шеей."],
["Пресс","Боковая планка","Косые мышцы, средняя ягодичная, кор","Опирайся на предплечье и стопы, удерживай тело прямой линией и не проваливай таз."],
["Пресс","Pallof Press","Косые мышцы, глубокие мышцы корпуса","Встань боком к блоку, держи рукоять у груди и выжимай вперёд, сопротивляясь вращению корпуса."],
["Пресс","Woodchopper","Косые мышцы, кор, плечевой пояс","Перемещай рукоять по диагонали через корпус, контролируя вращение и сохраняя стабильность таза."],
["Пресс","Планка","Прямая мышца живота, косые, кор","Напряги пресс и ягодицы, удерживай тело прямой линией и спокойно дыши."],
["Пресс","Планка с упором на локти","Кор, прямая мышца живота","Локти под плечами, тело прямое, таз нейтрален. Удерживай напряжение без задержки дыхания."],
["Пресс","Планка на прямых руках","Кор, плечевой пояс","Ладони под плечами, тело прямое, пресс и ягодицы напряжены, без провала поясницы."],
["Пресс","Dead Bug","Глубокие мышцы корпуса, прямая мышца живота","Лёжа на спине, попеременно выпрямляй противоположные руку и ногу, не отрывая поясницу от пола."],
["Пресс","Bird Dog","Кор, разгибатели спины, ягодицы","Из положения на четвереньках выпрямляй противоположные руку и ногу, сохраняя таз неподвижным."],
["Пресс","Ab Wheel","Прямая мышца живота, широчайшие, кор","Из положения на коленях плавно выкатывай колесо вперёд до контролируемой точки и возвращайся за счёт корпуса."]
];

const library=raw.map(function(x){return {group:x[0],name:x[1],target:x[2],how:x[3]};});
var key="gymtracker.v2",data=JSON.parse(localStorage.getItem(key)||"{}"),profile=JSON.parse(localStorage.getItem("gymtracker.profile")||"null"),selected=new Date(),month=new Date(),muscle="Грудь";selected.setHours(12,0,0,0);month.setDate(1);
var $=function(s){return document.querySelector(s)},pad=function(n){return String(n).padStart(2,"0")},dateKey=function(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())},fmt=function(d){return d.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"})},save=function(){localStorage.setItem(key,JSON.stringify(data))},has=function(k){return !!(data[k]&&data[k].exercises&&data[k].exercises.length)};

function updatePhoneClock(){var el=$("#phoneClock");if(el){el.textContent=new Date().toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})}}
setInterval(updatePhoneClock,1000);updatePhoneClock();
function init(){if(profile){$("#onboarding").classList.add("hidden");$("#mainApp").classList.remove("hidden");renderAll()}else $("#onboarding").classList.remove("hidden")}
$("#profileForm").onsubmit=function(e){e.preventDefault();profile={name:$("#pName").value,age:+$("#pAge").value,height:+$("#pHeight").value,weight:+$("#pWeight").value,goal:$("#pGoal").value,level:$("#pLevel").value,weights:[{date:dateKey(new Date()),value:+$("#pWeight").value}]};localStorage.setItem("gymtracker.profile",JSON.stringify(profile));init()};
document.querySelectorAll("[data-page]").forEach(function(b){b.onclick=function(){showPage(b.dataset.page)}});$("#profileAvatar").onclick=function(){showPage("profile")};
function showPage(p){document.querySelectorAll(".page").forEach(function(x){x.classList.remove("active")});$("#page-"+p).classList.add("active");document.querySelectorAll("[data-page]").forEach(function(x){x.classList.toggle("active",x.dataset.page===p)});renderAll()}
function renderAll(){if(!profile)return;$("#greeting").textContent="Привет, "+profile.name.split(" ")[0]+" 👋";$("#profileName").textContent=profile.name;$("#profileDetails").textContent=profile.age+" лет · "+profile.height+" см · "+profile.weight+" кг · "+profile.level;$("#profileGoal").textContent=profile.goal;$("#bigAvatar").textContent=(profile.name[0]||"G").toUpperCase();$("#profileAvatar").textContent=(profile.name[0]||"G").toUpperCase();renderHome();renderCalendar();renderPlan();renderLibrary();renderProgress();renderExtras();renderTemplates();renderPhotos()}
function getCompletedWorkouts(){return Object.keys(data).filter(function(k){return data[k]&&data[k].completed}).sort()}
function getExerciseHistory(name){var rows=[];getCompletedWorkouts().forEach(function(k){(data[k].exercises||[]).forEach(function(e){if(e.name===name){var ds=e.setDetails&&e.setDetails.length?e.setDetails:[{weight:e.weight||0,reps:e.reps||0,setTime:0}];rows.push({date:k,sets:ds,weight:Math.max.apply(null,ds.map(function(s){return +s.weight||0})),reps:Math.max.apply(null,ds.map(function(s){return +s.reps||0}))})}})});return rows}
function getLastPerformance(name){var h=getExerciseHistory(name);return h.length?h[h.length-1]:null}
function roundWeight(v){return Math.round((v||0)*2)/2}
function suggestedWeight(name){var last=getLastPerformance(name);if(!last)return 0;var top=last.weight||0;if(top<=0)return 0;var avg=last.sets.reduce(function(s,x){return s+(+x.reps||0)},0)/Math.max(1,last.sets.length);return roundWeight(avg>=9?top+2.5:avg>=7?top:Math.max(0,top-2.5))}
function totalVolumeForExercise(e){var ds=e.setDetails&&e.setDetails.length?e.setDetails:[{weight:e.weight||0,reps:e.reps||0}];return ds.reduce(function(s,x){return s+(+x.weight||0)*(+x.reps||0)},0)}
function calcLevel(){var n=getCompletedWorkouts().length,v=Object.keys(data).reduce(function(s,k){return s+(data[k].exercises||[]).reduce(function(a,e){return a+totalVolumeForExercise(e)},0)},0);return n>=100||v>=500000?"ELITE":n>=50||v>=200000?"АТЛЕТ":n>=20||v>=50000?"ПРОДВИНУТЫЙ":n>=5||v>=10000?"СРЕДНИЙ":"НОВИЧОК"}
function vibrate(){if(navigator.vibrate)navigator.vibrate([120,60,120])}
function notifyRestDone(){vibrate();if("Notification" in window&&Notification.permission==="granted")new Notification("GymTracker",{body:"Отдых закончен — следующий подход!"})}
function renderHome(){var k=dateKey(new Date()),d=data[k];$("#todayTitle").textContent=d&&d.exercises&&d.exercises.length?"Сегодня: "+d.exercises.length+" упражнений":"Твоя тренировка";$("#todayMeta").textContent=d&&d.exercises&&d.exercises.length?"План готов — можно начинать":"Добавь упражнения через План";$("#currentWeight").textContent=profile.weight;var keys=Object.keys(data),now=new Date(),week=keys.filter(function(x){var z=new Date(x);return (now-z)/86400000<7&&(now-z)>=0});$("#weekWorkouts").textContent=week.filter(function(x){return data[x].completed}).length;$("#weekVolume").textContent=week.reduce(function(s,x){return s+(data[x].exercises||[]).reduce(function(a,e){return a+(e.sets||0)*(e.reps||0)*(e.weight||0)},0)},0);var done=keys.filter(function(x){return data[x].completed}).sort(),last=done.pop();$("#lastWorkout").textContent=last?"Тренировка "+fmt(new Date(last)):"Пока нет завершённых тренировок"}
function renderCalendar(){$("#monthTitle").textContent=month.toLocaleDateString("ru-RU",{month:"long",year:"numeric"});$("#weekdays").innerHTML=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(function(x){return "<div>"+x+"</div>"}).join("");var first=(month.getDay()+6)%7,days=new Date(month.getFullYear(),month.getMonth()+1,0).getDate(),html="";for(var i=0;i<first;i++)html+="<span></span>";for(var d=1;d<=days;d++){var x=new Date(month.getFullYear(),month.getMonth(),d,12),k=dateKey(x),c=(dateKey(x)===dateKey(selected)?"selected ":"")+(dateKey(x)===dateKey(new Date())?"today ":"")+(has(k)?"has-workout":"");html+="<button class=\""+c+"\" data-day=\""+d+"\">"+d+"</button>"}$("#days").innerHTML=html;document.querySelectorAll("#days button").forEach(function(b){b.onclick=function(){selected=new Date(month.getFullYear(),month.getMonth(),+b.dataset.day,12);renderPlan()}})}
$("#prev").onclick=function(){month=new Date(month.getFullYear(),month.getMonth()-1,1,12);renderCalendar()};$("#next").onclick=function(){month=new Date(month.getFullYear(),month.getMonth()+1,1,12);renderCalendar()};$("#addPlan").onclick=function(){showPage("exercises")};
function renderPlan(){renderCalendar();$("#selectedDate").textContent=fmt(selected);var k=dateKey(selected),arr=data[k]&&data[k].exercises||[];$("#planList").innerHTML=arr.length?arr.map(function(e,i){var sets=e.setDetails&&e.setDetails.length?e.setDetails.map(function(x){return (x.weight||0)+" кг × "+(x.reps||0)}).join(" · "):((e.sets||3)+" подхода × "+(e.reps||10)+" повторений · "+(e.weight||0)+" кг");return "<div class=\"plan-item\"><div><strong>"+e.name+"</strong><br><small>"+sets+"</small></div><button class=\"icon-btn\" data-remove=\""+i+"\">×</button></div>"}).join(""):"<div class=\"card empty\">На этот день тренировка не запланирована.<br><small>Нажми ＋, чтобы добавить упражнение.</small></div>";document.querySelectorAll("[data-remove]").forEach(function(b){b.onclick=function(){arr.splice(+b.dataset.remove,1);save();renderPlan()}})}
function addExercise(nameOrGroup,sets,reps){var found=library.find(function(x){return x.name===nameOrGroup})||library.find(function(x){return x.group===nameOrGroup});if(!found)found=library[0];var k=dateKey(selected);if(!data[k])data[k]={exercises:[]};sets=+sets||3;reps=+reps||10;data[k].exercises.push({name:found.name,group:found.group,target:found.target,sets:sets,reps:reps,weight:0});save();showPage("plan")}
function renderLibrary(){var q=(($("#exerciseSearch").value)||"").toLowerCase();var chips=$("#muscles");chips.innerHTML="";groups.forEach(function(g){var b=document.createElement("button");b.type="button";b.textContent=g[1];if(muscle===g[1])b.className="active";b.onclick=function(){muscle=g[1];renderLibrary()};chips.appendChild(b)});var list=library.filter(function(x){return x.group===muscle&&x.name.toLowerCase().indexOf(q)>=0});var box=$("#exerciseLibrary");box.innerHTML="";if(!list.length){box.innerHTML="<div class=\"card empty\">Упражнения не найдены.</div>";return}list.forEach(function(x){var item=document.createElement("button");item.type="button";item.className="exercise-item";var main=document.createElement("span");main.className="exercise-main";var title=document.createElement("strong");title.textContent=x.name;var desc=document.createElement("span");desc.className="exercise-desc";desc.textContent=x.target;main.appendChild(title);main.appendChild(desc);var plus=document.createElement("span");plus.className="exercise-plus";plus.textContent="＋";item.appendChild(main);item.appendChild(plus);item.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();openExercise(x.name)});box.appendChild(item)})}
function openExercise(name){var x=library.find(function(e){return e.name===name});if(!x)return;$("#exerciseModalTitle").textContent=x.name;$("#exerciseMuscle").textContent=x.group;$("#exerciseTarget").textContent=x.target;$("#exerciseHow").textContent=x.how;var tips=["Контролируй движение в обе стороны, не бросай вес.","Подбирай вес, который позволяет сохранять технику.","Не используй инерцию и не компенсируй движение корпусом."];$("#exerciseTips").innerHTML=tips.map(function(t){return "<li>"+t+"</li>"}).join("");var muscleTags=$("#exerciseMuscles");if(muscleTags)muscleTags.innerHTML=x.target.split(",").map(function(m){return "<span class=\"muscle-tag\">"+m.trim()+"</span>"}).join("");$("#exerciseIcon").textContent=groupIcon(x.group);$("#addExerciseFromCard").dataset.exercise=x.name;$("#exerciseSets").value="3";$("#exerciseReps").value="10";var modal=$("#exerciseModal");modal.classList.remove("hidden");modal.style.display="flex"}
function groupIcon(g){if(g==="Грудь")return "🏋️";if(g.indexOf("Квадрицепс")>=0||g==="Бицепс бедра"||g==="Икры")return "🦵";if(g==="Ягодицы")return "🍑";if(g.indexOf("Спина")>=0)return "🦅";if(g==="Трапеции")return "🏔️";if(g.indexOf("дельта")>=0)return "💪";if(g==="Бицепс"||g==="Трицепс")return "💪";if(g==="Предплечья")return "✊";return "🧱"}
$("#exerciseSearch").oninput=renderLibrary;
$("#closeExercise").onclick=function(){var m=$("#exerciseModal");m.classList.add("hidden");m.style.display=""};
$("#exerciseModal").addEventListener("click",function(e){if(e.target.id==="exerciseModal"){e.currentTarget.classList.add("hidden");e.currentTarget.style.display=""}});
$("#addExerciseFromCard").onclick=function(){addExercise(this.dataset.exercise,$("#exerciseSets").value,$("#exerciseReps").value);var m=$("#exerciseModal");m.classList.add("hidden");m.style.display=""};$("#exerciseSearch").oninput=renderLibrary;
var workoutTimers={},workoutTimerIntervals={},setTimers={},setTimerIntervals={};
function formatTime(sec){sec=Math.max(0,Math.floor(sec||0));return pad(Math.floor(sec/60))+":"+pad(sec%60)}
function timerMarkup(i,e){
  var t=workoutTimers[i]||{elapsed:0,running:false};
  var details=e.setDetails&&e.setDetails.length?e.setDetails:Array.from({length:e.sets||3},function(){return {reps:e.reps||10,weight:e.weight||0,setTime:0}});
  setTimers[i]=details.map(function(s){return {elapsed:s.setTime||0,running:false,done:!!s.setTime}});
  var last=getLastPerformance(e.name),suggest=suggestedWeight(e.name);
  var prev=last?"Прошлый раз: "+last.sets.map(function(s){return (s.weight||0)+" кг × "+(s.reps||0)}).join(" · "):"Первый раз — выбери комфортный вес";
  var sug=suggest?"Попробуй сегодня: "+suggest+" кг":"Подбери рабочий вес";
  return '<div class="workout-card card"><div class="workout-exercise-head"><div><strong>'+e.name+'</strong><div class="timer-status" id="timerStatus'+i+'">'+(t.running?"Идёт время упражнения":"Готово к подходу")+'</div><div class="previous-performance">'+prev+'</div><div class="suggested-weight">💡 '+sug+'</div></div><div><div class="workout-timer" id="timer'+i+'">'+formatTime(t.elapsed)+'</div><div class="timer-actions"><button class="timer-btn primary-timer" data-timer-start="'+i+'">'+(t.running?"Пауза":"Старт")+'</button><button class="timer-btn" data-timer-stop="'+i+'">Стоп</button></div></div></div><div class="set-head"><span>№</span><span>Повт.</span><span>Вес, кг</span></div>'+details.map(function(s,j){var st=setTimers[i][j];return '<div class="set-grid set-row-timed"><span class="set-num">'+(j+1)+'</span><input type="number" min="0" value="'+(s.reps||0)+'" data-reps="'+i+"-"+j+'"><input type="number" min="0" step="0.5" value="'+(s.weight||0)+'" data-setweight="'+i+"-"+j+'"><div class="set-time-box"><button class="timer-btn set-timer-btn '+(st.done?"done":"primary-timer")+'" data-set-start="'+i+"-"+j+'">'+(st.done?"✓ "+formatTime(st.elapsed):"Старт подхода")+'</button><span class="set-time-label" id="setTime'+i+"-"+j+'">'+(st.done?"Время: "+formatTime(st.elapsed):"")+'</span><span class="rest-time-label" id="restTime'+i+"-"+j+'"></span></div></div>'}).join("")+'</div>'
}
function clearWorkoutTimers(){Object.keys(workoutTimerIntervals).forEach(function(k){clearInterval(workoutTimerIntervals[k])});Object.keys(setTimerIntervals).forEach(function(k){clearInterval(setTimerIntervals[k])});workoutTimerIntervals={};setTimerIntervals={};workoutTimers={};setTimers={}}
$("#startWorkout").onclick=openWorkout;
function openWorkout(){clearWorkoutTimers();var k=dateKey(new Date()),arr=data[k]&&data[k].exercises||[];workoutTimers=arr.reduce(function(o,e,i){o[i]={elapsed:e.timerSeconds||0,running:false};return o},{});$("#workoutTitle").textContent=arr.length?"Сегодня · "+arr.length+" упражнений":"Свободная тренировка";$("#workoutExercises").innerHTML=arr.length?arr.map(function(e,i){return timerMarkup(i,e)}).join(""):"<div class=\"empty\">Добавь упражнения в План перед началом.</div>";$("#workoutModal").classList.remove("hidden");bindWorkoutControls()}
function bindWorkoutControls(){
document.querySelectorAll("[data-timer-start]").forEach(function(b){b.onclick=function(){var i=+b.dataset.timerStart;if(workoutTimers[i].running){workoutTimers[i].running=false;clearInterval(workoutTimerIntervals[i])}else{workoutTimers[i].running=true;workoutTimerIntervals[i]=setInterval(function(){workoutTimers[i].elapsed++;$("#timer"+i).textContent=formatTime(workoutTimers[i].elapsed)},1000)}b.textContent=workoutTimers[i].running?"Пауза":"Старт";$("#timerStatus"+i).textContent=workoutTimers[i].running?"Идёт время упражнения":"Пауза"}});
document.querySelectorAll("[data-timer-stop]").forEach(function(b){b.onclick=function(){var i=+b.dataset.timerStop;workoutTimers[i].running=false;clearInterval(workoutTimerIntervals[i]);workoutTimers[i].elapsed=0;$("#timer"+i).textContent="00:00";$("#timerStatus"+i).textContent="Сброшено";document.querySelector("[data-timer-start=\""+i+"\"]").textContent="Старт"}});
document.querySelectorAll("[data-set-start]").forEach(function(b){b.onclick=function(){var key=b.dataset.setStart.split("-"),i=+key[0],j=+key[1],st=setTimers[i][j];if(st.done)return;if(st.running){st.running=false;clearInterval(setTimerIntervals[b.dataset.setStart]);st.done=true;b.textContent="✓ "+formatTime(st.elapsed);b.classList.remove("primary-timer");b.classList.add("done");$("#setTime"+i+"-"+j).textContent="Время: "+formatTime(st.elapsed);startRestTimer(i,j,90)}else{st.running=true;b.textContent="Завершить · "+formatTime(st.elapsed);setTimerIntervals[b.dataset.setStart]=setInterval(function(){st.elapsed++;b.textContent="Завершить · "+formatTime(st.elapsed)},1000)}}});}
function startRestTimer(i,j,seconds){var el=$("#restTime"+i+"-"+j);if(!el)return;var left=seconds;el.textContent="Отдых "+formatTime(left);var key="rest-"+i+"-"+j;if(window.restIntervals&&window.restIntervals[key])clearInterval(window.restIntervals[key]);window.restIntervals=window.restIntervals||{};window.restIntervals[key]=setInterval(function(){left--;el.textContent=left>0?"Отдых "+formatTime(left):"Готово!";if(left<=0){clearInterval(window.restIntervals[key]);notifyRestDone()}},1000)}
document.querySelectorAll("[data-profile-action]").forEach(function(b){b.onclick=function(){var a=b.dataset.profileAction;if(a==="reset"&&confirm("Сбросить профиль и данные?")){localStorage.removeItem("gymtracker.profile");localStorage.removeItem(key);location.reload()}else if(a==="data")alert(profile.name+"\\n"+profile.age+" лет\\n"+profile.height+" см\\n"+profile.weight+" кг");else if(a==="goal")alert("Цель: "+profile.goal+"\\nУровень: "+profile.level);else if(a==="history")showPage("progress")}});
$("#saveTemplate").onclick=function(){var name=prompt("Название шаблона:","Моя тренировка");if(name)addTemplate(name)};
$("#addWeight").onclick=addWeightRecord;
$("#reminderBtn").onclick=requestReminder;
$("#exportBtn").onclick=exportData;
$("#photoInput").onchange=function(){savePhoto(this)};
$("#closeCompletion").onclick=function(){$("#completionModal").classList.add("hidden")};
setInterval(function(){var t=localStorage.getItem("gymtracker.reminderTime");if(!t)return;var now=new Date(),cur=pad(now.getHours())+":"+pad(now.getMinutes());var day=dateKey(now);if(cur===t&&localStorage.getItem("gymtracker.reminderLast")!==day){localStorage.setItem("gymtracker.reminderLast",day);if("Notification" in window&&Notification.permission==="granted")new Notification("GymTracker",{body:"Время тренировки 💪"});}},30000);
init();
function showCompletion(prs,k){var m=$("#completionModal");if(!m)return;$("#completionTitle").textContent="Тренировка завершена 🔥";$("#completionMeta").textContent=(data[k].exercises||[]).length+" упражнений · "+Math.round((data[k].exercises||[]).reduce(function(s,e){return s+totalVolumeForExercise(e)},0))+" кг объём";$("#completionPR").innerHTML=prs.length?"<strong>🏆 Новый PR</strong><br>"+prs.join("<br>"):"Хорошая работа. Продолжай прогрессировать.";m.classList.remove("hidden")}
function renderExtras(){var lvl=calcLevel(),n=getCompletedWorkouts().length;var e=$("#athleteLevel");if(e)e.textContent=lvl;var ec=$("#athleteLevelMeta");if(ec)ec.textContent=n+" завершённых тренировок";var volumeBy={};getCompletedWorkouts().forEach(function(k){(data[k].exercises||[]).forEach(function(x){volumeBy[x.group]=(volumeBy[x.group]||0)+totalVolumeForExercise(x)})});var vb=$("#muscleVolume");if(vb){var rows=Object.keys(volumeBy).sort(function(a,b){return volumeBy[b]-volumeBy[a]});vb.innerHTML=rows.slice(0,10).map(function(g){return "<div class=\"volume-row\"><span>"+g+"</span><strong>"+Math.round(volumeBy[g])+" кг</strong></div>"}).join("")||"<div class=\"empty\">Здесь появится объём по мышцам.</div>"}}
function requestReminder(){var time=prompt("Во сколько напоминать о тренировке?","18:00");if(!time||!/^(?:[01]\\d|2[0-3]):[0-5]\\d$/.test(time)){alert("Формат времени: 18:00");return}if(!("Notification" in window)){alert("Уведомления не поддерживаются этим браузером.");return}Notification.requestPermission().then(function(p){if(p==="granted"){localStorage.setItem("gymtracker.reminderTime",time);alert("Напоминание установлено на "+time);}else alert("Разрешение на уведомления не выдано.")})}
function exportData(){var payload={profile:profile,data:data,exportedAt:new Date().toISOString()};var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:"application/json"}));a.download="gymtracker-backup.json";a.click();URL.revokeObjectURL(a.href)}
function addTemplate(name){var k=dateKey(selected),arr=data[k]&&data[k].exercises||[];if(!arr.length){alert("Сначала добавь упражнения в План.");return}var templates=JSON.parse(localStorage.getItem("gymtracker.templates")||"[]");templates.push({name:name||"Моя тренировка",exercises:arr.map(function(e){return {name:e.name,group:e.group,target:e.target,sets:e.sets||3,reps:e.reps||10}})});localStorage.setItem("gymtracker.templates",JSON.stringify(templates));renderTemplates();alert("Шаблон сохранён.")}
function renderTemplates(){var box=$("#templatesList");if(!box)return;var ts=JSON.parse(localStorage.getItem("gymtracker.templates")||"[]");box.innerHTML=ts.map(function(t,i){return "<div class=\"template-row\"><div><strong>"+t.name+"</strong><small>"+t.exercises.length+" упражнений</small></div><div><button class=\"timer-btn primary-timer\" data-load-template=\""+i+"\">Загрузить</button><button class=\"timer-btn\" data-delete-template=\""+i+"\">×</button></div></div>"}).join("")||"<div class=\"empty\">Сохрани первую тренировку как шаблон.</div>";document.querySelectorAll("[data-load-template]").forEach(function(b){b.onclick=function(){var ts=JSON.parse(localStorage.getItem("gymtracker.templates")||"[]"),t=ts[+b.dataset.loadTemplate];if(!t)return;var k=dateKey(selected);data[k]={exercises:t.exercises.map(function(e){return {name:e.name,group:e.group,target:e.target,sets:e.sets,reps:e.reps,weight:0}})};save();renderAll()}});document.querySelectorAll("[data-delete-template]").forEach(function(b){b.onclick=function(){var ts=JSON.parse(localStorage.getItem("gymtracker.templates")||"[]");ts.splice(+b.dataset.deleteTemplate,1);localStorage.setItem("gymtracker.templates",JSON.stringify(ts));renderTemplates()}})}
function addWeightRecord(){var v=+prompt("Твой текущий вес, кг:",profile.weight);if(!v)return;profile.weight=v;profile.weights=profile.weights||[];profile.weights.push({date:dateKey(new Date()),value:v});localStorage.setItem("gymtracker.profile",JSON.stringify(profile));renderAll()}
function savePhoto(input){var f=input.files&&input.files[0];if(!f)return;var rd=new FileReader();rd.onload=function(){var p=JSON.parse(localStorage.getItem("gymtracker.photos")||"[]");p.push({date:dateKey(new Date()),src:rd.result});localStorage.setItem("gymtracker.photos",JSON.stringify(p));renderPhotos();};rd.readAsDataURL(f)}
function renderPhotos(){var b=$("#photosList");if(!b)return;var p=JSON.parse(localStorage.getItem("gymtracker.photos")||"[]");b.innerHTML=p.slice().reverse().map(function(x){return "<div class=\"photo-card\"><img src=\""+x.src+"\"><span>"+fmt(new Date(x.date))+"</span></div>"}).join("")||"<div class=\"empty\">Добавь фото, чтобы сравнивать форму.</div>"}
