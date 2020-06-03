import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
  id: string,
  email: string
  name: string,
};

const allSubscribers = async (): Promise<User[]> => {
  const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
  return subscribers.data.map((res: User) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email
    };
  });
}

async function createNews(title: string, content: string, date: number): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title,
    content,
    date 
  })
};

const getSubscriberQuantity = async (): Promise<number> => {
  const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
  return subscribers.data.length;
};

const main = async () => {
  const getAllSubscribers = await allSubscribers();
  console.log(getAllSubscribers);

  await createNews(
    "Hamilton saiu do Frontend",
    "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!",
    1589818936000
  );

  const arrayUsers = await getSubscriberQuantity();
  const promiseArray = [];

  for (const user of getAllSubscribers) {
    promiseArray.push(
      axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: user.id,
        message: "blablabla",
    })
  );
  console.log("Notificação de: ", user.name);
  }
}

main();
