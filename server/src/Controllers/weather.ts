import { Request, Response } from "express";

class Weather {
  public  getWeather(_:Request, res: Response) {
    return res.status(200).json({
      "temp": 25,
      "description": "Sunny"
    });

  }
}

export default new Weather();