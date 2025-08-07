import React from "react";

const features = [
  {
    title: "ЛУЧШИЕ ХАРАКТЕРИСТИКИ В КЛАССЕ",
    img: "https://static.tildacdn.com/tild3232-6464-4465-b732-633365353239/True_Fitness_Summit_.jpg",
    description:
      "Наши тренажёры имеют самые совершенные характеристики в классе — от более мощных технических показателей до расширенных функциональных возможностей.",
  },
  {
    title: "ВЫСОКАЯ НАДЁЖНОСТЬ ОБОРУДОВАНИЯ",
    img: "https://content.abt.com/media/images/brands/TRUE-fitness-thumbnail.jpg",
    description:
      "Высокое качество тренажёров — это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардиотренажёры.",
  },
  {
    title: "НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЯ",
    img: "https://truefitness.com/wp-content/uploads/2011/07/iStock-935337368.jpg",
    description:
      "Тренажёры выдерживают серьёзную нагрузку, сохраняя минимальные затраты на сервис, что обеспечивает низкую стоимость владения.",
  },
  {
    title: "КАЧЕСТВЕННЫЙ И ОПЕРАТИВНЫЙ СЕРВИС",
    img: "https://static.tildacdn.com/tild3837-3865-4437-a163-303638616264/Envision_II_22_3.jpeg",
    description:
      "Мы уделяем особое внимание наличию всех запчастей и высокой срочности технического реагирования.",
  },
  {
    title: "ЦЕНЫ НИЖЕ, ЧЕМ У АНАЛОГОВ",
    img: "https://static.tildacdn.com/tild6532-6430-4664-a332-313566323933/True1.jpg",
    description:
      "Стоимость тренажёров вас приятно удивит. Несмотря на высокое качество, наши цены ниже, чем у конкурентов.",
  },
  {
    title: "СОВЕРШЕННАЯ ПРОИЗВОДИТЕЛЬНОСТЬ",
    img: "https://static.tildacdn.com/tild6235-6665-4164-a238-346235623539/True_Fitness_Summit_.jpg",
    description:
      "Обеспечивают непревзойдённый уровень тренировок, позволяя достигать высоких результатов.",
  },
  {
    title: "АБСОЛЮТНЫЕ ЛИДЕРЫ ПО КОЛИЧЕСТВУ ИННОВАЦИЙ",
    img: "https://truefitness.com/wp-content/uploads/2024/08/Gravity-HERO-Mobile.jpg",
    description:
      "TRUE Fitness регулярно внедряет новые технологии и решения для лучшего фитнес-опыта.",
  },
  {
    title: "МАКСИМАЛЬНОЕ УДОБСТВО И ФУНКЦИОНАЛЬНОСТЬ",
    img: "https://truefitness.com/wp-content/uploads/2024/08/Apex-Series-1200-1200.jpg",
    description:
      "Тренажёры разработаны с учётом эргономики и удобства для пользователей любого уровня.",
  },
];

const TrueFitnessLanding = () => {
  return (
    <div className="font-sans bg-gray-100">
      <section className="bg-[#00AEEF] text-center py-12 px-4">
        <div className="text-yellow-400 text-sm uppercase mb-2">НАШИ ПРЕИМУЩЕСТВА</div>
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">ПРЕИМУЩЕСТВА TRUE FITNESS</h1>
        <p className="text-white text-base md:text-lg max-w-3xl mx-auto">
          БЛАГОДАРЯ КОТОРЫМ МЫ ЯВЛЯЕМСЯ МИРОВЫМ ЛИДЕРОМ В ПРОИЗВОДСТВЕ ФИТНЕС-ОБОРУДОВАНИЯ
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-md bg-white transition-shadow"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-bold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-8 text-center border-t border-b border-gray-200">
        <div className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-3">
          TOP 5
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Бренд True Fitness входит в топ-5 крупнейших производителей
          <br />фитнес-оборудования
        </h2>
      </section>

      <section
        className="bg-cover bg-center text-white py-12 px-4"
        style={{
          backgroundImage: "url('https://truefitness.com/wp-content/uploads/2024/08/Gravity-HERO-Mobile.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto bg-[rgba(18,14,14,0.37)] bg-opacity-60 p-8 rounded-lg text-center">
          <p className="text-yellow-400 font-semibold mb-2">TRUE FITNESS</p>
          <h1 className="text-2xl font-bold mb-4">
            ПОЛУЧИТЕ <span className="text-blue-400">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span> НА <br />
            ТРЕНАЖЁРЫ <span className="text-blue-500">TRUE FITNESS</span>
          </h1>
          <p className="text-sm text-green-300 mb-6">
            Мы будем рады проконсультировать вас и помочь с подбором оборудования
          </p>

          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white">
            <input type="text" placeholder="Имя" className="px-4 py-2 rounded" />
            <input type="tel" placeholder="+998 (99)-999-99-99" className="px-4 py-2 rounded" />
            <input type="email" placeholder="E-mail" className="px-4 py-2 rounded" />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Отправить
            </button>
          </form>

          <p className="text-xs text-gray-200 mt-4">
            Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TrueFitnessLanding;
