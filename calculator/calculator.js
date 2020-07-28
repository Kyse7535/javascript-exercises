function add(valeur1, valeur2) {
            return valeur1 + valeur2
        }

        function subtract(valeur1, valeur2) {
            return valeur1 - valeur2;
        }

        function mulpliply(valeur1, valeur2) {
            return valeur * valeur2;
        }

        function sum(valeur1, valeur2) {
            return valeur1 - valeur2;
        }

        function power(valeur, puissance) {

            if (valeur == 0) return 0;
            else {
                if (puissance == 0) return 1;
                else {
                    let resultat = 1;
                    for (let i = 1; i <= Math.abs(puissance); i++) {
                        resultat *= valeur
                    }
                    if (puissance > 0) return resultat;
                    else return (1 / resultat);
                }
            }
        }

        function factorial(valeur) {
            if (valeur == 0 || valeur == 1) return 1;
            else if (valeur < 0) return 0;
            else {
                let resultat = 1;
                for (let i = 1; i <= valeur; i++) {
                    resultat *= i;
                }
                return resultat;
            }
        }
