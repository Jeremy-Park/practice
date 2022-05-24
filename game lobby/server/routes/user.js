const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')

const { user } = new PrismaClient()

// router.get('/getAll', async (req, res) => {
//   const users = await user.findMany({
//     select: {
//       email: true,
//       password: true,
//     },
//   })

//   res.json(users)
// })

// signup
router.post('/signup', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  // need valid inputs
  if (!email || !password || email.length === 0 || password.length === 0) {
    res.json(null)
    return
  }

  // see if user exists with same email
  const foundUser = await user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  })

  // if user already exists, return null
  if (foundUser) {
    res.json(null)
    return

    // if user doesnt exist with email, create one
  } else {
    const userData = await user.create({
      data: {
        email: email,
        password: password,
      },
    })
    res.json(userData)
    return
  }
})

// signup
router.post('/signin', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  // need valid inputs
  if (!email || !password || email.length === 0 || password.length === 0) {
    res.json(null)
    return
  }

  // if sign in is valid, return user object
  const userData = await user.findFirst({
    where: {
      email: {
        equals: email,
      },
      password: {
        equals: password,
      },
    },
  })

  // if not valid, returns null
  res.json(userData)
  return
})

// signup
router.post('/update', async (req, res) => {
  const email = req.body.email
  const color1 = req.body.color1
  const color2 = req.body.color2
  const color3 = req.body.color3
  const color4 = req.body.color4

  // if sign in is valid, return user object
  const userData = await user.update({
    where: {
      email: email,
    },
    data: {
      color1: color1,
      color2: color2,
      color3: color3,
      color4: color4,
    },
  })

  // if not valid, returns null
  res.json(userData)
  return
})

module.exports = router
