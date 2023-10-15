import { Request, Response } from "express";

class Weather {
  public async getWeather(_: Request, res: Response) {

    const apiKey = process.env.API_KEY;
    const apiURL = process.env.API_URL;
    const url = `${apiURL}?lat=44.45&lon=10&appid=${apiKey}`;
    const weather = await fetch(url);
    const weatherJSON = await weather.json()
    console.log(weatherJSON)
    return res.status(200).json(weatherJSON);

  }
}

export default new Weather();