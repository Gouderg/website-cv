# Projets


## 1 - JosephIA

Context (Cadre): Personnal
Date (): Apr 2020
Participants: 1
Technologies utilisés: Python

#### Description

JosephIA est une petite intelligence artificielle qui joue contre un utilisateur au puissance 4 et au tictactoe. Il peut aussi résoudre un sudoku.

JosephIA is a small artificial intelligence that plays with a user at power 4 and tictactoe. It can also solve a sudoku.


#### How does it work - Son fonctionnement

JosephIA est basée sur l'algorithme minimax optimisée avec un élagage alpha-bêta.
L'algorithme Minimax calcule la décision optimale à un état actuel et essaie de trouver le mouvement optimal pour un joueur, en supposant que votre adversaire joue également de manière optimale. Il utilise une méthode de type backtracking, en faisant un simple appel récursif qui développe toutes les feuilles de l'arbre, en poussant ces valeurs vers le haut niveau par niveau. Minimax explore l'arbre (DFS Depth First Search).
(photo)
En 1956, John McCarthy préside la conférence de Dartmouth, dans laquelle il présente l'élagage l'alpha-bêta , qui cherche à diminuer le nombre de nœuds évalués par l'algorithme minimax dans son arbre de recherche. Il arrête d'évaluer un coup lorsqu'il a trouvé au moins une possibilité qui prouve que le coup est pire qu'un coup examiné précédemment. Lorsqu'il est appliqué à un arbre minimax standard, il renvoie le même coup que minimax, mais élimine les branches qui ne peuvent pas influencer la décision finale.
(photo)

JosephIA is based on the minimax algorithm optimized with alpha-beta pruning.
Minimax algorithm calculate the minimax decision at a current state and try to find the optimal move for a player, assuming that your opponent also plays optimally. It use a backtracking-like method, doing a simple recursive call developping all leaf of the tree, pushing up these values level by level. Minimax explore (DFS Depth First Search) the tree

In 1956, John McCarthy is presiding Dartmouth's conference, in which he presents alpha-beta prunning, that seeks to decrease the number of nodes that are evaluated by the minimax algorithm in its search tree. It stops evaluating a move when at least one possibility has been found that proves the move to be worse than a previously examined move. When applied to a standard minimax tree, it returns the same move as minimax would, but prunes away branches that cannot possibly influence the final decision.


#### How to use - Comment l'utiliser 

Requirements:   
    - python3

Il faut se mettre dans le répertoire voulu et exécuter le script josephIA.py

You need to go to the appropriate directory and run the script josephIA.py


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


You must have on your machine:   

Vous devez posséder sur votre machine:   
* python3

Il faut se mettre dans le répertoire voulu et exécuter le script voulu.
You must go to the desired directory and execute the desired script.



## 3 - app-Brocoli

Context (Cadre): Projet scolaire de CIR2 
Date (): May 2020
Participants: 2
Technologies utilisés: PHP - HTML - Bootstrap - MySQL

#### Description

Ce projet a été réalisé dans le cadre de notre année scolaire en CIR 2. Le but de ce projet était de créer un générateur de donnes CSV ou SQL en utilisant du php pour générer tout le site sans utiliser de JavaScript.

This project was carried out as part of our school year in CIR 2. The aim of this project was to create a CSV or SQL data generator using php to generate the whole site without using JavaScript.

#### How does it work

Le site se décompose en 4 parties:
* La page d'accueil demande le nombre de lignes à générer, le nom de la table et le nom du modèle. Ensuite, on choisit le nombre de types de champs qu'on veut.
* La page de génération de données permet de remplir les champs précédemment sélectionnés. On peut choisir quel type de fichier on veut et on peut sauvegarder le modèle pour une prochaine utilisation D'abord, on génère les données avec le bouton générer, un aperçu des données générer apparaît dans la console en dessous. Ensuite, on peut télécharger le fichier ou non.
* La page replay permet de régénérer un modèle sauvegarder et de soit changer les types, soit changer les champs.
* La page back permet d'activer ou de désactiver un type de champs.


The site is divided into 4 parts:
* The home page asks for the number of rows to be generated, the name of the table and the name of the model. Then, you choose the number of field types you want.
* The data generation page allows you to fill in the previously selected fields. You can choose which type of file you want and you can save the model for future use. First, you generate the data with the generate button, a preview of the generated data appears in the console below. Then you can download the file or not.
* The replay page allows you to regenerate a saved model and either change the types or change the fields.
* The back page allows you to activate or deactivate a field type.


#### How to use
Vous devez posséder sur votre machine:
* PHP version 7 ou supérieur
* Un serveur Web (Apache)
* MySQL


Le site possède sa propre base de données que vous devez charger afin de le rendre fonctionnel. Après vous être rendu à la racine du site, allez dans votre terminal mysql et exécutez la commande suivante:

SOURCE sql/bdd.sql;

Tout est inclus dans ce fichier, mais si vous voulez changer les logins de connexion, vous pouvez changer les constantes dans le fichier php/constante.php

À la racine du projet, exécutez la commande suivante :

sudo chmod 777 fichier/downloadFic

Cela permet au site de créer des fichiers dans ce répertoire. Si le répertoire n'existe pas, il faut le créer avec la commande suivante :

sudo mkdir fichier/downloadFic

You must have on your machine:
* PHP version 7 or higher
* A web server (Apache)
* MySQL


The site has its own database that you need to load in order to make it functional. After going to the root of the site, go to your mysql terminal and run the following command:

SOURCE sql/bdd.sql;

Everything is included in this file, but if you want to change the login, you can change the constants in the php/constant.php file.

At the root of the project, run the following command:

sudo chmod 777 file/downloadFic

This allows the site to create files in this directory. If the directory does not exist, you must create it with the following command:

sudo mkdir file/downloadFic



## 4 - JosephSlave

Context (Cadre): Personnal Project
Date (): Mar 2020
Participants: 1
Technologies utilisés: Javascript

#### Description

JosephSlave est un bot discord qui exécutent différentes commandes. Il a été créé, car j'étais curieux de savoir comment un bot discord fonctionnait et si c'était facile d'en faire un.

JosephSlave is a discord bot that executes different commands. It was created because I was curious about how a discord bot worked and if it was easy to make one.


#### How does it work

    Le fonctionnement du bot est d'exécuter la commande écrite dans un channel textuel.
    Le bot analyse chaque message et si le message commence avec un point d'exclamation suivie d'un mot qu'il connaît alors il va traiter la ligne.
    Les commandes les 3 commandes les plus intéressantes sont les suivantes:
        - !nasa -pic => Cette commande utilise une API mise à disposition par la NASA. Elle renvoie une image de l'espace avec une petite description.
        - !meteo Brest fr => Cette commande utilise l'api d'OpenWeather. Elle donne des caractéristiques météorologiques la ville choisie.
        - !play url_youtube => Cette commande permet de jouer le son d'une vidéo YouTube. Le bot va se connecter dans un channel vocal et commencer a jouer le son de la vidéo choisit.


The bot works by executing the command written in a text channel.
The bot analyses each message and if the message starts with an exclamation mark followed by a word it knows then it will process the line.
The 3 most interesting commands are the following:
- !nasa -pic => This command uses an API provided by NASA. It returns an image of space with a small description.
- !meteo Brest fr => This command uses the OpenWeather API. It gives weather characteristics of the selected city.
- !play url_youtube => This command allows to play the sound of a YouTube video. The bot will connect to a voice channel and start playing the sound of the chosen video.





#### How to use

    Pour pouvoir utiliser le bot, il faut installer les différents paquets:
        - npm, curl, nodejs, ffmpeg
    Avec npm, il faut installer les paquets suivants:
        - discord.js, node-opus, youtube-audio-stream, xmlhttprequest

    Ensuite, il faut créer un fichier config.json avec la structure suivante:
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

DynamicSimulation est un projet personnel utilise pour mettre en application les cours de physique. Le but n'était pas de faire de simples pendules, mais de recréer la gravité.
Ici, nous avons un simple pendule qui oscille avec dans le temps, sans aucune friction. Après nous avons 2 doubles pendules. Un double pendule est dit chaotique, car il est très sensible aux conditions initiales. Pour mettre en exemple, les 2 pendules commencent la simulation avec 1 dégrée de différence, c'est presque imperceptible a l'œil, mais au bout de 30 secondes de simulation, ils commencent à se séparer l'un de l'autre pour au final avoir une oscillation complètement différente.

DynamicSimulation is a personal project used to apply physics lessons. The goal was not to make simple pendulums, but to recreate gravity.
Here we have a simple pendulum that swings with time, without any friction. Then we have two double pendulums. A double pendulum is defined as chaotic, because it is very sensitive to initial conditions. To give an example, the two pendulums start the simulation with 1 degree of difference, it's almost imperceptible to the eye, but after 30 seconds of simulation, they start to separate from each other to finally have a completely different oscillation.


#### How does it work

* En physique, le pendule simple est une masse ponctuelle fixée à l'extrémité d'un fil sans masse et inextensible, et oscillant sous l'effet de la pesanteur. Il s'agit du modèle de pendule pesant le plus simple. Il est parfois appelé pendule de gravité idéal et, par opposition, tout pendule de gravité réel est appelé pendule pesant composé. Par extension, on appelle aussi parfois pendule simple un dispositif dans lequel le fil inextensible est remplacé par une tige rigide de masse nulle pouvant tourner sans frottement dans un plan vertical autour de son extrémité fixe (liaison parfaite).

* En mécanique, on désigne par pendule double un pendule à l'extrémité duquel on accroche un autre pendule. Son évolution est généralement chaotique. La théorie du chaos en elle-même correspond à l'étude des comportements des systèmes dynamiques, particulièrement sensibles aux conditions initiales qui leur sont imposées.

L'équation d'accélération du double pendule est un petit peu plus longue:


* In physics, the simple pendulum is a point mass attached to the end of a massless, inextensible wire and swinging under the influence of gravity. It is the simplest model of a weighing pendulum. It is sometimes called an ideal gravity pendulum and, in contrast, any real gravity pendulum is called a compound gravity pendulum. By extension, a device in which the inextensible wire is replaced by a rigid rod of zero mass that can rotate without friction in a vertical plane around its fixed end (perfect linkage) is also sometimes called a simple pendulum.

* In mechanics, a double pendulum is a pendulum to which another pendulum is attached. Its evolution is generally chaotic. The theory of chaos in itself corresponds to the study of the behaviour of dynamic systems, which are particularly sensitive to the initial conditions imposed on them.

The acceleration equation of the double pendulum is a little longer:



#### How to use

Pour utiliser ces programmes, il faut la librairie graphique SFML.
To use these programs, you need the SFML graphics library.



## 6 - Boids

Context (Cadre): Personnal
Date (): Jul 2020
Participants: 1
Technologies utilisés: C++

#### Description

In 1986, Craig Reynolds made a computer model of coordinated animal motion such as bird flocks and fish schools.

En 1986, Craig Reynolds a réalisé un modèle informatique du mouvement coordonné d'animaux tels que les volées d'oiseaux et les bancs de poissons.

#### How does it work

La simulation simple d'une nuée se base sur 3 règles qui vont changer le comportement d'un individu en fonction de sa vitesse, de sa position et de ses compagnons proches.

* séparation: se diriger pour éviter ses compagnons proches et ne pas rentrer en collision.
* alignement : se diriger vers la même direction moyenne des compagnons proches
* cohésion: se dirige pour se mouvoir autour de la position moyenne des autres compagnons proches.


The basic flocking model consists of three simple steering behaviors which describe how an individual boid maneuvers based on the positions and velocities its nearby flockmates.

    separation: steer to avoid crowding local flockmates
    alignment: steer towards the average heading of local flockmates
    cohesion: steer to move towards the average position (center of mass) of local flockmates



#### How to use

Pour utiliser ce programme, il faut la librairie graphique SFML.
To use these programs, you need the SFML graphics library.



## 7 - LearnStation

Context (Cadre): Personnal
Date (): Sep 2020
Participants: 4
Technologies utilisés: Framework Symfony

#### Description
    
    Learnstation est un projet réalisé avec 4 amis. Le but de ce projet était de réaliser un site qui référence les bootcamps axé sur la programmation. 
    Le site est accessible à cette adresse:  http://178.128.161.255:8000

    Learnstation is a project realized with 4 friends. The goal of this project was to create a website that references bootcamps focused on programming. 
    The site can be found at this address: http://178.128.161.255:8000

#### How does it work

        Le site se divise en 3 parties:
            - Les pages statiques qui présentent les différents domaines lies aux bootcamps.
            - Un formulaire qui en fonction du lieu, du domaine et de la disponibilité de l'utilisateur, va lui proposer les bootcamps les plus proches et les plus adaptes à sa demande.
            - Un blog qui recense différents articles en fonction de catégorie. L'admin du site a la possibilité de rajouter des articles avec une url spéciale.

        The site is divided into 3 parts:
- Static pages that present the different areas related to bootcamps.
- A form which, according to the place, the domain and the availability of the user, will propose him the nearest and most adapted bootcamps to his request.
- A blog that lists different articles according to category. The site administrator has the possibility to add articles with a special url.

#### How to use

    URL du site web: http://178.128.161.255:8000
    Website URL: http://178.128.161.255:8000


## 8 - Jeu de la vie

Context (Cadre): Personnal
Date (): Mars 2020
Participants: 1
Technologies utilisés: Python

#### Description

    Le jeu de la vie est une simulation de cellules qui en fonction de 2 règles vont vivre ou mourir. Dans mon cas, ce petit projet m'a permis de mieux comprendre l'utilisation des tableaux et m'a apporté une meilleure réflexion de code.

    The game of life is a simulation of cells that, according to 2 rules, will live or die. In my case, this small project allowed me to better understand the use of arrays and gave me a better code reflection.


#### How does it work

    Le jeu de la vie se présente sous la forme d'une grille en 2 dimensions compose de case blanche (cellule morte) et noire (cellule vivante). Le programme suit les 2 règles suivantes:
Une cellule morte possédant exactement trois voisines vivante devient vivante (elle naît).
Une cellule vivante possédant deux ou trois voisines vivantes le reste, sinon elle meurt.

L'application de ces 2 règles va donner une infinité de combinaisons comme par exemple :
- Des oscillateurs: ce sont des formes qui au bout de x générations reprennent leurs formes d'origines.
- Des vaisseaux: Ce sont des formes qui traversent la grille.
- Des canons: ce sont des formes qui créent des projectiles à l'infini.
Il y aussi des formes stables, c'est-à-dire des formes qui ne bougent au cours du temps.

Mon programme intègre une formation donuts, c'est-à-dire que si une cellule disparaît sur la droite de l'écran, elle réapparaît sur la gauche de l'écran et si une cellule disparaît sur le haut de l'écran, elle réapparaît sur le bas de l'écran.

The Game of Life is a two-dimensional grid of white (dead cells) and black (living cells) cells. The program is based on the following rules:
A dead cell with exactly three living neighbours becomes alive (it is born).
A living cell with two or three living neighbours stays alive, otherwise it dies.

The application of these two rules will give an infinite number of combinations such as
- Oscillators: these are forms that after x generations return to their original form.
- Vessels: these are shapes that cross the grid.
- Cannons: these are shapes that create infinite projectiles.
There are also stable shapes, i.e. shapes that do not move over time.

My programme has a donut formation, which means that if a cell disappears on the right of the screen, it reappears on the left of the screen and if a cell disappears on the top of the screen, it reappears on the bottom of the screen.


#### How to use

    To use this program, you must have:

    Pour utiliser ce programme, il faut avoir:
        - Python3
        - Tkinter


## 9 - Oxymètre de pouls

Context (Cadre): School project - A3 ISEN
Date (): Apr 2021
Participants: 1
Technologies utilisés: C

#### Description

    Dans le cadre de notre troisième année l'ISEN, nous avons dû réaliser un oxymètre de pouls. Le but de ce projet est de récupérer une trame de 21 bits envoyés par liaison USB et ensuite calculer le rythme cardiaque ainsi que le taux d'oxygène dans le sang.

    As part of our third year at ISEN, we had to create a pulse oximeter. The aim of this project is to recover a 21-bit frame sent by USB link and then calculate the heart rate and the oxygen level in the blood.

#### How does it work

    Dans un premier temps, il faut récupérer une trame de 21 bits valide et tant que nous n'avons pas une trame valide, on continue de récupérer la trame.
Après avoir récupéré la trame, nous avons 4 valeurs:
* AC R : la variation crête à crête de la lumière rouge mesurée. (onde de pouls)
* DC R : la valeur moyenne de la lumière rouge mesurée (tissus)
* AC IR : la variation crête à crête de la lumière infrarouge mesurée. (onde de pouls)
* DC IR : la valeur moyenne de la lumière infrarouge mesurée (tissus)


Ensuite, on applique un filtre a réponse finie (FIR) qui va venir filtrer les composantes hautes fréquences des signaux et garder les fréquences autour d'1 kHz.
Après filtrage FIR, les composantes AC résultantes sont ensuite traitées au moyen d’un filtre à réponse infinie (IIR). Ce filtre sert à supprimer la composante continue résultante.

Enfin, on calcule le SP02 et le rythme cardiaque.

First, we need to retrieve a valid 21-bit frame and until we have a valid frame, we continue to collect the frame.
After fetching the frame, we have 4 values:
* AC R: the peak to peak variation of the measured red light. (pulse wave)
* DC R: the average value of the measured red light (tissue)
* AC IR: the peak-to-peak variation of the measured infrared light. (pulse wave)
* DC IR: the average value of the measured infrared light (tissue)


Next, a finite response filter (FIR) is applied to filter out the high frequency components of the signals and keep the frequencies around 1 kHz.
After FIR filtering, the resulting AC components are then processed by means of an infinite response filter (IIR). This filter is used to remove the resulting DC component. DC component.

Finally, the SP02 and the heart rate are calculated.

#### How to use


    Pour utiliser le port USB, il faut la librairie ft2xx.h, mais elle ne fonctionne que sous Windows.
    Pour tester juste avec un fichier d'entrée, il faut utiliser record_bin.dat.

    To use the USB port, you need the ft2xx.h library, but it only works under Windows.
    To test just with an input file, you need to use record_bin.dat.



## 10 - Simulation de fractal

Context (Cadre): Personnal
Date (): Jul 2020
Participants: 1
Technologies utilisés: C++

#### Description

    Cette simulation de fractal est un petit projet pour mettre en application un passage du livre 'The nature of code' de Daniel Shiffman où il explique la Koch Curve.

    This fractal simulation is a small project to apply a passage from Daniel Shiffman's book 'The nature of code' where he explains the Koch Curve.

#### How does it work

    Ce petit programme vous propose de regarder la génération d'une Koch Curve qui avec le temps consomme beaucoup de ressource.
    On peut aussi observer le fractal de Mandelbrot ou bien le Fractal de Julia avec un paramètre spécifique.

    This small program proposes you to watch the generation of a Koch Curve, which with time, consumes a lot of resources.
    You can also observe the Mandelbrot fractal or the Julia fractal with a specific parameter.

#### How to use

    Pour utiliser ce programme, il faut la librairie graphique SFML.
    To use these programs, you need the SFML graphics library.

    

## 11 - Pong

Context (Cadre): Project school CIR 2
Date (): May 2020
Participants: 1
Technologies utilisés: C++

#### Description

    Dans le cadre de notre deuxième année a l'ISEN, et notamment du cours de C++, nous avons codé le jeu de Pong.

    During our second year at ISEN, and in particular during the C++ course, we coded the game of Pong.

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

    Use: The game ends when one of the players reaches 5 points.

    Left paddle:
        - z' raises the left paddle
        - x' moves the left paddle down

    Right paddle:
        - 'i' raises the right paddle
        - n' moves the right paddle down

    Other commands:
        -ECHAP' to exit the game
        - SPACE' pauses the game

#### How to use

    Pour utiliser ce programme, il faut:
- Qt5

Tout d'abord, il faut compiler avec la commande:
```bash
qmake
```

Et ensuite, il faut compiler le code avec la commande:
```bash
make
```

Enfin, on exécute le code avec la commande:
```bash
./pong
```

 To use this program, you need:
- Qt5

First, you need to compile with the command:
```bash
qmake
```

And then, you must compile the code with the command:
```bash
make
```

Finally, we run the code with the command:
```bash
./pong
```

## 12 - Robot Maze Solver

Context (Cadre): Project school CIR 1
Date (): Jun 2019
Participants: 1
Technologies utilisés: C

#### Description

    Dans le cadre de notre première année à l'ISEN, et notamment du cours de C, nous avons codé un petit robot qui doit trouver la sortie dans un espace fermé en un minimum de coups.

    As part of our first year at ISEN, and in particular the C course, we coded a small robot that must find the exit in a closed space in a minimum of moves.
    

#### How does it work

    La première difficulté du projet a été de générer la carte ainsi que le robot avant d'implémenter l'algorithme du robot. Ensuite, j'ai commencé à réfléchir a comment le robot va sortir du labyrinthe.
    Si la sortie est sur un mur, on peut utiliser la technique de la main droite qui consiste a longer le mur en le gardant à sa droite.
    Mais pour trouver une sortie qui se situe au milieu d'une salle, il faut pouvoir parcourir la salle et le meilleur moyen est d'utiliser un algorithme de backtracking.
    Malheureusement, le concept de récursion était peut-être un peu trop poussé pour moi à ce moment-là et bien que j'y ai passé la moitie de mon projet, je n'ai pas pu l'implémenter proprement.

    Ensuite, nous devions utiliser la SDL pour rendre plus joli le programme.

    The first difficulty of the project was to generate the map and the robot before implementing the robot algorithm. Then I started to think about how the robot will exit the maze.
    If the exit is on a wall, we can use the right hand technique which consists in going along the wall and keeping it to the right.
    But to find an exit that is in the middle of a room, you have to be able to walk through the room and the best way is to use a backtracking algorithm.
    Unfortunately, the concept of recursion was perhaps a little too far-reaching for me at the time and although I spent half my project on it, I couldn't implement it properly.

    Then we had to use SDL to make the program look prettier.


#### How to use

Pour utiliser ce programme, il faut:
    - SDL1.2, SDL1.2-mixer, SDL1.2-image 
    - C
    Pour ubuntu ce sont ces paquets: libsdl1.2debian libsdl1.2-dev, libsdl-mixer1.2, libsdl-mixer1.2-dev, libsdl-image1.2, libsdl-image1.2-dev

Et ensuite il faut compiler le code avec la commande:
    ```bash
        make
    ```

    Enfin, on execute le code avec la commande:
    ```bash
        ./Robot.exe
    ```

To use this program, you need:
- SDL1.2, SDL1.2-mixer, SDL1.2-image
- C
For ubuntu, these packages are: libsdl1.2debian libsdl1.2-dev, libsdl-mixer1.2, libsdl-mixer1.2-dev, libsdl-image1.2, libsdl-image1.2-dev

And then compile the code with the command:
```bash
make
```

Finally, we run the code with the command:
```bash
./Robot.exe
```


## 13 - Pressurized octopus

Context (Cadre): Project school A3
Date (): Jan 2021
Participants: 1
Technologies utilisés: Framework React / Symfony
#### Description

    Dans le cadre de notre troisième année à l'ISEN et notamment dans le cours de Framework, nous devions faire un site web de plongée. Le but de ce site était de calculer les paliers de décompression d'un plongeur en fonction de différents paramètres.

    During our third year at ISEN and especially in the Framework course, we had to make a diving website. The goal of this site was to calculate the decompression stops of a diver according to various parameters.

#### How does it work

    Le site s'est décomposé en plusieurs étapes:
        - maquettage du site
        - Création de la base de données
        - Création de l'API avec Symfony
        - Création de la partie administrateur qui peut gérer les bases de donnes avec Symfony
        - Création de l'interface utilisateur avec React

    L'interface utilisateur a 2 pages :
        - La première permet en fonction de certaines données de calculer des paliers de décompression ainsi que d'autre données relatives a la plongée
        - la deuxième permet de regarder les paliers de la table de décompression de MN90 ou Bullman.


    Le site web se compose aussi avec une interface admin. Cependant, il faut se connecter sur une URL differente car la partie admin est sur le serveur symfony.
    Il y a une page de login nécessitant un user et un password. Le cote admin permet d'ajouter / modifier /supprimer dans la base de données.


    The site was developed in several stages:
- layout of the site
- Creation of the database
- Creation of the API with Symfony
- Creation of the administrator part that can manage the databases with Symfony
- Creation of the user interface with React

The user interface has 2 pages:
- The first one allows to calculate decompression stops and other data related to diving according to some data
- the second one allows to look at the decompression stops of the MN90 or Bullman table.


The website also has an admin interface. However, you have to connect on a different URL because the admin part is on the symfony server.
There is a login page requiring a user and a password. The admin side allows to add / modify / delete in the database.


#### How to use

#### Mise en place du front 
Il faut se placer dans le répertoire front/ et faire un ``` npm i ```.

Ensuite, on peut changer l'url de l'API dans le fichier src/Components/global.js.


#### Installer la base de données:

Il faut tout d'abord ouvrir la console de mysql et faire un ``` source config/generate_database/bdd.sql```.

Ensuite, il faut se rendre à la racine du projet et faire un ``` bin:console doctrine:migrations:migrate ```.

Enfin, il faut retourner dans la console mysql et taper la commande ``` source config/generate_database/insertData.sql ```.

#### Login

Les logins pour accéder au crud sont: username => admin et password => supermotdepasse

#### URL

##### CRUD

| Nom | Path |
|---|----|
| Login | / |
| Homepage | /hompage |
| TablePlonge - Show | /table/show |
| TablePlonge - Create | /table/create |
| TablePlonge - Delete | /table/delete/{id} |
| TablePlonge - Edit | /table/edit{id} |
| Profondeur - Show | /profondeur/show |
| Profondeur - Create | /profondeur/create |
| Profondeur - Delete | /profondeur/delete/{id} |
| Profondeur - Edit | /profondeur/edit{id} |
| Temps - Show | /temps/show |
| Temps - Create | /temps/create |
| Temps - Delete | /temps/delete/{id} |
| Temps - Edit | /temps/edit{id} |


##### API

Utilisation avec une méthode **GET**

| Nom | Path |
|---|----|
| Récupère une table de plongée | /api/tables/{id} |
| Calcule et renvoie des données de plongée | /api/calc |

##### FRONT

| Nom | Path |
|---|----|
| Homepage | / |
| Formulaire | /calculform |
| Affichage des tables de plongée| /table |


#### Setting up the front end 
You need to go to the front/ directory and do an npm i.

Then, we can change the url of the API in the src/Components/global.js file.


#### Install the database:

First of all you need to open the mysql console and do a ```source config/generate_database/bdd.sql``.

Then go to the root of the project and do a bin:console doctrine:migrations:migrate.

Finally, go back to the mysql console and type the command ``source config/generate_database/insertData.sql``.

#### Login

The logins to access the crud are: username => admin and password => supermotdepasse

##### CRUD

| Nom | Path |
|---|----|
| Login | / |
| Homepage | /hompage |
| Dive table - Show | /table/show |
| Dive table - Create | /table/create |
| Dive table - Delete | /table/delete/{id} |
| Dive table - Edit | /table/edit{id} |
| Depth - Show | /profondeur/show |
| Depth - Create | /profondeur/create |
| Depth - Delete | /profondeur/delete/{id} |
| Depth - Edit | /profondeur/edit{id} |
| Time - Show | /temps/show |
| Time - Create | /temps/create |
| Time - Delete | /temps/delete/{id} |
| Time - Edit | /temps/edit{id} |


##### API

Use with a **GET**

| Nom | Path |
|---|----|
| Retrieves a dive table| /api/tables/{id} |
| Calculates and returns dive data | /api/calc |

##### FRONT

| Nom | Path |
|---|----|
| Homepage | / |
| Form | /calculform |
| Dive tables display| /table |
