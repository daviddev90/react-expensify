//
// Object destructuring
//

const objectDestructure = () => {
  const person = {
    name: 'Dongwon',
    age: 31,
    location: {
      city: 'Seoul',
      temp: 30
    },
    job: 'programmer',
    maj: 'business'
  };
  
  const {name = 'Anonymous', age} = person; //아래 2개랑 똑같은 역할
  // const name = person.name;
  // const age = person.age;
  //name에 default value를 정해준 것. name값이 없으면 Anonymous를 쓰라고.
  
  console.log(`${name} is ${age}`);
  if(person.location.city && person.location.temp){
    console.log(`It's ${person.location.temp} in ${person.location.city}.`);
  }
  
  //destructuring을 통해 짧고 가독성 높은 코드를 사용할 수 있음.
  //이름을 새로 정할수도 있음
  const { city, temp: temperature } = person.location;
  if(city && temperature){
    console.log(`It's ${temperature} in ${city}.`);
  }
  
  const { maj: major = 'NoMajor'} = person;
  //이름도 새로 정하고 default도 한번에 정해줄 수도 있음
  
  const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
      name: 'Penguin'
    }
  };
  
  const {name: publisherName = 'Selp-published'} = book.publisher;
  
  console.log(publisherName);
}


//
// Array destructuring
//

const address = ['39 Gomurae-ro', 'Seocho-gu', 'Seoul', '06541'];

console.log(`You are in ${address[1]} ${address[2]}`);

const [ , province, city = 'Seoul', zip] = address;
//첫번째것을 안 쓰고 싶으면 콤마만 찍고 남겨둘 수 있음
//default를 정할 수 있음. 빈 array가 와도 default 출력

console.log(`You are in ${city} ${province}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [menu, , price_medium] = item;

console.log(`A medium ${menu} costs ${price_medium}`)