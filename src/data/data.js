import imgWork1 from '../image/screen-work-news.png';
import imgWorkMesto from '../image/screen-project-mesto.jpg'
import imgWork4 from '../image/blog.png';
import imgWorkReact from '../image/screen-work-react.png'

const works = [
    {
        id: 1,
        img: imgWork4,
        linkSite:'https://marityz.github.io/site-blog/',
        linkGit: 'https://github.com/marityz/site-blog',
        linktext: "Link to Website",
        title: "The website for display and purchase of works of the artist",
        text: 'The site is developed using the ReactJS (functional components, hooks).'

    },

    {
        id: 2,
        img: imgWorkMesto,
        linkGit: 'https://github.com/marityz/work-with-nodejs',
        linktext: "Link to Website",
        title: "Study paper for learning JS",
        text: 'This project is implemented for the purpose of studying JS'
    },
    {
        id: 3,
        img: imgWorkReact,
        linkSite:'https://marityz.github.io/work-with-react/',
        linkGit: 'https://github.com/marityz/work-with-react/tree/develop',
        linktext: "Link to Website",
        title: "Project for studying the React Library",
        text: 'For html rendering, JSX is used, components are implemented on classes, and third-party libraries are used, for example, for slider'
    },
    {
        id: 4,
        img: imgWork1,
        linkSite:'https://marityz.github.io/news-explorer-frontend/',
        linkGit: "https://github.com/marityz/news-explorer-frontend",
        linktext: "Link to Website",
        title: "Diploma work",
        text: 'A service where you can find news on request and save it in your personal account after logging in.'+
            'Implemented a frontend in pure JS, CSS is organized using the BEM method.'
    },

];
export default works;
