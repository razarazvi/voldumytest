import { $ } from "protractor";

export class VolLoginPage{

    public usernameField = $("input#UserName");
    public passwordField = $("input#Password");
    public loginButton = $("button#login");


}