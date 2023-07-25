import { ICategory, IProductCondition, IRegion } from "./types"

export const categories: ICategory[] = [
  {
    id: 1,
    title: "Транспорт",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",

    subCategories: [
      "Легковые автомобили",
      "Грузовые автомобили",
      "Автозапчасти и аксессуары",
      "Шины и колёса",
      "Прицепы",
      "Мото",
      "Другое",
    ],
  },

  {
    id: 2,
    title: "Недвижимость",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",

    subCategories: ["Квартиры", "Дома", "Земля", "Гаражи", "Другое"],
  },

  {
    id: 3,
    title: "Электроника",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",

    subCategories: [
      "Телeфон",
      "Компьютер",
      "Фото/видео техника",
      "Телевизор",
      "Техника для дома",
      "Комплектующие",
      "Другое",
    ],
  },

  {
    id: 5,
    title: "Дом и сад",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",
    subCategories: [
      "Мебель",
      "Сад/огород",
      "Растения",
      "Гаражи",
      "Инструменты",
      "Другое",
    ],
  },

  {
    id: 6,
    title: "Мода и стиль",
    imgUrl:
      "https://img.freepik.com/free-vector/cute-dog-logo_1051-3349.jpg?w=740&t=st=1689944381~exp=1689944981~hmac=aad87c99e10f8e7b09e7b57faf75d28bbbc87be0dc1a3a3e8c2aa88d2675bfe7",

    subCategories: [
      "Одежда",
      "Обувь",
      "Наручные Часы",
      "Аксессуары",
      "Подарки",
      "Косметика",
      "Парфюмерия",
      "Средства по уходу",
    ],
  },
]

export const productConditions: IProductCondition[] = [
  {
    name: "Новое",
    value: "new",
    label: "Новое",
  },
  {
    name: "Б/у",
    value: "used",
    label: "Б/у",
  },
]

export const productTypes: IProductCondition[] = [
  {
    name: "Свое",
    value: "mine",
    label: "Продаю свое",
  },
  {
    name: "Товар приобретен на продажу",
    value: "toSelling",
    label: "Приобретен на продажу",
  },
]

export const regions: IRegion[] = [
  {
    id: 1,
    title: "Лебап",
    cities: [
      "Туркменабад",
      "Фарап",
      "Сейди",
      "Халач",
      "Керки",
      "Газоджак",
      "Гарабекевюл",
      "Достлук",
      "Дарганата",
      "Дянев",
      "Койтендаг",
      "Магданлы",
      "Сакар",
      "Саят",
      "Ходжамбаз",
    ],
  },
  {
    id: 2,
    title: "Ашхабад",
    cities: [
      "Беркарарлык этрап",
      "Копетдаг этрап",
      "Багтыярлык этрап",
      "Бюзмеин этрап",
    ],
  },
  {
    id: 3,
    title: "Мары",
    cities: [
      "Мары",
      "Байрамали",
      "Векилбазар этрап",
      "Каракум этрап",
      "Ёлетен этрап",
      "Мургап этрап",
      "Тагтабазар этрап",
      "Туркменкалин этрап",
    ],
  },
  {
    id: 4,
    title: "Ахал",
    cities: [
      "Аннау",
      "Бабадайхан",
      "Бахерден",
      "Гёкдепе",
      "Кака",
      "Сарахс",
      "Теджен",
    ],
  },
  {
    id: 5,
    title: "Балкан",
    cities: [
      "Балканабад",
      "Туркменбаши",
      "Берекет этрап",
      "Махтумкули этрап",
      "Гызылаврат этрап",
      "Эсенкули этрап",
      "Этрек этрап",
    ],
  },
  {
    id: 6,
    title: "Дашогуз",
    cities: [
      "Дашогуз",
      "Акдепе",
      "Болдумсаз",
      "Гёроглы",
      "Губадаг",
      "Андалып",
      "Кёнеургенч",
      "Шават",
      "Сапармырат",
    ],
  },
]

export const contactOptions: IProductCondition[] = [
  {
    name: "phone/sms",
    value: "phone/sms",
    label: "Звонки и сообщения",
  },
  {
    name: "phone",
    value: "phone",
    label: "Только звонки",
  },
  {
    name: "sms",
    value: "sms",
    label: "Только сообщения",
  },
]