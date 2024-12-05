const express = require('express')

const getCredentials = (req, res) => {
    const Credentials = { "username": "admin", "password": "123" } // we can create more admin's here 
    res.status(200).json(Credentials)
}

module.exports = { getCredentials }