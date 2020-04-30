export class Connection {
  public createdAt: Date;
  public Sso: boolean;
  constructor(
    public Name: string,
    public Gateway: string,
    public UserId: string,
    public Password: string,
    public Client?: number
  )
  {
    this.Sso = false;
    this.Client = Client || 1000;
    this.createdAt = new Date();
  }
  ConnectionTest() : void
  {

  }
}
