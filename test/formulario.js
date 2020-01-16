
browser.waitForAngularEnabled(false);

describe('deberia poder registrarme, hacer login e iniciar sesión', function() {
  it('puede registrarse y logarse', function() {
    browser.get('http://127.0.0.1:8080/index.html');
    element(by.css('#name')).sendKeys('Sara');
    element(by.css('#name2')).sendKeys('Alvarez');
    element(by.css('#email')).sendKeys('sarasat@hotmail.com');
    element(by.css('#pass')).sendKeys('Pa@s123123');
    element(by.css('#pass2')).sendKeys('Pa@s123123');
    element(by.css('#start')).click();
    browser.driver.sleep(2000);
    var registro = element(by.css('#bienvenida'));
    expect(registro.isDisplayed()).toBe(true);
    element(by.css('#entrar')).click();
    browser.driver.sleep(1000);
    var login=element(by.css('#login'));
    expect(login.isDisplayed()).toBe(true);
    element(by.css('#user')).sendKeys('sarasat@hotmail.com');
    element(by.css('#userPass')).sendKeys('Pa@s123123');
    element(by.css('#acept')).click();
    browser.driver.sleep(2000);
    var inicio=element(by.css('#inicioSesion'));
    expect(inicio.isDisplayed()).toBe(true);
    element(by.css('#salir')).click();
    browser.driver.sleep(1000);
    expect(login.isDisplayed()).toBe(true);
  });
});


