import { Router } from "express"
import * as PageController from "../controllers/pageController"
import * as SearchController from "../controllers/searchController"

// express.Routerclasse para criar manipuladores de rotas modulares e montáveis.
const router = Router()

router.get("/", PageController.home)
router.get("/dogs", PageController.dogs)
router.get("/cats", PageController.cats)
router.get("/fishes", PageController.fishes)

router.get("/search", SearchController.search)

export default router
