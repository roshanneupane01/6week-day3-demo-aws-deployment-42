

const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('/api/cat')
    .then((res) => alert(res.data))
    .catch((err) => alert("There was turbulence"))
}

btn.addEventListener('click', clickHandler)