import imgWork1 from '../image/screen-work-news.png';
import imgWorkMesto from '../image/screen-project-mesto.jpg'
import imgWork4 from '../image/screen-reg-exp.png';
import imgWorkReact from '../image/screen-work-react.png'

const works = [
    {
        id: 1,
        img: imgWork1,
        link: "https://github.com/marityz/news-explorer-frontend",
        linktext: "Ссылка на Github",
        title: "Дипломная работа",
        text: 'Cервис, в котором можно найти новости по запросу и сохранить в личном кабинете, после авторизации.' +
            ' Реализован фронтенд на чистом JS, CSS организован по методу БЭМ.'
    },
    {
        id: 2,
        img: imgWorkMesto,
        link: 'https://github.com/marityz/work-with-nodejs/blob/master/package.json',
        linktext: "Ссылка на Github",
        title: "Учебная работа для изучения JS",
        text: 'Данный проект реализован в целях изучения JS'
    },
    {
        id: 3,
        img: imgWorkReact,
        link: 'https://github.com/marityz/work-with-react',
        linktext: "Ссылка на Github",
        title: "Проект для изучения библиотеки React",
        text: 'Для отрисовки html используется JSX, реализованы компоненты на классах, задействованы сторонние библиотеки, например, для слайдера '
    },
    {
        id: 4,
        img: imgWork4,
        link: 'https://github.com/marityz/work-with-regExp',
        linktext: "Ссылка на Github",
        title: "Учебная работа с регулярными выражениями",
        text: 'Составлены регулярные выражения для валидации полей:  name, tel, email, website для изучения логики пострения выражений'

    }
];
export default works;
