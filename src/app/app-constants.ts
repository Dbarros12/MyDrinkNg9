export class AppConstants {

  public static get baseServidor(): string {
    return 'http://localhost:8080/mydrink';
  }

  public static get baseLogin(): string {
    return this.baseServidor + '/login';
  }

  public static get baseClientes(): string {
    return this.baseServidor + '/clientes';
  }

  public static get baseUrl(): string {
    return this.baseServidor + 'clientes';
  }
}
