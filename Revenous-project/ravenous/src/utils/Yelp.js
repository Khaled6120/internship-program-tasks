const apiKey = '424YAzgdEJPF-BcuXApHzBlqwiu877mZTUZFUbclGfF40Cj3qoiIBC0VCy-S4315OKjLOUqXjMcAYdEoI5onbizjwd1DwG_O72yhfQ5YdvZDEjJSQsGbt0j-tfU_ZXYx'

const Yelp = {
    search(term, location, sortBy) {
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`

        return fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.alias,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            } else {
                return []
            }
        })
    }
}

export default Yelp