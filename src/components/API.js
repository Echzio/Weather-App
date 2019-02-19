const GetWeatherApi = async (city, country, data) => {
  const API_KEY = '15ba72b97e868a4af1652fafde0edb0b';
  try {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return data({
            loadingProgress: 0,
          });
        }
      })
      .then(success => {
        success['loadingProgress'] = 100;
        return data(success);
      });
  } catch (e) {
    console.log(e);
    return data({
      loadingProgress: 0,
    });
  }
};

export default GetWeatherApi;
