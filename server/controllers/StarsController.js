import { starsService } from "../services/StarsService.js"
import BaseController from "../utils/BaseController.js"


export class StarsController extends BaseController {

  constructor() {
    super('api/stars')
    this.router
      .get('', this.getStars)
      .post('', this.createStar)
  }

  async createStar(req, res, next) {
    try {
      let starData = req.body
      let star = await starsService.createStar(starData)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getStars(req, res, next) {
    try {
      let stars = await starsService.getStars()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }


}
