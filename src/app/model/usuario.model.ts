
export class Usuario
{
    id: string;
    login: string;
    senha: string;

    constructor(usuario)
    {
        {
            this.id = usuario.id || '';
            this.login = usuario.login || '';
            this.senha = usuario.senha || '';
        }
    }
}
