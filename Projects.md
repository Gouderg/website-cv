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

Context (Cadre): Personnal
Date (): Mar 2020
Participants: 1
Technologies utilisés: Javascript

#### Description

JosephSlave est un bot discord qui

#### How does it work




#### How to use


## 5 - DynamicSimulation

Context (Cadre): Personnal
Date (): Jun 2021
Participants: 1
Technologies utilisés: C++

#### Description

#### How does it work

#### How to use


## 6 - Boids

Context (Cadre): Personnal
Date (): Jul 2020
Participants: 1
Technologies utilisés: C++

#### Description

#### How does it work

#### How to use


## 7 - LearnStation

Context (Cadre): Personnal
Date (): Sep 2020
Participants: 4
Technologies utilisés: Framework Symfony

#### Description
http://178.128.161.255:8000
#### How does it work

#### How to use


## 8 - Jeu de la vie

Context (Cadre): Personnal
Date (): Mars 2020
Participants: 1
Technologies utilisés: Python

#### Description

#### How does it work

#### How to use


## 9 - Oxymètre de pouls

Context (Cadre): School project - A3 ISEN
Date (): Apr 2021
Participants: 1
Technologies utilisés: C

#### Description

#### How does it work

#### How to use


## 10 - Simulation de fractal

Context (Cadre): Personnal
Date (): Jul 2020
Participants: 1
Technologies utilisés: C++

#### Description

#### How does it work

#### How to use

## 11 - Pong

Context (Cadre): Project school CIR 2
Date (): May 2020
Participants: 1
Technologies utilisés: C++

#### Description

#### How does it work

#### How to use

## 12 - Robot Maze Solver

Context (Cadre): Project school CIR 1
Date (): Jun 2019
Participants: 1
Technologies utilisés: C

#### Description

#### How does it work

#### How to use

## 13 - Pressurized octopus

Context (Cadre): Project school A3
Date (): Jan 2021
Participants: 1
Technologies utilisés: Framework React / Symfony
#### Description

#### How does it work

#### How to use
