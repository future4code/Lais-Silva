import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

// Exercício 1, letra c:

const getSubscribers1 = async (): Promise<any> => {
    try {
        const allNews = await axios.get(`${baseUrl}/news/all`)
        console.log("Dados acessados com sucesso")
        return allNews.data
    } catch (err) {
        console.log(err)
    };
};


// Exercício 2, letra b:

async function getSubscribers2(): Promise<any> {
    try {
        const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
        return subscribers.data;
    } catch (err) {
        console.log(err)
    };
};

// Exercício 3, letra c:

type User = {
    login: string,
    id: string,
    email: string
};

async function getSubscribers3(): Promise<User[]> {
    try {
        const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
        return subscribers.data.map((res: any) => {
            return {
                login: res.login,
                id: res.name,
                email: res.email
            }
        })
    } catch (error) {
        console.log(error)
        return []
    };
};
// As funções criadas até aqui tem intuito apenas de resolver as questões
// propostas. A única realmente chamda é getSubscribers sem indicação de número. 

// Exercício 4, letra b:

const createContent = async (tittle: string, content: string): Promise<void> => {
    try {
        axios.put(`baseUrl/news`, {
            tittle,
            content,
            date: Date.now()
        });
    } catch (error) {

    }
};

// Exercicio 5, letra b: 

async function sendNotifications( message: string ): Promise<void> {
    try {
        const users = await axios.get(`${baseUrl}/subscribers/all`)

        for (const user of users.data) {
            await axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message
            })
        };
    } catch (err) {
        console.log(err)
    };
};

async function getUsers(): Promise<User[]> {

    const users = await axios.get(`${baseUrl}/subscribers/all`);

    return users.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    });
}
// Exercício 6, letra c:

const sendNotificationsWihArray = async (message: string): Promise<void> => {
    const users = await getUsers()
    const promiseArray: Promise<any>[] = [];

    for (let user of users) {
        promiseArray.push(
            axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message
            })
        );
    }

    await Promise.all(promiseArray);
};

// Exercicio 7, letra a:

const newSubscribe = async (id: string, name: string, email: string): Promise<void> => {
    try {
        axios.put(`baseUrl/subscribers`, {
            id: id,
            name: name,
            email: email
        });
        console.log("Cadastrado com sucesso")
    } catch (error) {
        console.log(error)
    }
};
newSubscribe("5454845454", "lais", "laislais@lais.lais");

// Exercicio 7, letra b:

const createContentAndSend = async (tittle: string, content: string): Promise<void> => {
    try {
        await createContent(
            "Que ladeira é essa?",
            "Essa é a ladeira da preguiça"
        );
        const users = await getUsers();
       
        await sendNotifications("new news")
    } catch (error) {

    }
};

// Exercicio 7, letra c:


async function getAllNotifications(): Promise<any> {

    const users = await getUsers();

    const promisesArray: Promise<any>[] = [];

    for (let user of users) {
        promisesArray.push(
            axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
        );

        const result = await Promise.all(promisesArray);
        const dataFromResult = result.map((res) => res.data);

        return dataFromResult;
    }

}

