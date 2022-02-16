const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51KMB2bIQo5YYaDQq4EyPcdp4ISgsOUfrvJdnxse7tuOWouuCxIsc5oFa9r6DOjTZBkJaTxMdmmoQEzvnF7SgUcxc00dQstS9fR'
)

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (req, res) => res.status(200).send(`it's working`))

app.post('/checkout/create', async (req, res) => {
  const total = req.query.total

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  })

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

exports.api = functions.https.onRequest(app)
