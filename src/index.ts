export default class HelloWorld {
  private message: string;
  constructor(name: string) {
    this.message = 'Hello: ' + name;
  }
  public getMessage(): string {
    return this.message;
  }
}
