const images = {
    game: {
        [1]: {
            backgrounds: {
                [1]: require("../assets/game/1/background/1.webp"),
                [2]: require("../assets/game/1/background/2.webp"),
                [3]: require("../assets/game/1/background/3.webp"),
            },
            objectives: {
                [1]: { url: require("../assets/game/1/objectives/coelho_1a.webp"), width: 35, height: 55 },
                [2]: { url: require("../assets/game/1/objectives/coelho_1b.webp"), width: 35, height: 55 },
                [3]: { url: require("../assets/game/1/objectives/coelho_2a.webp"), width: 35, height: 55 },
                [4]: { url: require("../assets/game/1/objectives/coelho_2b.webp"), width: 35, height: 55 },
                [5]: { url: require("../assets/game/1/objectives/coelho_3a.webp"), width: 35, height: 55 },
                [6]: { url: require("../assets/game/1/objectives/coelho_3b.webp"), width: 35, height: 55 },
                [7]: { url: require("../assets/game/1/objectives/coelho_4a.webp"), width: 35, height: 55 },
                [8]: { url: require("../assets/game/1/objectives/coelho_4b.webp"), width: 35, height: 55 },
                [9]: { url: require("../assets/game/1/objectives/coelho_5a.webp"), width: 35, height: 55 },
                [10]: { url: require("../assets/game/1/objectives/coelho_5b.webp"), width: 35, height: 55 },
                [11]: { url: require("../assets/game/1/objectives/ovo_1.webp"), width: 25, height: 37 },
                [12]: { url: require("../assets/game/1/objectives/ovo_2.webp"), width: 25, height: 37 },
                [13]: { url: require("../assets/game/1/objectives/ovo_3.webp"), width: 25, height: 37 },
                [14]: { url: require("../assets/game/1/objectives/ovo_4.webp"), width: 25, height: 37 },
                [15]: { url: require("../assets/game/1/objectives/ovo_5.webp"), width: 25, height: 37 },
                [16]: { url: require("../assets/game/1/objectives/ovo_6.webp"), width: 25, height: 37 },
                [17]: { url: require("../assets/game/1/objectives/ovo_7.webp"), width: 25, height: 37 },
                [18]: { url: require("../assets/game/1/objectives/ovo_8.webp"), width: 25, height: 37 },
                [19]: { url: require("../assets/game/1/objectives/ovo_9.webp"), width: 25, height: 37 },
                [20]: { url: require("../assets/game/1/objectives/ovo_10.webp"), width: 25, height: 37 },
                [21]: { url: require("../assets/game/1/objectives/ovo_11.webp"), width: 25, height: 37 },
                [22]: { url: require("../assets/game/1/objectives/ovo_12.webp"), width: 25, height: 37 },
            },
            scenery: {
                [1]: { url: require("../assets/game/1/scenery/arbusto_5.webp"), width: 75, height: 40 },
                [2]: { url: require("../assets/game/1/scenery/arbusto_4.webp"), width: 75, height: 50 },
                [3]: { url: require("../assets/game/1/scenery/arbusto_3.webp"), width: 55, height: 50 },
                [4]: { url: require("../assets/game/1/scenery/arbusto_2.webp"), width: 65, height: 50 },
                [5]: { url: require("../assets/game/1/scenery/arbusto_1.webp"), width: 75, height: 50 },
                [6]: { url: require("../assets/game/1/scenery/arvore_1.webp"), width: 95, height: 120 },
                [7]: { url: require("../assets/game/1/scenery/arvore_2.webp"), width: 95, height: 130 },
                [8]: { url: require("../assets/game/1/scenery/arvore_3.webp"), width: 70, height: 80 },
                [9]: { url: require("../assets/game/1/scenery/arvore_4.webp"), width: 95, height: 125 },
                [10]: { url: require("../assets/game/1/scenery/arvore_5.webp"), width: 95, height: 110 },
                [11]: { url: require("../assets/game/1/scenery/arvore_6.webp"), width: 95, height: 130 },
                [12]: { url: require("../assets/game/1/scenery/arvore_7.webp"), width: 95, height: 80 },
                [13]: { url: require("../assets/game/1/scenery/arvore_8.webp"), width: 90, height: 90 },
            },
            props: {
                [1]: { url: require("../assets/game/1/props/animal_aranha.webp"), width: 25, height: 15 },
                [2]: { url: require("../assets/game/1/props/animal_borboleta.webp"), width: 25, height: 23 },
                [3]: { url: require("../assets/game/1/props/animal_cachorro.webp"), width: 35, height: 55 },
                [4]: { url: require("../assets/game/1/props/animal_caracol.webp"), width: 30, height: 23 },
                [5]: { url: require("../assets/game/1/props/animal_esquilo.webp"), width: 47, height: 40 },
                [6]: { url: require("../assets/game/1/props/animal_galinha.webp"), width: 35, height: 47 },
                [7]: { url: require("../assets/game/1/props/animal_joaninha.webp"), width: 25, height: 20 },
                [8]: { url: require("../assets/game/1/props/animal_lagartixa.webp"), width: 35, height: 30 },
                [9]: { url: require("../assets/game/1/props/animal_macaco.webp"), width: 60, height: 80 },
                [10]: { url: require("../assets/game/1/props/animal_minhoca.webp"), width: 27, height: 15 },
                [11]: { url: require("../assets/game/1/props/animal_peixe.webp"), width: 30, height: 23 },
                [12]: { url: require("../assets/game/1/props/animal_raposa.webp"), width: 50, height: 55 },
                [13]: { url: require("../assets/game/1/props/animal_sapo.webp"), width: 40, height: 40 },
                [14]: { url: require("../assets/game/1/props/passaro_1.webp"), width: 40, height: 40 },
                [15]: { url: require("../assets/game/1/props/passaro_2.webp"), width: 40, height: 40 },
                [16]: { url: require("../assets/game/1/props/passaro_3.webp"), width: 40, height: 40 },
                [17]: { url: require("../assets/game/1/props/passaro_4.webp"), width: 40, height: 40 },
                [18]: { url: require("../assets/game/1/props/passaro_5.webp"), width: 40, height: 40 },
                [19]: { url: require("../assets/game/1/props/bola_futebol_1.webp"), width: 35, height: 35 },
                [20]: { url: require("../assets/game/1/props/bola_futebol_2.webp"), width: 35, height: 35 },
                [21]: { url: require("../assets/game/1/props/bola_futebol_3.webp"), width: 35, height: 35 },
                [22]: { url: require("../assets/game/1/props/bola_futebol_4.webp"), width: 35, height: 35 },
                [23]: { url: require("../assets/game/1/props/bola_futebol_5.webp"), width: 35, height: 35 },
                [24]: { url: require("../assets/game/1/props/bola_praia.webp"), width: 35, height: 35 },
                [25]: { url: require("../assets/game/1/props/bola_volei.webp"), width: 35, height: 35 },
                [26]: { url: require("../assets/game/1/props/bola_basquete.webp"), width: 35, height: 35 },
                [27]: { url: require("../assets/game/1/props/comida_algodao_doce.webp"), width: 40, height: 40 },
                [28]: { url: require("../assets/game/1/props/comida_bolo.webp"), width: 50, height: 32 },
                [29]: { url: require("../assets/game/1/props/comida_bom_bom.webp"), width: 30, height: 15 },
                [30]: { url: require("../assets/game/1/props/comida_brigadeiro.webp"), width: 37, height: 35 },
                [31]: { url: require("../assets/game/1/props/comida_cheesecake.webp"), width: 50, height: 25 },
                [32]: { url: require("../assets/game/1/props/comida_chocolate.webp"), width: 35, height: 45 },
                [33]: { url: require("../assets/game/1/props/comida_donut.webp"), width: 30, height: 20 },
                [34]: { url: require("../assets/game/1/props/comida_pirulito.webp"), width: 22, height: 40 },
                [35]: { url: require("../assets/game/1/props/comida_pudim.webp"), width: 50, height: 32 },
                [36]: { url: require("../assets/game/1/props/comida_sorvete.webp"), width: 20, height: 35 },
            },
        },
    },

    turma: {
        [1]: {
            searching_url: require("../assets/game/1/turma/1/searching.webp"),
            found_url: require("../assets/game/1/turma/1/found.webp"),
            width: 70,
            height: 120,
        },
        [2]: {
            searching_url: require("../assets/game/1/turma/2/searching.webp"),
            found_url: require("../assets/game/1/turma/2/found.webp"),
            width: 70,
            height: 120,
        },
        [3]: {
            searching_url: require("../assets/game/1/turma/3/searching.webp"),
            found_url: require("../assets/game/1/turma/3/found.webp"),
            width: 70,
            height: 120,
        },
        [4]: {
            searching_url: require("../assets/game/1/turma/4/searching.webp"),
            found_url: require("../assets/game/1/turma/4/found.webp"),
            width: 70,
            height: 120,
        },
    },

    found: require("../assets/found.webp"),
    onPress: require("../assets/onPress.webp"),
}

export default images
