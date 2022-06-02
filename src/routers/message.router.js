import Router from 'koa-router'
import MessageController from '../controllers/message.controller.js'

const router = new Router()
const endpoint = '/message'


router.post(endpoint, MessageController.receiveMessage)

export default router