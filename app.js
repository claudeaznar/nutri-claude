const {
  useState,
  useEffect,
  useRef
} = React;
const SHOPPING_DATA = [{
  id: "proteines",
  nom: "Protéines",
  emoji: "🥩",
  items: [{
    id: "p1",
    label: "Œufs cage (boîte de 20)",
    prix: {
      lidl: 4.29,
      aldi: 1.30,
      leclerc: 1.55,
      inter: 1.50,
      carrefour: 1.60
    },
    unite: "boîte x20",
    qte: 2
  }, {
    id: "p2",
    label: "Filets de poulet (grillade)",
    prix: {
      lidl: 6.50,
      aldi: 6.40,
      leclerc: 6.30,
      inter: 6.40,
      carrefour: 6.60
    },
    unite: "kg",
    qte: 1
  }, {
    id: "p3",
    label: "Brochettes / émincé de poulet",
    prix: {
      lidl: 7.50,
      aldi: 7.40,
      leclerc: 7.20,
      inter: 7.30,
      carrefour: 7.60
    },
    unite: "kg",
    qte: 1,
    ado: true
  }, {
    id: "p4",
    label: "Thon au naturel (boîtes)",
    prix: {
      lidl: 1.20,
      aldi: 1.15,
      leclerc: 1.30,
      inter: 1.25,
      carrefour: 1.35
    },
    unite: "boîte",
    qte: 4
  }, {
    id: "p5",
    label: "Sardines / maquereaux",
    prix: {
      lidl: 1.49,
      aldi: 0.80,
      leclerc: 0.95,
      inter: 0.90,
      carrefour: 1.00
    },
    unite: "boîte",
    qte: 4
  }, {
    id: "p6",
    label: "Saumon ou crevettes (fraîcheur)",
    prix: {
      lidl: 9.90,
      aldi: 9.80,
      leclerc: 9.50,
      inter: 9.70,
      carrefour: 10.20
    },
    unite: "kg",
    qte: 1
  }, {
    id: "p7",
    label: "Jambon blanc / blanc de dinde",
    prix: {
      lidl: 4.00,
      aldi: 3.90,
      leclerc: 4.30,
      inter: 4.20,
      carrefour: 4.40
    },
    unite: "500 g",
    qte: 1,
    ado: true
  }, {
    id: "p8",
    label: "Feta / mozzarella",
    prix: {
      lidl: 1.80,
      aldi: 1.75,
      leclerc: 2.10,
      inter: 2.00,
      carrefour: 2.20
    },
    unite: "pièce",
    qte: 2
  }]
}, {
  id: "feculents",
  nom: "Féculents & légumineuses",
  emoji: "🌾",
  items: [{
    id: "f1",
    label: "Riz basmati",
    prix: {
      lidl: 2.00,
      aldi: 1.95,
      leclerc: 2.20,
      inter: 2.15,
      carrefour: 2.30
    },
    unite: "kg",
    qte: 1,
    ado: true
  }, {
    id: "f2",
    label: "Pâtes (salade froide)",
    prix: {
      lidl: 0.89,
      aldi: 1.05,
      leclerc: 1.30,
      inter: 1.25,
      carrefour: 1.35
    },
    unite: "paquet",
    qte: 1,
    ado: true
  }, {
    id: "f3",
    label: "Pois chiches / lentilles",
    prix: {
      lidl: 1.59,
      aldi: 2.70,
      leclerc: 3.10,
      inter: 3.00,
      carrefour: 3.20
    },
    unite: "sachet",
    qte: 1
  }, {
    id: "f4",
    label: "Boulgour / semoule (taboulé)",
    prix: {
      lidl: 1.00,
      aldi: 0.95,
      leclerc: 1.20,
      inter: 1.10,
      carrefour: 1.25
    },
    unite: "500 g",
    qte: 1
  }, {
    id: "f5",
    label: "Flocons d'avoine",
    prix: {
      lidl: 0.79,
      aldi: 1.15,
      leclerc: 1.60,
      inter: 1.45,
      carrefour: 1.65
    },
    unite: "kg",
    qte: 1,
    ado: true
  }, {
    id: "f6",
    label: "Pain complet / pita",
    prix: {
      lidl: 1.77,
      aldi: 1.35,
      leclerc: 1.60,
      inter: 1.55,
      carrefour: 1.65
    },
    unite: "paquet",
    qte: 1,
    ado: true
  }]
}, {
  id: "legumes",
  nom: "Légumes & crudités",
  emoji: "🥗",
  items: [{
    id: "l1",
    label: "Tomates (cœur de bœuf / cerises)",
    prix: {
      lidl: 2.20,
      aldi: 2.15,
      leclerc: 2.00,
      inter: 2.10,
      carrefour: 2.25
    },
    unite: "kg",
    qte: 2
  }, {
    id: "l2",
    label: "Concombres",
    prix: {
      lidl: 0.69,
      aldi: 0.65,
      leclerc: 0.75,
      inter: 0.70,
      carrefour: 0.80
    },
    unite: "pièce",
    qte: 2
  }, {
    id: "l3",
    label: "Courgettes / aubergines (grill)",
    prix: {
      lidl: 1.99,
      aldi: 1.95,
      leclerc: 1.80,
      inter: 1.90,
      carrefour: 2.05
    },
    unite: "kg",
    qte: 1
  }, {
    id: "l4",
    label: "Poivrons (rouge/jaune)",
    prix: {
      lidl: 2.50,
      aldi: 2.45,
      leclerc: 2.30,
      inter: 2.40,
      carrefour: 2.55
    },
    unite: "kg",
    qte: 1
  }, {
    id: "l5",
    label: "Salade verte / roquette",
    prix: {
      lidl: 0.99,
      aldi: 0.95,
      leclerc: 1.10,
      inter: 1.05,
      carrefour: 1.15
    },
    unite: "sachet",
    qte: 2
  }, {
    id: "l6",
    label: "Avocat (filet de 3)",
    prix: {
      lidl: 1.99,
      aldi: 1.50,
      leclerc: 1.95,
      inter: 1.80,
      carrefour: 2.10
    },
    unite: "filet x3",
    qte: 1
  }, {
    id: "l7",
    label: "Radis, oignon rouge, herbes fraîches",
    prix: {
      lidl: 2.50,
      aldi: 2.45,
      leclerc: 2.60,
      inter: 2.55,
      carrefour: 2.70
    },
    unite: "lot",
    qte: 1
  }]
}, {
  id: "laitiers",
  nom: "Produits laitiers",
  emoji: "🥛",
  items: [{
    id: "d1",
    label: "Skyr nature 850 g",
    prix: {
      lidl: 2.69,
      aldi: 2.35,
      leclerc: 2.90,
      inter: 2.70,
      carrefour: 2.95
    },
    unite: "pot 850g",
    qte: 2
  }, {
    id: "d2",
    label: "Yaourts nature / grec",
    prix: {
      lidl: 2.00,
      aldi: 1.95,
      leclerc: 2.30,
      inter: 2.20,
      carrefour: 2.35
    },
    unite: "pack",
    qte: 1,
    ado: true
  }, {
    id: "d3",
    label: "Fromage blanc 0%",
    prix: {
      lidl: 1.79,
      aldi: 1.45,
      leclerc: 1.70,
      inter: 1.60,
      carrefour: 1.75
    },
    unite: "kg",
    qte: 1
  }, {
    id: "d4",
    label: "Lait demi-écrémé UHT",
    prix: {
      lidl: 0.79,
      aldi: 0.82,
      leclerc: 0.90,
      inter: 0.88,
      carrefour: 0.92
    },
    unite: "L",
    qte: 3,
    ado: true
  }]
}, {
  id: "fruits",
  nom: "Fruits d'été & secs",
  emoji: "🍉",
  items: [{
    id: "fr1",
    label: "Pastèque ou melon",
    prix: {
      lidl: 3.50,
      aldi: 3.40,
      leclerc: 3.20,
      inter: 3.30,
      carrefour: 3.60
    },
    unite: "pièce",
    qte: 1,
    ado: true
  }, {
    id: "fr2",
    label: "Pêches / abricots / nectarines",
    prix: {
      lidl: 2.50,
      aldi: 2.45,
      leclerc: 2.30,
      inter: 2.40,
      carrefour: 2.55
    },
    unite: "kg",
    qte: 2,
    ado: true
  }, {
    id: "fr3",
    label: "Fraises / cerises",
    prix: {
      lidl: 2.99,
      aldi: 2.90,
      leclerc: 2.80,
      inter: 2.95,
      carrefour: 3.10
    },
    unite: "barquette",
    qte: 1
  }, {
    id: "fr4",
    label: "Bananes / pommes",
    prix: {
      lidl: 1.99,
      aldi: 1.45,
      leclerc: 1.60,
      inter: 1.55,
      carrefour: 1.65
    },
    unite: "kg",
    qte: 1,
    ado: true
  }, {
    id: "fr5",
    label: "Amandes / fruits secs",
    prix: {
      lidl: 2.79,
      aldi: 2.30,
      leclerc: 2.90,
      inter: 2.70,
      carrefour: 2.95
    },
    unite: "sachet",
    qte: 1
  }]
}, {
  id: "epicerie",
  nom: "Épicerie (stock)",
  emoji: "🫙",
  items: [{
    id: "e1",
    label: "Huile d'olive, vinaigre, moutarde",
    prix: {
      lidl: 0,
      aldi: 0,
      leclerc: 0,
      inter: 0,
      carrefour: 0
    },
    unite: "stock",
    qte: 1
  }, {
    id: "e2",
    label: "Épices, herbes de Provence, citron",
    prix: {
      lidl: 0,
      aldi: 0,
      leclerc: 0,
      inter: 0,
      carrefour: 0
    },
    unite: "stock",
    qte: 1
  }, {
    id: "e3",
    label: "Olives, cornichons",
    prix: {
      lidl: 1.20,
      aldi: 1.15,
      leclerc: 1.40,
      inter: 1.30,
      carrefour: 1.45
    },
    unite: "bocal",
    qte: 1
  }, {
    id: "e4",
    label: "Café, thé glacé maison, chocolat 85%",
    prix: {
      lidl: 0.75,
      aldi: 0.72,
      leclerc: 0.85,
      inter: 0.80,
      carrefour: 0.88
    },
    unite: "lot",
    qte: 1
  }]
}];
const SHOPPING_HIVER = [{
  id: "proteines",
  nom: "Protéines",
  emoji: "🥩",
  items: [{
    id: "p1",
    label: "Œufs cage (boîte de 20)",
    prix: {
      lidl: 4.29
    },
    unite: "boîte x20",
    qte: 3
  }, {
    id: "p2",
    label: "Cuisses de poulet",
    prix: {
      lidl: 3.99
    },
    unite: "kg",
    qte: 2
  }, {
    id: "p3",
    label: "Blanc de poulet",
    prix: {
      lidl: 1.31
    },
    unite: "barquette",
    qte: 1
  }, {
    id: "p4",
    label: "Viande hachée 5%",
    prix: {
      lidl: 5.40
    },
    unite: "kg",
    qte: 1
  }, {
    id: "p5",
    label: "Maquereaux (sauce / escabèche)",
    prix: {
      lidl: 1.49
    },
    unite: "boîte",
    qte: 6
  }, {
    id: "p6",
    label: "Filets poisson blanc surgelé",
    prix: {
      lidl: 3.60
    },
    unite: "800 g",
    qte: 1
  }, {
    id: "p7",
    label: "Blanc de dinde ou jambon",
    prix: {
      lidl: 4.00
    },
    unite: "500 g",
    qte: 1
  }]
}, {
  id: "feculents",
  nom: "Féculents & légumineuses",
  emoji: "🌾",
  items: [{
    id: "f1",
    label: "Riz basmati",
    prix: {
      lidl: 2.00
    },
    unite: "kg",
    qte: 2
  }, {
    id: "f2",
    label: "Spaghetti complets",
    prix: {
      lidl: 0.89
    },
    unite: "paquet",
    qte: 1
  }, {
    id: "f3",
    label: "Lentilles vertes",
    prix: {
      lidl: 1.59
    },
    unite: "sachet",
    qte: 1
  }, {
    id: "f4",
    label: "Flocons d'avoine",
    prix: {
      lidl: 0.79
    },
    unite: "kg",
    qte: 1
  }, {
    id: "f5",
    label: "Pommes de terre grenaille",
    prix: {
      lidl: 1.99
    },
    unite: "kg",
    qte: 2
  }, {
    id: "f6",
    label: "Pain de mie complet",
    prix: {
      lidl: 1.77
    },
    unite: "paquet",
    qte: 1
  }, {
    id: "f7",
    label: "Boulgour ou semoule",
    prix: {
      lidl: 1.00
    },
    unite: "500 g",
    qte: 1
  }]
}, {
  id: "legumes",
  nom: "Légumes",
  emoji: "🥦",
  items: [{
    id: "l1",
    label: "Brocolis précuits",
    prix: {
      lidl: 1.79
    },
    unite: "sachet",
    qte: 2
  }, {
    id: "l2",
    label: "Ratatouille",
    prix: {
      lidl: 1.29
    },
    unite: "kg",
    qte: 1
  }, {
    id: "l3",
    label: "Carottes 2 kg",
    prix: {
      lidl: 2.49
    },
    unite: "sac 2kg",
    qte: 1
  }, {
    id: "l4",
    label: "Poêlée de légumes",
    prix: {
      lidl: 3.04
    },
    unite: "kg",
    qte: 1
  }, {
    id: "l5",
    label: "Salade iceberg",
    prix: {
      lidl: 0.99
    },
    unite: "pièce",
    qte: 2
  }, {
    id: "l6",
    label: "Avocat (filet de 3)",
    prix: {
      lidl: 1.99
    },
    unite: "filet x3",
    qte: 1
  }]
}, {
  id: "laitiers",
  nom: "Produits laitiers",
  emoji: "🥛",
  items: [{
    id: "d1",
    label: "Skyr nature 850 g",
    prix: {
      lidl: 2.69
    },
    unite: "pot 850g",
    qte: 2
  }, {
    id: "d2",
    label: "Yaourts aux fruits",
    prix: {
      lidl: 3.99
    },
    unite: "pack",
    qte: 1
  }, {
    id: "d3",
    label: "Fromage blanc",
    prix: {
      lidl: 1.79
    },
    unite: "kg",
    qte: 1
  }, {
    id: "d4",
    label: "Lait demi-écrémé UHT",
    prix: {
      lidl: 0.79
    },
    unite: "L",
    qte: 4
  }, {
    id: "d5",
    label: "Fromage râpé fondant",
    prix: {
      lidl: 1.75
    },
    unite: "sachet",
    qte: 1
  }]
}, {
  id: "fruits",
  nom: "Fruits & fruits secs",
  emoji: "🍌",
  items: [{
    id: "fr1",
    label: "Bananes (vrac)",
    prix: {
      lidl: 1.99
    },
    unite: "kg",
    qte: 2
  }, {
    id: "fr2",
    label: "Pomme Golden 2 kg",
    prix: {
      lidl: 2.99
    },
    unite: "sac 2kg",
    qte: 1
  }, {
    id: "fr3",
    label: "Raisin rosé sans pépin",
    prix: {
      lidl: 2.79
    },
    unite: "barquette",
    qte: 1
  }, {
    id: "fr4",
    label: "Amandes de Californie",
    prix: {
      lidl: 2.79
    },
    unite: "sachet",
    qte: 1
  }]
}, {
  id: "epicerie",
  nom: "Épicerie",
  emoji: "🫙",
  items: [{
    id: "e1",
    label: "Sauce tomate (briques)",
    prix: {
      lidl: 0.50
    },
    unite: "brique",
    qte: 3
  }, {
    id: "e2",
    label: "Café, thé, chocolat noir 85%",
    prix: {
      lidl: 0.75
    },
    unite: "lot",
    qte: 1
  }]
}];
const ENSEIGNES = [{
  id: "lidl",
  nom: "Lidl",
  couleur: "#0050aa"
}, {
  id: "aldi",
  nom: "Aldi",
  couleur: "#1d3a8a"
}, {
  id: "leclerc",
  nom: "Leclerc",
  couleur: "#0066b3"
}, {
  id: "inter",
  nom: "Intermarché",
  couleur: "#e2001a"
}, {
  id: "carrefour",
  nom: "Carrefour",
  couleur: "#004e9e"
}];
const cheapestStore = prix => {
  const entries = ENSEIGNES.map(e => ({
    id: e.id,
    v: prix[e.id]
  }));
  const nonZero = entries.filter(e => e.v > 0);
  if (nonZero.length === 0) return null;
  return nonZero.reduce((m, e) => e.v < m.v ? e : m).id;
};
const TOTAL_BUDGET = 92;
const PROTEINES_CIBLE = 90;
const STORAGE_KEY = "nutri-claude-v2";
const HISTORY_KEY = "nutri-claude-history-v1";
const JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const getJourActuel = () => {
  const map = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  return map[new Date().getDay()];
};
const RECETTES = {
  Lundi: {
    sous: "Frais et léger pour démarrer",
    repas: [{
      type: "Dîner",
      emoji: "🥗",
      titre: "Salade César revisitée au poulet grillé",
      ingredients: ["200 g filet de poulet grillé", "Salade romaine / verte", "Tomates cerises", "Copeaux de parmesan", "Sauce yaourt-citron-moutarde", "Croûtons (enfants)"],
      etapes: ["Grillez le poulet à la poêle ou plancha 5-6 min par face.", "Préparez la sauce : yaourt, jus de citron, moutarde, ail.", "Coupez le poulet, dressez sur la salade et les tomates.", "Parmesan dessus, croûtons pour les enfants."],
      portions: {
        toi: "200 g poulet + grosse salade + sauce légère",
        fille: "200 g poulet + salade + croûtons + pain",
        fils: "Poulet + salade + croûtons + pain + fromage"
      },
      kcal: {
        toi: 530,
        fille: 750,
        fils: 880
      },
      proteines: {
        toi: 50,
        fille: 60,
        fils: 65
      }
    }]
  },
  Mardi: {
    sous: "Le grand classique de l'été",
    repas: [{
      type: "Dîner",
      emoji: "🇬🇷",
      titre: "Salade grecque & thon",
      ingredients: ["Tomates, concombre, poivron, oignon rouge", "Feta 50 g", "Olives", "2 boîtes thon au naturel", "Huile d'olive, origan, citron"],
      etapes: ["Coupez tous les légumes en gros morceaux.", "Ajoutez la feta en cubes et les olives.", "Émiettez les 2 boîtes de thon dessus.", "Assaisonnez huile d'olive, origan, citron."],
      portions: {
        toi: "Salade + 2 boîtes thon + feta 50 g",
        fille: "Salade + thon + pita + boulgour",
        fils: "Salade + thon + pita + féculent"
      },
      kcal: {
        toi: 490,
        fille: 720,
        fils: 840
      },
      proteines: {
        toi: 50,
        fille: 60,
        fils: 65
      }
    }]
  },
  Mercredi: {
    sous: "Léger et coloré",
    repas: [{
      type: "Dîner",
      emoji: "🍤",
      titre: "Brochettes de crevettes & légumes grillés",
      ingredients: ["220 g crevettes ou saumon en cubes", "Courgettes, poivrons, oignon", "Marinade : huile, ail, citron, paprika", "Riz ou boulgour (enfants)", "Persil frais"],
      etapes: ["Marinez crevettes et légumes 15 min.", "Montez les brochettes en alternant.", "Grillez 3-4 min par face à la plancha ou au four.", "Servez avec riz/boulgour pour les enfants."],
      portions: {
        toi: "220 g crevettes/saumon + légumes grillés",
        fille: "Brochettes + riz + légumes",
        fils: "Brochettes + riz + légumes + pain"
      },
      kcal: {
        toi: 440,
        fille: 730,
        fils: 860
      },
      proteines: {
        toi: 44,
        fille: 55,
        fils: 60
      }
    }]
  },
  Jeudi: {
    sous: "Fraîcheur méditerranéenne",
    repas: [{
      type: "Dîner",
      emoji: "🍝",
      titre: "Salade de pâtes froide thon & légumes",
      ingredients: ["Pâtes (penne / fusilli)", "2 boîtes thon au naturel", "Tomates cerises, poivron, maïs", "Mozzarella ou feta", "Basilic, huile d'olive, citron"],
      etapes: ["Cuisez les pâtes, rincez à l'eau froide.", "Coupez les légumes, ajoutez 2 boîtes de thon et le fromage.", "Mélangez avec huile d'olive, citron, basilic.", "Réservez au frais 30 min avant de servir."],
      portions: {
        toi: "Petite portion pâtes + 2 boîtes thon + légumes",
        fille: "Grosse portion pâtes + thon + mozza",
        fils: "Grosse portion + fromage + pain"
      },
      kcal: {
        toi: 540,
        fille: 860,
        fils: 990
      },
      proteines: {
        toi: 48,
        fille: 58,
        fils: 63
      }
    }]
  },
  Vendredi: {
    sous: "Le repas plaisir de la semaine",
    repas: [{
      type: "Dîner",
      emoji: "🍔",
      titre: "Burgers maison & légumes grillés",
      plaisir: true,
      ingredients: ["200 g steak haché 5% ou poulet", "Pain burger complet", "Salade, tomate, oignon", "1 tranche cheddar", "Aubergines / courgettes grillées"],
      etapes: ["Grillez les steaks à la cuisson voulue.", "Faites griller les légumes en tranches à côté.", "Montez les burgers avec crudités.", "Servez avec les légumes grillés (au lieu de frites)."],
      portions: {
        toi: "200 g steak + 1 burger + légumes grillés (sans frites)",
        fille: "1-2 burgers + légumes + un peu de frites four",
        fils: "2 burgers + frites four"
      },
      kcal: {
        toi: 640,
        fille: 960,
        fils: 1160
      },
      proteines: {
        toi: 45,
        fille: 58,
        fils: 68
      }
    }]
  },
  Samedi: {
    sous: "Apéro dînatoire frais",
    repas: [{
      type: "Dîner",
      emoji: "🍉",
      titre: "Assiette fraîcheur : melon, jambon, salade composée",
      ingredients: ["Melon ou pastèque", "100 g jambon cru ou blanc", "Salade verte, tomates, concombre, avocat", "3 œufs durs", "Feta, huile d'olive, vinaigre balsamique"],
      etapes: ["Coupez le melon en tranches, entourez de jambon.", "Préparez la salade composée avec 3 œufs durs.", "Ajoutez avocat et feta.", "Assaisonnez et servez frais."],
      portions: {
        toi: "Melon-jambon + salade + 3 œufs durs (protéines clés)",
        fille: "+ pita / boulgour + pain",
        fils: "+ féculent + pain + fromage"
      },
      kcal: {
        toi: 510,
        fille: 740,
        fils: 870
      },
      proteines: {
        toi: 38,
        fille: 50,
        fils: 58
      }
    }]
  },
  Dimanche: {
    sous: "🎉 Cheat meal — le repas plaisir de la semaine",
    repas: [{
      type: "Cheat meal",
      emoji: "🍕",
      titre: "Pizza, barbecue ou resto — à volonté cadré",
      plaisir: true,
      note: "Repas de recharge hebdo. L'été, profites-en pour un barbecue ! Vise quand même 90 g de protéines (viandes grillées, œufs). Reste dans ta fenêtre 18/6.",
      ingredients: ["Au choix : barbecue (viandes, merguez, brochettes)", "ou pizza maison / du commerce", "ou resto / glace en dessert", "Salade fraîche en accompagnement"],
      etapes: ["Choisis CE qui te fait vraiment plaisir.", "Mange dans ta fenêtre, ~19h avec la famille.", "Mange lentement et savoure.", "Retour au plan dès le lundi."],
      portions: {
        toi: "Repas plaisir libre (~1800-2200 kcal · vise ~90g prot)",
        fille: "Repas plaisir + récup glucides post-WOD",
        fils: "Repas plaisir à sa faim"
      },
      kcal: {
        toi: 2000,
        fille: 2200,
        fils: 2400
      },
      proteines: {
        toi: 90,
        fille: 100,
        fils: 110
      }
    }]
  }
};
const RECETTES_HIVER = {
  Lundi: {
    titre: "Cuisses de poulet rôties & ratatouille",
    emoji: "🍗",
    ingredients: ["Cuisses de poulet (≈6)", "Paprika, herbes de Provence, ail", "Ratatouille surgelée 1 kg", "Riz basmati", "Huile d'olive"],
    etapes: ["Préchauffez le four à 200°C.", "Frottez les cuisses : huile, paprika, ail, herbes.", "Enfournez 30 min, retournez à mi-cuisson.", "Réchauffez la ratatouille, cuisez le riz."],
    portions: {
      toi: "2 cuisses + grosse ratatouille + 150 g riz",
      fille: "2 cuisses + ratatouille + 250 g riz + pain",
      fils: "2-3 cuisses + riz à volonté + fruit"
    },
    kcal: {
      toi: 780,
      fille: 1050,
      fils: 1150
    }
  },
  Mardi: {
    titre: "Omelette & poêlée de légumes",
    emoji: "🍳",
    ingredients: ["Œufs (≈12)", "Poêlée de légumes surgelée", "Pain complet", "Salade verte", "Fromage râpé (enfants)"],
    etapes: ["Faites revenir la poêlée 8 min à feu vif.", "Battez les œufs avec sel et poivre.", "Versez sur les légumes, cuisez 4-5 min.", "Servez avec salade et pain."],
    portions: {
      toi: "4 œufs + 1 tranche pain + salade",
      fille: "4 œufs + 2 tranches + fromage",
      fils: "4 œufs + pain + yaourt + fruit"
    },
    kcal: {
      toi: 520,
      fille: 750,
      fils: 820
    }
  },
  Mercredi: {
    titre: "Dahl de lentilles & œufs",
    emoji: "🍲",
    ingredients: ["Lentilles 250-300 g", "1 oignon, 2 gousses d'ail", "Curcuma, cumin, sauce tomate", "Œufs (1-2 / pers)", "Salade verte"],
    etapes: ["Faites revenir oignon et ail.", "Ajoutez épices, lentilles, sauce tomate et eau.", "Mijotez 20 min.", "Cuisez les œufs au plat.", "Servez avec les œufs et la salade."],
    portions: {
      toi: "Dahl + 2 œufs",
      fille: "Dahl + riz + 2 œufs",
      fils: "Dahl + riz + œufs + pain"
    },
    kcal: {
      toi: 530,
      fille: 830,
      fils: 950
    }
  },
  Jeudi: {
    titre: "Poisson blanc poêlé & brocolis",
    emoji: "🐟",
    ingredients: ["Filets poisson blanc surgelés", "Brocolis surgelés", "Riz basmati", "Citron, huile d'olive", "Pommes de terre (fils)"],
    etapes: ["Cuisez les brocolis vapeur 8 min.", "Cuisez le riz.", "Poêlez les filets 4-5 min par face.", "Arrosez de citron et servez."],
    portions: {
      toi: "1 filet + 150 g riz + brocolis",
      fille: "1-2 filets + 250 g riz",
      fils: "1-2 filets + riz + pommes de terre"
    },
    kcal: {
      toi: 450,
      fille: 750,
      fils: 880
    }
  },
  Vendredi: {
    titre: "Spaghetti bolognaise maison",
    emoji: "🍝",
    ingredients: ["Viande hachée 5% (≈400 g)", "Oignon, ail, 2 briques sauce tomate", "Herbes, basilic", "Pâtes complètes", "Fromage râpé, salade"],
    etapes: ["Faites revenir oignon et ail, dorez la viande.", "Ajoutez sauce tomate et herbes, mijotez 15 min.", "Cuisez les pâtes al dente.", "Servez, fromage pour les enfants et salade."],
    portions: {
      toi: "80 g pâtes + grosse bolo + salade",
      fille: "150 g pâtes + bolo + fromage",
      fils: "150 g pâtes + bolo + fromage + pain"
    },
    kcal: {
      toi: 620,
      fille: 950,
      fils: 1080
    }
  },
  Samedi: {
    titre: "Sardines & grosse salade composée",
    emoji: "🥗",
    ingredients: ["Sardines/maquereaux en boîte", "Œufs durs", "Tomates, concombre, oignon, avocat", "Citron, huile d'olive", "Boulgour + pain (enfants)"],
    etapes: ["Cuisez œufs durs (9 min) et boulgour.", "Coupez les légumes, dressez la salade.", "Assaisonnez huile, citron et sel.", "Ajoutez sardines et œufs. Servez avec pain."],
    portions: {
      toi: "1 boîte + salade + 1 pain",
      fille: "Salade + riz/boulgour + pain",
      fils: "Salade + féculent + pain + fromage"
    },
    kcal: {
      toi: 520,
      fille: 780,
      fils: 880
    }
  },
  Dimanche: {
    titre: "Cheat meal — pizza, burger ou resto",
    emoji: "🍕",
    ingredients: ["Pizza maison ou du commerce", "ou burger maison (steak, cheddar, pain complet)", "ou resto / plat qui te fait envie", "Dessert plaisir"],
    etapes: ["Choisis ce qui te fait plaisir, sans culpabiliser.", "Mange dans ta fenêtre 18/6, ~19h.", "Savoure lentement.", "Retour au plan dès lundi."],
    portions: {
      toi: "Repas libre ~1800-2200 kcal",
      fille: "Repas plaisir + récup glucides",
      fils: "Repas plaisir à sa faim"
    },
    kcal: {
      toi: 2000,
      fille: 2200,
      fils: 2400
    }
  }
};
const COLLATIONS = ["3 œufs durs + 200 g skyr nature (~40 g prot.) + 1 fruit d'été", "3 œufs brouillés + 200 g fromage blanc 0% (~36 g prot.) + quelques amandes", "200 g skyr + 2 œufs durs + 10 amandes (~35 g prot.) + fruits frais", "200 g yaourt grec + 2 œufs durs + 1 fruit (~32 g prot.)"];
const loadState = () => {
  try {
    const r = localStorage.getItem(STORAGE_KEY);
    return r ? JSON.parse(r) : null;
  } catch (e) {
    return null;
  }
};
const saveState = s => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch (e) {}
};
const loadHistory = () => {
  try {
    const r = localStorage.getItem(HISTORY_KEY);
    return r ? JSON.parse(r) : {
      courses: [],
      recettes: []
    };
  } catch (e) {
    return {
      courses: [],
      recettes: []
    };
  }
};
const saveHistory = h => {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(h));
  } catch (e) {}
};
function App() {
  const [tab, setTab] = useState("recettes");
  const [filtre, setFiltre] = useState("best");
  const [jour, setJour] = useState(getJourActuel());
  const [openHiver, setOpenHiver] = useState(null);
  const [state, setState] = useState({});
  const [history, setHistory] = useState({
    courses: [],
    recettes: []
  });
  const [loaded, setLoaded] = useState(false);
  const [saved, setSaved] = useState(true);
  const defaultState = () => {
    const s = {};
    SHOPPING_DATA.forEach(c => c.items.forEach(i => {
      s[i.id] = {
        checked: false,
        qte: i.qte,
        deleted: false
      };
    }));
    return s;
  };
  useEffect(() => {
    const stored = loadState();
    setState(stored ? {
      ...defaultState(),
      ...stored
    } : defaultState());
    setHistory(loadHistory());
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    setSaved(false);
    const t = setTimeout(() => {
      saveState(state);
      setSaved(true);
    }, 400);
    return () => clearTimeout(t);
  }, [state, loaded]);
  useEffect(() => {
    if (!loaded) return;
    saveHistory(history);
  }, [history, loaded]);
  const get = id => state[id] || {
    checked: false,
    qte: 1,
    deleted: false
  };
  const toggle = id => setState(s => ({
    ...s,
    [id]: {
      ...get(id),
      checked: !get(id).checked
    }
  }));
  const setQte = (id, d) => setState(s => {
    const c = get(id);
    return {
      ...s,
      [id]: {
        ...c,
        qte: Math.max(1, c.qte + d)
      }
    };
  });
  const deleteItem = id => setState(s => ({
    ...s,
    [id]: {
      ...get(id),
      deleted: true,
      checked: false
    }
  }));
  const restoreDeleted = () => setState(s => {
    const n = {
      ...s
    };
    SHOPPING_DATA.flatMap(c => c.items).forEach(i => {
      n[i.id] = {
        ...get(i.id),
        deleted: false
      };
    });
    return n;
  });
  const allItems = SHOPPING_DATA.flatMap(c => c.items);
  const visibleItems = allItems.filter(i => !get(i.id).deleted);
  const deletedCount = allItems.length - visibleItems.length;
  const bestPrice = i => {
    const c = cheapestStore(i.prix);
    return c ? i.prix[c] : 0;
  };
  const appliedPrice = i => filtre === "best" ? bestPrice(i) : i.prix[filtre] || 0;
  const lineTotal = i => appliedPrice(i) * get(i.id).qte;
  const fullTotal = visibleItems.reduce((s, i) => s + lineTotal(i), 0);
  const cartTotal = visibleItems.filter(i => get(i.id).checked).reduce((s, i) => s + lineTotal(i), 0);
  const doneCount = visibleItems.filter(i => get(i.id).checked).length;
  const euro = n => n.toFixed(2).replace(".", ",") + " €";
  const totalParEnseigne = ENSEIGNES.map(e => ({
    ...e,
    total: visibleItems.reduce((s, i) => s + (i.prix[e.id] || 0) * get(i.id).qte, 0)
  }));
  const moinsCherEnseigne = totalParEnseigne.filter(e => e.total > 0).reduce((m, e) => e.total < m.total ? e : m, totalParEnseigne[0]);
  const uncheckAll = () => setState(s => {
    const n = {
      ...s
    };
    visibleItems.forEach(i => n[i.id] = {
      ...get(i.id),
      checked: false
    });
    return n;
  });
  const qteToOne = () => setState(s => {
    const n = {
      ...s
    };
    visibleItems.forEach(i => n[i.id] = {
      ...get(i.id),
      qte: 1
    });
    return n;
  });
  const resetAll = () => {
    if (window.confirm("Tout réinitialiser ? (cochages, quantités et articles supprimés)")) setState(defaultState());
  };
  const validerCourses = () => {
    const articles = allItems.filter(i => get(i.id).checked).map(i => ({
      label: i.label,
      qte: get(i.id).qte,
      prix: appliedPrice(i) * get(i.id).qte
    }));
    if (articles.length === 0) {
      window.alert("Coche au moins un article avant de valider.");
      return;
    }
    const entree = {
      date: new Date().toISOString(),
      total: cartTotal,
      nbArticles: articles.length,
      enseigne: filtre === "best" ? "Meilleur prix" : ENSEIGNES.find(e => e.id === filtre).nom,
      saison: "Été",
      articles
    };
    setHistory(h => ({
      ...h,
      courses: [entree, ...h.courses].slice(0, 30)
    }));
    window.alert("Courses archivées dans l'historique ✓ (" + euro(cartTotal) + ")");
  };
  const data = RECETTES[jour];
  const aujourdhui = getJourActuel();
  useEffect(() => {
    if (!loaded) return;
    const r = RECETTES[jour];
    if (!r) return;
    setHistory(h => {
      const sansCeJour = h.recettes.filter(x => x.jour !== jour);
      const entree = {
        jour,
        titre: r.repas[0].titre,
        emoji: r.repas[0].emoji,
        date: new Date().toISOString()
      };
      return {
        ...h,
        recettes: [entree, ...sansCeJour].slice(0, 20)
      };
    });
  }, [jour, loaded]);
  const daysRef = useRef(null);
  useEffect(() => {
    if (tab !== "recettes" || !daysRef.current) return;
    const el = daysRef.current.querySelector('[data-jour="' + jour + '"]');
    if (el) el.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth"
    });
  }, [tab, jour]);
  return React.createElement("div", {
    style: S.page
  }, React.createElement("div", {
    style: S.shell
  }, React.createElement("div", {
    style: S.savedWrap
  }, React.createElement("span", {
    style: S.savedBadge
  }, React.createElement("span", {
    style: {
      ...S.savedDot,
      background: saved ? "#5a7d3a" : "#d99b5a"
    }
  }), saved ? "Enregistré" : "…")), React.createElement("header", {
    style: S.header
  }, React.createElement("h1", {
    style: S.title
  }, "Mes Menus & Courses"), React.createElement("p", {
    style: S.sub
  }, "Plan d'\xE9t\xE9 \u2600\uFE0F \xB7 JI 18/6 \xB7 famille de 3 \xB7 objectif ", TOTAL_BUDGET, " \u20AC / semaine"), React.createElement("div", {
    style: S.leafWrap
  }, React.createElement("span", {
    style: S.leaf
  }, "\uD83C\uDF3F"))), React.createElement("div", {
    style: S.tabs
  }, React.createElement("button", {
    style: {
      ...S.tab,
      ...(tab === "recettes" ? S.tabOn : {})
    },
    onClick: () => setTab("recettes")
  }, React.createElement("span", {
    style: S.tabIcon
  }, "\uD83C\uDF7D\uFE0F"), React.createElement("span", {
    style: S.tabLabel
  }, "Recettes")), React.createElement("button", {
    style: {
      ...S.tab,
      ...(tab === "courses" ? S.tabOn : {})
    },
    onClick: () => setTab("courses")
  }, React.createElement("span", {
    style: S.tabIcon
  }, "\uD83D\uDED2"), React.createElement("span", {
    style: S.tabLabel
  }, "Courses")), React.createElement("button", {
    style: {
      ...S.tab,
      ...(tab === "histo" ? S.tabOn : {})
    },
    onClick: () => setTab("histo")
  }, React.createElement("span", {
    style: S.tabIcon
  }, "\uD83D\uDD53"), React.createElement("span", {
    style: S.tabLabel
  }, "Historique"))), tab === "recettes" && React.createElement("div", {
    style: S.fadeIn
  }, React.createElement("div", {
    className: "days-scroll",
    style: S.daysScroll,
    ref: daysRef
  }, JOURS.map(j => {
    const isToday = j === aujourdhui;
    const isActive = jour === j;
    return React.createElement("button", {
      key: j,
      "data-jour": j,
      style: {
        ...S.dayPill,
        ...(isActive ? S.dayPillOn : {}),
        ...(isToday && !isActive ? S.dayPillToday : {})
      },
      onClick: () => setJour(j)
    }, j, isToday && React.createElement("span", {
      style: {
        ...S.todayDot,
        background: isActive ? "#fff" : TERRA
      }
    }));
  })), React.createElement("h2", {
    style: S.dayTitle
  }, jour, jour === aujourdhui && React.createElement("span", {
    style: S.todayBadge
  }, "aujourd'hui")), React.createElement("p", {
    style: S.daySub
  }, data.sous), (() => {
    const dinerKcal = data.repas.reduce((s, r) => s + (r.kcal ? r.kcal.toi : 0), 0);
    const dinerProt = data.repas.reduce((s, r) => s + (r.proteines ? r.proteines.toi : 0), 0);
    const totalKcal = dinerKcal + 300;
    const totalProt = dinerProt + 40;
    const protOk = totalProt >= PROTEINES_CIBLE;
    return React.createElement("div", {
      style: S.dayKcal
    }, React.createElement("span", {
      style: S.dayKcalFire
    }, "\uD83D\uDD25"), React.createElement("div", null, React.createElement("b", null, "Ta journ\xE9e \u2248 ", totalKcal, " kcal"), React.createElement("span", {
      style: S.dayKcalDetail
    }, " \xB7 d\xEEner ", dinerKcal, " + collation ~300"), React.createElement("br", null), React.createElement("span", {
      style: {
        ...S.dayProtBadge,
        background: protOk ? "#dcebcf" : "#fdf0e8",
        color: protOk ? "#3c5a2a" : "#b5662e"
      }
    }, "\uD83E\uDD69 ~", totalProt, "g prot\xE9ines / ", PROTEINES_CIBLE, "g cible", protOk ? " ✓" : " — ajoute 1 yaourt grec")));
  })(), data.repas.map((r, idx) => React.createElement("div", {
    key: idx,
    style: S.card
  }, React.createElement("div", {
    style: S.cardHead
  }, React.createElement("span", {
    style: S.cardEmoji
  }, r.emoji), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    style: S.cardType
  }, r.type, r.plaisir && React.createElement("span", {
    style: S.plaisirTag
  }, "plaisir")), React.createElement("div", {
    style: S.cardTitre
  }, r.titre)), (r.kcal || r.proteines) && React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 4
    }
  }, r.kcal && React.createElement("span", {
    style: S.kcalBadge
  }, "\uD83D\uDD25 ", r.kcalSimple ? r.kcalSimple : r.kcal.toi, React.createElement("span", {
    style: S.kcalUnit
  }, "kcal")), r.proteines && React.createElement("span", {
    style: S.protBadge
  }, "\uD83E\uDD69 ", r.proteines.toi, "g prot."))), React.createElement("div", {
    style: S.cardBody
  }, r.note && React.createElement("div", {
    style: S.noteBox
  }, "\u2139\uFE0F ", r.note), React.createElement("div", {
    style: S.secTitle
  }, "Ingr\xE9dients"), React.createElement("ul", null, r.ingredients.map((ing, i) => React.createElement("li", {
    key: i,
    style: S.li
  }, React.createElement("span", {
    style: S.dot
  }), ing))), React.createElement("div", {
    style: {
      ...S.secTitle,
      marginTop: 18
    }
  }, "Pr\xE9paration"), React.createElement("ol", null, r.etapes.map((step, i) => React.createElement("li", {
    key: i,
    style: S.stepLi
  }, React.createElement("span", {
    style: S.stepNum
  }, i + 1, "."), React.createElement("span", null, step)))), r.portions && React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      ...S.secTitle,
      marginTop: 18
    }
  }, "Portions par personne"), React.createElement("div", {
    style: S.portionGrid
  }, React.createElement("div", {
    style: {
      ...S.portion,
      borderLeftColor: "#3c5a2a"
    }
  }, React.createElement("span", {
    style: {
      ...S.portionWho,
      color: "#3c5a2a"
    }
  }, "Toi \xB7 d\xE9ficit ", r.kcal && React.createElement("span", {
    style: S.portionKcal
  }, "\xB7 ", r.kcal.toi, " kcal"), r.proteines && React.createElement("span", {
    style: {
      ...S.portionKcal,
      color: "#5a7d3a"
    }
  }, " \xB7 ", r.proteines.toi, "g prot.")), React.createElement("span", {
    style: S.portionTxt
  }, r.portions.toi)), React.createElement("div", {
    style: {
      ...S.portion,
      borderLeftColor: "#c97b3d"
    }
  }, React.createElement("span", {
    style: {
      ...S.portionWho,
      color: "#c97b3d"
    }
  }, "Ta fille \xB7 crossfit ", r.kcal && React.createElement("span", {
    style: S.portionKcal
  }, "\xB7 ", r.kcal.fille, " kcal")), React.createElement("span", {
    style: S.portionTxt
  }, r.portions.fille)), React.createElement("div", {
    style: {
      ...S.portion,
      borderLeftColor: "#8aa86a"
    }
  }, React.createElement("span", {
    style: {
      ...S.portionWho,
      color: "#5a7d3a"
    }
  }, "Ton fils \xB7 15 ans ", r.kcal && React.createElement("span", {
    style: S.portionKcal
  }, "\xB7 ", r.kcal.fils, " kcal")), React.createElement("span", {
    style: S.portionTxt
  }, r.portions.fils))))))), React.createElement("div", {
    style: S.card
  }, React.createElement("div", {
    style: S.cardBody
  }, React.createElement("div", {
    style: S.secTitle
  }, "\uD83E\uDD5B Tes collations 17h (au choix)"), React.createElement("ul", null, COLLATIONS.map((c, i) => React.createElement("li", {
    key: i,
    style: S.li
  }, React.createElement("span", {
    style: S.dot
  }), c)))))), tab === "courses" && React.createElement("div", {
    style: S.fadeIn
  }, React.createElement("div", {
    style: S.statsRow
  }, React.createElement("div", {
    style: S.statCard
  }, React.createElement("span", {
    style: S.statNum
  }, doneCount), React.createElement("span", {
    style: S.statLbl
  }, "Coch\xE9")), React.createElement("div", {
    style: S.statCard
  }, React.createElement("span", {
    style: S.statNum
  }, visibleItems.length - doneCount), React.createElement("span", {
    style: S.statLbl
  }, "Restant")), React.createElement("div", {
    style: S.statCard
  }, React.createElement("span", {
    style: S.statNum
  }, visibleItems.length), React.createElement("span", {
    style: S.statLbl
  }, "Articles"))), React.createElement("div", {
    style: S.actions
  }, React.createElement("button", {
    style: S.actBtn,
    onClick: uncheckAll
  }, "\u21BA Tout d\xE9cocher"), React.createElement("button", {
    style: S.actBtn,
    onClick: qteToOne
  }, "\u27F3 Quantit\xE9s \xE0 1"), React.createElement("button", {
    style: {
      ...S.actBtn,
      ...S.actBtnDanger
    },
    onClick: resetAll
  }, "\uD83D\uDDD1 R\xE9init.")), deletedCount > 0 && React.createElement("button", {
    style: S.restoreBtn,
    onClick: restoreDeleted
  }, "\uD83D\uDD04 Restaurer ", deletedCount, " article", deletedCount > 1 ? "s" : "", " supprim\xE9", deletedCount > 1 ? "s" : ""), React.createElement("div", {
    style: S.filterLabel
  }, "Filtrer par enseigne"), React.createElement("div", {
    className: "days-scroll",
    style: S.filterScroll
  }, React.createElement("button", {
    style: {
      ...S.filterPill,
      ...(filtre === "best" ? S.filterPillOn : {})
    },
    onClick: () => setFiltre("best")
  }, "\uD83C\uDFC6 Meilleur prix"), ENSEIGNES.map(e => React.createElement("button", {
    key: e.id,
    style: {
      ...S.filterPill,
      ...(filtre === e.id ? {
        ...S.filterPillOn,
        background: e.couleur,
        boxShadow: "0 4px 12px " + e.couleur + "55"
      } : {})
    },
    onClick: () => setFiltre(e.id)
  }, e.nom))), filtre !== "best" && React.createElement("div", {
    style: S.filterActive
  }, "Vue ", React.createElement("b", null, ENSEIGNES.find(e => e.id === filtre).nom), " \u2014 totaux calcul\xE9s pour cette enseigne uniquement."), SHOPPING_DATA.map(cat => {
    const catVisible = cat.items.filter(i => !get(i.id).deleted);
    if (catVisible.length === 0) return null;
    const catDone = catVisible.filter(i => get(i.id).checked).length;
    return React.createElement("div", {
      key: cat.id,
      style: {
        marginBottom: 18
      }
    }, React.createElement("div", {
      style: S.catHead
    }, React.createElement("span", {
      style: S.catEmoji
    }, cat.emoji), React.createElement("h3", {
      style: S.catName
    }, cat.nom), React.createElement("span", {
      style: S.catBadge
    }, catDone, "/", catVisible.length)), React.createElement("div", {
      style: S.courseList
    }, catVisible.map(item => {
      const st = get(item.id);
      return React.createElement("div", {
        key: item.id,
        style: {
          ...S.courseItem,
          background: st.checked ? "#eef0e3" : "#fffdf7"
        }
      }, React.createElement("span", {
        style: {
          ...S.box,
          background: st.checked ? "#5a7d3a" : "#fff",
          borderColor: st.checked ? "#5a7d3a" : "#d2d0bf"
        },
        onClick: () => toggle(item.id)
      }, st.checked && React.createElement("span", {
        style: S.tick
      }, "\u2713")), React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        onClick: () => toggle(item.id)
      }, React.createElement("div", {
        style: {
          ...S.itemLabel,
          textDecoration: st.checked ? "line-through" : "none",
          color: st.checked ? "#a4a48f" : "#3a3a2a"
        }
      }, item.label, item.ado && React.createElement("span", {
        style: S.adoTag
      }, "ADO")), appliedPrice(item) > 0 ? React.createElement("div", {
        style: S.priceRow
      }, filtre === "best" ? React.createElement(React.Fragment, null, ENSEIGNES.map(e => {
        const isBest = cheapestStore(item.prix) === e.id;
        return React.createElement("span", {
          key: e.id,
          style: {
            ...S.priceChip,
            ...(isBest ? S.priceChipBest : {})
          }
        }, React.createElement("span", {
          style: S.priceStore
        }, e.nom), " ", euro(item.prix[e.id]));
      })) : React.createElement("span", {
        style: {
          ...S.priceChip,
          ...S.priceChipBest
        }
      }, React.createElement("span", {
        style: S.priceStore
      }, ENSEIGNES.find(e => e.id === filtre).nom), " ", euro(item.prix[filtre])), React.createElement("span", {
        style: S.priceUnit
      }, "/ ", item.unite)) : React.createElement("div", {
        style: S.itemMeta
      }, "d\xE9j\xE0 en stock")), React.createElement("div", {
        style: S.stepper
      }, React.createElement("button", {
        style: S.stepBtn,
        onClick: () => setQte(item.id, -1)
      }, "\u2212"), React.createElement("span", {
        style: S.stepQte
      }, st.qte), React.createElement("button", {
        style: S.stepBtn,
        onClick: () => setQte(item.id, +1)
      }, "+")), React.createElement("span", {
        style: S.linePrice
      }, appliedPrice(item) > 0 ? euro(lineTotal(item)) : "—"), React.createElement("button", {
        style: S.deleteBtn,
        onClick: () => deleteItem(item.id),
        title: "Supprimer de la liste"
      }, "\u2715"));
    })));
  }), React.createElement("div", {
    style: S.totalBox
  }, React.createElement("div", {
    style: S.totalRow
  }, React.createElement("span", {
    style: S.totalLbl
  }, filtre === "best" ? "Panier au meilleur prix" : "Panier chez " + ENSEIGNES.find(e => e.id === filtre).nom), React.createElement("span", {
    style: S.totalBig
  }, euro(fullTotal))), React.createElement("div", {
    style: S.totalSmall
  }, React.createElement("span", null, "D\xE9j\xE0 dans le panier"), React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "#a8d49a"
    }
  }, euro(cartTotal))), React.createElement("div", {
    style: S.totalSmall
  }, React.createElement("span", null, "Reste \xE0 acheter"), React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "#f0c89a"
    }
  }, euro(fullTotal - cartTotal))), filtre === "best" && React.createElement(React.Fragment, null, React.createElement("div", {
    style: S.compareTitle
  }, "Si tu fais tout dans un seul magasin :"), React.createElement("div", {
    style: S.compareRow
  }, totalParEnseigne.map(e => {
    const isBest = e.id === moinsCherEnseigne.id;
    return React.createElement("div", {
      key: e.id,
      style: {
        ...S.compareCard,
        ...(isBest ? S.compareCardBest : {})
      },
      onClick: () => setFiltre(e.id)
    }, React.createElement("span", {
      style: {
        ...S.compareStore,
        color: isBest ? "#3c5a2a" : "#fff"
      }
    }, e.nom, isBest && " 🏆"), React.createElement("span", {
      style: {
        ...S.compareVal,
        color: isBest ? "#3c5a2a" : "#fff"
      }
    }, euro(e.total)));
  }))), React.createElement("div", {
    style: {
      ...S.budgetNote,
      color: fullTotal > TOTAL_BUDGET ? "#c0392b" : "#5a7d3a"
    }
  }, fullTotal > TOTAL_BUDGET ? "⚠ " + euro(fullTotal - TOTAL_BUDGET) + " au-dessus du budget" : "✓ Dans le budget (" + euro(TOTAL_BUDGET - fullTotal) + " de marge)")), React.createElement("button", {
    style: S.validerBtn,
    onClick: validerCourses
  }, "\u2713 Valider mes courses (archiver dans l'historique)"), React.createElement("p", {
    style: S.disclaimer
  }, "Prix ", React.createElement("b", null, "Lidl r\xE9els"), " (ticket Marignane, 25/05/2026). Les 4 autres enseignes sont des ", React.createElement("b", null, "estimations indicatives"), ", variables selon magasin, r\xE9gion et saison. Touche une enseigne pour la ", React.createElement("b", null, "vue \xE9pur\xE9e"), ". Articles ", React.createElement("b", null, "ADO"), " pour l'ado et la sportive.")), tab === "histo" && React.createElement("div", {
    style: S.fadeIn
  }, React.createElement("div", {
    style: S.histoSection
  }, React.createElement("h2", {
    style: S.histoTitle
  }, "\u2744\uFE0F Recettes hiver (archiv\xE9es)"), React.createElement("p", {
    style: S.histoSub
  }, "Touche un jour pour voir les d\xE9tails de la recette."), Object.keys(RECETTES_HIVER).map(j => {
    const r = RECETTES_HIVER[j];
    const open = openHiver === j;
    return React.createElement("div", {
      key: j,
      style: S.card
    }, React.createElement("div", {
      style: {
        ...S.histoRecipeRow,
        cursor: "pointer",
        padding: "13px 16px"
      },
      onClick: () => setOpenHiver(open ? null : j)
    }, React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, r.emoji), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("div", {
      style: S.histoRecipeJour
    }, j), React.createElement("div", {
      style: S.histoRecipeTitre
    }, r.titre)), React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 4
      }
    }, r.kcal && React.createElement("span", {
      style: S.kcalBadgeSmall
    }, "\uD83D\uDD25 ", r.kcal.toi, " kcal"), React.createElement("span", {
      style: {
        color: "#c0b8a8",
        fontSize: 18,
        lineHeight: 0.5,
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform 0.2s"
      }
    }, "\u2304"))), open && React.createElement("div", {
      style: {
        borderTop: "1px solid #f0ebde",
        padding: "16px"
      }
    }, React.createElement("div", {
      style: S.secTitle
    }, "Ingr\xE9dients"), React.createElement("ul", null, r.ingredients.map((ing, i) => React.createElement("li", {
      key: i,
      style: S.li
    }, React.createElement("span", {
      style: S.dot
    }), ing))), React.createElement("div", {
      style: {
        ...S.secTitle,
        marginTop: 14
      }
    }, "Pr\xE9paration"), React.createElement("ol", null, r.etapes.map((e, i) => React.createElement("li", {
      key: i,
      style: S.stepLi
    }, React.createElement("span", {
      style: S.stepNum
    }, i + 1, "."), React.createElement("span", null, e)))), React.createElement("div", {
      style: {
        ...S.secTitle,
        marginTop: 14
      }
    }, "Portions"), React.createElement("div", {
      style: S.portionGrid
    }, React.createElement("div", {
      style: {
        ...S.portion,
        borderLeftColor: "#3c5a2a"
      }
    }, React.createElement("span", {
      style: {
        ...S.portionWho,
        color: "#3c5a2a"
      }
    }, "Toi \xB7 d\xE9ficit ", r.kcal && "· " + r.kcal.toi + " kcal"), React.createElement("span", {
      style: S.portionTxt
    }, r.portions.toi)), React.createElement("div", {
      style: {
        ...S.portion,
        borderLeftColor: "#c97b3d"
      }
    }, React.createElement("span", {
      style: {
        ...S.portionWho,
        color: "#c97b3d"
      }
    }, "Ta fille \xB7 crossfit ", r.kcal && "· " + r.kcal.fille + " kcal"), React.createElement("span", {
      style: S.portionTxt
    }, r.portions.fille)), React.createElement("div", {
      style: {
        ...S.portion,
        borderLeftColor: "#8aa86a"
      }
    }, React.createElement("span", {
      style: {
        ...S.portionWho,
        color: "#5a7d3a"
      }
    }, "Ton fils \xB7 15 ans ", r.kcal && "· " + r.kcal.fils + " kcal"), React.createElement("span", {
      style: S.portionTxt
    }, r.portions.fils)))));
  })), React.createElement("div", {
    style: S.histoSection
  }, React.createElement("h2", {
    style: S.histoTitle
  }, "\uD83D\uDED2 Liste de courses hiver"), React.createElement("p", {
    style: S.histoSub
  }, "Prices Lidl r\xE9els (ticket Marignane, 25/05/2026)."), SHOPPING_HIVER.map(cat => {
    const total = cat.items.reduce((s, i) => s + (i.prix.lidl || 0) * i.qte, 0);
    return React.createElement("div", {
      key: cat.id,
      style: {
        marginBottom: 14
      }
    }, React.createElement("div", {
      style: S.catHead
    }, React.createElement("span", {
      style: S.catEmoji
    }, cat.emoji), React.createElement("h3", {
      style: S.catName
    }, cat.nom), React.createElement("span", {
      style: S.catBadge
    }, cat.items.length, " articles"), React.createElement("span", {
      style: S.catBudget
    }, total.toFixed(2).replace(".", ","), " \u20AC")), React.createElement("div", {
      style: S.courseList
    }, cat.items.map(item => React.createElement("div", {
      key: item.id,
      style: {
        ...S.courseItem,
        cursor: "default"
      }
    }, React.createElement("span", {
      style: {
        fontSize: 15,
        flex: 1,
        color: "#3a3a2a"
      }
    }, item.label, React.createElement("span", {
      style: {
        color: "#a4a48f",
        fontSize: 12,
        marginLeft: 6
      }
    }, "\xD7 ", item.qte, " ", item.unite)), React.createElement("span", {
      style: {
        ...S.linePrice,
        color: "#5a7d3a"
      }
    }, item.prix.lidl > 0 ? (item.prix.lidl * item.qte).toFixed(2).replace(".", ",") + " €" : "stock")))));
  }), React.createElement("div", {
    style: {
      ...S.totalBox,
      marginTop: 8
    }
  }, React.createElement("div", {
    style: S.totalRow
  }, React.createElement("span", {
    style: S.totalLbl
  }, "Total liste hiver (Lidl)"), React.createElement("span", {
    style: S.totalBig
  }, SHOPPING_HIVER.reduce((s, c) => s + c.items.reduce((ss, i) => ss + (i.prix.lidl || 0) * i.qte, 0), 0).toFixed(2).replace(".", ","), " \u20AC")))), React.createElement("div", {
    style: S.histoSection
  }, React.createElement("h2", {
    style: S.histoTitle
  }, "\u2705 Courses valid\xE9es"), history.courses.length === 0 ? React.createElement("p", {
    style: S.histoEmpty
  }, "Valide ta liste depuis l'onglet Courses pour l'archiver ici.") : history.courses.map((c, i) => {
    const d = new Date(c.date);
    const dateStr = d.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long"
    });
    const heure = d.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return React.createElement("div", {
      key: i,
      style: S.card
    }, React.createElement("div", {
      style: S.histoCourseHead
    }, React.createElement("div", null, React.createElement("div", {
      style: S.histoCourseDate
    }, dateStr), React.createElement("div", {
      style: S.histoCourseMeta
    }, heure, " \xB7 ", c.enseigne, " \xB7 ", c.saison || "Été")), React.createElement("div", {
      style: S.histoCourseTotal
    }, c.total.toFixed(2).replace(".", ","), " \u20AC")), React.createElement("div", {
      style: S.histoCourseBody
    }, React.createElement("span", {
      style: S.histoCourseCount
    }, c.nbArticles, " articles :"), " ", c.articles.map(a => a.label + (a.qte > 1 ? " ×" + a.qte : "")).join(" · ")));
  }), history.courses.length > 0 && React.createElement("button", {
    style: S.histoClearBtn,
    onClick: () => {
      if (window.confirm("Effacer tout l'historique ?")) setHistory(h => ({
        ...h,
        courses: []
      }));
    }
  }, "\uD83D\uDDD1 Effacer l'historique des courses valid\xE9es")), React.createElement("div", {
    style: S.histoSection
  }, React.createElement("h2", {
    style: S.histoTitle
  }, "\uD83C\uDF7D\uFE0F Recettes consult\xE9es"), history.recettes.length === 0 ? React.createElement("p", {
    style: S.histoEmpty
  }, "Les recettes que tu ouvres dans l'onglet Recettes appara\xEEtront ici.") : React.createElement("div", {
    style: S.card
  }, React.createElement("div", {
    style: S.cardBody
  }, history.recettes.map((r, i) => {
    const d = new Date(r.date);
    const dateStr = d.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short"
    });
    return React.createElement("div", {
      key: i,
      style: {
        ...S.histoRecipeRow,
        padding: "9px 0",
        borderBottom: "1px solid #f0ebde"
      }
    }, React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, r.emoji), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("div", {
      style: S.histoRecipeJour
    }, r.jour), React.createElement("div", {
      style: S.histoRecipeTitre
    }, r.titre)), React.createElement("span", {
      style: S.histoRecipeDate
    }, dateStr));
  }))))), React.createElement("footer", {
    style: S.footer
  }, "Nutri-Claude \xB7 plan personnalis\xE9 \xB7 pas une prescription m\xE9dicale")));
}
const CREAM = "#ede4d0",
  CARD = "#fffdf7",
  OLIVE = "#3c5a2a",
  OLIVE_TXT = "#4a5d2e",
  TERRA = "#c97b3d";
const S = {
  page: {
    minHeight: "100vh",
    background: CREAM,
    fontFamily: "'Karla', sans-serif",
    paddingBottom: 80
  },
  shell: {
    maxWidth: 540,
    margin: "0 auto",
    padding: "0 14px"
  },
  savedWrap: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 12
  },
  savedBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    color: OLIVE,
    fontWeight: 700
  },
  savedDot: {
    width: 8,
    height: 8,
    borderRadius: 99,
    transition: "background 0.3s"
  },
  header: {
    textAlign: "center",
    padding: "14px 0 10px"
  },
  title: {
    fontFamily: "'Fraunces', serif",
    fontSize: 30,
    lineHeight: 1.05,
    margin: 0,
    color: OLIVE,
    fontWeight: 900,
    letterSpacing: "-0.01em"
  },
  sub: {
    margin: "6px 0 0",
    color: OLIVE_TXT,
    fontSize: 13,
    fontStyle: "italic",
    fontFamily: "'Fraunces', serif"
  },
  leafWrap: {
    borderTop: "1px solid #cfc4ab",
    margin: "12px 0 0",
    position: "relative",
    height: 1
  },
  leaf: {
    position: "absolute",
    top: -16,
    left: "50%",
    transform: "translateX(-50%)",
    background: CREAM,
    padding: "0 14px",
    fontSize: 22
  },
  tabs: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    background: CARD,
    borderTop: "1px solid #e8e0d0",
    boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
    zIndex: 100,
    paddingBottom: "env(safe-area-inset-bottom, 0px)"
  },
  tab: {
    flex: 1,
    padding: "10px 4px 8px",
    border: "none",
    background: "transparent",
    fontSize: 11,
    fontWeight: 700,
    color: "#a4a48f",
    cursor: "pointer",
    transition: "all 0.2s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    letterSpacing: "0.02em"
  },
  tabOn: {
    color: OLIVE
  },
  tabIcon: {
    fontSize: 22,
    lineHeight: 1
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  },
  fadeIn: {
    animation: "fade 0.3s ease"
  },
  daysScroll: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    padding: "4px 16px 14px",
    margin: "0 -16px",
    scrollbarWidth: "none"
  },
  dayPill: {
    flexShrink: 0,
    padding: "13px 22px",
    borderRadius: 16,
    border: "none",
    background: CARD,
    color: OLIVE,
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    transition: "all 0.15s",
    display: "flex",
    alignItems: "center",
    gap: 7
  },
  dayPillOn: {
    background: OLIVE,
    color: "#fff",
    boxShadow: "0 4px 12px rgba(60,90,42,0.3)"
  },
  dayPillToday: {
    boxShadow: "0 0 0 2px " + TERRA
  },
  todayDot: {
    width: 6,
    height: 6,
    borderRadius: 99,
    flexShrink: 0
  },
  todayBadge: {
    fontFamily: "'Karla', sans-serif",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#fff",
    background: TERRA,
    padding: "4px 10px",
    borderRadius: 99,
    marginLeft: 12,
    verticalAlign: "middle",
    display: "inline-block"
  },
  dayTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: 44,
    fontWeight: 900,
    color: OLIVE,
    margin: "18px 0 0",
    lineHeight: 1
  },
  daySub: {
    fontFamily: "'Fraunces', serif",
    fontStyle: "italic",
    fontSize: 17,
    color: OLIVE_TXT,
    margin: "8px 0 20px"
  },
  card: {
    background: CARD,
    borderRadius: 20,
    marginBottom: 16,
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)"
  },
  cardHead: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "18px 20px"
  },
  cardEmoji: {
    fontSize: 30
  },
  cardType: {
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: TERRA,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  cardTitre: {
    fontFamily: "'Fraunces', serif",
    fontSize: 23,
    fontWeight: 700,
    color: "#2b2b1f",
    marginTop: 2,
    lineHeight: 1.1
  },
  plaisirTag: {
    fontSize: 10,
    background: "#f4e0cd",
    color: TERRA,
    padding: "2px 8px",
    borderRadius: 99,
    fontWeight: 700,
    letterSpacing: "0.05em"
  },
  cardBody: {
    padding: "20px",
    borderTop: "1px solid #efe9da"
  },
  kcalBadge: {
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "baseline",
    gap: 3,
    background: "#f4e9d8",
    color: "#b5662e",
    fontFamily: "'Fraunces', serif",
    fontSize: 16,
    fontWeight: 900,
    padding: "5px 10px",
    borderRadius: 10
  },
  kcalUnit: {
    fontSize: 10,
    fontWeight: 700,
    fontFamily: "'Karla', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  },
  protBadge: {
    fontSize: 12,
    fontWeight: 700,
    color: "#3c5a2a",
    background: "#dcebcf",
    padding: "3px 9px",
    borderRadius: 10
  },
  portionKcal: {
    fontWeight: 700,
    opacity: 0.85
  },
  dayKcal: {
    display: "flex",
    alignItems: "flex-start",
    gap: 9,
    background: "#f4e9d8",
    borderRadius: 12,
    padding: "11px 15px",
    margin: "0 0 22px",
    color: "#7a4a22",
    fontSize: 14
  },
  dayKcalFire: {
    fontSize: 18,
    flexShrink: 0,
    marginTop: 2
  },
  dayKcalDetail: {
    color: "#a07a4a",
    fontSize: 12,
    fontWeight: 500
  },
  dayProtBadge: {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 700,
    padding: "3px 9px",
    borderRadius: 99,
    marginTop: 6
  },
  noteBox: {
    background: "#f4efe2",
    borderRadius: 10,
    padding: "10px 13px",
    fontSize: 13.5,
    color: "#6b6b50",
    marginBottom: 18,
    lineHeight: 1.4
  },
  secTitle: {
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: OLIVE,
    fontWeight: 700,
    marginBottom: 12
  },
  li: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 16,
    color: "#3a3a2a",
    padding: "5px 0",
    lineHeight: 1.4
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 99,
    background: TERRA,
    flexShrink: 0
  },
  stepLi: {
    display: "flex",
    gap: 10,
    fontSize: 16,
    color: "#3a3a2a",
    padding: "7px 0",
    lineHeight: 1.45,
    alignItems: "flex-start"
  },
  stepNum: {
    color: OLIVE,
    fontWeight: 700,
    flexShrink: 0,
    fontFamily: "'Fraunces', serif",
    fontSize: 17
  },
  portionGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 9
  },
  portion: {
    background: "#f7f3e8",
    borderLeft: "3px solid",
    borderRadius: "0 10px 10px 0",
    padding: "10px 13px",
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  portionWho: {
    fontSize: 11.5,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  },
  portionTxt: {
    fontSize: 15,
    color: "#3a3a2a",
    lineHeight: 1.3
  },
  statsRow: {
    display: "flex",
    gap: 11,
    marginBottom: 14
  },
  statCard: {
    flex: 1,
    background: CARD,
    borderRadius: 16,
    padding: "18px 8px",
    textAlign: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)"
  },
  statNum: {
    display: "block",
    fontFamily: "'Fraunces', serif",
    fontSize: 30,
    fontWeight: 900,
    color: OLIVE,
    lineHeight: 1
  },
  statLbl: {
    display: "block",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#a4a48f",
    marginTop: 6,
    fontWeight: 700
  },
  actions: {
    display: "flex",
    gap: 8,
    marginBottom: 22,
    flexWrap: "wrap"
  },
  actBtn: {
    flex: 1,
    minWidth: 95,
    padding: "11px 8px",
    borderRadius: 12,
    border: "1px solid #d6cdb5",
    background: CARD,
    fontSize: 13,
    fontWeight: 700,
    color: OLIVE_TXT,
    cursor: "pointer"
  },
  actBtnDanger: {
    color: "#c0392b",
    borderColor: "#e3c4bd"
  },
  deleteBtn: {
    flexShrink: 0,
    width: 26,
    height: 26,
    border: "none",
    borderRadius: 99,
    background: "#f0e8e8",
    color: "#c0392b",
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
    lineHeight: 1
  },
  restoreBtn: {
    width: "100%",
    padding: "11px",
    borderRadius: 12,
    border: "1px solid #d6cdb5",
    background: "#f7f3e8",
    color: OLIVE,
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6
  },
  filterLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#a4a48f",
    fontWeight: 700,
    margin: "0 4px 9px"
  },
  filterScroll: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    padding: "0 16px 4px",
    margin: "0 -16px 14px",
    scrollbarWidth: "none"
  },
  filterPill: {
    flexShrink: 0,
    padding: "10px 16px",
    borderRadius: 13,
    border: "none",
    background: CARD,
    color: OLIVE,
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    transition: "all 0.15s"
  },
  filterPillOn: {
    background: OLIVE,
    color: "#fff",
    boxShadow: "0 4px 12px rgba(60,90,42,0.3)"
  },
  filterActive: {
    background: "#f4e9d8",
    borderRadius: 10,
    padding: "9px 13px",
    fontSize: 13,
    color: "#7a4a22",
    marginBottom: 16,
    lineHeight: 1.4
  },
  catHead: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 9,
    padding: "0 4px"
  },
  catEmoji: {
    fontSize: 21
  },
  catName: {
    fontFamily: "'Fraunces', serif",
    fontSize: 20,
    margin: 0,
    color: "#2b2b1f",
    fontWeight: 700,
    flex: 1
  },
  catBadge: {
    fontSize: 12,
    fontWeight: 700,
    padding: "3px 10px",
    borderRadius: 99,
    background: "#e0d6bf",
    color: OLIVE
  },
  courseList: {
    background: CARD,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)"
  },
  courseItem: {
    display: "flex",
    alignItems: "center",
    gap: 11,
    padding: "12px 13px",
    borderBottom: "1px solid #f0ebde",
    transition: "background 0.15s"
  },
  box: {
    flexShrink: 0,
    width: 25,
    height: 25,
    borderRadius: 8,
    border: "2px solid #d2d0bf",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.15s"
  },
  tick: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 1
  },
  itemLabel: {
    fontSize: 15,
    lineHeight: 1.25,
    fontWeight: 500,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap"
  },
  adoTag: {
    fontSize: 9,
    background: "#f4e0cd",
    color: TERRA,
    padding: "1px 6px",
    borderRadius: 99,
    fontWeight: 700,
    letterSpacing: "0.05em"
  },
  itemMeta: {
    fontSize: 12,
    color: "#a4a48f",
    marginTop: 2
  },
  priceRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 5,
    marginTop: 5
  },
  priceChip: {
    fontSize: 11,
    color: "#8a8770",
    background: "#f1ecdf",
    padding: "2px 7px",
    borderRadius: 7,
    fontWeight: 600,
    whiteSpace: "nowrap"
  },
  priceChipBest: {
    background: "#dcebcf",
    color: "#3c5a2a",
    fontWeight: 800,
    boxShadow: "0 0 0 1.5px #8aa86a inset"
  },
  priceStore: {
    fontWeight: 800,
    opacity: 0.75
  },
  priceUnit: {
    fontSize: 11,
    color: "#b0ad98",
    fontStyle: "italic"
  },
  compareTitle: {
    fontSize: 12.5,
    opacity: 0.85,
    marginTop: 16,
    marginBottom: 9,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontWeight: 700
  },
  compareRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  },
  compareCard: {
    flex: "1 1 28%",
    minWidth: 90,
    background: "rgba(255,255,255,0.12)",
    borderRadius: 12,
    padding: "11px 8px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    cursor: "pointer"
  },
  compareCardBest: {
    background: "rgba(255,255,255,0.95)"
  },
  compareStore: {
    fontSize: 12,
    fontWeight: 700,
    opacity: 0.9
  },
  compareVal: {
    fontFamily: "'Fraunces', serif",
    fontSize: 18,
    fontWeight: 900
  },
  stepper: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    background: "#f1ecdf",
    borderRadius: 9,
    padding: 2,
    flexShrink: 0
  },
  stepBtn: {
    width: 27,
    height: 27,
    border: "none",
    borderRadius: 7,
    background: CARD,
    color: OLIVE,
    fontSize: 17,
    fontWeight: 700,
    cursor: "pointer",
    lineHeight: 1,
    boxShadow: "0 1px 2px rgba(0,0,0,0.08)"
  },
  stepQte: {
    minWidth: 22,
    textAlign: "center",
    fontSize: 14,
    fontWeight: 700,
    color: "#3a3a2a"
  },
  linePrice: {
    fontSize: 13,
    color: OLIVE_TXT,
    fontWeight: 700,
    flexShrink: 0,
    minWidth: 48,
    textAlign: "right"
  },
  totalBox: {
    background: OLIVE,
    borderRadius: 18,
    padding: "20px",
    color: "#fff",
    marginTop: 8,
    boxShadow: "0 8px 24px rgba(60,90,42,0.25)"
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 12
  },
  totalLbl: {
    fontSize: 15,
    opacity: 0.9
  },
  totalBig: {
    fontFamily: "'Fraunces', serif",
    fontSize: 32,
    fontWeight: 900
  },
  totalSmall: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14,
    padding: "6px 0",
    borderTop: "1px solid rgba(255,255,255,0.15)"
  },
  budgetNote: {
    marginTop: 13,
    padding: "10px 12px",
    background: "rgba(255,255,255,0.94)",
    borderRadius: 10,
    fontSize: 13.5,
    fontWeight: 700,
    textAlign: "center"
  },
  disclaimer: {
    fontSize: 12.5,
    color: "#8a8770",
    lineHeight: 1.5,
    marginTop: 16,
    padding: "0 4px"
  },
  validerBtn: {
    width: "100%",
    marginTop: 18,
    padding: "15px",
    borderRadius: 14,
    border: "none",
    background: OLIVE,
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(60,90,42,0.25)"
  },
  histoSection: {
    marginBottom: 26
  },
  histoTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: 24,
    fontWeight: 900,
    color: OLIVE,
    margin: "0 0 4px"
  },
  histoSub: {
    fontSize: 13.5,
    color: "#8a8770",
    margin: "0 0 12px",
    fontStyle: "italic"
  },
  histoEmpty: {
    fontSize: 14,
    color: "#8a8770",
    background: CARD,
    borderRadius: 14,
    padding: "18px",
    textAlign: "center",
    lineHeight: 1.5
  },
  histoRecipeRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "9px 0",
    borderBottom: "1px solid #f0ebde"
  },
  histoRecipeJour: {
    fontFamily: "'Fraunces', serif",
    fontSize: 15,
    fontWeight: 700,
    color: OLIVE
  },
  histoRecipeTitre: {
    fontSize: 13.5,
    color: "#5b6b5b"
  },
  histoRecipeDate: {
    fontSize: 12,
    color: "#a4a48f",
    fontWeight: 700,
    flexShrink: 0
  },
  histoCourseHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "14px 16px",
    gap: 10
  },
  histoCourseDate: {
    fontFamily: "'Fraunces', serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#2b2b1f",
    textTransform: "capitalize"
  },
  histoCourseMeta: {
    fontSize: 12.5,
    color: "#a4a48f",
    marginTop: 2,
    textTransform: "capitalize"
  },
  histoCourseTotal: {
    fontFamily: "'Fraunces', serif",
    fontSize: 22,
    fontWeight: 900,
    color: OLIVE,
    flexShrink: 0
  },
  histoCourseBody: {
    padding: "0 16px 14px",
    fontSize: 13,
    color: "#5b6b5b",
    lineHeight: 1.5,
    borderTop: "1px solid #f0ebde",
    paddingTop: 12
  },
  histoCourseCount: {
    fontWeight: 700,
    color: TERRA
  },
  histoClearBtn: {
    width: "100%",
    marginTop: 6,
    padding: "11px",
    borderRadius: 12,
    border: "1px solid #e3c4bd",
    background: CARD,
    color: "#c0392b",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer"
  },
  footer: {
    textAlign: "center",
    color: "#9a9580",
    fontSize: 11.5,
    marginTop: 20,
    marginBottom: 10,
    fontStyle: "italic",
    fontFamily: "'Fraunces', serif"
  },
  kcalBadgeSmall: {
    fontSize: 11,
    fontWeight: 700,
    color: "#b5662e",
    background: "#f4e9d8",
    padding: "3px 8px",
    borderRadius: 8
  }
};
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));