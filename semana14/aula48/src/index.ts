import * as fs from 'fs';
import moment from 'moment';

type account = {
  name: string,
  cpf: number,
  birthday: string,
  balance: number
}
type movimentations = {
  add: number,
  sub: number,
  trans: number
};

const checkAge = (birthday: moment.Moment): number => {
  return moment().diff(birthday, "years")
};

const checkCpf = (cpf: number): any => {
  let data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());
  for (let client of data) {
    if (client.cpf === cpf) {
      return true
    } else {
      return false
    }
  }
};
const checkName = (name: string): any => {
  let data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());
  for (let client of data) {
    if (client.name === name) {
      return true
    } else {
      return false
    }
  }
};

const createNewAccount = (name: string, cpf: number, birthday: moment.Moment): void => {
  try {
    let clientBirthday = birthday.format('DD/MM/YY')
    const age = checkAge(birthday)
    const repeatCPF = checkCpf(cpf)

    if (age < 18) {
      console.log("Voce ainda nao tem 18 anos.")
    } else {
      if (repeatCPF === true) {
        console.log("Esse CPF já esta cadastrado.")
      } else {
        let newAccount = {
          name,
          cpf,
          birthday: clientBirthday,
          balance: 0
        };

        let data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());
        data.push(newAccount);
        const accounts = JSON.stringify(data);
        fs.writeFileSync('./data.json', accounts);
      };
    };
  } catch (error) {
    console.log("Erro ao criar conta: ", error)
  }
};

// createNewAccount(process.argv[2], Number(process.argv[3]), moment(process.argv[4], 'DD/MM/YY'));

const getBallance = (name: string, cpf: number) : void => {
  const extistentCpf = checkCpf(cpf);
  const extistentName = checkName(name);
  const data: account[] = JSON.parse(fs.readFileSync('./data.json').toString())
  if (extistentCpf === true && extistentName === true ) {
    for (let account of data) {
      if (account.cpf === cpf){
        console.log("Seu saldo é: ", account.balance)
        return ;
      }
    }
  } else {
    console.log("Conta não existe.")
  }
};

// getBallance(process.argv[2], Number(process.argv[3]));

const addCash = (name: string, cpf: number, value: number) : void => {
  const extistentCpf = checkCpf(cpf);
  const extistentName = checkName(name);
  const data: account[] = JSON.parse(fs.readFileSync('./data.json').toString())
  if (extistentCpf === true && extistentName === true ) {
    for (let account of data) {
      if (account.cpf === cpf) {
        account.balance = account.balance + value
        console.log("Seu novo saldo é: ", account.balance);
        return ;
      }
    }
  } else {
    console.log("Conta não existe.")
  };
};

// addCash(process.argv[2], Number(process.argv[3]), Number(process.argv[4]));
