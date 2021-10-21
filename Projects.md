# Projets


## 1 - JosephIA

Context (Cadre): Personnal
Date (): Apr 2020
Participants: 1
Technologies utilisés: Python

#### Description

JosephIA est une petite intelligence artificielle qui joue contre un utilisateur au puissance 4 et au tictactoe. Il peut aussi resoudre un sudoku.

JosephIA is a small artificial intelligence that plays with a user at power 4 and tictactoe. It can also solve a sudoku.


#### How does it work - Son fonctionnement

JosephIA est basée sur l'algorithme minimax optimisée avec un élagage alpha-bêta.
L'algorithme Minimax calcule la décision optimale à un état actuel et essaie de trouver le mouvement optimal pour un joueur, en supposant que votre adversaire joue également de manière optimale. Il utilise une méthode de type backtracking, en faisant un simple appel récursif qui développe toutes les feuilles de l'arbre, en poussant ces valeurs vers le haut niveau par niveau. Minimax explore l'arbre (DFS Depth First Search).
(photo)
1956, John McCarthy préside la conférence de Dartmouth, dans laquelle il présente l'élagage l'alpha-bêta , qui cherche à diminuer le nombre de nœuds évalués par l'algorithme minimax dans son arbre de recherche. Il arrête d'évaluer un coup lorsqu'il a trouvé au moins une possibilité qui prouve que le coup est pire qu'un coup examiné précédemment. Lorsqu'il est appliqué à un arbre minimax standard, il renvoie le même coup que minimax, mais élimine les branches qui ne peuvent pas influencer la décision finale.
(photo)

JosephIA is based on the minimax algorithm optimized with alpha-beta pruning.
Minimax algorithm calculate the minimax decision at a current state and try to find the optimal move for a player, assuming that your opponent also plays optimally. It use a backtracking-like method, doing a simple recursive call developping all leaf of the tree, pushing up these values level by level. Minimax explore (DFS Depth First Search) the tree

1956, John McCarthy is presiding Dartmouth's conference, in which he presents alpha-beta prunning, that seeks to decrease the number of nodes that are evaluated by the minimax algorithm in its search tree. It stops evaluating a move when at least one possibility has been found that proves the move to be worse than a previously examined move. When applied to a standard minimax tree, it returns the same move as minimax would, but prunes away branches that cannot possibly influence the final decision.


#### How to use - Comment l'utiliser 

Requirements:   
    - python3

Il faut se mettre dans le répertoire voulu et exécuter le script josephIA.py




## 2 - Advent of code

Context (Cadre): Personnal
Date (): Dec 2020 - Now
Participants: 1
Technologies utilisés: Python

#### Description

L'Avent of code est un calendrier de l'Avent composé de petites énigmes de programmation pour une variété de compétences et de niveaux de compétence qui peuvent être résolues dans n'importe quel langage de programmation.

Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like.

#### How does it work




#### How to use

Vous devez posséder sur votre machine:   
* python3

Il faut se mettre dans le répertoire voulu et exécuter le script voulu.



## 3 - app-Brocoli

Context (Cadre): Projet scolaire de CIR2 
Date (): May 2020
Participants: 2
Technologies utilisés: PHP - HTML - Bootstrap - MySQL

#### Description

Ce projet a été réalisé dans le cadre de notre année scolaire en CIR 2. Le but de ce projet était de créer un générateur de donnes CSV ou SQL.
Le but de ce projet était d'utiliser du php pour générer tout le site sans utiliser de javascript.

#### How does it work

Le site se décompose en 4 parties:
    * La page d'accueil qui demande le nombre de lignes à générer, le nom de la table et le nom du modèle. Ensuite, on choisit le nombre de types de champs qu'on veut.
    * La page de generation de donnee permet de remplir les champs precedements selectionnee. On peut choisir quel type de fichier on veut et on peut sauvegarder le modele pour une prochaine utilisation. D'abord, on genere les donnes avec le bouton generer, un apercu des donnes generer apparait dans la console en dessous. Ensuite, on peut telecharger le fichier ou non.
    * La page replay permet de regenerer un modele sauvegarder et de soit changer les types, soit changer les champs.
    * La page back permet d'activer ou de desactiver un type de champs.


#### How to use
Vous devez posséder sur votre machine:   
* PHP version 7 ou supérieur
* Un serveur Web (Apache)
* MySQL

    
Le site possède sa propre base de donnée que vous devez charger afin de le rendre fonctionnel. Après vous être rendu à la racine du site, allez dans votre terminal mysql et exécutez la commande suivante:

	SOURCE sql/bdd.sql;

Tout est inclus dans ce fichier, mais si vous voulez changer les logins de connexion, vous pouvez changer les constantes dans le fichier php/constante.php

A la racine du projet, exécutez la commande suivante :

	sudo chmod 777 fichier/downloadFic

Cela permet au site de créer des fichiers dans ce répertoire. Si le répertoire n'existe pas, il faut le créer avec la commande suivante :

	sudo mkdir fichier/downloadFic


## 4 - JosephSlave

Context (Cadre): Personnal Project
Date (): Mar 2020
Participants: 1
Technologies utilisés: Javascript

#### Description

JosephSlave est un bot discord qui execute differente commandes. Il a ete creer car jetais curieux de savoir comment un bot discord fonctionnait et si c'etait facile d'en faire un.

#### How does it work

    Le but de ce bot est de passer une commande dans un channel textuel pour qu'en suite, il l'execute.
    Le bot analyse chaque message et si le message commence avec un point d'exclamation suivie d'un mot qu'il connait alors il va traiter la ligne.
    Les commandes les 3 commandes les plus interessantes sont les suivantes:
        - !nasa -pic => Cette commande utilise une API mise a disposition par la NASA. Elle renvoit une image de l'espace avec une petite description.
        - !meteo Brest fr => Cette commade utilise l'api de OpenWeather. Elle donne des caracterisitiques meteorologiques la ville choisit.
        - !play url_youtube => Cette commande permet de jouer le son d'une video youtube. Le bot va se connecter dans un channel vocal et commencer a jouer le son de la video choisit.



#### How to use

    Pour pouvoir utiliser le bot, il faut installer les differents paquets:
        - npm, curl, nodejs, ffmpeg
    Avec npm, il faut installer les paquets suivants:
        - discord.js, node-opus, youtube-audio-stream, xmlhttprequest

    Ensuite, il faut creer un fichier config.json avec la structure suivante:
        {

        }
    Enfin, il faut lancer le bot avec la commande suivante:

```bash
    node index.js
```



## 5 - DynamicSimulation

Context (Cadre): Personnal
Date (): Jun 2021
Participants: 1
Technologies utilisés: C++

#### Description

DynamicSimulation est un projet personnel utilise pour mettre en application les cours de physique. Le but n'etait pas de faire de simples pendules mais de recreer la gravite.
Ici, nous avons un simple pendule qui oscille avec dans le temps, sans aucune friction. Apres nous avons 2 doubles pendules. Un double pendule est dit chaotique car il est tres sensible au conditions initiales. Pour mettre en exemple, les 2 pendules commencent la simulation avec 1 degree de difference, c'est presque imperceptible a l'oeil mais au bout de 30 secondes de simulation, ils commencent a se separer l'un de l'autre pour au final avoir une oscillation completement differente.

#### How does it work

* En physique, le pendule simple est une masse ponctuelle fixée à l'extrémité d'un fil sans masse et inextensible1, et oscillant sous l'effet de la pesanteur. Il s'agit du modèle de pendule pesant le plus simple. Il est parfois appelé pendule de gravité idéal et, par opposition, tout pendule de gravité réel est appelé pendule pesant composé1. Par extension, on appelle aussi parfois pendule simple un dispositif dans lequel le fil inextensible est remplacé par une tige rigide de masse nulle pouvant tourner sans frottement dans un plan vertical autour de son extrémité fixe (liaison parfaite).

* En mécanique, on désigne par pendule double un pendule à l'extrémité duquel on accroche un autre pendule. Son évolution est généralement chaotique. La théorie du chaos en elle même correspond à l'étude des comportements des systèmes dynamiques particulièrement sensibles aux conditions initiales qui leurs sont imposées.

L'equation dacceleration du double pendulum est un petit peu plus longue:




#### How to use

 Pour utiliser ces programmes, il faut la librairie graphique SFML.



## 6 - Boids

Context (Cadre): Personnal
Date (): Jul 2020
Participants: 1
Technologies utilisés: C++

#### Description

Boids est une simulation de nuee d'oiseau. En

#### How does it work

#### How to use

 Pour utiliser ce programme, il faut la librairie graphique SFML.


## 7 - LearnStation

Context (Cadre): Personnal
Date (): Sep 2020
Participants: 4
Technologies utilisés: Framework Symfony

#### Description
    
    Learnstation est un projet realise avec 4 amis. Le but de ce projet etait de realise un site qui referecait les bootcamps qui existe autour de la programmation. Le site est accessible a cette adresse:  http://178.128.161.255:8000

#### How does it work

    Le site se divise en 4 parties:
        - Les pages statiques qui presente les differents domaines lies aux bootcamps.
        - Un formulaire qui en fonction du lieu, du domaine et de la disponibilite de l'utilisateur, va lui proposer les bootcampes les plus proches et les plus adaptes a sa demande.
        - Un blog qui recense differents articles en fonction de categorie. L'admin du site a la possibilite de rajouter des articles avec une url speciale.


#### How to use

    Se connecter a l'url suivante: http://178.128.161.255:8000


## 8 - Jeu de la vie

Context (Cadre): Personnal
Date (): Mars 2020
Participants: 1
Technologies utilisés: Python

#### Description

    Le jeu de la vie est une simulation de cellules qui en fonction de 2 regles vont vivre ou mourir. Dans mon cas, ce petit projet m'a permis de mieux comprendre l'utilisation des tableaux et m'a apporte une meilleure reflexion de code.


#### How does it work

    Le jeu de la vie est se presente sous la forme d'une grille en 2 dimensions compose de case blanche (cellule morte) et noire (cellule vivante). Le programme suit les 2 regles suivantes:
        une cellule morte possédant exactement trois voisines vivantes devient vivante (elle naît).
        une cellule vivante possédant deux ou trois voisines vivantes le reste, sinon elle meurt.

    L'application de ces 2 regles va donner une infinite de combinaisons comme par exemple:
        - Des oscillateurs: ce sont des formes qui au bout de x generations reprenent leur fornes d'origines.
        - Des vaisseaux: ce sont des formes qui traversent la grille.
        - Des canons: ce sont des formes qui cree des projectiles a l'infini 
    Il y aussi des formes stables, c'est a dire des formes qui ne bougent au cours du temps.

    Mon programme integre une formation donuts, c'est a dire que si une cellule disparait sur la droite de l'ecran, elle reapparait sur la gauche de lecran et si une cellule disparait sur le haut de l'ecran, elle reapparait sur le bas de l'ecran.


#### How to use

    Pour utiliser ce programme, il faut avoir:
        - Python3
        - Tkinter


## 9 - Oxymètre de pouls

Context (Cadre): School project - A3 ISEN
Date (): Apr 2021
Participants: 1
Technologies utilisés: C

#### Description

    Dans le cadre de notre troisieme annee l'ISEN, nous avons du realiser un oxymetre de pouls. Le but de ce projet est de recuperer une trame de 21 bits envoyes par liaison USB et ensuite calculer le rythme cardiaque ainsi que le tqux d'oxygene dans le sang.

#### How does it work

    Dans un premier temps, il faut recuperer une trame de 21 bits valide et tant que nous n'avons pas une trame valide, on continue de recuperer la trame.
    Apres avoir recuperer la trame, nous avons 4 valeurs:
        * AC R : variation crête à crête de la lumière rouge mesurée (onde de pouls)
        * DC R : valeur moyenne de la lumière rouge mesurée (tissus)
        * AC IR : variation crête à crête de la lumière infrarouge mesurée (onde de pouls)
        * DC IR : valeur moyenne de la lumière infrarouge mesurée (tissus)


    Ensuite, on applique un filtre a reponse fini (FIR) qui va venir filtrer les composantes hautes frequences des signaux et garder les frequences autour d'1kHz.
    Après filtrage FIR, les composantes AC résultantes sont ensuite traitées au moyen
d’un filtre à réponse infinie (IIR). Ce filtre sert à supprimer la composante
continue résultante.

Enfin, on calcule le SP02 et la rythme cardiaque.

#### How to use


    POur utiliser le port USB il faut la librairie ft2xx.h mais elle ne fonctionne que sous Windows.
    Pour tester juste avec un fichier d'entree, il faut utiliser record_bin.dat



## 10 - Simulation de fractal

Context (Cadre): Personnal
Date (): Jul 2020
Participants: 1
Technologies utilisés: C++

#### Description

    Cette simulation de fractal est un petit projet pour mettre en application un passage du livre 'The nature of code' de Daniel Shiffman, ou il explique la Koch Curve.

#### How does it work

    Ce petit programme vous propose de regarder la generation d'une koch Curve qui avec le temps cosomme beaucoup de ressource.
    On peut aussi observe le fractal de MandelBrot ou bien le Fractal de Julia avec un parametre specifique.

#### How to use

    Pour utiliser ce programme, il faut la librairie graphique SFML.
    

## 11 - Pong

Context (Cadre): Project school CIR 2
Date (): May 2020
Participants: 1
Technologies utilisés: C++

#### Description

    Dans le cadre de notre deuxieme annee a lisen, et notamment du cours de C++, nous avons code le jeu de Pong.

#### How does it work

    Utilisation: Le jeu se termine quand l'un des joueurs atteint 5 points.
    
    Palette gauche: 
        - 'z' permet de lever la palette gauche
        - 'x' permet de descendre la palette gauche
    
    Palette droite:
        - 'i' permet de lever la palette droite 
        - 'n' permet de descendre la palette droite

    Autres commandes:
        -'ECHAP' permet de quitter le jeu 
        - 'SPACE' permet de mettre le jeu en pause

#### How to use

    Pour utiliser ce programme, il faut:
        - Qt5
    
    Tout d'abord, il faut compiler avec la commande:
    ```bash
        qmake
    ```

    Et ensuite il faut compiler le code avec la commande:
    ```bash
        make
    ```

    Enfin, on execute le code avec la commande:
    ```bash
        ./pong
    ```

## 12 - Robot Maze Solver

Context (Cadre): Project school CIR 1
Date (): Jun 2019
Participants: 1
Technologies utilisés: C

#### Description

    Dans le cadre de notre premiere annee a lisen, et notamment du cours de C, nous avons code un petit robot qui doit trouve la sortie dans un espace ferme en 1 minimun de coups.
    

#### How does it work

    La premiere difficulte du projet a ete de genere la carte ainsi que le robot avant d'implementer l'algorithme du robot. Ensuite j'ai commemce a reflechir a comment le robot va sortir du labyrinthe.
    Si la sortie est sur un mur, on peut utiliser la technique de la main droite qui consiste a longer le mur en le gardant a sa droite.
    Mais pour trouver une sortie qui se situe au milieu d'une salle, il faut pouvoir parcourir la salle et le meilleure moyen est d'utiliser un algoritme de backtracking.
    Malheureusement, le concept de recursion etait peut-etre un peu trop pousse pour moi a ce moment la et bien que j'y ai passe la moitie de mon projet, je n'ai pas pu l'implementer proprement.

    Ensuite, nous devions utiliser la SDL pour rendre plus jolie le programme.


#### How to use

Pour utiliser ce programme, il faut:
    - SDL1.2, SDL1.2-mixer, SDL1.2-image 
    - C
    pour ubuntu ce sont ces paquets: libsdl1.2debian libsdl1.2-dev, libsdl-mixer1.2, libsdl-mixer1.2-dev, libsdl-image1.2, libsdl-image1.2-dev

Et ensuite il faut compiler le code avec la commande:
    ```bash
        make
    ```

    Enfin, on execute le code avec la commande:
    ```bash
        ./Robot.exe
    ```


## 13 - Pressurized octopus

Context (Cadre): Project school A3
Date (): Jan 2021
Participants: 1
Technologies utilisés: Framework React / Symfony
#### Description

    Dans le cadre de notre troisiemme annee a l' ISEN et notamment dans le cours de Franework, nous devions faire un site web de plongee. Le but de ce site etait de calculer les paliers de decompression d'un plongeur en fonction de different parametres.

#### How does it work

    Le site s'est decompose en plusieurs etapes:
        - maquettage du site
        - Creation de la base de donnee
        - Creation de l'API avec Symfony
        - Creation de la partie administrateur qui peut gerer les bases de donnes avec Symfony
        - Creation de l'interface utilisateur avec React

        L'interface utilisteur a 2 pages:
            - La premieres permet en fonction de certaines donnes de calculer des paliers de decompression ainsi que d'autre donnes relatives a la plongee
            - la deuxieme permet de 


#### How to use
