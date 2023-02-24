const categories = {
    "name": "Food",
    "icon": "https://cdn-icons-png.flaticon.com/512/2776/2776827.png",
    "visible": true,
    "attributres": [
        {
            "name": "title",
            "placeholder": "Title",
            "type": "text",
            "maxLength": 100,
            "visible": true
        },
        {
            "name": "description",
            "placeholder": "Brief Description",
            "type": "textarea",
            "maxLength": 250,
            "visible": true
        },
        {
            "name": "type",
            "placeholder": "Choose Listing Type",
            "type": "select",
            "options": [
                {
                    "label": "Wanted Help Listing",
                    "value": "wantedHelp"
                },
                {
                    "label": "Offered Help Listing",
                    "value": "offeredHelp"
                }
            ]
        },
        {
            "name": "foodType",
            "placeholder": "Food Preference (veg/non-veg)",
            "type": "select",
            "options": [
                {
                    "label": "Veg",
                    "value": "veg"
                },
                {
                    "label": "Non-Veg",
                    "value": "non-veg"
                }
            ],
            "visible": true
                           
        },
        {
            "name": "quantity",
            "placeholder": "Quantity",
            "type": "number",
            "visible": true
        },
        {
            "name": "address",
            "placeholder": "Address",
            "type": "text",
            "visible": true
        },
        {
            "name": "country",
            "placeholder": "Choose Country",
            "type": "select",
            "options": [
                {
                    "label": "India",
                    "value": "india"
                },
                {
                    "label": "USA",
                    "value": "usa"
                }
            ]
            "visible": true
        },
        {
            "name": "state",
            "placeholder": "Choose State",
            "type": "select",
            "options": [
                {
                    "label": "Karnataka",
                    "value": "karnataka"
                },
                {
                    "label": "Tamil Nadu",
                    "value": "tamilnadu"
                }
            ],
            "visible": true
        },
        {
            "name": "city",
            "placeholder": "Choose City",
            "type": "select",
            "options": [
                {
                    "label": "Bangalore",
                    "value": "bangalore"
                },
                {
                    "label": "Chennai",
                    "value": "chennai"
                }
            ],
            "visible": true
        },
        {
            "name": "pincode",
            "placeholder": "Pincode / Zipcode",
            "type": "number",
            "visible": true
        },
        {
            "name": "displayContact",
            "placeholder": "Display Contact Details",
            "type": "boolean",            
            "visible": true
        },
        {
            "name": "contactName",
            "placeholder": "Contact Name",
            "type": "text",
            "visible": true
        },
        {
            "name": "contactNumber",
            "placeholder": "Contact Number",
            "type": "number",
            "visible": true
        },        
    ]
}