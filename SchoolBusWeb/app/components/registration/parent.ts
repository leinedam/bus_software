/**
 * Created by Madeleine on 2016-11-05.
 */

export class Parent {
  constructor(
    public id: number,
    public name: string,
    private password: string,
    private address: string,
    private email: string,
    //private kids: number,

    public kids: string


  ) {  }
}
