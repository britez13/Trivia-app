
export default function getQuestions(setArr) {
    fetch("https://the-trivia-api.com/questions?limit=5")
    .then( response => {
      if(response.ok) {
        return response.json()
      }
      throw response
    })
    .then(data => {

      setArr(data)

    })
    .catch( error => console.log(error))
}

