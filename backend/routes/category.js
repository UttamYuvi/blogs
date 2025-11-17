const express = require('express')
const pool = require('../util/db')
const result = require('../util/result')

const router = express.Router()

router.post('/',(req,res) => {
    const {title} = req.body
    const sql = "insert into categories(title) values(?)"
    pool.query(sql,[title],(err,data) => {
        if(err) {
            res.send(result.data(err))
        }
        else {
            res.send(result.createResult(err,data))
        }
    })
})

router.delete('/',(req,res) => {
    const {category_id} = req.body
    const sql = "delete from categories where category_id = ?"
    pool.query(sql,[category_id],(err,data) => {
        if(err) {
            res.send(result.createResult(err))
        }
        else {
            res.send(result.createResult(err,data))
        }
    })
})

router.put('/',(req,res) => {
    const {category_id,title} = req.body
    const sql = "update categories set title = ? where category_id = ?"
    pool.query(sql,[title,category_id],(err,data) => {
        if(err) {
            res.send(result.createResult(err))
        }
        else {
            res.send(result.createResult(err,data))
        }
    })
})

module.exports = router