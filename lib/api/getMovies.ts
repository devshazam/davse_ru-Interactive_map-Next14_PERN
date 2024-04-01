async function getData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer ....",
      },
    };
  
    const response = fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  
    return response;
  }
  
  export default async function getMovies(id: any) {
    console.log(id)
    let promise = new Promise(function(resolve) {
        setTimeout(function() {
            let result = [1, 2, 3, 4, 5];
            resolve(result); // передаем результат
        }, 3000);
    });
    await promise
    const data = [
            
        {
            "id": 2,
            "sale": "5",
            "cost": "570",
            "title": "Сертификат на посещение спортивного комплекса",
            "latitude": "48.5022276",
            "longitude": "44.5502945",
            "currentTime": 1705311301055,
            "image": "/files/93Kb.jpg",
            "description": "Описание скидки",
            "address": "Волгоградская 8",

        },
    ]

    return data;
  }