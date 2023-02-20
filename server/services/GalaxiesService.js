import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }

  async getGalaxies() {
    const galaxies = await dbContext.Galaxy.find()
    return galaxies
  }
}

export const galaxiesService = new GalaxiesService()
