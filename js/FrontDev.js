class FrontDev {

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.skills = ["HTML/CSS", "JavaScript/Jquery", "SQL", "PHP/Symfony", "Wordpress"]
        this.experiences = [
            { titre: "Stagiaire Frontend", entreprise: "Octo Technology", dates: "avril - septembre 2020"},
            { titre: "Opératrice/Animatrice Attractions", entreprise: "Disneyland Paris", dates: "mars 2017 - avril 2019"}
        ]
        this.formations = [
            { diplome: "Certifications Techniques d'intégration web et de développement web", ecole: "WebForce3", dates: "décembre 2019 - mai 2020"},
            { diplome: "Titre RNCP Intégrateur/Développeur en réalisation d'applications web", ecole: "3w Academy", dates: "mai - juillet 2019"}
        ]
    }

    speakingAboutWork = () => {
        let content2 = document.querySelector(".content2")
        let skills = this.speakingAboutSkills()
        let exps = this.speakingAboutExps()
        let studies = this.speakingAboutFormations()
        content2.innerHTML = '<article id="skills"><h3>Skills</h3>' + skills + '</article><article id="exp"><h3>Experiences</h3>' + exps + '</article><article id="studies"><h3>Formations</h3>' + studies + '</article>'
    }

    speakingAboutSkills = () => {
        return this.skills.map(element => '<p>'+element+'</p>').join('')
    }

    speakingAboutExps = () => {
        return this.experiences.map(element => '<p>'+element.titre+ ' / <span>' + element.entreprise + '</span></p>').join('')
    }

    speakingAboutFormations = () => {
        return this.formations.map(element => '<p>'+element.diplome+ ' / <span>' + element.ecole + '</span></p>').join('')
    }

}

let me = new FrontDev("Camille", "Toulouse")