const heroes = require('../data/heroes');
const fs = require('fs');

module.exports = {
    index : (req, res, next) => res.render('heroes/heroes', { title: 'Heroes Digitales | Heroes', heroes}),

    profesion :  (req, res, next) => {
        let heroe = heroes.find(e => e.id == req.params.id);
        if (heroe != undefined){
            res.render('heroes/profesion', { title: 'Heroes Digitales | Heroes - Profesión', heroe});
        } else {
            res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas! No tenemos en nuestra base ningún héroe ni heroína con ese id.');
        }
    },

    resenia : (req, res, next) => {
        let heroe = heroes.find(e => e.id == req.params.id);
        if (heroe != undefined){
            res.render('heroes/resenia', { title: 'Heroes Digitales | Heroes - Reseña', heroe});
        } else {
            res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas! No tenemos en nuestra base ningún héroe ni heroína con ese id.');
        }
    },

    detalle: (req, res, next) => {
        let heroe = heroes.find(e => e.id == req.params.id);
        if (heroe != undefined){
            res.render('heroes/detalle', { title: 'Heroes Digitales | Heroes - Detalle', heroe});
        } else {
            res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas! No tenemos en nuestra base ningún héroe ni heroína con ese id.');
        }
    },

    crear: (req, res, next) => res.render('heroes/crear', { title: 'Heroes Digitales | Crear Heroe'}),

    create: (req, res, next) => {
        let heroesCopy = [...heroes]
        let newHeroe = {
            id: heroesCopy[heroesCopy.length - 1].id + 1,
            ...req.body,
            avatar: req.files[0].filename
        }
        heroesCopy.push(newHeroe)

        fs.writeFileSync('./data/heroes.json', JSON.stringify(heroesCopy))
        res.redirect('/heroes')
    },

    editar: (req, res, next) => {
        let heroe = heroes.find(e => e.id == req.params.id);
        if (heroe != undefined){
            res.render('heroes/edit', { title: 'Heroes Digitales | Crear Heroe', heroe})
        } else {
            res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas! No tenemos en nuestra base ningún héroe ni heroína con ese id.');
        }
        
    },

    edit : (req, res, next) => {
        let heroesCopy = [...heroes]
        let heroe = heroesCopy.find(e => e.id == req.params.id);

        let avatar = heroe.avatar
        if (req.files[0] != undefined) { avatar = req.files[0].filename }

        heroesCopy = heroesCopy.map( e => {
            if (e.id == heroe.id) {
                e = {
                    id:heroe.id,
                    ...req.body,
                    avatar: avatar
                }
            }
            return e;
        });

        fs.writeFileSync('./data/heroes.json', JSON.stringify(heroesCopy));
        res.redirect('/heroes');
    },

    remove : (req, res, next) => {
        let heroesCopy = [...heroes]
        let heroe = heroesCopy.find(e => e.id == req.params.id);
        heroesCopy = heroesCopy.filter( e => e.id != heroe.id);

        fs.writeFileSync('./data/heroes.json', JSON.stringify(heroesCopy));
        res.redirect('/heroes');
    }
}