/// <reference types="cypress">
import faker from '@faker-js/faker'

describe('Validar o cadastro de cliente', () => {
    it('Verificar um e-mail válido', () => {
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type("eduardo_fogaca@akaer.com.br")
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('.page-heading').should('contain.text', "Create an account")
    });

    it('Validar e-mail inválido', () => {
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type("eduardo_fogacaakaer.com.br")
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#create_account_error').should('contain.text', "Invalid email address.")
    });

    it('Validar e-mail já cadastrado', () => {
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type("flavia@teste.com")
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#create_account_error').should('contain.text', "An account using this email address has already been registered. Please enter a valid password or request a new one.")
    });

    it('Validar o cadastro com sucesso', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let company = faker.company.companyName()
        let address1 = faker.address.streetAddress()
        let address2 = faker.address.secondaryAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let additionalinfo = faker.lorem.paragraph(1)
        let phone = faker.phone.phoneNumber("(61) #### ####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#uniform-id_gender1').click()
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#days').select("27")
        cy.get('#months').select("2")
        cy.get('#years').select("1998")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#company').type(company)
        cy.get('#address1').type(address1)
        cy.get('#address2').type(address2)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#other').type(additionalinfo)
        cy.get('#phone').type(phone)
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.page-heading').should('contain.text', "My account")
    });

    it('Validar o cadastro com sucesso sem o preenchimento dos campos opcionais', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.page-heading').should('contain.text', "My account")
    });

    it('Validar o cadastro sem o preenchimento do campo First Name', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "firstname is required.")
    });

    it('Validar o cadastro sem o preenchimento do campo Last Name', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "lastname is required.")
    });

    it('Validar o cadastro sem o preenchimento do campo Password', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "passwd is required.")
    });
    
    it('Validar o cadastro sem o preenchimento do campo First Name em YOUR ADDRESS', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear()
        cy.get('#lastname').clear().type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "firstname is required.")
    });

    it('Validar o cadastro sem o preenchimento do campo Last Name em YOUR ADDRESS', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear()
        cy.get('#address1').type(address1)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "lastname is required")
    });

    it('Validar o cadastro sem o preenchimento do campo Address', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "address1 is required")
    });

    it('Validar o cadastro sem o preenchimento do campo City', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "city is required")
    });

    it('Validar o cadastro sem o preenchimento do campo State', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#city').type(city)
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "This country requires you to choose a State.")
    });

    it('Validar o cadastro sem o preenchimento do campo Zip/Postal Code', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#id_country').select("21")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "The Zip/Postal code you've entered is invalid. It must follow this format: 00000")
    });

    it('Validar o cadastro sem o preenchimento do campo Country', () => {
        let email = faker.internet.email()
        let firstname = faker.name.firstName()
        let lastname = faker.name.findName()
        let address1 = faker.address.streetAddress()
        let city = faker.address.cityName()
        let postcode = faker.address.zipCode("#####")
        let mobphone = faker.phone.phoneNumber("(61) 9#### ####")
        let alias = faker.lorem.words()
       
        cy.visit("http://automationpractice.com/")
        cy.get('.header_user_info').click()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click().wait(5000)
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#passwd').type("KswthHKSmk")
        cy.get('#firstname').clear().type(firstname)
        cy.get('#lastname').clear().type(lastname)
        cy.get('#address1').type(address1)
        cy.get('#city').type(city)
        cy.get('#id_state').select("6")
        cy.get('#postcode').type(postcode)
        cy.get('#id_country').select("")
        cy.get('#phone_mobile').type(mobphone)
        cy.get('#alias').clear().type(alias)
        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain.text', "country is required")
        });

})
