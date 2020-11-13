import React from 'react';


class Api extends React.Component {
    constructor() {
        super()
    }


    getQuite = () => {
        return fetch('https://api.kanye.rest', {
            method: "GET",
        })
            .then((res) => {
                console.log(res)
                this._returnJson(res)
            });

    };

    _returnJson = (res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

}

export default Api;
