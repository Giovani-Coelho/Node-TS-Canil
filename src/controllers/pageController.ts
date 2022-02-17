import { Request, Response } from "express"
import { creatMenuObject } from "../helpers/createMenuObject"
import { Pet } from "../models/pet"

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll()

  res.render("pages/page", {
    menu: creatMenuObject("all"),
    banner: {
      tittle: "Todos os animais",
      background: "allanimals.jpg",
    },
    list,
  })
}

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType("dog")

  res.render("pages/page", {
    menu: creatMenuObject("dog"),
    banner: {
      tittle: "dogs",
      background: "banner_dog.jpg",
    },
    list,
  })
}

export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType("cat")

  res.render("pages/page", {
    menu: creatMenuObject("cat"),
    banner: {
      tittle: "Gatos",
      background: "banner_cat.jpg",
    },
    list,
  })
}

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType("fish")

  res.render("pages/page", {
    menu: creatMenuObject("fish"),
    banner: {
      tittle: "Peixes",
      background: "banner_fish.jpg",
    },
    list,
  })
}
