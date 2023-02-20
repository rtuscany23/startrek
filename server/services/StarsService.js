import { dbContext } from "../db/DbContext.js"

class StarsService {
  async createStar(starData) {
    const star = await dbContext.Star.create(starData)
    return star
  }

  async getStars() {
    const stars = await dbContext.Star.find()
    return stars
  }
}

export const starsService = new StarsService()
