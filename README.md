# halil-can-mathis-conception-validation
 
L’objectif de ce TP est de construire une application pas à pas, en la testant au fur et à mesure. 

On cherche avant tout à pratiquer, en commençant par des choses simples, et en introduisant les notions les plus compliquées juste quand on en aura besoin. 

Ce TP s’effectue en binôme obligatoirement ! Pourquoi ? Parce que dans la vraie vie, on est très souvent amené à collaborer à plusieurs derrière le clavier. Mieux vaut s’y préparer !


Faire un nouvel endpoint qui permet cette fois-ci d’ajouter un utilisateur dans notre tableau en mémoire :
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"JohnDoe\", \"email\": \"john@example.com\"}" http://localhost:3000/users

Vérifier manuellement que votre endpoint fonctionne, en insérant un utilisateur puis, successivement, en faisant un GET pour vérifier que tout fonctionne :
Voici la commande corrigée pour ajouter l'utilisateur "Alice":
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"Alice\", \"email\": \"alice@example.com\"}" http://localhost:3000/users

Et voici la commande pour ajouter l'utilisateur "JohnDoe":
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"JohnDoe\", \"email\": \"john@example.com\"}" http://localhost:3000/users

curl http://localhost:3000/users

![SCREENSHOT http://localhost:3000/users](image.png)

Essayez d’insérer le chiffre 5 dans votre tableau. Que se passe-t-il ? Est-ce un problème ?
Le problème qu'on peut rencontrer en essayant d'insérer le chiffre 5 dans le tableau est lié au fait qu'on stocke des objets d'utilisateur dans le tableau, mais le chiffre 5 est un nombre.

Trouver un user grâce à son id : 
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"newuser\", \"email\": \"newuser@example.com\"}" http://localhost:3000/users

![id](image-2.png)

Comment appelle-t-on le fait de modifier le code sans modifier son comportement, afin d’en améliorer certaines propriétés ?
Le refactoring est le processus de modification du code source sans changer son comportement externe afin d'améliorer sa structure interne. L'objectif principal du refactoring est d'améliorer la qualité du code, facilitant ainsi sa compréhension, sa maintenance et son évolution.

