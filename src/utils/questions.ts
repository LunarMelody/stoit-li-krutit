type QuestionNodeConstructor = {
    message: string;
    finish?: boolean;
    nextPositive?: QuestionNode;
    nextNegative?: QuestionNode;
}

export class QuestionNode {
    message: string;
    finish?: boolean;
    nextPositive?: QuestionNode;
    nextNegative?: QuestionNode;

    constructor({ message, nextPositive, nextNegative, finish }: QuestionNodeConstructor) {
        this.message = message;
        this.nextPositive = nextPositive;
        this.nextNegative = nextNegative;
        this.finish = finish;
    }
}

export const QUESTION_NODES = new QuestionNode({
    finish: false,
    message: "Тебе нравится герой?",
    nextPositive: new QuestionNode({
        finish: true,
        message: "Крути!",
    }),
    nextNegative: new QuestionNode({
        finish: false,
        message: "Пробовал(а) персонажа в тестовом забеге?",
        nextNegative: new QuestionNode({
            finish: true,
            message: "Так сначала попробуй, лол."
        }),
        nextPositive: new QuestionNode({
            finish: false,
            message: "Понравилось играть?",
            nextPositive: new QuestionNode({
                finish: true,
                message: "Крути!"
            }),
            nextNegative: new QuestionNode({
                finish: false,
                message: "Проходил(а) квест с персонажем?",
                nextNegative: new QuestionNode({
                    finish: true,
                    message: "Так пройди, лол."
                }),
                nextPositive: new QuestionNode({
                    finish: false,
                    message: "Понравился персонаж в квесте?",
                    nextNegative: new QuestionNode({
                        finish: true,
                        message: "Не крути!"
                    }),
                    nextPositive: new QuestionNode({
                        finish: true,
                        message: "Крути!"
                    })
                })
            })
        })
    })
})