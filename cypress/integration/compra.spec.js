/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {         
        cy.backgroundLogin()

        cy.visit('/');        

        let nomeProduto = 'Faded Short Sleeve T-shirts';

        cy.contains(nomeProduto).trigger('mouseover');

        cy.contains(nomeProduto)
            .parent() // h5
            .siblings('div.button-container')
            .children('a')
            .first() //add to cart
            .click()

        // Validando se o produto certo foi adicionado ao carrinho com sucesso
        cy.get('.icon-ok')
            .parent() //h2
            .should('contain.text', 'Product successfully added to your shopping cart')

        cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)

        

        // confirmando a inserção no carrinho
        cy.get(".button-container a[href$='controller=order']").click();
        
        // confirmando a inserção do summary
        cy.get(".cart_navigation a[href$='order&step=1']").click();

        // realizando login para prosseguir a compra
        //cy.get('#email').type('semana_agilizei_tgf@mail.com');
        //cy.get('#passwd').type('agilizei');

        //cy.get('button#SubmitLogin').click();

        // verificando se o endereço de cobrança é igual da entrega
        // [type=checkbox]#addressesAreEquals

        // asserção | atributo | valor
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked');
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'name', 'same');


        cy.get('button[name=processAddress]').click();
        cy.get('[type=checkbox]#cgv').check();
        cy.get('button[name=processCarrier').click();

        // Escolhendo forma de pagamento bankwire
        cy.get('.bankwire').click();

        //Clicando na confirmação do pedido a partir do texto de confirmação do pedido
        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click()

        // Verificando texto que mostra que o pedido foi confirmado
        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.')

        cy.get('div.box').invoke('text').then((text) => {
            console.log(text)

            console.log(text.match(/[A-Z][A-Z]+/g)[1]) // filtrando dentro do box o id e rtp do pedido
                // 0 -> RTP
                // 1 -> ID do pedido

            // escrita de um arquivo json com o conteudo do pedido
            // caminho do arquivo (sempre a partir do root) | conteúdo do arquivo
            cy.writeFile('cypress/fixtures/pedido.json', { id: `${text.match(/[A-Z][A-Z]+/g)[1]}`})

            cy.get(".cart_navigation a[href$='history']").click();

            //leitura de um arquivo
            cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
                cy.get('tr.first_item .history_link a')
                .should('contain.text', pedido.id)
            })

            // html
                // o . = classe
            // json
                // o . = nivel dentro do caminho json
            

        })
        
        //expect
        //should
        


    });
});


// Nome do produto -> elemento (titulo do produto)
//  -> pai
//  -> irmãos do elemento pai (ou tios)
//  -> irmão button container
//      -> add to cart *
//      -> more