import { RestParameterType } from "./rest-parameter-type.enum";

export class RestParameter {
  public type: RestParameterType;
  public name: string;
  public value: string;
}
