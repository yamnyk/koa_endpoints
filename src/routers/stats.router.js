import Router from 'koa-router'
import StatsController from  '../controllers/stats.controller.js'

const router = new Router()
const endpoint = '/stats'

router.get(endpoint, StatsController.getAllStats)

export default router