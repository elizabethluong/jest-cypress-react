const superHeros = [
  {name: 'Dynaguy', powers: ['disintergration ray', 'fly']},
  {name: 'Apogee', powers: ['gravity control', 'fly']},
  {name: 'Dash', powers: ['speed']},
  {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
]
function getFlyingSuperHeros() {
  return superHeros.filter(hero => {
    return hero.powers.includes('fly')
  })
}

export {getFlyingSuperHeros}
