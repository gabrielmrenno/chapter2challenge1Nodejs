import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  //  Passar a responsabilidade de criar um novo id para o modelo
  //    - através do método contructor(), verifica se o id(this.id) não existir, criar um novo
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }
  }
}

export { User };
