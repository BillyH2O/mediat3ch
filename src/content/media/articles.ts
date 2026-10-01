import type { Article } from "./types";

/**
 * Fictional demo articles for TECH.EXE. All companies, people and figures
 * below are invented for this prototype - none of this is real reporting.
 * This is the single place to eventually swap for a real API response.
 */
export const ARTICLES: Article[] = [
  // ---------------------------------------------------------------- IA ----
  {
    slug: "assistant-ia-nova-code-en-local",
    domain: "ia",
    format: "actualite",
    featured: true,
    title: "NovaCode : l'assistant de code IA qui tourne enfin en local",
    excerpt:
      "La startup Fenwick Labs dévoile NovaCode, un assistant de programmation capable de tourner entièrement hors ligne sur un ordinateur portable, sans envoyer une seule ligne de code vers le cloud.",
    image: "/article1.png",
    author: "Camille Reyer",
    publishedAt: "2026-09-29",
    readTime: 5,
    body: [
      {
        type: "p",
        text: "Fenwick Labs a présenté hier NovaCode, un assistant de programmation qui promet de tourner intégralement en local, sans connexion internet requise après l'installation. L'annonce a surpris une partie de l'industrie, habituée à des assistants qui dépendent d'un aller-retour permanent vers des serveurs distants.",
      },
      {
        type: "h2",
        text: "Un modèle compressé, pas amputé",
      },
      {
        type: "p",
        text: "Selon Fenwick Labs, NovaCode embarque un modèle de dix milliards de paramètres, quantifié pour tourner sur des cartes graphiques grand public avec seulement huit gigaoctets de mémoire vidéo. L'entreprise affirme avoir maintenu des performances proches de son offre cloud sur les tâches de complétion de code et de correction de bugs, au prix d'un temps de réponse légèrement plus long sur les projets volumineux.",
      },
      {
        type: "quote",
        text: "Le développeur doit pouvoir coder dans un avion, dans un train, ou dans un sous-sol sans réseau. C'est le problème qu'on a voulu résoudre en premier.",
        cite: "Idris Pelletan, cofondateur de Fenwick Labs",
      },
      {
        type: "h2",
        text: "Confidentialité comme argument commercial",
      },
      {
        type: "p",
        text: "L'argument de vente principal reste la confidentialité : aucune ligne de code ne quitte la machine de l'utilisateur. Plusieurs équipes de sécurité interrogées par notre rédaction saluent l'initiative, tout en rappelant que la vérification indépendante du comportement réseau du logiciel reste indispensable avant tout déploiement en entreprise.",
      },
      {
        type: "list",
        items: [
          "Modèle de 10 milliards de paramètres, quantifié en 4 bits",
          "Fonctionne sur GPU grand public dès 8 Go de VRAM",
          "Mode hors ligne complet après l'installation initiale",
          "Disponible en version bêta pour VS Code et JetBrains",
        ],
      },
    ],
  },
  {
    slug: "guide-choisir-son-assistant-ia-generative",
    domain: "ia",
    format: "guide",
    title: "Guide : comment choisir son assistant IA générative en 2026",
    excerpt:
      "Entre les assistants cloud, les modèles locaux et les offres hybrides, le choix est devenu complexe. Voici une grille de lecture simple pour trancher selon vos besoins.",
    image: "/article2.png",
    author: "Nabil Ostrowski",
    publishedAt: "2026-09-24",
    readTime: 7,
    body: [
      {
        type: "p",
        text: "Choisir un assistant IA générative en 2026 revient à répondre à trois questions simples : où vos données doivent-elles rester, quel budget mensuel pouvez-vous accepter, et quelle latence est tolérable pour votre usage.",
      },
      {
        type: "h2",
        text: "Étape 1 : cartographier la sensibilité des données",
      },
      {
        type: "p",
        text: "Si vous manipulez du code source propriétaire, des données de santé ou des documents juridiques, privilégiez un modèle local ou une offre avec engagement contractuel de non-réutilisation des données. Dans le doute, considérez que tout ce qui part vers un service cloud grand public peut potentiellement être consulté par le fournisseur.",
      },
      {
        type: "h2",
        text: "Étape 2 : évaluer le coût réel",
      },
      {
        type: "p",
        text: "Les offres par abonnement paraissent simples, mais le coût par requête explose vite pour un usage intensif. Un modèle local a un coût d'entrée plus élevé (matériel) mais un coût marginal proche de zéro ensuite.",
      },
      {
        type: "h2",
        text: "Étape 3 : tester sur vos vrais cas d'usage",
      },
      {
        type: "list",
        items: [
          "Préparez 5 à 10 tâches représentatives de votre usage réel",
          "Testez au moins deux offres différentes sur ces mêmes tâches",
          "Mesurez le temps gagné, pas seulement la qualité de la réponse",
          "Vérifiez la politique de conservation des données avant de signer",
        ],
      },
      {
        type: "p",
        text: "Aucun assistant n'est universellement meilleur : le bon choix dépend presque toujours plus de votre contexte que du modèle lui-même.",
      },
    ],
  },
  {
    slug: "analyse-consommation-energetique-datacenters-ia",
    domain: "ia",
    format: "analyse",
    title: "La facture énergétique de l'IA générative, enfin des chiffres publics",
    excerpt:
      "Un consortium d'opérateurs de datacenters a publié ses premiers chiffres de consommation liés à l'inférence IA. Décryptage d'une transparence encore partielle.",
    image: "/article3.png",
    author: "Camille Reyer",
    publishedAt: "2026-09-18",
    readTime: 6,
    body: [
      {
        type: "p",
        text: "Pendant longtemps, la consommation énergétique réelle de l'IA générative est restée un sujet d'estimations contradictoires. Un consortium regroupant plusieurs opérateurs européens de datacenters vient de publier un premier rapport chiffré, distinguant clairement l'entraînement des modèles de leur utilisation quotidienne, dite inférence.",
      },
      {
        type: "h2",
        text: "L'inférence, pas l'entraînement, pèse le plus lourd sur l'année",
      },
      {
        type: "p",
        text: "Contrairement à une idée reçue, ce n'est pas l'entraînement ponctuel des grands modèles qui pèse le plus sur une année complète, mais l'inférence répétée à très grande échelle, additionnée sur des milliards de requêtes quotidiennes.",
      },
      {
        type: "quote",
        text: "Une seule requête est négligeable. Multipliée par plusieurs milliards par jour, elle devient un poste de consommation comparable à celui d'une ville moyenne.",
        cite: "Rapport du consortium, section méthodologie",
      },
      {
        type: "h2",
        text: "Des marges de progrès réelles",
      },
      {
        type: "p",
        text: "Le rapport souligne aussi des marges de progrès notables : optimisation des modèles, réutilisation de la chaleur produite par les serveurs, et surtout un routage plus intelligent des requêtes vers des modèles plus petits quand la tâche ne justifie pas un modèle massif.",
      },
    ],
  },

  // -------------------------------------------------------- Robotique ----
  {
    slug: "orion-r2-robot-logistique-entrepots",
    domain: "robotique",
    format: "actualite",
    title: "Orion R2 : le robot qui trie les colis sans jamais s'arrêter",
    excerpt:
      "La société Kelmaris Robotics déploie son robot de tri Orion R2 dans un premier entrepôt pilote en France, avec une promesse de fonctionnement continu 24h/24.",
    image: "/article2.png",
    author: "Élise Vantour",
    publishedAt: "2026-09-27",
    readTime: 4,
    body: [
      {
        type: "p",
        text: "Kelmaris Robotics a mis en service son robot de tri Orion R2 dans un entrepôt pilote près de Lyon. L'appareil, monté sur rails, trie jusqu'à 4 000 colis par heure et peut fonctionner en continu grâce à un système de batteries interchangeables.",
      },
      {
        type: "h2",
        text: "Un fonctionnement pensé pour ne jamais s'arrêter",
      },
      {
        type: "p",
        text: "Plutôt qu'une recharge classique, Orion R2 échange sa batterie en quinze secondes sur une station dédiée, ce qui lui permet en théorie de fonctionner sans interruption tant que des batteries de secours sont disponibles.",
      },
      {
        type: "list",
        items: [
          "Jusqu'à 4 000 colis triés par heure",
          "Changement de batterie automatisé en 15 secondes",
          "Détection d'obstacles par lidar et caméras stéréo",
          "Premier déploiement pilote dans un entrepôt de 12 000 m²",
        ],
      },
      {
        type: "p",
        text: "Kelmaris Robotics prévoit d'étendre le déploiement à trois autres sites en 2027 si le pilote confirme les gains de productivité annoncés.",
      },
    ],
  },
  {
    slug: "interview-fondatrice-robots-agricoles-tibea",
    domain: "robotique",
    format: "interview",
    title: "« Le robot agricole doit être réparable au champ, pas au laboratoire »",
    excerpt:
      "Entretien avec Salomé Ferreira, fondatrice de Tibéa Robotics, sur les défis très concrets de la robotique agricole en conditions réelles.",
    image: "/article1.png",
    author: "Nabil Ostrowski",
    publishedAt: "2026-09-20",
    readTime: 9,
    body: [
      {
        type: "p",
        text: "Salomé Ferreira a fondé Tibéa Robotics il y a quatre ans après avoir travaillé dans l'exploitation viticole familiale. Son entreprise conçoit des robots de désherbage autonomes destinés aux petites exploitations. Nous l'avons rencontrée pour parler des réalités du terrain, loin des vitrines de salons technologiques.",
      },
      {
        type: "h2",
        text: "Sur la différence entre démo et usage réel",
      },
      {
        type: "quote",
        text: "En démo, tout fonctionne toujours parfaitement parce que le terrain est plat et sec. Dans un vrai champ après la pluie, la moitié des robots présentés en salon caleraient en dix minutes.",
        cite: "Salomé Ferreira",
      },
      {
        type: "p",
        text: "Elle insiste sur un point : la robustesse mécanique compte souvent plus que la sophistication algorithmique dans son secteur. Un robot qui tombe en panne au milieu d'un champ, loin de tout technicien, n'a aucune valeur pratique.",
      },
      {
        type: "h2",
        text: "Sur la réparabilité comme critère de conception",
      },
      {
        type: "p",
        text: "Tibéa Robotics conçoit désormais chaque robot pour qu'un exploitant puisse remplacer les pièces les plus fragiles avec un simple jeu de clés, sans outil spécialisé. « On a supprimé toutes les vis propriétaires. Ça a l'air anodin, mais c'est ce qui fait qu'un agriculteur peut réparer seul un dimanche soir », explique-t-elle.",
      },
      {
        type: "h2",
        text: "Et pour la suite ?",
      },
      {
        type: "p",
        text: "Tibéa Robotics travaille désormais sur une version capable de fonctionner en petits essaims coordonnés, pour couvrir de plus grandes parcelles sans multiplier le nombre d'opérateurs nécessaires.",
      },
    ],
  },
  {
    slug: "guide-debuter-robotique-amateur-2026",
    domain: "robotique",
    format: "guide",
    title: "Guide : se lancer dans la robotique amateur sans se ruiner",
    excerpt:
      "Cartes de développement, kits de capteurs, moteurs : voici par où commencer en 2026 si vous voulez construire votre premier robot avec un budget raisonnable.",
    image: "/article3.png",
    author: "Élise Vantour",
    publishedAt: "2026-09-15",
    readTime: 8,
    body: [
      {
        type: "p",
        text: "La robotique amateur n'a jamais été aussi accessible. Avec un budget de départ raisonnable, il est possible de construire un premier robot mobile fonctionnel en quelques semaines.",
      },
      {
        type: "h2",
        text: "Le socle matériel minimal",
      },
      {
        type: "list",
        items: [
          "Une carte de développement type microcontrôleur avec Wi-Fi intégré",
          "Un châssis à deux ou quatre roues motorisées",
          "Un capteur de distance à ultrasons ou lidar bas coût",
          "Une batterie rechargeable adaptée et son module de charge",
        ],
      },
      {
        type: "h2",
        text: "Les erreurs de débutant les plus fréquentes",
      },
      {
        type: "p",
        text: "La première erreur classique consiste à sous-dimensionner l'alimentation électrique, ce qui provoque des redémarrages aléatoires dès que les moteurs sollicitent trop de courant. La seconde est de vouloir intégrer trop de capteurs dès le premier prototype, ce qui complique inutilement le câblage et le débogage.",
      },
      {
        type: "h2",
        text: "Par où commencer concrètement",
      },
      {
        type: "p",
        text: "Commencez par un robot capable simplement d'avancer, de tourner et d'éviter un obstacle. Une fois ce socle stable, ajoutez une fonctionnalité à la fois : suivi de ligne, télécommande via une application, puis navigation autonome plus élaborée.",
      },
    ],
  },

  // --------------------------------------------------------- Startups ----
  {
    slug: "levee-fonds-serie-b-glacia-refroidissement",
    domain: "startups",
    format: "actualite",
    title: "Glacia lève 42 millions d'euros pour refroidir les datacenters à l'eau de mer",
    excerpt:
      "La startup marseillaise Glacia annonce une levée de fonds en série B pour industrialiser son système de refroidissement par eau de mer destiné aux datacenters côtiers.",
    image: "/article4.png",
    author: "Yohan Dresch",
    publishedAt: "2026-09-26",
    readTime: 4,
    body: [
      {
        type: "p",
        text: "Glacia, jeune entreprise marseillaise fondée en 2023, annonce une levée de fonds de 42 millions d'euros en série B, menée par un consortium de fonds européens spécialisés dans les technologies climatiques.",
      },
      {
        type: "h2",
        text: "Refroidir sans pomper l'eau douce",
      },
      {
        type: "p",
        text: "Le système développé par Glacia utilise l'eau de mer, préalablement filtrée, comme source froide pour les circuits de refroidissement des datacenters implantés en zone côtière, évitant ainsi de puiser dans les nappes d'eau douce locales, une problématique de plus en plus sensible.",
      },
      {
        type: "quote",
        text: "On ne réinvente pas la thermodynamique, on met simplement l'eau de mer là où personne ne pensait à l'utiliser sérieusement.",
        cite: "Farah Nkomo, directrice générale de Glacia",
      },
      {
        type: "p",
        text: "Les fonds levés serviront principalement à financer un second site pilote et à recruter une trentaine d'ingénieurs supplémentaires d'ici la fin de l'année 2027.",
      },
    ],
  },
  {
    slug: "incubateur-regional-tech-verte-bilan",
    domain: "startups",
    format: "actualite",
    title: "Premier bilan pour l'incubateur régional dédié à la tech verte",
    excerpt:
      "Un an après son lancement, l'incubateur Verdia dresse un premier bilan : 14 startups accompagnées, quelques réussites, et des leçons sur le financement de la deeptech.",
    image: "/article1.png",
    author: "Yohan Dresch",
    publishedAt: "2026-09-14",
    readTime: 5,
    body: [
      {
        type: "p",
        text: "Lancé il y a un an avec le soutien de plusieurs collectivités, l'incubateur Verdia publie son premier bilan d'activité : quatorze startups accompagnées, dont neuf toujours en activité et deux ayant déjà bouclé un tour de financement externe.",
      },
      {
        type: "h2",
        text: "Un accompagnement pensé pour la deeptech",
      },
      {
        type: "p",
        text: "Contrairement à un incubateur généraliste, Verdia cible spécifiquement les projets à forte composante technique et à cycle de développement long, comme les matériaux avancés ou les capteurs environnementaux, des secteurs où les investisseurs classiques restent souvent prudents.",
      },
      {
        type: "list",
        items: [
          "14 startups accompagnées sur les douze premiers mois",
          "9 startups toujours en activité à ce jour",
          "2 tours de financement externes bouclés",
          "Un programme de mentorat resserré, limité à 8 mois par cohorte",
        ],
      },
    ],
  },
  {
    slug: "analyse-financement-deeptech-europe-2026",
    domain: "startups",
    format: "analyse",
    title: "Le financement de la deeptech européenne reprend, mais reste sélectif",
    excerpt:
      "Après deux années de ralentissement, les investissements dans la deeptech européenne repartent doucement à la hausse selon les derniers chiffres disponibles, mais se concentrent sur un nombre restreint de dossiers.",
    image: "/article2.png",
    author: "Camille Reyer",
    publishedAt: "2026-09-09",
    readTime: 6,
    body: [
      {
        type: "p",
        text: "Après deux années de net ralentissement, les montants investis dans les startups deeptech européennes montrent des signes de reprise. Mais cette reprise se révèle très concentrée sur un petit nombre de dossiers jugés matures.",
      },
      {
        type: "h2",
        text: "Moins de dossiers financés, mais des montants plus élevés",
      },
      {
        type: "p",
        text: "Le nombre total d'opérations reste inférieur à son niveau d'il y a trois ans, mais le montant moyen par opération a nettement augmenté, signe que les investisseurs privilégient désormais un nombre restreint de projets avec un historique de traction déjà établi.",
      },
      {
        type: "h2",
        text: "Les secteurs qui tirent la reprise",
      },
      {
        type: "list",
        items: [
          "Énergie et matériaux avancés",
          "Robotique industrielle",
          "Semi-conducteurs spécialisés",
          "Technologies de capture carbone",
        ],
      },
      {
        type: "p",
        text: "Les startups en phase d'amorçage restent, elles, dans une situation plus difficile, avec des tours de table plus longs à boucler qu'avant le ralentissement.",
      },
    ],
  },

  // --------------------------------------------------------- Hardware ----
  {
    slug: "puce-arkos-x1-basse-consommation",
    domain: "hardware",
    format: "actualite",
    title: "Arkos X1 : une puce mobile qui promet trois jours d'autonomie réelle",
    excerpt:
      "Le fabricant de semi-conducteurs Arkos Silicon dévoile son nouveau système sur puce X1, centré sur l'efficacité énergétique plutôt que sur la pure puissance brute.",
    image: "/article3.png",
    author: "Bastien Corrigan",
    publishedAt: "2026-09-28",
    readTime: 5,
    body: [
      {
        type: "p",
        text: "Arkos Silicon a présenté son nouveau système sur puce X1, destiné aux smartphones milieu de gamme. Contrairement à la tendance habituelle qui privilégie la puissance brute, l'entreprise a orienté sa conception autour de l'efficacité énergétique.",
      },
      {
        type: "h2",
        text: "Trois jours d'autonomie, sous conditions",
      },
      {
        type: "p",
        text: "Arkos Silicon annonce jusqu'à trois jours d'autonomie en usage dit modéré : appels, messagerie et navigation web légère, sans jeu vidéo intensif ni enregistrement vidéo prolongé. Des tests indépendants seront nécessaires pour confirmer ce chiffre en conditions réelles variées.",
      },
      {
        type: "list",
        items: [
          "Architecture fabriquée en process 3 nanomètres",
          "Huit cœurs, dont deux dédiés aux tâches d'arrière-plan",
          "Modem 5G optimisé pour la consommation en veille",
          "Disponible chez les fabricants partenaires dès le premier trimestre 2027",
        ],
      },
    ],
  },
  {
    slug: "guide-choisir-composants-pc-silencieux",
    domain: "hardware",
    format: "guide",
    title: "Guide : monter un PC silencieux sans sacrifier les performances",
    excerpt:
      "Ventilateurs, alimentation, boîtier : les choix qui font vraiment la différence pour un ordinateur à la fois puissant et discret.",
    image: "/article4.png",
    author: "Bastien Corrigan",
    publishedAt: "2026-09-11",
    readTime: 7,
    body: [
      {
        type: "p",
        text: "Un ordinateur silencieux n'est pas nécessairement un ordinateur moins puissant. C'est avant tout une question de choix de composants et de gestion thermique réfléchie.",
      },
      {
        type: "h2",
        text: "Le boîtier compte plus qu'on ne le pense",
      },
      {
        type: "p",
        text: "Un boîtier bien conçu, avec un flux d'air cohérent, permet d'utiliser des ventilateurs plus grands tournant à basse vitesse, ce qui réduit fortement le bruit perçu sans sacrifier le refroidissement.",
      },
      {
        type: "h2",
        text: "L'alimentation, souvent négligée",
      },
      {
        type: "p",
        text: "Une alimentation surdimensionnée par rapport aux besoins réels du système tournera à un régime de ventilation plus bas, donc plus silencieux, la majorité du temps.",
      },
      {
        type: "list",
        items: [
          "Privilégier des ventilateurs de grand diamètre à basse vitesse",
          "Choisir un boîtier avec un flux d'air avant-arrière cohérent",
          "Surdimensionner légèrement l'alimentation plutôt que la calibrer au plus juste",
          "Utiliser une pâte thermique de qualité et bien l'appliquer",
        ],
      },
      {
        type: "p",
        text: "Enfin, un simple ajustement des courbes de ventilation dans le logiciel de la carte mère change souvent plus le confort d'usage que n'importe quel composant premium.",
      },
    ],
  },
  {
    slug: "retour-production-ecrans-microled-europe",
    domain: "hardware",
    format: "actualite",
    title: "Une première ligne de production d'écrans microLED s'installe en Europe",
    excerpt:
      "Un consortium industriel annonce l'ouverture d'une ligne pilote de production d'écrans microLED, une technologie jusqu'ici presque exclusivement fabriquée en Asie.",
    image: "/article1.png",
    author: "Élise Vantour",
    publishedAt: "2026-09-06",
    readTime: 4,
    body: [
      {
        type: "p",
        text: "Un consortium industriel réunissant plusieurs fabricants européens a annoncé l'ouverture d'une ligne de production pilote dédiée aux écrans microLED, une technologie d'affichage jusqu'ici concentrée presque exclusivement en Asie de l'Est.",
      },
      {
        type: "h2",
        text: "Une technologie encore coûteuse à produire",
      },
      {
        type: "p",
        text: "La microLED promet un contraste et une luminosité supérieurs aux technologies OLED actuelles, mais reste complexe et coûteuse à produire en grande quantité, ce qui explique sa rareté sur les produits grand public à ce jour.",
      },
      {
        type: "p",
        text: "Le consortium vise dans un premier temps des applications professionnelles à forte valeur ajoutée, avant d'envisager une éventuelle démocratisation vers le grand public d'ici plusieurs années.",
      },
    ],
  },

  // ---------------------------------------------------- Cybersécurité ----
  {
    slug: "faille-critique-routeurs-domestiques-marque-nova",
    domain: "cybersecurite",
    format: "actualite",
    title: "Faille critique découverte sur une gamme de routeurs domestiques",
    excerpt:
      "Des chercheurs en sécurité révèlent une vulnérabilité critique touchant plusieurs modèles de routeurs grand public, déjà corrigée par un correctif d'urgence.",
    image: "/article2.png",
    author: "Sacha Loewen",
    publishedAt: "2026-09-25",
    readTime: 5,
    body: [
      {
        type: "p",
        text: "Une équipe de chercheurs en sécurité indépendante a révélé une vulnérabilité critique affectant plusieurs modèles de routeurs domestiques d'une marque largement distribuée. La faille permettait, dans certaines conditions, une prise de contrôle à distance sans authentification.",
      },
      {
        type: "h2",
        text: "Un correctif déjà disponible",
      },
      {
        type: "p",
        text: "Le fabricant a publié un correctif d'urgence dans les 72 heures suivant la divulgation responsable de la faille. Les utilisateurs concernés sont invités à vérifier la disponibilité d'une mise à jour du firmware dans l'interface d'administration de leur appareil.",
      },
      {
        type: "list",
        items: [
          "Faille exploitable à distance sans authentification préalable",
          "Correctif de firmware publié 72 heures après la divulgation",
          "Aucune exploitation malveillante confirmée à ce stade",
          "Mise à jour manuelle recommandée si l'appareil n'est pas configuré en automatique",
        ],
      },
    ],
  },
  {
    slug: "guide-securiser-compte-messagerie-2026",
    domain: "cybersecurite",
    format: "guide",
    title: "Guide : sécuriser sérieusement son compte de messagerie principal",
    excerpt:
      "Votre boîte mail principale est souvent la clé de voûte de tous vos autres comptes. Voici les réglages qui comptent vraiment, sans jargon inutile.",
    image: "/article3.png",
    author: "Sacha Loewen",
    publishedAt: "2026-09-08",
    readTime: 6,
    body: [
      {
        type: "p",
        text: "Une boîte mail compromise permet souvent de réinitialiser en cascade la plupart de vos autres comptes en ligne. C'est pour cette raison qu'elle mérite une attention particulière, plus que n'importe quel autre compte isolé.",
      },
      {
        type: "h2",
        text: "L'authentification à deux facteurs, non négociable",
      },
      {
        type: "p",
        text: "Activez l'authentification à deux facteurs sur votre messagerie principale, idéalement via une application dédiée plutôt que par SMS, ce dernier restant vulnérable à certaines techniques de détournement de numéro.",
      },
      {
        type: "h2",
        text: "Les codes de récupération, à imprimer et ranger",
      },
      {
        type: "p",
        text: "Conservez vos codes de récupération sur un support physique, rangé en lieu sûr, plutôt que dans un fichier numérique facilement accessible depuis le même appareil que votre messagerie.",
      },
      {
        type: "list",
        items: [
          "Activer l'authentification à deux facteurs par application plutôt que par SMS",
          "Imprimer et ranger physiquement les codes de récupération",
          "Vérifier régulièrement la liste des appareils connectés",
          "Utiliser un mot de passe unique et long, généré aléatoirement",
        ],
      },
    ],
  },
  {
    slug: "analyse-rancongiciels-cible-pme-2026",
    domain: "cybersecurite",
    format: "analyse",
    title: "Les rançongiciels visent de plus en plus les petites entreprises",
    excerpt:
      "Les grands groupes se sont mieux protégés ces dernières années. Les attaquants se tournent désormais davantage vers les petites et moyennes entreprises, moins bien défendues.",
    image: "/article4.png",
    author: "Camille Reyer",
    publishedAt: "2026-09-03",
    readTime: 6,
    body: [
      {
        type: "p",
        text: "Plusieurs rapports d'incident convergent vers le même constat : les grands groupes, mieux dotés en équipes de sécurité, sont devenus des cibles plus coûteuses à attaquer. Les groupes de rançongiciels réorientent donc une partie de leur activité vers les petites et moyennes entreprises.",
      },
      {
        type: "h2",
        text: "Un rapport de force qui s'inverse",
      },
      {
        type: "p",
        text: "Une petite entreprise dispose rarement d'une équipe de sécurité dédiée, ce qui allonge le temps de détection d'une intrusion et augmente les chances de succès d'une attaque, même avec des moyens techniques relativement simples du côté des attaquants.",
      },
      {
        type: "h2",
        text: "Des mesures simples, à fort impact",
      },
      {
        type: "list",
        items: [
          "Sauvegardes régulières, déconnectées du réseau principal",
          "Mises à jour de sécurité appliquées sans délai",
          "Authentification à deux facteurs sur les accès sensibles",
          "Sensibilisation courte mais répétée des équipes",
        ],
      },
      {
        type: "p",
        text: "Aucune de ces mesures n'est nouvelle ou complexe à mettre en œuvre, mais leur application rigoureuse et continue reste, dans les faits, ce qui distingue le plus les entreprises touchées de celles qui échappent aux attaques.",
      },
    ],
  },

  // -------------------------------------------------------------- XR/VR --
  {
    slug: "casque-lumen-one-champ-vision-elargi",
    domain: "xr-vr",
    format: "actualite",
    title: "Lumen One : un casque XR qui élargit enfin le champ de vision",
    excerpt:
      "La startup Halovue présente le Lumen One, un casque de réalité mixte qui met l'accent sur un champ de vision élargi plutôt que sur la résolution brute.",
    image: "/article1.png",
    author: "Marion Kessler",
    publishedAt: "2026-09-23",
    readTime: 5,
    body: [
      {
        type: "p",
        text: "Halovue a dévoilé le Lumen One, un casque de réalité mixte qui met l'accent sur l'élargissement du champ de vision plutôt que sur une résolution toujours plus élevée, un choix qui tranche avec la tendance dominante du secteur ces dernières années.",
      },
      {
        type: "h2",
        text: "Pourquoi le champ de vision plutôt que la résolution",
      },
      {
        type: "p",
        text: "Selon Halovue, un champ de vision restreint casse davantage l'immersion qu'une résolution légèrement inférieure, en particulier lors de déplacements rapides dans l'environnement virtuel.",
      },
      {
        type: "list",
        items: [
          "Champ de vision annoncé de 130 degrés horizontaux",
          "Poids réparti pour limiter la pression sur le front",
          "Autonomie annoncée de 2h30 en usage intensif",
          "Compatibilité annoncée avec le catalogue de jeux existant via un adaptateur logiciel",
        ],
      },
    ],
  },
  {
    slug: "musee-parisien-visite-realite-augmentee",
    domain: "xr-vr",
    format: "actualite",
    title: "Un musée parisien propose désormais une visite entièrement en réalité augmentée",
    excerpt:
      "Le musée s'équipe de lunettes de réalité augmentée pour proposer une visite guidée enrichie, sans audioguide classique ni smartphone à tenir en main.",
    image: "/article2.png",
    author: "Marion Kessler",
    publishedAt: "2026-09-05",
    readTime: 4,
    body: [
      {
        type: "p",
        text: "Un musée parisien de taille moyenne propose désormais à ses visiteurs une expérience de visite guidée en réalité augmentée, via des lunettes légères prêtées à l'entrée, en remplacement de l'audioguide traditionnel.",
      },
      {
        type: "h2",
        text: "Une information contextuelle superposée aux œuvres",
      },
      {
        type: "p",
        text: "Les lunettes affichent des informations contextuelles directement superposées aux œuvres exposées, sans nécessiter de sortir un smartphone ni de suivre un audioguide au format audio classique.",
      },
      {
        type: "p",
        text: "Le musée indique que la fréquentation de ce parcours enrichi a dépassé ses prévisions initiales, avec une majorité de visiteurs plus jeunes optant pour cette option plutôt que pour l'audioguide classique, toujours disponible en parallèle.",
      },
    ],
  },
  {
    slug: "interview-designer-environnements-vr-immersifs",
    domain: "xr-vr",
    format: "interview",
    title: "« Un bon environnement virtuel se dessine d'abord pour l'oreille »",
    excerpt:
      "Rencontre avec Théo Sandberg, designer d'environnements immersifs, qui explique pourquoi le son compte souvent plus que le visuel dans la sensation de présence en VR.",
    image: "/article3.png",
    author: "Bastien Corrigan",
    publishedAt: "2026-08-30",
    readTime: 8,
    body: [
      {
        type: "p",
        text: "Théo Sandberg conçoit des environnements immersifs pour des expériences de réalité virtuelle depuis plusieurs années. Il défend une idée qui surprend souvent : le son spatial compte parfois plus que le rendu visuel dans la sensation de présence ressentie par l'utilisateur.",
      },
      {
        type: "quote",
        text: "On peut tromper l'œil avec un environnement visuellement imparfait. On ne trompe presque jamais l'oreille sur une source sonore mal placée dans l'espace.",
        cite: "Théo Sandberg",
      },
      {
        type: "h2",
        text: "Le son spatial, souvent sous-investi",
      },
      {
        type: "p",
        text: "Selon lui, de nombreuses productions investissent massivement dans le rendu visuel tout en négligeant la spatialisation sonore, alors que cette dernière coûte souvent bien moins cher à soigner correctement.",
      },
      {
        type: "h2",
        text: "Un conseil pour les créateurs qui démarrent",
      },
      {
        type: "p",
        text: "Son conseil aux créateurs qui débutent : fermer les yeux dans leur propre environnement virtuel et se demander s'ils pourraient localiser chaque source sonore sans les voir. Si la réponse est non, le travail sonore n'est pas terminé.",
      },
    ],
  },
];

export const ARTICLES_BY_SLUG: Record<string, Article> = ARTICLES.reduce(
  (acc, article) => {
    acc[article.slug] = article;
    return acc;
  },
  {} as Record<string, Article>,
);
