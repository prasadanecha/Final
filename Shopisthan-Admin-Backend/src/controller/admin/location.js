// const Location = require('../../models/admin/location')
const slugify = require('slugify');
const StoreLocation = require('../../models/admin/location')

exports.addLocation = (req, res) => {


    const locationobj = {
        name: req.body.name,
        slug: slugify(req.body.name)

    }

    
  
    const location = new StoreLocation(locationobj);
    location.save((error, location) => {
        if (error) return res.status(400).json({ error })
        if (location) {
            return res.status(201).json({ location })
        }
    })
}