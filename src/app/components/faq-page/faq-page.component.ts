import { Component } from '@angular/core';
import { FixedModule } from '../../Fixed_module';

@Component({
  selector: 'app-faq-page',
  imports: [FixedModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {
    public fixedPathTranslate: string = 'NEXT_GAME.FAQ.';
    public faqList: any[] = [
        {
            question: "Comment puis-je créer un compte sur la plateforme Next Game ?",
            answer: "Cliquez sur le bouton <b>\"Créer un compte\"</b> sur la page d'accueil, remplissez toutes les informations demandées et validez pour accéder à l'ensemble des fonctionnalités de la plateforme.",
        },
        {
            question: "Je n'arrive pas à me connecter, que faire ?",
            answer: "Vérifiez d'abord que votre email et votre mot de passe sont corrects. Si vous avez oublié votre mot de passe, cliquez sur <b>\"Mot de passe oublié\"</b> sur la page d'authentification pour le réinitialiser.",
        },
        {
            question: "Comment puis-je rejoindre une partie de jeu existante sur Next Game ?",
            answer: "Après vous être connecté, naviguez vers la section <b>\"Jeux\"</b>, puis sélectionnez une partie disponible ou entrez le code d'une partie pour la rejoindre.",
        },
        {
            question: "Est-ce que la plateforme Next Game est gratuite ?",
            answer: "Oui, toutes les fonctionnalités essentielles de Next Game sont gratuites. Certaines options avancées ou objets cosmétiques peuvent toutefois être proposés en achat intégré ou via un abonnement Premium.",
        },
        {
            question: "Puis-je inviter des amis à jouer avec moi ?",
            answer: "Absolument ! Dans chaque salle de jeu, un bouton <b>\"Inviter des amis\"</b> vous permet d'envoyer un lien ou un code d'invitation à vos amis pour qu'ils vous rejoignent directement.",
        },
        {
            question: "Quels types de jeux puis-je trouver sur la plateforme ?",
            answer: "Next Game propose une variété de jeux multijoueurs en ligne, allant des jeux de stratégie et de réflexion, aux jeux d'action et jeux de société numériques. Nous ajoutons régulièrement de nouveaux titres.",
        },
        {
            question: "Comment signaler un comportement inapproprié ou triche sur la plateforme ?",
            answer: "Vous pouvez signaler un joueur directement depuis le profil du joueur ou via le bouton <b>\"Signaler\"</b> en cours de partie. Notre équipe de modération examine tous les signalements.",
        },
        {
            question: "Puis-je jouer sur mobile ou tablette ?",
            answer: "Oui, la plateforme Next Game est entièrement responsive et fonctionne sur ordinateur, tablette, et smartphone. Pour la meilleure expérience, utilisez un navigateur récent.",
        },
        {
            question: "Comment personnaliser mon profil ou mon avatar ?",
            answer: "Accédez à votre espace personnel en cliquant sur votre nom en haut à droite, puis choisissez <b>\"Modifier le profil\"</b>. Vous pourrez alors changer votre photo, pseudo, et autres paramètres.",
        },
        {
            question: "Y a-t-il un système de classement ou de récompenses ?",
            answer: "Oui ! Gagnez des points, débloquez des succès et grimpez au classement général. Des récompenses sont offertes chaque saison aux meilleurs joueurs.",
        },
        {
            question: "Comment contacter le support de Next Game ?",
            answer: "Pour toute question ou problème technique, rendez-vous sur la page <b>\"Contact\"</b> ou envoyez-nous un email via le formulaire de support intégré.",
        },
        {
            question: "Quelles sont les règles de confidentialité concernant mes données ?",
            answer: "Vos données sont protégées et utilisées uniquement dans le cadre du fonctionnement de la plateforme, conformément à notre politique de confidentialité disponible en bas de page.",
        }
    ];

    public activeIndex: number = -1;
    public toggleFaq(index: number) {
        this.activeIndex = this.activeIndex === index ? -1 : index;
    }
}
