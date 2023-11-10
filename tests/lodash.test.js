const _ = require('lodash');

describe('Fonction chunk de lodash', () => {
    // Cas nominal
    test('devrait diviser un tableau en morceaux de taille spécifiée', () => {
        const tableau = [1, 2, 3, 4, 5, 6];
        const tableauMorcele = _.chunk(tableau, 2);
        expect(tableauMorcele).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    // Cas limite
    test('devrait gérer un tableau vide', () => {
        const tableau = [];
        const tableauMorcele = _.chunk(tableau, 2);
        expect(tableauMorcele).toEqual([]);
    });
});

describe('Fonction map de lodash', () => {
    // Cas nominal
    test('devrait appliquer une fonction à chaque élément d\'un tableau', () => {
        const tableau = [1, 2, 3];
        const tableauMapped = _.map(tableau, (num) => num * 2);
        expect(tableauMapped).toEqual([2, 4, 6]);
    });

    // Cas limite
    test('devrait gérer un tableau vide', () => {
        const tableau = [];
        const tableauMapped = _.map(tableau, (num) => num * 2);
        expect(tableauMapped).toEqual([]);
    });
});

describe('Fonction intersection de lodash', () => {
    // Cas nominal
    test('devrait retourner un tableau contenant les éléments communs à tous les tableaux', () => {
        const tableau1 = [1, 2, 3];
        const tableau2 = [2, 3, 4];
        const tableau3 = [3, 4, 5];
        const tableauIntersection = _.intersection(tableau1, tableau2, tableau3);
        expect(tableauIntersection).toEqual([3]);
    });

    // Cas limite
    test('devrait gérer des tableaux vides', () => {
        const tableau1 = [];
        const tableau2 = [];
        const tableau3 = [];
        const tableauIntersection = _.intersection(tableau1, tableau2, tableau3);
        expect(tableauIntersection).toEqual([]);
    });
});

describe('Fonction union de lodash', () => {
    // Cas nominal
    test('devrait retourner un tableau contenant les éléments de tous les tableaux', () => {
        const tableau1 = [1, 2, 3];
        const tableau2 = [2, 3, 4];
        const tableau3 = [3, 4, 5];
        const tableauUnion = _.union(tableau1, tableau2, tableau3);
        expect(tableauUnion).toEqual([1, 2, 3, 4, 5]);
    });

    // Cas limite
    test('devrait gérer des tableaux vides', () => {
        const tableau1 = [];
        const tableau2 = [];
        const tableau3 = [];
        const tableauUnion = _.union(tableau1, tableau2, tableau3);
        expect(tableauUnion).toEqual([]);
    });
});

describe('Fonction flatMap de lodash', () => {
    // Cas nominal
    test('devrait retourner un tableau contenant les éléments de tous les tableaux', () => {
        const tableau = [1, 2, 3];
        const tableauFlatMap = _.flatMap(tableau, (num) => [num, num * 2]);
        expect(tableauFlatMap).toEqual([1, 2, 2, 4, 3, 6]);
    });

    // Cas limite
    test('devrait gérer un tableau vide', () => {
        const tableau = [];
        const tableauFlatMap = _.flatMap(tableau, (num) => [num, num * 2]);
        expect(tableauFlatMap).toEqual([]);
    });
});

describe('Fonction max de lodash', () => {
    // Cas nominal
    test('devrait retourner la valeur maximale d\'un tableau', () => {
        const tableau = [1, 2, 3, 4, 5];
        const max = _.max(tableau);
        expect(max).toEqual(5);
    });

    // Cas limite
    test('devrait gérer un tableau vide', () => {
        const tableau = [];
        const max = _.max(tableau);
        expect(max).toEqual(undefined);
    });
});

describe('Fonction maxBy de lodash', () => {
    // Cas nominal
    test('devrait retourner la valeur maximale d\'un tableau', () => {
        const tableau = [{ 'n': 1 }, { 'n': 2 }];
        const max = _.maxBy(tableau, (o) => o.n);
        expect(max).toEqual({ 'n': 2 });
    });

    // Cas limite
    test('devrait gérer un tableau vide', () => {
        const tableau = [];
        const max = _.maxBy(tableau, (o) => o.n);
        expect(max).toEqual(undefined);
    });
});

describe('Fonction pipe de lodash', () => {
    // Cas nominal
    test('devrait retourner le résultat de l\'application d\'une fonction à une valeur', () => {
        const doubler = (x) => x * 2;
        const tripler = (x) => x * 3;
        const pipe = _.flow(doubler, tripler);
        const resultat = pipe(5);
        expect(resultat).toEqual(30);
    });

    // Cas limite
    test('devrait gérer une fonction vide', () => {
        const doubler = (x) => x * 2;
        const pipe = _.flow(doubler);
        const resultat = pipe(5);
        expect(resultat).toEqual(10);
    });
});