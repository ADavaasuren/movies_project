export const state = () => ({
    popular: []
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    updatePopular: (state, data) => {
        state.popular = data
    }
}

export const actions = {
   async getPopular({ 
        state,
        commit 
    }) {
      if (state.popular.length) return
      try {
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${PRIVATE_KEY}`, {
            headers: {
                'Content-Type': 'application/json',
                'api_key': process.env.PRIVATE_KEY
            }
            }) 
            .then(response => response.json())
            .then(data => {
                console.log(data)
                commit('updatePopular', data)
            })
 
        } catch (err) {
          console.log(err)
        }
    }
}