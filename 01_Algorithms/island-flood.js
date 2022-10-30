// Дан двумерный остров с произвольным ландшафтом (кубики 1х1 м). Прошел дождь,  вода заполнила пустоты, а излишки вылились в океан.
// Найти количество кубиков воды, оставшейся на острове после дождя (X - земля, W - вода)
//            [X]
//     [X][W][X][X][W][W][X]
// [X][X][W][X][X][W][W][X][W][X]
// [X][X][W][X][X][W][W][X][X][X]
// [X][X][X][X][X][X][X][X][X][X]

function islandFlood(land) {
    let highM = 0
    for(let i = 0; i < land.length; i++) {
        if(land[i] > land[highM]) {
            highM = i
        }
    }

    let water = 0
    let known = 0
    for(let i = 0; i < highM; i++) {
        if(land[i] > known) {
            known = land[i]
        }
        water += known - land[i]

    }

    known = 0
    for(let i = land.length - 1; i > highM; i--) {
        if(land[i] > known) {
            known = land[i]
        }
        water += known - land[i]
    }

    console.log(water)
    return water
}


islandFlood([3,4,1,5,4,1,1,4,2,3]) // пример с картинки выше, ответ 10
islandFlood([3,1,4,3,5,1,1,3,1]) // 7
