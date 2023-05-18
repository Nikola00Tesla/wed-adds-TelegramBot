export let data = [
    {
        question: 'Где можно использовать JavaScript?',
        answers: [
            {
                id: '1',
                value: 'серверные приложения ',
                correct: false,
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
                id: '100',
                value: 'можно во всех перечисленных',
                correct: true,
            },
            {
                id: '101',
                value: 'прикладное программное обеспечение',
                correct: false,
            },
        ]
    },
    {
        question: `Какое количество сообщений будет выведено в консоль?\n
            for(var i = 10; i < 35; i += 5)\n {
                console.log(i);
        }
        `,
        answers: [
            {
                id: '4',
                value: '5',
                correct: true,
            },
            {
                id: '5',
                value: '6',
                correct: false,
            },
            {
                id: '6',
                value: '15',
                correct: false,
            },
            {
                id: '7',
                value: '25',
                correct: false,
            },
            {
                id: '8',
                value: 'такой цикл работать не будет',
                correct: false,
            },
        ]
    },
    {
        question: 'В чем отличие между локальной и глобальной переменной?',
        answers: [
            {
                id: '9',
                value: 'отличий нет',
                correct: false,
            },
            {
                id: '10',
                value: 'локальные видны повсюду, глобальные только в функциях',
                correct: false,
            },
            {
                id: '11',
                value: 'глобальные можно переопределять, локальные нельзя',
                correct: false,
            },
            {
                id: '12',
                value: 'локальные можно переопределять, глобальные нельзя',
                correct: false,
            },
            {
                id: '13',
                value: 'глобальные видны повсюду, локальные только в функциях ',
                correct: true,
            },
        ]
    },
    {
        question: 'Какая переменная записана неверно?',
        answers: [
            {
                id: '14',
                value: 'var num = "STRING";',
                correct: false,
            },
            {
                id: '15',
                value: 'var isDone = 0;',
                correct: false,
            },
            {
                id: '16',
                value: 'var b = false;',
                correct: false,
            },
            {
                id: '17',
                value: 'var number = 12,5;',
                correct: true,
            },
        ]
    },
    {
        question: 'В чем разница между confirm и prompt?',
        answers: [
            {
                id: '18',
                value: 'ничем не отличаются',
                correct: false,
            },
            {
                id: '19',
                value: 'confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением',
                correct: false,
            },
            {
                id: '20',
                value: 'prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением ',
                correct: true,
            },
        ]
    },
    {
        question: 'Язык JavaScript является подвидом языка Java - верно?',
        answers: [
            {
                id: '21',
                value: 'да',
                correct: false,
            },
            {
                id: '22',
                value: 'нет',
                correct: false,
            },
            {
                id: '23',
                value: 'наоборот, Java - подвид JavaScript',
                correct: true,
            },
        ]
    },
    {
        question: `Что будет на экране? alert(str);
        var str = "Hello"; `,
        answers: [
            {
                id: '24',
                value: 'Hello',
                correct: false,
            },
            {
                id: '25',
                value: 'undefined',
                correct: true,
            },
            {
                id: '26',
                value: 'будет ошибка',
                correct: false,
            },
        ]
    },
    {
        question: `Что выведет этот код?
        let y = 1; 
        let x = y = 2; 
        alert(x);
        `,
        answers: [
            {
                id: '27',
                value: '1',
                correct: false,
            },
            {
                id: '28',
                value: '2',
                correct: true,
            },
            {
                id: '29',
                value: 'x',
                correct: false,
            },
            {
                id: '30',
                value: 'y = 2',
                correct: false,
            },
            {
                id: '31',
                value: 'в коде явно какая-то ошибка ',
                correct: false,
            },
        ]
    },
    {
        question: `Чему равно i в конце кода? 
        for(var i=0; i<10; i++) {
            ...
        }
        alert(i);
        `,
        answers: [
            {
                id: '32',
                value: 'undefined',
                correct: false,
            },
            {
                id: '33',
                value: '9',
                correct: false,
            },
            {
                id: '34',
                value: '10',
                correct: true,
            },
            {
                id: '35',
                value: 'нет такой переменной после цикла',
                correct: false,
            },
           
        ]
    },
    {
        question: `Как объявить функцию в JavaScript?`,
        answers: [
            {
                id: '36',
                value: 'function:MyFunction()',
                correct: false,
            },
            {
                id: '37',
                value: ' function MyFunction() ',
                correct: true,
            },
            {
                id: '38',
                value: ' function = MyFunction() ',
                correct: false,
            },
            {
                id: '39',
                value: 'function = New MyFunction()',
                correct: false,
            },
           
        ]
    },
    
]