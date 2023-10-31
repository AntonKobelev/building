import { useState } from "react";
import Polygon from "./components/Polygon";
import SchemeItem from "./components/SchemeItem";

const data = [
  {
    id: "1",
    points: "52,270 93,305 151,305 151,364 137,364 52,342 17,311",
    coordinates: { top: "319px", left: "71px" },
    name: "Детcкий мир",
    description:
      "Сеть магазинов «Детский мир» - крупнейший розничный оператор торговли детскими товарами и лидер рынка",
  },
  {
    id: "2",
    points: "92,224 123,252 123,302 93,302 53,268",
    coordinates: { top: "255px", left: "84px" },
    name: "Триал\nСпорт",
    description:
      "Сеть специализированных спортивных магазинов «Триал-Спорт». Снаряжение, одежда и аксессуары для активного отдыха и спорта!",
  },
  {
    id: "3",
    points: "137,169 168,197 124,249 93,223",
    coordinates: { top: "203px", left: "116px" },
    name: "Arena",
    description:
      "Спортивный бренд Arena (Арена) известен во всем мире как производитель товаров для плавания.",
  },
  {
    id: "4",
    points: "179,122 208,148 208,178 185,178 169,195 139,169",
    coordinates: { top: "148px", left: "156px" },
    name: "EXTREME\nHOBBY",
    description:
      "Одежда под брендом EXTREME HOBBY производится для любителей экстремальных видов спорта, футбольных болельщиков и людей, которые ведут спортивный образ жизни.",
  },
  {
    id: "5",
    points: "218,76 254,109 254,178 210,178 210,147 180,120",
    coordinates: { top: "115px", left: "195px" },
    name: "Fisherman",
    description:
      "Fisherman-Market предлагает широкий выбор рыболовных снастей  удилища, катушки, приманки, лески, эхолоты и сопутствующие инструменты.",
  },
  {
    id: "6",
    points: "256,111 307,156 307,178 256,178",
    coordinates: { top: "144px", left: "265px" },
    name: "FIT\nN-GO",
    description:
      "FIT-N-GO - это уникальный метод тренировок, основанный на электро-мышечной стимуляции. 20 минут тренировки заменяет 2-3 часа в тренажерном зале.",
  },
  {
    id: "7",
    points: "388,117 393,117 431,108 431,178 388,178",
    coordinates: { top: "137px", left: "392px" },
    name: "FROM+",
    description: "Магазин модной одежды для всей семьи",
  },
  {
    id: "8",
    points: "433,108 477,98 477,178 433,178",
    coordinates: { top: "137px", left: "434px" },
    name: "MAGNIT",
    description:
      "MAGNIT – магазин мужской одежды. В ассортименте предложены модели разных стилей: от классического до спортивного, так жен есть линейка аксессуаров.",
  },
  {
    id: "9",
    points: "479,97 519,89 519,178 479,178",
    coordinates: { top: "137px", left: "489px" },
    name: "MG",
    description: "Магазин женской одежды",
  },
  {
    id: "10",
    points: "522,88 560,79 560,178 522,178",
    coordinates: { top: "137px", left: "528px" },
    name: "Miss\nfofo",
    description:
      "Легкие, яркие пуховики в магазине верхней одежды Мiss fofo позволят выразить свою креативность, придадут вам особый шарм и кокетство.",
  },
  {
    id: "11",
    points: "562,79 622,66 662,178 562,178",
    coordinates: { top: "137px", left: "577px" },
    name: "Inформат",
    description:
      "В магазине канцтоваров Inформат вы найдете большой выбор товаров для офиса, а также учебы и творчества: бумажную продукцию, принадлежности для хранения документов.",
  },
  {
    id: "12",
    points: "154,257 200,207 211,206 211,275 154,275",
    coordinates: { top: "237px", left: "175px" },
    name: "Miss\nMexx",
    description:
      "Miss Mexx - это магазин модной женской одежды из кожи и меха.",
  },
  {
    id: "13",
    points: "213,206 254,206 254,275 213,275",
    coordinates: { top: "228px", left: "219px" },
    name: "MMA\nBazar",
    description:
      "Магазин MMABazar занимается продажей и популяризацией одежды и экипировки для единоборств, а также кроссфита.",
  },
  {
    id: "14",
    points: "256,206 297,206 297,275 256,275",
    coordinates: { top: "228px", left: "259px" },
    name: "Mnogo\nMeb",
    description:
      "MnogoMeb.ru – это магазин мебели нового поколения, предлагаюащий низкие цены и высокий уровень сервиса.",
  },
  {
    id: "15",
    points: "299,206 362,206 362,275 299,275",
    coordinates: { top: "228px", left: "317px" },
    name: "Moda\nMoi",
    description:
      "Moda Moi – это магазин женской одежды французского и итальянского производства, на все случаи жизни.",
  },
  {
    id: "16",
    points: "388,206 431,206 431,262 388,262",
    coordinates: { top: "222px", left: "392px" },
    name: "MODA!\nMIX!",
    description:
      "Мультибрендовый магазин «МОДА!MIX» - это магазин качественной детской и подростковой одежды.",
  },
  {
    id: "17",
    points: "433,206 477,206 477,262 433,262",
    coordinates: { top: "215px", left: "436px" },
    name: "Moscita\nBuyer\nshop",
    description:
      "Moscita — мульти брендовый интернет магазин, в котором представлены уникальные коллекции оригинальной одежды с более 1000 фабрик и аутлетов.",
  },
  {
    id: "18",
    points: "479,206 519,206 519,262 479,262",
    coordinates: { top: "222px", left: "480px" },
    name: "OTOKO\nDesign",
    description:
      "Бренд ОТОКО был создан специально для того, чтобы решить проблему каждого мужчины - выглядеть солидно и презентабельно.",
  },
  {
    id: "19",
    points: "521,206 562,206 562,262 522,262",
    coordinates: { top: "228px", left: "527px" },
    name: "Patya",
    description:
      "Магазин Patya Patya специализируется на продаже детской одежды до 3х лет.",
  },
  {
    id: "20",
    points: "564,206 604,206 604,262 564,262",
    coordinates: { top: "222px", left: "568px" },
    name: "Prime\nBeauty",
    description: "Prime Beauty — магазин профессиональной косметики для волос.",
  },
  {
    id: "21",
    points: "171,305 211,305 211,337 171,337",
    coordinates: { top: "314px", left: "184px" },
    name: "TM",
    description:
      "TM LIMITED – сеть магазинов мужской одежды в Минске и Москве. Начали деятельность в 2010 году, компания стремительно расширяется.",
  },
  {
    id: "22",
    points: "213,305 254,305 254,364 213,364",
    coordinates: { top: "321px", left: "215px" },
    name: "Vera\nVictoria",
    description:
      "Vera Victoria Vito - это фирменный магазин итальянского модного дома, шестой по счету в Москве.",
  },
  {
    id: "23",
    points: "256,305 297,305 297,364 257,364",
    coordinates: { top: "321px", left: "260px" },
    name: "X\nSTYLE",
    description:
      "X STYLE PROJECT - это магазин стильной одежды и аксессуаров для фитнеса.",
  },
  {
    id: "24",
    points: "300,305 341,305 341,364 300,364",
    coordinates: { top: "321px", left: "303px" },
    name: "Yves\nRocher",
    description: "Yves Rocher – Создатель Растительной Косметики.",
  },
  {
    id: "25",
    points: "343,305 392,305 392,364 343,364",
    coordinates: { top: "321px", left: "348px" },
    name: "А5\nАптека",
    description:
      "Реальное преимущество Сети аптек А5 — качество работы с потребителем.",
  },
  {
    id: "26",
    points: "394,292 431,292 431,364 394,364",
    coordinates: { top: "321px", left: "396px" },
    name: "БИЖУ",
    description: "Магазин аксессуаров.",
  },
  {
    id: "27",
    points: "433,292 477,292 477,364 433,364",
    coordinates: { top: "315px", left: "434px" },
    name: "Бель\nПостель",
    description:
      "Созданная в 2003 году группа компаний «БельПостель» специализируется на производстве и реализации постельного белья.",
  },
  {
    id: "28",
    points: "479,292 520,292 520,364 479,364",
    coordinates: { top: "315px", left: "482px" },
    name: "Мир\nсказки",
    description:
      "«Мир Сказки» - это магазин детской обуви, при производстве которой учитывается все, что по-настоящему важно для хороших ботинок, сапожек и туфелек.",
  },
  {
    id: "29",
    points: "522,292 562,292 562,364 522,364",
    coordinates: { top: "315px", left: "527px" },
    name: "Мой\nчисто",
    description:
      "В магазине «Мой чисто» представлен широкий ассортимент товаров ведущих зарубежных и отечественных производителей бытовой химии.",
  },
  {
    id: "30",
    points: "564,292 604,292 604,364 564,364",
    coordinates: { top: "320px", left: "571px" },
    name: "МТС",
    description:
      "Сеть салонов сотовой связи МТС – это один из лидеров на рынке мобильных телефонов и услуг.",
  },
  {
    id: "31",
    points: "606,292 647,292 647,364 606,364",
    coordinates: { top: "320px", left: "611px" },
    name: "НИКС",
    description:
      "НИКС - Компьютерный Супермаркет работает на российском рынке с 1991 года.",
  },
];

function App() {
  const [currentPolygon, serCurrentPolygon] = useState(null);
  function handlerClick(id) {
    if (id !== currentPolygon) {
      serCurrentPolygon((curId) => id);
    } else {
      serCurrentPolygon(null);
    }
  }

  function handlerClickOut() {
    if (currentPolygon !== null) {
      serCurrentPolygon(null);
    }
  }
  return (
    <div className="scheme">
      <img src="https://snipp.ru/demo/scheme.png" alt="scheme"></img>
      <svg onClick={() => handlerClickOut()}>
        {data.map((el) => (
          <Polygon
            id={el.id}
            points={el.points}
            key={el.id}
            onHandlerClick={handlerClick}
            currentPolygon={currentPolygon}
          />
        ))}
      </svg>
      {data.map((el) => (
        <SchemeItem
          id={el.id}
          coordinates={el.coordinates}
          name={el.name}
          description={el.description}
          key={el.id}
          currentPolygon={currentPolygon}
        />
      ))}
    </div>
  );
}

export default App;
