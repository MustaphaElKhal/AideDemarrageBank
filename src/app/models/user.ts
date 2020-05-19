export class User {
  id: number;
  username: string;
  address: string;
  email: string;

  constructor(id: any, username: any, address: any, email: any) {
    this.id = id;
    this.username = username;
    this.address = address;
    this.email = email;
  }
}
