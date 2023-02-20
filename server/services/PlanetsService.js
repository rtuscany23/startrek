import { dbContext } from "../db/DbContext.js"


class PlanetsService {
  async createPlanet(planetData) {
    const planet = await dbContext.Planet.create(planetData)
    return planet
  }

  async getPlanets() {
    const planets = await dbContext.Planet.find()
    return planets
  }
}

export const planetsService = new PlanetsService()
