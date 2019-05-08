
export class Usuario
{
    id: string;
    login: string;
    senha: string;
    lancamento: Date;

    constructor(usuario)
    {
        {
            this.id = usuario.id || '';
            this.login = usuario.login || '';
            this.senha = usuario.senha || '';
            this.lancamento = usuario.lancamento || '';
        }
    }
}
