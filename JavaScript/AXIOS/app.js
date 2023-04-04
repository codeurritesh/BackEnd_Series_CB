axios.get('https://catfact.ninja/fact').then((res) => {
    console.log(res.data.fact);// Here Data is stored in res.data
})