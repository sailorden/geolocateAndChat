ChatApp.View.Esperando = Backbone.View.extend({

    initialize: function () {
        self = this;
        ChatApp.vent.on('dejarEsperar', this.dejarEsperar);
        ChatApp.vent.on('mostrarEsperando', this.mostrarEsperando);
        this.el = $('section.esperando');
        ChatApp.View.Esperando.evalSound = function () {
            console.log('Entrant a evalSound')
            var thisSound;
            thisSound = document.getElementById('sound1');
            console.log('evalSound: element agafat ' + thisSound.id);
            console.log('evalSound: cridem a play()');
            thisSound.Play();
        }
    },

    dejarEsperar: function () {

        console.log("Deixem d'esperar");
//        evalSound();
//        this.evalSound();
//        self.evalSound();
        ChatApp.View.Esperando.evalSound();
        // console.log("Amaguem esperando a través de self.$el = " + JSON.stringify(self.$el.selector, null, 4));
        // self.$el.hide();
        $('section.esperando').fadeOut();

        // Showing the user list and the text area
        $('section.userList').removeClass('template');
        $('section.messages').removeClass('template');
        $('section.inputArea').removeClass('template');

    },

    mostrarEsperando: function () {

        console.log("Comencem a esperar");

        // amaguem el que toca
        $('section.userList').addClass('template');
        $('section.messages').addClass('template');
        $('section.inputArea').addClass('template');
        $('section.welcome').addClass('template');

        // mostrem el que s'ha de veure
        $('section.esperando').removeClass('template');
        $('section.esperando').show();

        // Eliminem tots els missatges vells
        $('section.messages ul.no-padding li:not(:first)').remove();

    },

});	
