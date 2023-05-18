export let data = [
    {
        question: 'Где можно использовать JavaScript?',
        answers: [
            {
                id: '1',
                value: 'серверные приложения ',
                correct: true,
            },
            {
                id: '2',
                value: 'мобильные приложения',
                correct: false,
            },
            {
                id: '3',
                value: 'веб-приложения',
                correct: false,
            },
            {
                id: '3',
                value: 'можно во всех перечисленных',
                correct: false,
            },
            {
                id: '3',
                value: 'прикладное программное обеспечение',
                correct: false,
            },
        ]
    },
    {
        question: `Какое количество сообщений будет выведено в консоль?
            for(var i = 10; i < 35; i += 5) {
                console.log(i);
        }
        `,
        answers: [
            {
                id: '4',
                value: '5',
                correct: false,
            },
            {
                id: '5',
                value: '6',
                correct: true,
            },
            {
                id: '4',
                value: '15',
                correct: false,
            },
            {
                id: '4',
                value: '25',
                correct: false,
            },
            {
                id: '4',
                value: 'такой цикл работать не будет',
                correct: false,
            },
        ]
    }
]