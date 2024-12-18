db = db.getSiblingDB('boiler');

db.categories.insertMany([{
  _id: ObjectId('665a3eacacb305190474792c'),
  name: 'Антидепрессанты'
},{
  _id: ObjectId('665a3f36acb305190474792e'),
  name: 'Суперспособности'
},{
  _id: ObjectId('665a3f1facb305190474792d'),
  name: 'Профилактические средства'
},{
  _id: ObjectId('6658e1f7361bc9c340f4ecbd'),
  name: 'Контрацепция'
},{
  _id: ObjectId('6658e1f7361bc9c340f4ecbc'),
  name: 'БАДы'
}]);











db.medicines.insertMany([{
  title: 'Нейро-Стаб Когни-Люкс',
  count: 342,
  price: 400.69,
  description: '- Описание: Умные капсулы с наночастицами, нацеленные на оптимизацию нейронных связей. Повышают когнитивные функции и улучшают эмоциональную стабильность.- Применение: Принимайте по одной капсуле утром, запивая водой. Эффект ощущается через 30 минут и длится до 12 часов.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/antidepression/1.JPG',
  category_id: ObjectId('665a3eacacb305190474792c')
},{
  title: 'Техно-Гель Синерго-Контроль',
  count: 320,
  price: 121.99,
  description: '- Описание: Смарт-гель с биорегуляторами настроения, мгновенно адаптирующийся к текущему состоянию нервной системы. Успокаивает и регулирует стрессовые реакции. - Применение: Нанесите тонкий слой на запястья или виски. Впитывается в течение минуты и оказывает мягкое расслабляющее действие в течение 8 часов.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/antidepression/2.JPG',
  category_id: ObjectId('665a3eacacb305190474792c')
},{
  title: 'Аэро-Спрей Миросфера',
  count: 12,
  price: 6331.99,
  description: '- Описание: Ингаляторный спрей с микропрограммируемыми наночастицами, который мгновенно снимает тревожные симптомы и возвращает состояние умиротворённости. - Применение: Вдыхайте двойной распыл каждое утро. Активные компоненты стабилизируют настроение и улучшают концентрацию.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/antidepression/3.JPG',
  category_id: ObjectId('665a3eacacb305190474792c')
},{
  title: 'Киберо-Пласт Релакса Плюс',
  count: 74,
  price: 5726.331,
  description: '- Описание: Нанопластырь с медленным высвобождением седативных биокомпонентов, поддерживает умиротворение и способствует спокойному уходу ко сну. - Применение: Наклейте на внутреннюю часть запястья за час до сна. Действует всю ночь, поддерживая естественный ритм сна.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/antidepression/4.JPG',
  category_id: ObjectId('665a3eacacb305190474792c')
},{
  title: 'Нейро-Таб Баланс-М',
  count: 5,
  price: 33.99,
  description: '- Описание: Таблетки с интеллектуальными сенсорами, считывающими биоритмы и оказывающими направленное действие для стабилизации эмоционального фона. - Применение: Принимайте по одной таблетке в день в утреннее время для поддержания стабильного и положительного настроения.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/antidepression/5.JPG',
  category_id: ObjectId('665a3eacacb305190474792c')
},{
  title: 'Эмоциональный Браслет Центро-Контроллер',
  count: 732,
  price: 4351.29,
  description: '- Описание: Многофункциональный браслет с биосенсорами, непрерывно отслеживающий вашу эмоциональную кривую и активирующий успокаивающие микроимпульсы. - Применение: Носите на запястье как стильный аксессуар. Управление и настройка выполняются через мобильное приложение, что обеспечивает индивидуальный подход.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/antidepression/6.JPG',
  category_id: ObjectId('665a3eacacb305190474792c')
},{
  title: 'Имплант Энерго-Стаб',
  count: 7132,
  price: 1412.532,
  description: '- Описание: Продвинутый биосовместимый микрочип, имплантируемый под кожу для долгосрочной регуляции настроения и эмоционального состояния. - Применение: Установка производится сертифицированным специалистом. Эффекты настраиваются индивидуально через защищённое мобильное приложение на протяжении года.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/antidepression/7.JPG',
  category_id: ObjectId('665a3eacacb305190474792c')
}]);


db.medicines.insertMany([{
  title: 'Витаминный комплекс Виталиум Стресс-Про',
  count: 542,
  price: 4.69,
  description: '- Описание: Этот комплекс содержит витамины группы B, магний и экстракт родиолы розовой. Витамины B1, B6 и B12 поддерживают нервную систему, магний помогает расслабиться, а родиола розовая улучшает устойчивость к стрессу. - Применение: Принимайте одну капсулу в день во время еды для снижения уровня стресса и повышения энергии.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/adding_complex/1.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbc')
},{
  title: 'Антистресс Витамины + Омега-3',
  count: 720,
  price: 7821.99,
  description: '- Описание: Высококонцентрированные капсулы с омега-3, витамином E и витамином D3. Омега-3 жирные кислоты поддерживают здоровье мозга, витамин E борется со свободными радикалами, а витамин D3 способствует улучшению настроения. - Применение: Принимайте по одной капсуле дважды в день во время еды для поддержания психологического баланса.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/adding_complex/2.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbc')
},{
  title: 'Релакса Вита-С',
  count: 432,
  price: 851.89,
  description: '- Описание: Витамин C и биофлавоноиды в сочетании с экстрактом пассифлоры и мелиссы помогают снизить уровень кортизола, улучшая стрессоустойчивость и способствуя релаксации.- Применение: Принимайте по две таблетки в день, запивая достаточным количеством воды, для повышения стрессоустойчивости.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/adding_complex/3.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbc')
},{
  title: 'Хеавен Нутро',
  count: 4,
  price: 26.3,
  description: '- Описание: Витамины группы B в сочетании с магнием и экстрактом лаванды. Продукт поддерживает нервную систему, улучшает качество сна и помогает справиться с нервным напряжением. - Применение: Принимайте по одной капсуле дважды в день для нормализации работы нервной системы и улучшения сна.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/adding_complex/4.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbc')
},{
  title: 'МагниВит Б-комплекс',
  count: 46,
  price: 933.99,
  description: '- Описание: Сочетание витаминов B5, B6, B12 и фолиевой кислоты помогает бороться с симптомами выгорания, улучшая память и концентрацию внимания. - Применение: Принимайте по одной таблетке трижды в день для снижения усталости и улучшения когнитивных функций.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/adding_complex/5.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbc')
},{
  title: 'Энергия и Спокойствие: Мультивитамины +',
  count: 422,
  price: 931.29,
  description: '- Описание: Комплекс с витаминами A, C, D, E и минералами, обогащённый женьшенем и гинкго билоба для поддержания энергии и умственного спокойствия. - Применение: Принимайте по одной капсуле в день для поддержания общего здоровья и улучшения сопротивляемости стрессу.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/adding_complex/6.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbc')
}]);


db.medicines.insertMany([{
  title: 'Киберо-Пласт Ультра-Про',
  count: 2,
  price: 6.659,
  description: '- Описание: Уникальный защитный мембранный пластырь, активируемый при контакте с кожей. Стимулирует выработку феромонов, что улучшает эмоциональный контакт и взаимное доверие между партнёрами.- Применение: Наносите на чистую кожу за 10 минут до предполагаемого контакта. Абсолютно незаметен и рассчитан на комфортное использование.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/contraceptions/1.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbd')
},{
  title: 'Нейро-Купол Миросфера',
  count: 72,
  price: 7107.99,
  description: '- Описание: Инновационный нанотехнологический барьер с интеллектуальной саморегуляцией. Обеспечивает длительную защиту, и автоматически подстраивается к изменению уровня активности. - Применение: Простой и быстрый процесс активации – удерживайте надколектор в области применения и следуйте звуковым сигналам. Эффективен до 72 часов.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/contraceptions/2.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbd')
},{
  title: 'Техно-Браслет Секьюрити-Люкс',
  count: 54332,
  price: 1551.89,
  description: '- Описание: Стильный нано-текстильный браслет, сочетающий в себе моду и защиту. Встроенные биосенсоры следят за состоянием и активируют защитные функции при необходимости. - Применение: Носите браслет на запястье как стильный аксессуар. Активируется автоматически, управляется через мобильное приложение.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/contraceptions/3.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbd')
},{
  title: 'Гель Нейро-Щит',
  count: 83,
  price: 66.3,
  description: '- Описание: Стильный нано-текстильный браслет, сочетающий в себе моду и защиту. Встроенные биосенсоры следят за состоянием и активируют защитные функции при необходимости. - Применение: Носите браслет на запястье как стильный аксессуар. Активируется автоматически, управляется через мобильное приложение.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/contraceptions/4.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbd')
},{
  title: 'Имплант Синерго-Контроль',
  count: 5,
  price: 93.9,
  description: ' - Описание: Биосовместимый микрочип имплантируемый под кожу. Обеспечивает длительную контрацепцию и мониторинг состояния здоровья благодаря встроенным сенсорам.- Применение: Установка производится сертифицированным специалистом в медицинском центре. Контроль и настройка функции через защищённое мобильное приложение.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/contraceptions/5.JPG',
  category_id: ObjectId('6658e1f7361bc9c340f4ecbd')
}]);


db.medicines.insertMany([{
  title: 'НейроКомфорт МигроРелакс',
  count: 342,
  price: 400.69,
  description: '- Описание: Интеллектуальные капсулы от мигрени с наночастицами, нацеленные на снятие головных болей и нормализацию кровотока в мозге. Содержат адаптогены для улучшения устойчивости к стрессу. - Применение: Принимайте по одной капсуле при первых признаках головной боли. Эффект наступает в течение 15 минут.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/1.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'Гастро-Комплекс КоликоСтоп',
  count: 320,
  price: 121.99,
  description: '- Описание: Гель с биорегулирующими агентами для быстрого устранения колик и дискомфорта в желудке. Обладает успокаивающим и спазмолитическим действием. - Применение: Принимайте одну дозу геля после еды или по мере необходимости. Действие наступает через 10 минут.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/2.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'АэроКомп Анти-Н',
  count: 12,
  price: 6331.99,
  description: '- Описание: Направленный ингалятор против тошноты с микроимпульсами, стабилизирующими работу желудочно-кишечного тракта. Устраняет неприятные ощущения в течение нескольких минут. - Применение: Вдохните двойной распыл при первых признаках тошноты. Эффект сохраняется до 8 часов.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/3.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'НейроСтабол ДиаПро',
  count: 74,
  price: 5726.331,
  description: '- Описание: Капсулы с нанобактериями и ферментами для нормализации работы кишечника и устранения диареи. Поддерживают микрофлору и восстанавливают водно-электролитный баланс. - Применение: Принимайте по одной капсуле после каждого эпизода диареи. Рекомендуется пить достаточное количество воды.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/4.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'МультиКомп ИммуноФортеМ',
  count: 5,
  price: 33.99,
  description: '- Описание: Комплекс витаминов и минералов с биотехнологическими регуляторами иммунной системы для профилактики простуд и инфекций. Обладает антиоксидантными и противовоспалительными свойствами.- Применение: Принимайте по одной таблетке ежедневно для поддержания общего иммунитета и защиты от простуд.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/5.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'НейроЧип ТенсоГард',
  count: 732,
  price: 4351.29,
  description: '- Описание: Биосовместимый имплант для предотвращения и снятия приступов гипертензии, регулирующий уровни артериального давления с помощью микроимпульсов.- Применение: Установка производится сертифицированным медицинским специалистом. Эффект сохраняется до 5 лет без необходимости замены.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/6.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'ГепатоПрот ЛиверГуард',
  count: 342,
  price: 400.69,
  description: '- Описание: Капсулы с наночастицами для поддержания и защиты функции печени. Содержат детоксицирующие биокомпоненты и антиоксиданты. - Применение: Принимайте по одной капсуле дважды в день для поддержания здоровья печени.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/7.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'Уроген-Контроль КидниГард',
  count: 320,
  price: 121.99,
  description: '- Описание: Таблетки с биорегуляторами для профилактики мочекаменной болезни и поддержания функции почек. Содержат натуральные экстракты и минералы. - Применение: Принимайте по одной таблетке ежедневно, предпочтительно утром.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/8.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'НейроТранс Анти-Вест',
  count: 12,
  price: 6331.99,
  description: '- Описание: Инновационный спрей для борьбы с вестибулярными расстройствами и головокружением. Быстро стабилизирует состояние и улучшает координацию движений. - Применение: Вдыхайте двойной распыл при первых признаках головокружения. Длительность действия до 12 часов.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/9.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'ОстеоГард Кальцид-Плюс',
  count: 74,
  price: 5726.331,
  description: '- Описание: Капсулы с кальцием и витамином D, обогащенные биорегуляторами костной ткани для профилактики остеопороза и поддержания здоровья костей. - Применение: Принимайте по одной капсуле дважды в день после еды для улучшения состояния костной ткани.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/10.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'КардиоСтат Анти-Артимус',
  count: 5,
  price: 33.99,
  description: '- Описание: Умные капсулы для профилактики аритмий и укрепления сердечно-сосудистой системы. Содержат наночастицы, регулирующие сердечный ритм. - Применение: Принимайте по одной капсуле утром и вечером. Эффект ощущается через несколько дней регулярного применения.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/11.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
},{
  title: 'ВизиоКомп Оптик-Кларити',
  count: 732,
  price: 4351.29,
  description: '- Описание: Капли для глаз с наночастицами для снятия напряжения, усталости и профилактики возрастных изменений зрения. Устраняют сухость и улучшают остроту зрения. - Применение: Закапывайте по две капли в каждый глаз дважды в день. Поддерживайте регулярное использование для максимального эффекта.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/season/12.JPG',
  category_id: ObjectId('665a3f1facb305190474792d')
}]);


db.medicines.insertMany([{
  title: 'Нейро-Интеллект Гений-Про',
  count: 342,
  price: 400.69,
  description: '- Описание: Уникальные капсулы с наночастицами, которые значительно улучшают когнитивные функции, память и скорость обработки информации. Содержат интеллектуальные биорегуляторы для максимальной концентрации и аналитических навыков.- Применение: Принимайте по одной капсуле утром. Эффект наступает через 30 минут и сохраняется до 12 часов, обеспечивая вам продуктивность и ясность ума.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/superpower/1.JPG',
  category_id: ObjectId('665a3f36acb305190474792e')
},{
  title: 'Физио-Контроль Супер-Сила',
  count: 320,
  price: 121.99,
  description: '- Описание: Инновационные инъекции с биомодификаторами, увеличивающие физическую силу, выносливость и быстроту реакции. Поддерживают энергообмен и ускоряют восстановление мышечных тканей.- Применение: Однократная инъекция обеспечивает эффект на 24 часа. Идеально подходит для экстремальных спортивных мероприятий и физических испытаний.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/superpower/2.JPG',
  category_id: ObjectId('665a3f36acb305190474792e')
},{
  title: 'Визио-Ультра Яснозор',
  count: 12,
  price: 6331.99,
  description: '- Описание: Капли для глаз с нанотехнологическими компонентами, которые значительно улучшают зрение и позволяют видеть в условиях низкой освещенности. Поддерживают здоровье глаз и снижают утомляемость. - Применение: Закапывайте по две капли в каждый глаз за час до предполагаемого использования. Эффект сохраняется до 8 часов, обеспечивая кристально чистое зрение.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/superpower/3.JPG',
  category_id: ObjectId('665a3f36acb305190474792e')
},{
  title: 'Нейро-Сенс Экстра-Чуйка',
  count: 74,
  price: 5726.331,
  description: '- Описание: Таблетки с биотехнологическими сенсорами, усиливающими все органы чувств: слух, обоняние, вкус и осязание. Улучшают сенсорное восприятие и реакцию на внешние раздражители. - Применение: Принимайте по одной таблетке каждый день после завтрака. Эффект накапливается и достигает пика через неделю регулярного использования.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/superpower/4.JPG',
  category_id: ObjectId('665a3f36acb305190474792e')
},{
  title: 'Кибер-Рефлекс Молниеносный Реактив',
  count: 5,
  price: 33.99,
  description: '- Описание: Смарт-гель для мгновенного улучшения рефлексов и координации движений. Обеспечивает молниеносное реагирование на внешние стимулы, улучшая вашу реакцию.- Применение: Наносите гель на запястья и виски за 15 минут до необходимости максимальной концентрации и быстроты реакции. Действие сохраняется до 6 часов.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/superpower/5.JPG',
  category_id: ObjectId('665a3f36acb305190474792e')
},{
  title: 'Нейро-Буст Гений-Плюс',
  count: 732,
  price: 4351.29,
  description: '- Описание: Ультра-капсулы с нанопроцессорами, которые ускоряют нейронные связи и значительно повышают вычислительные способности мозга. Поддерживают длительную концентрацию и креативное мышление. - Применение: Принимайте по одной капсуле утром и вечером. Эффект ощущается после первого применения и сохраняется до 24 часов.',
  prescription: false,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/superpower/6.JPG',
  category_id: ObjectId('665a3f36acb305190474792e')
},{
  title: 'Телепат Ментал-Чип',
  count: 7132,
  price: 1412.532,
  description: '- Описание: Биосовместимый наночип для вживления под кожу, который значительно улучшает ментальные способности и позволяет обмениваться мыслями на расстоянии. Обеспечивает телепатическую связь и усиленное понимание окружающих. - Применение: Установка производится сертифицированным специалистом. Настройка и управление через защищённое мобильное приложение. Эффект сохраняется до 5 лет с возможностью продления.',
  prescription: true,
  image_path: 'https://storage.yandexcloud.net/pharmacy/medicaments/superpower/7.JPG',
  category_id: ObjectId('665a3f36acb305190474792e')
}]);


db.clients.insertMany([{
  _id: ObjectId('1008e1f7361bc9c340f4ecc2'),
  login: 'user1',
  full_name: 
	{
		name: 'Михаил',
		surname: 'Коротков',
		patronymic: 'Денисович'
	},
  email: 'vevil_uwuno79@ya.ru',
  phone: '77456333683',
  image_path: 'https://storage.yandexcloud.net/pharmacy/staff/6.JPG',
},{
  _id: ObjectId('2008e1f7361bc9c340f4ecc2'),
  login: 'user2',
  full_name: 
	{
		name: 'Дарина',
		surname: 'Акимова',
		patronymic: 'Романовна'
	},
  email: 'yiwa_pabubu12@ya.ru',
  phone: '76884295316',
  image_path: 'https://storage.yandexcloud.net/pharmacy/staff/7.JPG',
},{
  _id: ObjectId('3008e1f7361bc9c340f4ecc2'),
  login: 'user3',
  full_name: 
	{
		name: 'Алиса',
		surname: 'Михайлова',
		patronymic: 'Максимовна'
	},
  email: 'layaba-pura76@ya.ru',
  phone: '71801517836',
  image_path: 'https://storage.yandexcloud.net/pharmacy/staff/8.JPG',
}]);