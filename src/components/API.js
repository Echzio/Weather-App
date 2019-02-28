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
          throw new Error();
        }
      })
      .then(success => {
        if (success) {
          success['loadingProgress'] = 100;
          return data(success);
        } else {
          throw new Error();
        }
      });
  } catch (e) {
    let error = {
      loadingProgress: 0,
    };
    data(error);
    return data;
  }
};

export default GetWeatherApi;
