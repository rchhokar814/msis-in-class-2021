
const Offer = 
{
    data() 
    {
        return
        
            "offers": [
            {
                "id": 1,
                "name": "Jane Student",
                "offer": 100000,
                "bonus": 9000,
                "company": "EY",
                "offerDate": "2021-10-05"
            },
            {
                "id": 2,
                "name": "Jordan Student",
                "offer": 87000,
                "bonus": 3000,
                "company": "IU",
                "offerDate": "2021-10-15"
            }
                    ]
        
   
    }
}

Vue.createApp(Counter).mount('#offerApp');