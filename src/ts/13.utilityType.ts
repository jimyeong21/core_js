type User = {
  id: number;
  name: string;
  email: string;
};

const user: Omit<User, "email"> = {
  id: 1,
  name: "tiger",
};

const user2: Pick<User, "id" | "name"> = {
  id: 2,
  name: "beom",
};

type Address = {
  lat: number;
  long: number;
};

type User3 = {
  id: number;
  name: string;
  email: string;
  address: Address;
};

const user3: Partial<User3> = {
  name: "seon",
};

type User4 = {
  readonly id: number;
  name: string;
  email: string;
};

const user4: Readonly<User4> = {
  id: 1,
  name: "tiger",
  email: "tiger@naver.com",
};

// const user5:Required<User3> = {
//   id:1,
//   name:'tiger',
//   email: 'tiger@naver.com'
//   address: {
//     lat:20,
//     long:33.5
//   }
// }
